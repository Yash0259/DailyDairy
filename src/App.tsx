import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Habit = {
  id: string
  name: string
  icon: string
  color: string
  completions: Record<string, boolean>
  createdAt: string
}

type PersistedState = {
  habits: Habit[]
  notes: Record<string, string>
}

type HabitTemplate = {
  name: string
  icon: string
  color: string
}

type BackendStatus = 'loading' | 'connected' | 'saving' | 'offline'
type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'habit-tracker-local-cache'
const THEME_KEY = 'habit-tracker-theme'
const COLOR_SWATCHES = ['#98d66c', '#f8b94d', '#ff8a72', '#70d6c3', '#87a7ff', '#e58dff']
const TODAY = new Date()

const HABIT_TEMPLATES: HabitTemplate[] = [
  { name: 'Wake up early', icon: '⏰', color: '#98d66c' },
  { name: 'Workout', icon: '💪', color: '#f8b94d' },
  { name: 'Reading', icon: '📚', color: '#70d6c3' },
  { name: 'Deep work', icon: '🎯', color: '#ff8a72' },
]

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function formatDateKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function createHabit(template: HabitTemplate): Habit {
  return {
    id: crypto.randomUUID(),
    name: template.name,
    icon: template.icon,
    color: template.color,
    completions: {},
    createdAt: new Date().toISOString(),
  }
}

function getDefaultState(): PersistedState {
  return {
    habits: HABIT_TEMPLATES.map(createHabit),
    notes: {
      [formatDateKey(TODAY)]: 'Focus on consistency before intensity.',
    },
  }
}

function normalizeState(input: unknown): PersistedState {
  if (!input || typeof input !== 'object') {
    return getDefaultState()
  }

  const candidate = input as Partial<PersistedState>
  if (!Array.isArray(candidate.habits) || typeof candidate.notes !== 'object' || !candidate.notes) {
    return getDefaultState()
  }

  return {
    habits: candidate.habits.filter(Boolean) as Habit[],
    notes: candidate.notes as Record<string, string>,
  }
}

function loadCachedState(): PersistedState {
  if (typeof window === 'undefined') {
    return getDefaultState()
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return getDefaultState()
    }

    return normalizeState(JSON.parse(raw))
  } catch {
    return getDefaultState()
  }
}

function loadThemePreference(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY)
  return storedTheme === 'light' ? 'light' : 'dark'
}

async function fetchStateFromServer() {
  const response = await fetch('/api/state')
  if (!response.ok) {
    throw new Error(`Failed to load state (${response.status})`)
  }

  return normalizeState(await response.json())
}

async function saveStateToServer(state: PersistedState) {
  const response = await fetch('/api/state', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(state),
  })

  if (!response.ok) {
    throw new Error(`Failed to save state (${response.status})`)
  }
}

function buildMonthDays(monthAnchor: Date) {
  const year = monthAnchor.getFullYear()
  const month = monthAnchor.getMonth()
  const count = new Date(year, month + 1, 0).getDate()

  return Array.from({ length: count }, (_, index) => new Date(year, month, index + 1))
}

function countHabitDone(habit: Habit, dateKeys: string[]) {
  return dateKeys.reduce((total, dateKey) => total + (habit.completions[dateKey] ? 1 : 0), 0)
}

function ProgressChart({ values }: { values: number[] }) {
  const safeValues = values.length > 1 ? values : [0, values[0] ?? 0]
  const points = safeValues
    .map((value, index) => {
      const x = (index / (safeValues.length - 1)) * 100
      const y = 100 - value
      return `${x},${y}`
    })
    .join(' ')

  const area = `0,100 ${points} 100,100`

  return (
    <div className="chart-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Progress curve</p>
          <h3>Daily completion flow</h3>
        </div>
        <p className="muted">A simple month view to spot your drop-offs quickly.</p>
      </div>

      <svg viewBox="0 0 100 100" className="progress-chart" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(152, 214, 108, 0.7)" />
            <stop offset="100%" stopColor="rgba(152, 214, 108, 0.05)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="25" x2="100" y2="25" />
        <line x1="0" y1="50" x2="100" y2="50" />
        <line x1="0" y1="75" x2="100" y2="75" />
        <polygon points={area} fill="url(#areaFill)" />
        <polyline points={points} />
      </svg>
    </div>
  )
}

function App() {
  const [storedState, setStoredState] = useState<PersistedState>(() => loadCachedState())
  const [monthAnchor, setMonthAnchor] = useState(() => new Date(TODAY.getFullYear(), TODAY.getMonth(), 1))
  const [selectedDateKey, setSelectedDateKey] = useState(() => formatDateKey(TODAY))
  const [form, setForm] = useState({ name: '', icon: '✨', color: COLOR_SWATCHES[0] })
  const [backendStatus, setBackendStatus] = useState<BackendStatus>('loading')
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => loadThemePreference())
  const [hydrated, setHydrated] = useState(false)
  const saveTimer = useRef<number | null>(null)
  const hasSyncedOnce = useRef(false)
  const backendStatusRef = useRef<BackendStatus>('loading')

  const todayKey = formatDateKey(TODAY)
  const monthDays = useMemo(() => buildMonthDays(monthAnchor), [monthAnchor])
  const monthKeys = useMemo(() => monthDays.map(formatDateKey), [monthDays])
  const monthLabel = useMemo(
    () => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(monthAnchor),
    [monthAnchor],
  )
  const selectedDay = useMemo(
    () => monthDays.find((day) => formatDateKey(day) === selectedDateKey) ?? monthDays[0] ?? TODAY,
    [monthDays, selectedDateKey],
  )
  const selectedDateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      }).format(selectedDay),
    [selectedDay],
  )
  const selectedDateDone = useMemo(
    () => storedState.habits.filter((habit) => habit.completions[selectedDateKey]).length,
    [selectedDateKey, storedState.habits],
  )

  useEffect(() => {
    document.body.dataset.theme = themeMode
    document.documentElement.style.colorScheme = themeMode
    window.localStorage.setItem(THEME_KEY, themeMode)
  }, [themeMode])

  useEffect(() => {
    let active = true

    async function bootstrap() {
      try {
        const remoteState = await fetchStateFromServer()
        if (!active) {
          return
        }

        setStoredState(remoteState)
        setBackendStatus('connected')
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteState))
      } catch {
        if (!active) {
          return
        }

        setBackendStatus('offline')
        setStoredState(loadCachedState())
      } finally {
        if (active) {
          setHydrated(true)
        }
      }
    }

    void bootstrap()

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const monthDateKey = formatDateKey(selectedDay)
    if (selectedDateKey !== monthDateKey) {
      setSelectedDateKey(monthDateKey)
    }
  }, [monthDays, selectedDateKey, selectedDay])

  useEffect(() => {
    backendStatusRef.current = backendStatus
  }, [backendStatus])

  useEffect(() => {
    if (!hydrated) {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedState))

    if (saveTimer.current !== null) {
      window.clearTimeout(saveTimer.current)
    }

    saveTimer.current = window.setTimeout(() => {
      if (backendStatusRef.current === 'offline') {
        return
      }

      setBackendStatus('saving')
      void saveStateToServer(storedState)
        .then(() => {
          hasSyncedOnce.current = true
          setBackendStatus('connected')
        })
        .catch(() => {
          setBackendStatus('offline')
        })
    }, hasSyncedOnce.current ? 250 : 0)

    return () => {
      if (saveTimer.current !== null) {
        window.clearTimeout(saveTimer.current)
      }
    }
  }, [hydrated, storedState])

  const totalHabits = storedState.habits.length
  const totalSlots = totalHabits * monthDays.length
  const completedCount = storedState.habits.reduce(
    (total, habit) => total + countHabitDone(habit, monthKeys),
    0,
  )
  const progressPercent = totalSlots === 0 ? 0 : (completedCount / totalSlots) * 100

  const dailyTotals = monthKeys.map((dateKey) =>
    storedState.habits.reduce((total, habit) => total + (habit.completions[dateKey] ? 1 : 0), 0),
  )
  const dailyRates = dailyTotals.map((value) => (totalHabits === 0 ? 0 : (value / totalHabits) * 100))

  const habitBreakdown = [...storedState.habits]
    .map((habit) => {
      const done = countHabitDone(habit, monthKeys)
      return {
        ...habit,
        done,
        rate: monthDays.length === 0 ? 0 : (done / monthDays.length) * 100,
      }
    })
    .sort((left, right) => right.done - left.done)

  const bestDayRate = Math.max(...dailyRates, 0)
  const bestDayIndex = dailyRates.findIndex((value) => value === bestDayRate)
  const bestDayLabel =
    bestDayRate === 0 || !monthDays[bestDayIndex]
      ? 'No data'
      : monthDays[bestDayIndex].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  const monthIndex = monthAnchor.getFullYear() * 12 + monthAnchor.getMonth()
  const currentMonthIndex = TODAY.getFullYear() * 12 + TODAY.getMonth()
  const elapsedDays =
    monthIndex < currentMonthIndex ? monthDays.length : monthIndex === currentMonthIndex ? TODAY.getDate() : 0
  const activeDays = dailyTotals.slice(0, elapsedDays).filter((value) => value > 0).length
  const consistency = elapsedDays === 0 ? 0 : (activeDays / elapsedDays) * 100
  function toggleCompletion(habitId: string, dateKey: string) {
    setStoredState((current) => ({
      ...current,
      habits: current.habits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              completions: {
                ...habit.completions,
                [dateKey]: !habit.completions[dateKey],
              },
            }
          : habit,
      ),
    }))
  }

  function addHabitFromTemplate(template: HabitTemplate) {
    setStoredState((current) => {
      const exists = current.habits.some(
        (habit) => habit.name.trim().toLowerCase() === template.name.trim().toLowerCase(),
      )

      if (exists) {
        return current
      }

      return {
        ...current,
        habits: [...current.habits, createHabit(template)],
      }
    })
  }

  function handleAddHabit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = form.name.trim()
    if (!trimmedName) {
      return
    }

    addHabitFromTemplate({
      name: trimmedName,
      icon: form.icon.trim() || '✨',
      color: form.color,
    })

    setForm({ name: '', icon: '✨', color: form.color })
  }

  function deleteHabit(habitId: string) {
    setStoredState((current) => ({
      ...current,
      habits: current.habits.filter((habit) => habit.id !== habitId),
    }))
  }

  function updateNote(nextValue: string) {
    setStoredState((current) => ({
      ...current,
      notes: {
        ...current.notes,
        [todayKey]: nextValue,
      },
    }))
  }

  function toggleTheme() {
    setThemeMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-header">
          <div className="hero-copy">
            <p className="eyebrow">Habit OS</p>
            <h1>Track tasks daily, tick them off, and see the month move in real time.</h1>
            <p className="hero-text">
              Built as a clean React tracker inspired by your reference images, but with a sharper dashboard,
              mobile-friendly layout, and database persistence.
            </p>
          </div>

          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {themeMode === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>

        <div className="hero-badges">
          <span>Monthly grid</span>
          <span>{backendStatus === 'connected' ? 'Neon connected' : 'Offline cache'}</span>
          <span>{backendStatus === 'saving' ? 'Syncing...' : 'Neon env slot ready'}</span>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span>Total habits</span>
            <strong>{totalHabits}</strong>
          </div>
          <div className="hero-stat">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
          <div className="hero-stat accent">
            <span>Progress</span>
            <strong>{progressPercent.toFixed(1)}%</strong>
          </div>
          <div className="hero-stat">
            <span>DB</span>
            <strong>{backendStatus === 'connected' ? 'Live' : backendStatus === 'saving' ? 'Syncing' : 'Offline'}</strong>
          </div>
        </div>
      </header>

      <main className="workspace-grid">
        <aside className="control-panel panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Add a task</p>
              <h2>Create a new habit</h2>
            </div>
          </div>

          <form className="habit-form" onSubmit={handleAddHabit}>
            <label>
              <span>Habit name</span>
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Example: No sugar"
              />
            </label>

            <div className="form-row">
              <label>
                <span>Icon</span>
                <input
                  value={form.icon}
                  onChange={(event) => setForm((current) => ({ ...current, icon: event.target.value }))}
                  maxLength={2}
                  placeholder="✨"
                />
              </label>

              <div>
                <span className="label-title">Color</span>
                <div className="swatches" role="list" aria-label="Habit colors">
                  {COLOR_SWATCHES.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={form.color === color ? 'swatch active' : 'swatch'}
                      style={{ backgroundColor: color }}
                      onClick={() => setForm((current) => ({ ...current, color }))}
                      aria-label={`Select ${color}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="primary-button">
              Add habit
            </button>
          </form>

          <div className="template-box">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Quick start</p>
                <h3>One-tap templates</h3>
              </div>
            </div>

            <div className="template-list">
              {HABIT_TEMPLATES.map((template) => (
                <button
                  key={template.name}
                  type="button"
                  className="template-chip"
                  onClick={() => addHabitFromTemplate(template)}
                >
                  <span>{template.icon}</span>
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div className="note-box">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Today focus</p>
                <h3>Short daily note</h3>
              </div>
              <p className="muted">{todayKey}</p>
            </div>

            <textarea
              value={storedState.notes[todayKey] ?? ''}
              onChange={(event) => updateNote(event.target.value)}
              placeholder="Write one line about today's priority."
            />
          </div>
        </aside>

        <section className="tracker-panel panel">
          <div className="tracker-toolbar">
            <div>
              <p className="eyebrow">Month view</p>
              <h2>{monthLabel}</h2>
            </div>

            <div className="toolbar-actions">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setMonthAnchor(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1))}
              >
                Current month
              </button>
              <div className="month-switcher">
                <button
                  type="button"
                  className="ghost-button square"
                  onClick={() =>
                    setMonthAnchor((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
                  }
                  aria-label="Previous month"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="ghost-button square"
                  onClick={() =>
                    setMonthAnchor((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
                  }
                  aria-label="Next month"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="tracker-table-wrap">
            <table className="tracker-table">
              <thead>
                <tr>
                  <th className="habit-column">My habits</th>
                  {monthDays.map((day) => (
                    <th key={formatDateKey(day)}>
                      <span>{day.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)}</span>
                      <strong>{day.getDate()}</strong>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {storedState.habits.map((habit) => (
                  <tr key={habit.id}>
                    <td className="habit-cell">
                      <div className="habit-label">
                        <span className="habit-color" style={{ backgroundColor: habit.color }} />
                        <div>
                          <strong>
                            {habit.icon} {habit.name}
                          </strong>
                          <small>{countHabitDone(habit, monthKeys)} check-ins</small>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => deleteHabit(habit.id)}
                        aria-label={`Delete ${habit.name}`}
                      >
                        ×
                      </button>
                    </td>

                    {monthKeys.map((dateKey) => {
                      const checked = Boolean(habit.completions[dateKey])
                      return (
                        <td key={dateKey}>
                          <button
                            type="button"
                            className={checked ? 'check-button checked' : 'check-button'}
                            onClick={() => toggleCompletion(habit.id, dateKey)}
                            aria-pressed={checked}
                            aria-label={`${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${dateKey}`}
                          >
                            {checked ? '✓' : ''}
                          </button>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>Progress</td>
                  {dailyRates.map((value, index) => (
                    <td key={`${monthKeys[index]}-progress`}>{Math.round(value)}%</td>
                  ))}
                </tr>
                <tr>
                  <td>Done</td>
                  {dailyTotals.map((value, index) => (
                    <td key={`${monthKeys[index]}-done`}>{value}</td>
                  ))}
                </tr>
                <tr>
                  <td>Not done</td>
                  {dailyTotals.map((value, index) => (
                    <td key={`${monthKeys[index]}-not-done`}>{Math.max(totalHabits - value, 0)}</td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mobile-calendar">
            <div className="mobile-calendar-strip" aria-label={`${monthLabel} day selector`}>
              {monthDays.map((day) => {
                const dateKey = formatDateKey(day)
                const isSelected = dateKey === selectedDateKey
                const completed = storedState.habits.filter((habit) => habit.completions[dateKey]).length

                return (
                  <button
                    key={dateKey}
                    type="button"
                    className={isSelected ? 'mobile-day-chip active' : 'mobile-day-chip'}
                    onClick={() => setSelectedDateKey(dateKey)}
                    aria-pressed={isSelected}
                    aria-label={`${day.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}, ${completed} of ${totalHabits} habits complete`}
                  >
                    <span>{day.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)}</span>
                    <strong>{day.getDate()}</strong>
                    <small>{completed}/{totalHabits}</small>
                  </button>
                )
              })}
            </div>

            <div className="mobile-day-panel">
              <div className="section-heading mobile-day-heading">
                <div>
                  <p className="eyebrow">Mobile day view</p>
                  <h3>{selectedDateLabel}</h3>
                </div>
                <p className="muted">
                  {selectedDateDone}/{totalHabits} done
                </p>
              </div>

              <div className="mobile-habit-list">
                {storedState.habits.map((habit) => {
                  const checked = Boolean(habit.completions[selectedDateKey])
                  return (
                    <button
                      key={`${habit.id}-${selectedDateKey}`}
                      type="button"
                      className={checked ? 'mobile-habit-row checked' : 'mobile-habit-row'}
                      onClick={() => toggleCompletion(habit.id, selectedDateKey)}
                      aria-pressed={checked}
                      aria-label={`${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${selectedDateLabel}`}
                    >
                      <span className="mobile-habit-label">
                        <span className="habit-color" style={{ backgroundColor: habit.color }} />
                        <span>
                          <strong>
                            {habit.icon} {habit.name}
                          </strong>
                          <small>{checked ? 'Done today' : 'Tap to mark done'}</small>
                        </span>
                      </span>
                      <span className={checked ? 'mobile-habit-toggle checked' : 'mobile-habit-toggle'}>
                        {checked ? '✓' : ''}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <ProgressChart values={dailyRates} />
        </section>

        <aside className="insights-panel panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Analytics</p>
              <h2>Progress snapshot</h2>
            </div>
          </div>

          <div className="progress-summary">
            <div className="progress-meter">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="summary-grid">
              <article>
                <strong>{consistency.toFixed(0)}%</strong>
                <span>Consistency</span>
              </article>
              <article>
                <strong>{bestDayLabel}</strong>
                <span>Best day</span>
              </article>
              <article>
                <strong>{activeDays}</strong>
                <span>Active days</span>
              </article>
            </div>
          </div>

          <div className="analysis-list">
            {habitBreakdown.map((habit) => (
              <article key={habit.id} className="analysis-row">
                <div className="analysis-copy">
                  <strong>
                    {habit.icon} {habit.name}
                  </strong>
                  <span>
                    {habit.done}/{monthDays.length} days
                  </span>
                </div>
                <div className="mini-bar">
                  <div className="mini-bar-fill" style={{ width: `${habit.rate}%`, backgroundColor: habit.color }} />
                </div>
              </article>
            ))}

            {habitBreakdown.length === 0 ? <p className="muted">Add your first habit to start tracking.</p> : null}
          </div>

          <div className="neon-box">
            <p className="eyebrow">Backend note</p>
            <h3>Neon database is wired through the backend.</h3>
            <p className="muted">
              The app now loads and saves habit state through a Postgres API, with local cache fallback if the
              backend is unavailable.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
