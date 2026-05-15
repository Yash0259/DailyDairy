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

const DEFAULT_STATE = {
  habits: [
    {
      id: 'wake-up-early',
      name: 'Wake up early',
      icon: '⏰',
      color: '#98d66c',
      completions: {},
      createdAt: new Date().toISOString(),
    },
    {
      id: 'workout',
      name: 'Workout',
      icon: '💪',
      color: '#f8b94d',
      completions: {},
      createdAt: new Date().toISOString(),
    },
    {
      id: 'reading',
      name: 'Reading',
      icon: '📚',
      color: '#70d6c3',
      completions: {},
      createdAt: new Date().toISOString(),
    },
    {
      id: 'deep-work',
      name: 'Deep work',
      icon: '🎯',
      color: '#ff8a72',
      completions: {},
      createdAt: new Date().toISOString(),
    },
  ],
  notes: {},
}

async function ensureSchema() {
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
      ['singleton', DEFAULT_STATE],
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

  return {
    payload: result.rows[0].payload ?? DEFAULT_STATE,
    updatedAt: result.rows[0].updated_at,
  }
}

function writeJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
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

function isTrackerState(value) {
  return (
    value &&
    typeof value === 'object' &&
    Array.isArray(value.habits) &&
    value.notes &&
    typeof value.notes === 'object'
  )
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
      if (!isTrackerState(body)) {
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
        ['singleton', body],
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
