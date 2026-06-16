import { NextResponse } from 'next/server'
import { Pool } from 'pg'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

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

type WeakListItem = {
  id: string
  weakness: string
  futureHabit: string
  note: string
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

type HabitRecord = Record<string, unknown>

const COLOR_SWATCHES = ['#98d66c', '#f8b94d', '#ff8a72', '#70d6c3', '#87a7ff', '#e58dff']

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function formatDateKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function getDefaultState(): PersistedState {
  const todayKey = formatDateKey(new Date())

  return {
    habits: [
      {
        id: 'wake-up-early',
        name: 'Wake up early',
        icon: '⏰',
        color: '#98d66c',
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'check',
        targetValue: null,
        targetUnit: 'check-ins',
        entries: {},
        createdAt: new Date().toISOString(),
      },
      {
        id: 'workout',
        name: 'Workout',
        icon: '💪',
        color: '#f8b94d',
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'check',
        targetValue: null,
        targetUnit: 'check-ins',
        entries: {},
        createdAt: new Date().toISOString(),
      },
      {
        id: 'reading',
        name: 'Reading',
        icon: '📚',
        color: '#70d6c3',
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'check',
        targetValue: null,
        targetUnit: 'check-ins',
        entries: {},
        createdAt: new Date().toISOString(),
      },
      {
        id: 'deep-work',
        name: 'Deep work',
        icon: '🎯',
        color: '#ff8a72',
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'check',
        targetValue: null,
        targetUnit: 'check-ins',
        entries: {},
        createdAt: new Date().toISOString(),
      },
      {
        id: 'study',
        name: 'Study',
        icon: '📖',
        color: '#87a7ff',
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'time',
        targetValue: 90,
        targetUnit: 'min',
        entries: {},
        createdAt: new Date().toISOString(),
      },
    ],
    notes: {
      [todayKey]: 'Focus on consistency before intensity.',
    },
    weakList: [],
    conqueredList: [],
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

function inferTrackingMode(input: HabitRecord) {
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

  const candidate = input as HabitRecord
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

function normalizeWeakListItem(input: unknown): WeakListItem | null {
  if (!input || typeof input !== 'object') {
    return null
  }

  const candidate = input as HabitRecord
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

  const candidate = input as HabitRecord

  return {
    ...habit,
    conqueredAt: typeof candidate.conqueredAt === 'string' ? candidate.conqueredAt : new Date().toISOString(),
  }
}

function normalizeNotes(input: unknown): Record<string, string> {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {}
  }

  const notes: Record<string, string> = {}

  for (const [dateKey, value] of Object.entries(input as Record<string, unknown>)) {
    if (typeof value === 'string') {
      notes[dateKey] = value
    }
  }

  return notes
}

function normalizeState(input: unknown): PersistedState | null {
  if (!input || typeof input !== 'object') {
    return null
  }

  const candidate = input as Partial<PersistedState>
  if (!Array.isArray(candidate.habits) || !candidate.notes || typeof candidate.notes !== 'object') {
    return null
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
    notes: normalizeNotes(candidate.notes),
    weakList,
    conqueredList,
  }
}

const globalForPool = globalThis as typeof globalThis & {
  habitTrackerPool?: Pool
  habitTrackerSchemaReady?: Promise<void>
}

function getPool() {
  const databaseUrl = process.env.NEON_DATABASE_URL
  if (!databaseUrl) {
    throw new Error('NEON_DATABASE_URL is missing.')
  }

  if (!globalForPool.habitTrackerPool) {
    globalForPool.habitTrackerPool = new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    })
  }

  return globalForPool.habitTrackerPool
}

async function ensureSchema() {
  const pool = getPool()
  const normalizedDefaultState = getDefaultState()

  await pool.query(`
    CREATE TABLE IF NOT EXISTS habit_tracker_state (
      id TEXT PRIMARY KEY,
      payload JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  const existing = await pool.query('SELECT 1 FROM habit_tracker_state WHERE id = $1', ['singleton'])
  if (existing.rowCount === 0) {
    await pool.query('INSERT INTO habit_tracker_state (id, payload) VALUES ($1, $2)', [
      'singleton',
      normalizedDefaultState,
    ])
  }
}

async function ensureSchemaReady() {
  if (!globalForPool.habitTrackerSchemaReady) {
    globalForPool.habitTrackerSchemaReady = ensureSchema().catch((error) => {
      globalForPool.habitTrackerSchemaReady = undefined
      throw error
    })
  }

  return globalForPool.habitTrackerSchemaReady
}

async function readState() {
  const pool = getPool()
  const result = await pool.query('SELECT payload, updated_at FROM habit_tracker_state WHERE id = $1', ['singleton'])

  if (result.rowCount === 0) {
    return { payload: getDefaultState(), updatedAt: null }
  }

  const normalized = normalizeState(result.rows[0].payload)
  return {
    payload: normalized ?? getDefaultState(),
    updatedAt: result.rows[0].updated_at,
  }
}

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

export async function GET() {
  try {
    await ensureSchemaReady()
    const state = await readState()
    return json(state.payload)
  } catch (error) {
    console.error(error)
    return json({ error: 'Internal server error' }, 500)
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const normalizedBody = normalizeState(body)

    if (!normalizedBody) {
      return json({ error: 'Invalid state payload' }, 400)
    }

    await ensureSchemaReady()
    const pool = getPool()
    const result = await pool.query(
      `
        UPDATE habit_tracker_state
        SET payload = $2, updated_at = NOW()
        WHERE id = $1
        RETURNING payload, updated_at
      `,
      ['singleton', normalizedBody],
    )

    return json(result.rows[0])
  } catch (error) {
    console.error(error)
    return json({ error: 'Internal server error' }, 500)
  }
}
