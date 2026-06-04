import http from 'node:http'
import { Pool } from 'pg'

const PORT = Number(process.env.PORT || 8787)
const DATABASE_URL = process.env.NEON_DATABASE_URL

if (!DATABASE_URL) {
  console.error('NEON_DATABASE_URL is missing.')
  process.exit(1)
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

function normalizeHabitEntry(value, trackingMode) {
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

function inferTrackingMode(input) {
  if (input.trackingMode === 'time' || input.type === 'time' || input.mode === 'time') {
    return 'time'
  }

  const entries = input.entries ?? input.completions
  if (entries && typeof entries === 'object' && !Array.isArray(entries)) {
    return Object.values(entries).some((value) => typeof value === 'number') ? 'time' : 'check'
  }

  return 'check'
}

function normalizeHabit(input) {
  if (!input || typeof input !== 'object') {
    return null
  }

  const id = typeof input.id === 'string' && input.id.trim() ? input.id : null
  const name = typeof input.name === 'string' && input.name.trim() ? input.name.trim() : null
  if (!id || !name) {
    return null
  }

  const trackingMode = inferTrackingMode(input)
  const rawTargetValue = input.targetValue ?? input.goalValue ?? input.targetMinutes
  const targetValue = typeof rawTargetValue === 'number' && Number.isFinite(rawTargetValue) && rawTargetValue > 0 ? rawTargetValue : null
  const targetUnit =
    typeof input.targetUnit === 'string' && input.targetUnit.trim()
      ? input.targetUnit.trim()
      : trackingMode === 'time'
        ? 'min'
        : 'check-ins'
  const rawEntries = input.entries ?? input.completions
  const entries = {}

  if (rawEntries && typeof rawEntries === 'object' && !Array.isArray(rawEntries)) {
    for (const [dateKey, value] of Object.entries(rawEntries)) {
      const normalizedEntry = normalizeHabitEntry(value, trackingMode)
      if (normalizedEntry !== undefined) {
        entries[dateKey] = normalizedEntry
      }
    }
  }

  return {
    id,
    name,
    icon: typeof input.icon === 'string' && input.icon.trim() ? input.icon.trim() : '✨',
    color: typeof input.color === 'string' && input.color.trim() ? input.color.trim() : '#98d66c',
    trackingMode,
    targetValue,
    targetUnit,
    entries,
    createdAt: typeof input.createdAt === 'string' ? input.createdAt : new Date().toISOString(),
  }
}

function normalizeState(input) {
  if (!input || typeof input !== 'object') {
    return null
  }

  if (!Array.isArray(input.habits) || typeof input.notes !== 'object' || !input.notes) {
    return null
  }

  const habits = input.habits.map(normalizeHabit).filter(Boolean)
  if (habits.length === 0) {
    return null
  }

  return {
    habits,
    notes: input.notes,
  }
}

const DEFAULT_STATE = {
  habits: [
    {
      id: 'wake-up-early',
      name: 'Wake up early',
      icon: '⏰',
      color: '#98d66c',
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
      trackingMode: 'time',
      targetValue: 90,
      targetUnit: 'min',
      entries: {},
      createdAt: new Date().toISOString(),
    },
  ],
  notes: {},
}

async function ensureSchema() {
  const normalizedDefaultState = normalizeState(DEFAULT_STATE) ?? DEFAULT_STATE
  await pool.query(`
    CREATE TABLE IF NOT EXISTS habit_tracker_state (
      id TEXT PRIMARY KEY,
      payload JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  const existing = await pool.query('SELECT 1 FROM habit_tracker_state WHERE id = $1', ['singleton'])
  if (existing.rowCount === 0) {
    await pool.query(
      'INSERT INTO habit_tracker_state (id, payload) VALUES ($1, $2)',
      ['singleton', normalizedDefaultState],
    )
  }
}

async function readState() {
  const result = await pool.query(
    'SELECT payload, updated_at FROM habit_tracker_state WHERE id = $1',
    ['singleton'],
  )

  if (result.rowCount === 0) {
    return { payload: DEFAULT_STATE, updatedAt: null }
  }

  const normalized = normalizeState(result.rows[0].payload)
  return {
    payload: normalized ?? result.rows[0].payload ?? DEFAULT_STATE,
    updatedAt: result.rows[0].updated_at,
  }
}

function writeJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  res.end(JSON.stringify(body))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

await ensureSchema()

const server = http.createServer(async (req, res) => {
  try {
    if (!req.url) {
      writeJson(res, 400, { error: 'Missing URL' })
      return
    }

    if (req.method === 'GET' && req.url === '/api/health') {
      const state = await readState()
      writeJson(res, 200, { ok: true, connected: true, updatedAt: state.updatedAt })
      return
    }

    if (req.method === 'GET' && req.url === '/api/state') {
      const state = await readState()
      writeJson(res, 200, state.payload)
      return
    }

    if (req.method === 'PUT' && req.url === '/api/state') {
      const body = await readBody(req)
      const normalizedBody = normalizeState(body)
      if (!normalizedBody) {
        writeJson(res, 400, { error: 'Invalid state payload' })
        return
      }

      const result = await pool.query(
        `
        UPDATE habit_tracker_state
        SET payload = $2, updated_at = NOW()
        WHERE id = $1
        RETURNING payload, updated_at
        `,
        ['singleton', normalizedBody],
      )

      writeJson(res, 200, result.rows[0])
      return
    }

    writeJson(res, 404, { error: 'Not found' })
  } catch (error) {
    console.error(error)
    writeJson(res, 500, { error: 'Internal server error' })
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Habit tracker API listening on http://127.0.0.1:${PORT}`)
})

process.on('SIGINT', async () => {
  await pool.end()
  process.exit(0)
})
