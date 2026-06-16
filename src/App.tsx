"use client"

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'

import WeakList, { type WeakListItem } from './components/WeakList'
import WeakListEditor from './components/WeakListEditor'

type HabitTrackingMode = 'check' | 'time'

type HabitEntry = boolean | number

type Habit = {
  id: string
  name: string
  icon: string
  color: string
  isMajorTask: boolean
  subtasks: string[]
  trackingMode: HabitTrackingMode
  targetValue: number | null
  targetUnit: string
  entries: Record<string, HabitEntry>
  createdAt: string
}

type ConqueredHabit = Habit & {
  conqueredAt: string
}

type PersistedState = {
  habits: Habit[]
  notes: Record<string, string>
  weakList: WeakListItem[]
  conqueredList: ConqueredHabit[]
}

type HabitTemplate = {
  name: string
  icon: string
  color: string
  isMajorTask?: boolean
  subtasks?: string[]
  trackingMode?: HabitTrackingMode
  targetValue?: number | null
  targetUnit?: string
}

type HabitFormState = {
  name: string
  icon: string
  color: string
  isMajorTask: boolean
  subtasks: string[]
  trackingMode: HabitTrackingMode
  targetValue: string
  targetUnit: string
}

type BackendStatus = 'loading' | 'connected' | 'saving' | 'offline'
type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'habit-tracker-local-cache'
const THEME_KEY = 'habit-tracker-theme'
const COLOR_SWATCHES = ['#98d66c', '#f8b94d', '#ff8a72', '#70d6c3', '#87a7ff', '#e58dff']
const TODAY = new Date()

const HABIT_TEMPLATES: HabitTemplate[] = [
  { name: 'Wake up early', icon: '⏰', color: '#98d66c', trackingMode: 'check' },
  { name: 'Workout', icon: '💪', color: '#f8b94d', trackingMode: 'check' },
  { name: 'Reading', icon: '📚', color: '#70d6c3', trackingMode: 'check' },
  { name: 'Deep work', icon: '🎯', color: '#ff8a72', trackingMode: 'check' },
  { name: 'Study', icon: '📖', color: '#87a7ff', trackingMode: 'time', targetValue: 90, targetUnit: 'min' },
]

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function formatDateKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function normalizeSubtasks(input: unknown) {
  if (!Array.isArray(input)) {
    return []
  }

  const seen = new Set<string>()
  const subtasks: string[] = []

  for (const item of input) {
    if (typeof item !== 'string') {
      continue
    }

    const subtask = item.trim()
    const key = subtask.toLowerCase()

    if (!subtask || seen.has(key)) {
      continue
    }

    seen.add(key)
    subtasks.push(subtask)
  }

  return subtasks
}

function createHabit(template: HabitTemplate): Habit {
  const subtasks = normalizeSubtasks(template.subtasks)

  return {
    id: crypto.randomUUID(),
    name: template.name,
    icon: template.icon,
    color: template.color,
    isMajorTask: Boolean(template.isMajorTask || subtasks.length > 0),
    subtasks,
    trackingMode: template.trackingMode ?? 'check',
    targetValue: template.targetValue ?? null,
    targetUnit: template.targetUnit ?? (template.trackingMode === 'time' ? 'min' : 'check-ins'),
    entries: {},
    createdAt: new Date().toISOString(),
  }
}

function getDefaultHabitForm(): HabitFormState {
  return {
    name: '',
    icon: '✨',
    color: COLOR_SWATCHES[0],
    isMajorTask: false,
    subtasks: [],
    trackingMode: 'check',
    targetValue: '60',
    targetUnit: 'min',
  }
}

function createWeakListItem(input: Omit<WeakListItem, 'id' | 'createdAt'>): WeakListItem {
  return {
    id: crypto.randomUUID(),
    weakness: input.weakness,
    futureHabit: input.futureHabit,
    note: input.note,
    createdAt: new Date().toISOString(),
  }
}

function normalizeWeakListItem(input: unknown): WeakListItem | null {
  if (!input || typeof input !== 'object') {
    return null
  }

  const candidate = input as Record<string, unknown>
  const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null
  const weakness = typeof candidate.weakness === 'string' && candidate.weakness.trim() ? candidate.weakness.trim() : null
  const futureHabit =
    typeof candidate.futureHabit === 'string' && candidate.futureHabit.trim() ? candidate.futureHabit.trim() : null
  const note = typeof candidate.note === 'string' ? candidate.note.trim() : ''

  if (!id || !weakness || !futureHabit) {
    return null
  }

  return {
    id,
    weakness,
    futureHabit,
    note,
    createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString(),
  }
}

function normalizeConqueredHabit(input: unknown): ConqueredHabit | null {
  const habit = normalizeHabit(input)
  if (!habit || !input || typeof input !== 'object') {
    return null
  }

  const candidate = input as Record<string, unknown>

  return {
    ...habit,
    conqueredAt: typeof candidate.conqueredAt === 'string' ? candidate.conqueredAt : new Date().toISOString(),
  }
}

function getHabitFormFromHabit(habit: Habit): HabitFormState {
  return {
    name: habit.name,
    icon: habit.icon,
    color: habit.color,
    isMajorTask: habit.isMajorTask,
    subtasks: habit.isMajorTask && habit.subtasks.length === 0 ? [''] : [...habit.subtasks],
    trackingMode: habit.trackingMode,
    targetValue: String(habit.targetValue ?? 60),
    targetUnit: habit.targetUnit || (habit.trackingMode === 'time' ? 'min' : 'check-ins'),
  }
}

function normalizeHabitEntry(value: unknown, trackingMode: HabitTrackingMode) {
  if (trackingMode === 'time') {
    const numericValue =
      typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value) : Number.NaN

    if (Number.isFinite(numericValue) && numericValue >= 0) {
      return numericValue
    }

    return undefined
  }

  return value ? true : undefined
}

function coerceHabitEntriesToMode(entries: Record<string, HabitEntry>, trackingMode: HabitTrackingMode) {
  const nextEntries: Record<string, HabitEntry> = {}

  for (const [dateKey, value] of Object.entries(entries)) {
    if (trackingMode === 'time') {
      if (typeof value === 'number') {
        nextEntries[dateKey] = value
      } else if (value) {
        nextEntries[dateKey] = 1
      }
      continue
    }

    if (value) {
      nextEntries[dateKey] = true
    }
  }

  return nextEntries
}

function inferTrackingMode(input: Record<string, unknown>) {
  if (input.trackingMode === 'time' || input.type === 'time' || input.mode === 'time') {
    return 'time' as const
  }

  const entries = input.entries ?? input.completions
  if (entries && typeof entries === 'object' && !Array.isArray(entries)) {
    return Object.values(entries as Record<string, unknown>).some((value) => typeof value === 'number')
      ? ('time' as const)
      : ('check' as const)
  }

  return 'check' as const
}

function normalizeHabit(input: unknown): Habit | null {
  if (!input || typeof input !== 'object') {
    return null
  }

  const candidate = input as Record<string, unknown>
  const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null
  const name = typeof candidate.name === 'string' && candidate.name.trim() ? candidate.name.trim() : null
  const icon = typeof candidate.icon === 'string' && candidate.icon.trim() ? candidate.icon.trim() : '✨'
  const color = typeof candidate.color === 'string' && candidate.color.trim() ? candidate.color.trim() : COLOR_SWATCHES[0]
  const subtasks = normalizeSubtasks(candidate.subtasks)
  const isMajorTask = candidate.isMajorTask === true || candidate.taskType === 'major' || subtasks.length > 0
  const trackingMode = inferTrackingMode(candidate)
  const rawTargetValue = candidate.targetValue ?? candidate.goalValue ?? candidate.targetMinutes
  const targetValue =
    typeof rawTargetValue === 'number' && Number.isFinite(rawTargetValue) && rawTargetValue > 0
      ? rawTargetValue
      : null
  const targetUnit =
    typeof candidate.targetUnit === 'string' && candidate.targetUnit.trim()
      ? candidate.targetUnit.trim()
      : trackingMode === 'time'
        ? 'min'
        : 'check-ins'
  const rawEntries = candidate.entries ?? candidate.completions
  const entries: Record<string, HabitEntry> = {}

  if (rawEntries && typeof rawEntries === 'object' && !Array.isArray(rawEntries)) {
    for (const [dateKey, value] of Object.entries(rawEntries as Record<string, unknown>)) {
      const normalizedEntry = normalizeHabitEntry(value, trackingMode)
      if (normalizedEntry !== undefined) {
        entries[dateKey] = normalizedEntry
      }
    }
  }

  if (!id || !name) {
    return null
  }

  return {
    id,
    name,
    icon,
    color,
    isMajorTask,
    subtasks,
    trackingMode,
    targetValue,
    targetUnit,
    entries,
    createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString(),
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

  const habits = candidate.habits.map(normalizeHabit).filter((habit): habit is Habit => habit !== null)

  const weakList = Array.isArray(candidate.weakList)
    ? candidate.weakList.map(normalizeWeakListItem).filter((item): item is WeakListItem => item !== null)
    : []
  const conqueredList = Array.isArray(candidate.conqueredList)
    ? candidate.conqueredList.map(normalizeConqueredHabit).filter((item): item is ConqueredHabit => item !== null)
    : []

  return {
    habits,
    notes: candidate.notes as Record<string, string>,
    weakList,
    conqueredList,
  }
}

function getDefaultState(): PersistedState {
  return {
    habits: HABIT_TEMPLATES.map(createHabit),
    notes: {
      [formatDateKey(TODAY)]: 'Focus on consistency before intensity.',
    },
    weakList: [],
    conqueredList: [],
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
  const response = await fetch('/api/state', {
    cache: 'no-store',
  })
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
    cache: 'no-store',
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
  return dateKeys.reduce((total, dateKey) => total + (isHabitComplete(habit, dateKey) ? 1 : 0), 0)
}

function cloneHabit(habit: Habit): Habit {
  return {
    ...habit,
    subtasks: [...habit.subtasks],
    entries: { ...habit.entries },
  }
}

function createConqueredHabit(habit: Habit): ConqueredHabit {
  return {
    ...cloneHabit(habit),
    conqueredAt: new Date().toISOString(),
  }
}

function getAvailableHabitName(name: string, habits: Habit[]) {
  const usedNames = new Set(habits.map((habit) => habit.name.trim().toLowerCase()))

  if (!usedNames.has(name.trim().toLowerCase())) {
    return name
  }

  let index = 2
  let candidate = `${name} (${index})`

  while (usedNames.has(candidate.trim().toLowerCase())) {
    index += 1
    candidate = `${name} (${index})`
  }

  return candidate
}

function restoreConqueredHabit(conqueredHabit: ConqueredHabit, activeHabits: Habit[]): Habit {
  const restoredHabit = cloneHabit(conqueredHabit)

  if (activeHabits.some((habit) => habit.id === restoredHabit.id)) {
    restoredHabit.id = crypto.randomUUID()
  }

  restoredHabit.name = getAvailableHabitName(restoredHabit.name, activeHabits)

  return restoredHabit
}

function stableSerialize(value: unknown): string {
  if (value === null) {
    return 'null'
  }

  switch (typeof value) {
    case 'string':
      return JSON.stringify(value)
    case 'number':
      return Number.isFinite(value) ? String(value) : 'null'
    case 'boolean':
      return value ? 'true' : 'false'
    case 'bigint':
      return JSON.stringify(value.toString())
    case 'undefined':
      return 'null'
    case 'object':
      if (Array.isArray(value)) {
        return `[${value.map((item) => stableSerialize(item)).join(',')}]`
      }

      return `{${Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, entryValue]) => `${JSON.stringify(key)}:${stableSerialize(entryValue)}`)
        .join(',')}}`
    default:
      return 'null'
  }
}

function statesEqual(left: PersistedState, right: PersistedState) {
  return stableSerialize(left) === stableSerialize(right)
}

function getHabitEntry(habit: Habit, dateKey: string) {
  return habit.entries[dateKey]
}

function getHabitCompletionRatio(habit: Habit, dateKey: string) {
  const entry = getHabitEntry(habit, dateKey)

  if (habit.trackingMode === 'time') {
    if (typeof entry !== 'number' || entry <= 0) {
      return 0
    }

    if (habit.targetValue && habit.targetValue > 0) {
      return Math.min(entry / habit.targetValue, 1)
    }

    return 1
  }

  return entry ? 1 : 0
}

function isHabitComplete(habit: Habit, dateKey: string) {
  return getHabitCompletionRatio(habit, dateKey) >= 1
}

function getHabitRecordedAmount(habit: Habit, dateKey: string) {
  const entry = getHabitEntry(habit, dateKey)
  if (habit.trackingMode === 'time') {
    return typeof entry === 'number' ? entry : 0
  }

  return entry ? 1 : 0
}

function formatAmount(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1)
}

function HabitSubtaskPreview({ habit }: { habit: Habit }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!habit.isMajorTask && habit.subtasks.length === 0) {
    return null
  }

  return (
    <div className="task-plan">
      <button
        type="button"
        className="task-plan-trigger"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span>
          <span className="task-plan-kicker">Major task</span>
          <strong>{habit.subtasks.length > 0 ? `${habit.subtasks.length} step plan` : 'No steps yet'}</strong>
        </span>
        <span className="task-plan-icon" aria-hidden="true">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen ? (
        <div className="task-plan-panel">
          {habit.subtasks.length > 0 ? (
            <ol>
              {habit.subtasks.map((subtask, index) => (
                <li key={subtask}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {subtask}
                </li>
              ))}
            </ol>
          ) : (
            <p>Add steps from Edit to make this major task easier to execute.</p>
          )}
        </div>
      ) : null}
    </div>
  )
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

function formatShortDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'Saved'
  }

  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

function getConqueredSummary(habit: ConqueredHabit) {
  const entryKeys = Object.keys(habit.entries)
  const activeDays = entryKeys.filter((dateKey) => getHabitRecordedAmount(habit, dateKey) > 0).length

  if (habit.trackingMode === 'time') {
    const totalAmount = entryKeys.reduce((total, dateKey) => total + getHabitRecordedAmount(habit, dateKey), 0)

    return {
      primary: `${formatAmount(totalAmount)} ${habit.targetUnit} logged`,
      secondary: `${activeDays} active days`,
    }
  }

  const checkIns = entryKeys.filter((dateKey) => isHabitComplete(habit, dateKey)).length

  return {
    primary: `${checkIns} check-ins`,
    secondary: `${activeDays} active days`,
  }
}

function ConqueredList({
  items,
  onRestoreItem,
}: {
  items: ConqueredHabit[]
  onRestoreItem: (itemId: string) => void
}) {
  return (
    <section className="conquered-list-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Showcase</p>
          <h3>Conquered</h3>
          <p className="muted">Habits you have already carried for a long time.</p>
        </div>
        <p className="muted">{items.length} saved</p>
      </div>

      <div className="conquered-list-items">
        {items.map((item) => {
          const summary = getConqueredSummary(item)

          return (
            <article key={item.id} className="conquered-list-card">
              <div className="conquered-card-top">
                <span className="habit-color" style={{ backgroundColor: item.color }} />
                <div>
                  <h4>
                    {item.icon} {item.name}
                  </h4>
                  <p>{summary.primary}</p>
                </div>
              </div>

              <div className="conquered-card-meta">
                <span>{summary.secondary}</span>
                <span>Conquered {formatShortDate(item.conqueredAt)}</span>
              </div>

              <button type="button" className="ghost-button conquered-restore" onClick={() => onRestoreItem(item.id)}>
                Restore to daily habits
              </button>
            </article>
          )
        })}

        {items.length === 0 ? (
          <div className="conquered-list-empty">
            <p>No conquered habits yet.</p>
            <span>Move a long-running daily habit here when it no longer needs daily tracking.</span>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function App() {
  const [storedState, setStoredState] = useState<PersistedState>(() => getDefaultState())
  const [monthAnchor, setMonthAnchor] = useState(() => new Date(TODAY.getFullYear(), TODAY.getMonth(), 1))
  const [selectedDateKey, setSelectedDateKey] = useState(() => formatDateKey(TODAY))
  const [form, setForm] = useState<HabitFormState>(() => getDefaultHabitForm())
  const [editingHabitId, setEditingHabitId] = useState<string | null>(null)
  const [backendStatus, setBackendStatus] = useState<BackendStatus>('loading')
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [themeLoaded, setThemeLoaded] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [isSetupDrawerOpen, setSetupDrawerOpen] = useState(false)
  const storedStateRef = useRef(storedState)
  const lastSyncedStateRef = useRef(storedState)
  const saveInFlightRef = useRef(false)
  const queuedStateRef = useRef<PersistedState | null>(null)

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
  const activeSelectedDateKey = useMemo(() => formatDateKey(selectedDay), [selectedDay])
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
    () => storedState.habits.filter((habit) => isHabitComplete(habit, activeSelectedDateKey)).length,
    [activeSelectedDateKey, storedState.habits],
  )

  useEffect(() => {
    const storedTheme = loadThemePreference()

    queueMicrotask(() => {
      setThemeMode(storedTheme)
      setThemeLoaded(true)
    })
  }, [])

  useEffect(() => {
    if (!themeLoaded) {
      return
    }

    document.body.dataset.theme = themeMode
    document.documentElement.style.colorScheme = themeMode
    window.localStorage.setItem(THEME_KEY, themeMode)
  }, [themeLoaded, themeMode])

  useEffect(() => {
    if (!isSetupDrawerOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSetupDrawerOpen(false)
        setEditingHabitId(null)
        setForm(getDefaultHabitForm())
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSetupDrawerOpen])

  useEffect(() => {
    storedStateRef.current = storedState
  }, [storedState])

  async function flushQueuedSave() {
    if (saveInFlightRef.current || queuedStateRef.current === null) {
      return
    }

    const nextState = queuedStateRef.current
    queuedStateRef.current = null
    saveInFlightRef.current = true
    setBackendStatus('saving')

    try {
      await saveStateToServer(nextState)
      lastSyncedStateRef.current = nextState
      setBackendStatus('connected')
    } catch {
      queuedStateRef.current = nextState
      setBackendStatus('offline')
    } finally {
      saveInFlightRef.current = false

      if (queuedStateRef.current !== null && !statesEqual(queuedStateRef.current, lastSyncedStateRef.current)) {
        void flushQueuedSave()
      }
    }
  }

  function commitState(
    update: PersistedState | ((current: PersistedState) => PersistedState),
    options?: { sync?: boolean },
  ) {
    const currentState = storedStateRef.current
    const nextState = typeof update === 'function' ? update(currentState) : update

    if (statesEqual(currentState, nextState)) {
      return
    }

    storedStateRef.current = nextState
    setStoredState(nextState)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState))

    if (options?.sync === false || !hydrated) {
      return
    }

    queuedStateRef.current = nextState
    void flushQueuedSave()
  }

  useEffect(() => {
    let active = true

    function applyRemoteState(remoteState: PersistedState) {
      storedStateRef.current = remoteState
      lastSyncedStateRef.current = remoteState
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteState))
      setStoredState((current) => (statesEqual(current, remoteState) ? current : remoteState))
    }

    async function bootstrap() {
      try {
        const cachedState = loadCachedState()
        if (!active) {
          return
        }

        setStoredState(cachedState)
        storedStateRef.current = cachedState
        lastSyncedStateRef.current = cachedState

        const remoteState = await fetchStateFromServer()
        if (!active) {
          return
        }

        applyRemoteState(remoteState)
        setBackendStatus('connected')
      } catch {
        if (!active) {
          return
        }

        setBackendStatus('offline')
        const cachedState = loadCachedState()
        setStoredState(cachedState)
        storedStateRef.current = cachedState
        lastSyncedStateRef.current = cachedState
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

  const totalHabits = storedState.habits.length
  const totalSlots = totalHabits * monthDays.length
  const dailyCompletionScores = monthKeys.map((dateKey) =>
    storedState.habits.reduce((total, habit) => total + getHabitCompletionRatio(habit, dateKey), 0),
  )
  const dailyDoneCounts = monthKeys.map((dateKey) =>
    storedState.habits.reduce((total, habit) => total + (isHabitComplete(habit, dateKey) ? 1 : 0), 0),
  )
  const completedCount = dailyDoneCounts.reduce((total, value) => total + value, 0)
  const progressUnits = dailyCompletionScores.reduce((total, value) => total + value, 0)
  const progressPercent = totalSlots === 0 ? 0 : (progressUnits / totalSlots) * 100
  const dailyRates = dailyCompletionScores.map((value) => (totalHabits === 0 ? 0 : (value / totalHabits) * 100))

  const habitBreakdown = [...storedState.habits]
    .map((habit) => {
      const done = countHabitDone(habit, monthKeys)
      const totalAmount = monthKeys.reduce((total, dateKey) => total + getHabitRecordedAmount(habit, dateKey), 0)
      const averageCompletion =
        monthDays.length === 0
          ? 0
          : monthKeys.reduce((total, dateKey) => total + getHabitCompletionRatio(habit, dateKey), 0) /
            monthDays.length
      return {
        ...habit,
        done,
        totalAmount,
        rate: averageCompletion * 100,
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
  const activeDays = dailyDoneCounts.slice(0, elapsedDays).filter((value) => value > 0).length
  const consistency = elapsedDays === 0 ? 0 : (activeDays / elapsedDays) * 100
  const editingHabit = useMemo(
    () => storedState.habits.find((habit) => habit.id === editingHabitId) ?? null,
    [editingHabitId, storedState.habits],
  )

  function updateHabitEntry(habitId: string, dateKey: string, nextValue: HabitEntry | undefined) {
    commitState((current) => ({
      ...current,
      habits: current.habits.map((habit) => {
        if (habit.id !== habitId) {
          return habit
        }

        if (nextValue === undefined) {
          const restEntries = { ...habit.entries }
          delete restEntries[dateKey]
          return {
            ...habit,
            entries: restEntries,
          }
        }

        return {
          ...habit,
          entries: {
            ...habit.entries,
            [dateKey]: nextValue,
          },
        }
      }),
    }))
  }

  function toggleCompletion(habitId: string, dateKey: string) {
    const habit = storedState.habits.find((entry) => entry.id === habitId)
    if (!habit || habit.trackingMode !== 'check') {
      return
    }

    const isChecked = Boolean(habit.entries[dateKey])
    updateHabitEntry(habitId, dateKey, isChecked ? undefined : true)
  }

  function updateDurationEntry(habitId: string, dateKey: string, rawValue: string) {
    const trimmedValue = rawValue.trim()

    if (!trimmedValue) {
      updateHabitEntry(habitId, dateKey, undefined)
      return
    }

    const numericValue = Number(trimmedValue)
    if (!Number.isFinite(numericValue) || numericValue < 0) {
      return
    }

    updateHabitEntry(habitId, dateKey, numericValue)
  }

  function beginHabitEdit(habitId: string) {
    const habit = storedState.habits.find((entry) => entry.id === habitId)
    if (!habit) {
      return
    }

    setEditingHabitId(habit.id)
    setForm(getHabitFormFromHabit(habit))
    setSetupDrawerOpen(true)
  }

  function cancelHabitEdit() {
    setEditingHabitId(null)
    setForm(getDefaultHabitForm())
  }

  function openCreateDrawer() {
    cancelHabitEdit()
    setSetupDrawerOpen(true)
  }

  function closeSetupDrawer() {
    setSetupDrawerOpen(false)
    cancelHabitEdit()
  }

  function setMajorTaskMode(isMajorTask: boolean) {
    setForm((current) => ({
      ...current,
      isMajorTask,
      subtasks: isMajorTask && current.subtasks.length === 0 ? [''] : current.subtasks,
    }))
  }

  function updateSubtask(index: number, value: string) {
    setForm((current) => ({
      ...current,
      subtasks: current.subtasks.map((subtask, subtaskIndex) => (subtaskIndex === index ? value : subtask)),
    }))
  }

  function addSubtaskField() {
    setForm((current) => ({
      ...current,
      isMajorTask: true,
      subtasks: [...current.subtasks, ''],
    }))
  }

  function removeSubtaskField(index: number) {
    setForm((current) => {
      const subtasks = current.subtasks.filter((_, subtaskIndex) => subtaskIndex !== index)

      return {
        ...current,
        subtasks: subtasks.length > 0 ? subtasks : [''],
      }
    })
  }

  function addHabitFromTemplate(template: HabitTemplate) {
    commitState((current) => {
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

  function handleHabitFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = form.name.trim()
    if (!trimmedName) {
      return
    }

    const trackingMode = form.trackingMode
    const parsedTargetValue =
      trackingMode === 'time'
        ? Number(form.targetValue.trim())
        : Number.NaN
    const targetValue =
      trackingMode === 'time' && Number.isFinite(parsedTargetValue) && parsedTargetValue > 0
        ? parsedTargetValue
        : null
    const targetUnit = trackingMode === 'time' ? form.targetUnit.trim() || 'min' : 'check-ins'
    const subtasks = form.isMajorTask ? normalizeSubtasks(form.subtasks) : []
    const isMajorTask = form.isMajorTask || subtasks.length > 0
    const duplicateHabit = storedState.habits.some(
      (habit) => habit.id !== editingHabitId && habit.name.trim().toLowerCase() === trimmedName.toLowerCase(),
    )

    if (duplicateHabit) {
      return
    }

    commitState((current) => {
      if (editingHabitId) {
        return {
          ...current,
          habits: current.habits.map((habit) => {
            if (habit.id !== editingHabitId) {
              return habit
            }

            return {
              ...habit,
              name: trimmedName,
              icon: form.icon.trim() || '✨',
              color: form.color,
              isMajorTask,
              subtasks,
              trackingMode,
              targetValue,
              targetUnit,
              entries: coerceHabitEntriesToMode(habit.entries, trackingMode),
            }
          }),
        }
      }

      return {
        ...current,
        habits: [
          ...current.habits,
          createHabit({
            name: trimmedName,
            icon: form.icon.trim() || '✨',
            color: form.color,
            isMajorTask,
            subtasks,
            trackingMode,
            targetValue,
            targetUnit,
          }),
        ],
      }
    })
    cancelHabitEdit()
    setSetupDrawerOpen(false)
  }

  function deleteHabit(habitId: string) {
    commitState((current) => ({
      ...current,
      habits: current.habits.filter((habit) => habit.id !== habitId),
    }))
    if (editingHabitId === habitId) {
      cancelHabitEdit()
      setSetupDrawerOpen(false)
    }
  }

  function conquerHabit(habitId: string) {
    commitState((current) => {
      const habit = current.habits.find((entry) => entry.id === habitId)

      if (!habit) {
        return current
      }

      return {
        ...current,
        habits: current.habits.filter((entry) => entry.id !== habitId),
        conqueredList: current.conqueredList.some((entry) => entry.id === habitId)
          ? current.conqueredList
          : [...current.conqueredList, createConqueredHabit(habit)],
      }
    })

    if (editingHabitId === habitId) {
      cancelHabitEdit()
    }
  }

  function restoreConqueredItem(itemId: string) {
    commitState((current) => {
      const conqueredHabit = current.conqueredList.find((habit) => habit.id === itemId)

      if (!conqueredHabit) {
        return current
      }

      return {
        ...current,
        habits: [...current.habits, restoreConqueredHabit(conqueredHabit, current.habits)],
        conqueredList: current.conqueredList.filter((habit) => habit.id !== itemId),
      }
    })
  }

  function updateNote(nextValue: string) {
    commitState((current) => ({
      ...current,
      notes: {
        ...current.notes,
        [todayKey]: nextValue,
      },
    }))
  }

  function addWeakListItem(item: Omit<WeakListItem, 'id' | 'createdAt'>) {
    commitState((current) => {
      const weakness = item.weakness.trim()
      const futureHabit = item.futureHabit.trim()
      const note = item.note.trim()

      if (!weakness || !futureHabit) {
        return current
      }

      return {
        ...current,
        weakList: [...current.weakList, createWeakListItem({ weakness, futureHabit, note })],
      }
    })
  }

  function deleteWeakListItem(itemId: string) {
    commitState((current) => ({
      ...current,
      weakList: current.weakList.filter((item) => item.id !== itemId),
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

          <div className="hero-actions">
            <button type="button" className="drawer-toggle" onClick={openCreateDrawer}>
              Add task / Weak list
            </button>
            <button type="button" className="theme-toggle" onClick={toggleTheme}>
              {themeMode === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
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
            <span>Conquered</span>
            <strong>{storedState.conqueredList.length}</strong>
          </div>
          <div className="hero-stat">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
          <div className="hero-stat accent">
            <span>Progress</span>
            <strong>{progressPercent.toFixed(1)}%</strong>
          </div>
        </div>
      </header>

      <main className="workspace-grid">
        <div className="tracker-column">
          <aside className="control-panel panel">
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
                            <small>
                              {habit.trackingMode === 'time'
                                ? `${formatAmount(monthKeys.reduce((total, dateKey) => total + getHabitRecordedAmount(habit, dateKey), 0))} ${habit.targetUnit} logged`
                                : `${countHabitDone(habit, monthKeys)} check-ins`}
                            </small>
                            <HabitSubtaskPreview habit={habit} />
                          </div>
                        </div>

                        <div className="habit-actions">
                          <button
                            type="button"
                            className="edit-button"
                            onClick={() => beginHabitEdit(habit.id)}
                            aria-label={`Edit ${habit.name}`}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="delete-button"
                            onClick={() => deleteHabit(habit.id)}
                            aria-label={`Delete ${habit.name}`}
                          >
                            ×
                          </button>
                        </div>
                      </td>

                      {monthKeys.map((dateKey) => {
                        const entry = getHabitEntry(habit, dateKey)
                        const checked = Boolean(entry)
                        return (
                          <td key={dateKey}>
                            {habit.trackingMode === 'time' ? (
                              <div className="time-cell">
                                <input
                                  type="number"
                                  min="0"
                                  step="5"
                                  inputMode="numeric"
                                  value={typeof entry === 'number' ? entry : ''}
                                  onChange={(event) => updateDurationEntry(habit.id, dateKey, event.target.value)}
                                  aria-label={`Set time for ${habit.name} on ${dateKey}`}
                                  placeholder="0"
                                />
                                <span>{habit.targetUnit}</span>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className={checked ? 'check-button checked' : 'check-button'}
                                onClick={() => toggleCompletion(habit.id, dateKey)}
                                aria-pressed={checked}
                                aria-label={`${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${dateKey}`}
                              >
                                {checked ? '✓' : ''}
                              </button>
                            )}
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
                    {dailyDoneCounts.map((value, index) => (
                      <td key={`${monthKeys[index]}-done`}>{value}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Not done</td>
                    {dailyDoneCounts.map((value, index) => (
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
                const isSelected = dateKey === activeSelectedDateKey
                const completed = storedState.habits.filter((habit) => isHabitComplete(habit, dateKey)).length

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
                  const entry = getHabitEntry(habit, activeSelectedDateKey)
                  const checked = Boolean(entry)
                  return (
                    habit.trackingMode === 'time' ? (
                      <div key={`${habit.id}-${activeSelectedDateKey}`} className="mobile-habit-row time">
                        <span className="mobile-habit-label">
                          <span className="habit-color" style={{ backgroundColor: habit.color }} />
                          <span>
                            <strong>
                              {habit.icon} {habit.name}
                            </strong>
                            <small>
                              {checked
                                ? `${formatAmount(typeof entry === 'number' ? entry : 0)} ${habit.targetUnit} today`
                                : 'Enter time spent today'}
                            </small>
                            <HabitSubtaskPreview habit={habit} />
                          </span>
                        </span>

                        <div className="mobile-habit-actions">
                          <button
                            type="button"
                            className="edit-button mobile-edit-button"
                            onClick={() => beginHabitEdit(habit.id)}
                            aria-label={`Edit ${habit.name}`}
                          >
                            Edit
                          </button>

                          <label className="mobile-time-entry">
                            <input
                              type="number"
                              min="0"
                              step="5"
                              inputMode="numeric"
                              value={typeof entry === 'number' ? entry : ''}
                              onChange={(event) =>
                                updateDurationEntry(habit.id, activeSelectedDateKey, event.target.value)
                              }
                              aria-label={`Set time for ${habit.name} on ${selectedDateLabel}`}
                              placeholder="0"
                            />
                            <span>{habit.targetUnit}</span>
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div key={`${habit.id}-${activeSelectedDateKey}`} className={checked ? 'mobile-habit-row checked' : 'mobile-habit-row'}>
                        <span className="mobile-habit-label">
                          <span className="habit-color" style={{ backgroundColor: habit.color }} />
                          <span>
                            <strong>
                              {habit.icon} {habit.name}
                            </strong>
                            <small>{checked ? 'Done today' : 'Tap the check to mark done'}</small>
                            <HabitSubtaskPreview habit={habit} />
                          </span>
                        </span>

                        <div className="mobile-habit-actions">
                          <button
                            type="button"
                            className="edit-button mobile-edit-button"
                            onClick={() => beginHabitEdit(habit.id)}
                            aria-label={`Edit ${habit.name}`}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className={checked ? 'mobile-habit-toggle checked' : 'mobile-habit-toggle'}
                            onClick={() => toggleCompletion(habit.id, activeSelectedDateKey)}
                            aria-pressed={checked}
                            aria-label={`${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${selectedDateLabel}`}
                          >
                            {checked ? '✓' : ''}
                          </button>
                        </div>
                      </div>
                    )
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
                      {habit.trackingMode === 'time'
                        ? `${formatAmount(habit.totalAmount)} ${habit.targetUnit} total`
                        : `${habit.done}/${monthDays.length} days`}
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
        </div>

        <aside className="weak-column side-rail">
          <WeakList items={storedState.weakList} onDeleteItem={deleteWeakListItem} />
          <ConqueredList items={storedState.conqueredList} onRestoreItem={restoreConqueredItem} />
        </aside>
      </main>

      {isSetupDrawerOpen ? (
        <div className="setup-drawer-layer">
          <button
            type="button"
            className="setup-drawer-backdrop"
            onClick={closeSetupDrawer}
            aria-label="Close setup drawer"
          />

          <aside className="setup-drawer" role="dialog" aria-modal="true" aria-labelledby="setup-drawer-title">
            <div className="drawer-header">
              <div>
                <p className="eyebrow">Right drawer</p>
                <h2 id="setup-drawer-title">Create or plan habits</h2>
                <p className="muted">Add today&apos;s habit or save a future improvement in the Weak List.</p>
              </div>

              <button type="button" className="drawer-close" onClick={closeSetupDrawer} aria-label="Close drawer">
                ×
              </button>
            </div>

            <section className="drawer-card">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{editingHabit ? 'Edit a task' : 'Add a task'}</p>
                  <h3>{editingHabit ? `Editing ${editingHabit.name}` : 'Create a new habit'}</h3>
                </div>
                {editingHabit ? (
                  <button type="button" className="ghost-button" onClick={cancelHabitEdit}>
                    Cancel edit
                  </button>
                ) : null}
              </div>

              <form className="habit-form" onSubmit={handleHabitFormSubmit}>
                <label>
                  <span>Habit name</span>
                  <input
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Example: No sugar"
                  />
                </label>

                <section className="task-structure-panel" aria-label="Task structure">
                  <div className="task-structure-header">
                    <div>
                      <span className="label-title">Task structure</span>
                      <p className="muted">Choose whether this is one trackable habit or a larger task with steps.</p>
                    </div>
                    <span className="task-structure-count">
                      {form.isMajorTask ? `${normalizeSubtasks(form.subtasks).length} steps` : 'Simple'}
                    </span>
                  </div>

                  <div className="task-type-grid">
                    <button
                      type="button"
                      className={form.isMajorTask ? 'task-type-card' : 'task-type-card active'}
                      onClick={() => setMajorTaskMode(false)}
                      aria-pressed={!form.isMajorTask}
                    >
                      <span>Single</span>
                      <strong>Habit</strong>
                      <small>One behavior, one tracker row.</small>
                    </button>
                    <button
                      type="button"
                      className={form.isMajorTask ? 'task-type-card active' : 'task-type-card'}
                      onClick={() => setMajorTaskMode(true)}
                      aria-pressed={form.isMajorTask}
                    >
                      <span>Major</span>
                      <strong>Task</strong>
                      <small>One main task with steps below.</small>
                    </button>
                  </div>

                  {form.isMajorTask ? (
                    <div className="subtask-composer">
                      <div className="subtask-composer-header">
                        <div>
                          <span>Build the step list</span>
                          <small>Each row becomes one subtask in the accordion.</small>
                        </div>
                        <button type="button" className="subtask-add-button" onClick={addSubtaskField}>
                          Add step
                        </button>
                      </div>

                      <div className="subtask-card-list">
                        {form.subtasks.map((subtask, index) => (
                          <div key={`subtask-${index}`} className="subtask-card">
                            <span className="subtask-step">Step {String(index + 1).padStart(2, '0')}</span>
                            <input
                              value={subtask}
                              onChange={(event) => updateSubtask(index, event.target.value)}
                              placeholder={
                                index === 0
                                  ? 'Research the topic'
                                  : index === 1
                                    ? 'Create the first draft'
                                    : 'Define the next clear action'
                              }
                            />
                            <button
                              type="button"
                              className="subtask-remove"
                              onClick={() => removeSubtaskField(index)}
                              aria-label={`Remove step ${index + 1}`}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="task-structure-note">
                      Use Major Task only when you need a checklist under the main tracker item.
                    </div>
                  )}
                </section>

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

                <div className="form-grid">
                  <label>
                    <span>Tracking</span>
                    <select
                      value={form.trackingMode}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          trackingMode: event.target.value as HabitTrackingMode,
                        }))
                      }
                    >
                      <option value="check">Check-in</option>
                      <option value="time">Time spent</option>
                    </select>
                  </label>

                  {form.trackingMode === 'time' ? (
                    <>
                      <label>
                        <span>Target / day</span>
                        <input
                          type="number"
                          min="0"
                          step="5"
                          value={form.targetValue}
                          onChange={(event) => setForm((current) => ({ ...current, targetValue: event.target.value }))}
                          placeholder="60"
                        />
                      </label>

                      <label>
                        <span>Unit</span>
                        <input
                          value={form.targetUnit}
                          onChange={(event) => setForm((current) => ({ ...current, targetUnit: event.target.value }))}
                          placeholder="min"
                        />
                      </label>
                    </>
                  ) : null}
                </div>

                <button type="submit" className="primary-button">
                  {editingHabit ? 'Save changes' : 'Add habit'}
                </button>

                {editingHabit ? (
                  <button
                    type="button"
                    className="conquer-button"
                    onClick={() => conquerHabit(editingHabit.id)}
                  >
                    Move to Conquered
                  </button>
                ) : null}
              </form>
            </section>

            <WeakListEditor onAddItem={addWeakListItem} />
          </aside>
        </div>
      ) : null}
    </div>
  )
}

export default App
