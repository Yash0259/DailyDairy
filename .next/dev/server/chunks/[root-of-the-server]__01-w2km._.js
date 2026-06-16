module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/state/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
const revalidate = 0;
const COLOR_SWATCHES = [
    '#98d66c',
    '#f8b94d',
    '#ff8a72',
    '#70d6c3',
    '#87a7ff',
    '#e58dff'
];
function pad(value) {
    return String(value).padStart(2, '0');
}
function formatDateKey(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function getDefaultState() {
    const todayKey = formatDateKey(new Date());
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
                createdAt: new Date().toISOString()
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
                createdAt: new Date().toISOString()
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
                createdAt: new Date().toISOString()
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
                createdAt: new Date().toISOString()
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
                createdAt: new Date().toISOString()
            }
        ],
        notes: {
            [todayKey]: 'Focus on consistency before intensity.'
        },
        weakList: [],
        conqueredList: []
    };
}
function normalizeHabitEntry(value, trackingMode) {
    if (trackingMode === 'time') {
        const numericValue = typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value) : Number.NaN;
        if (Number.isFinite(numericValue) && numericValue >= 0) {
            return numericValue;
        }
        return undefined;
    }
    return value ? true : undefined;
}
function normalizeSubtasks(input) {
    if (!Array.isArray(input)) {
        return [];
    }
    const seen = new Set();
    const subtasks = [];
    for (const item of input){
        if (typeof item !== 'string') {
            continue;
        }
        const subtask = item.trim();
        const key = subtask.toLowerCase();
        if (!subtask || seen.has(key)) {
            continue;
        }
        seen.add(key);
        subtasks.push(subtask);
    }
    return subtasks;
}
function inferTrackingMode(input) {
    if (input.trackingMode === 'time' || input.type === 'time' || input.mode === 'time') {
        return 'time';
    }
    const entries = input.entries ?? input.completions;
    if (entries && typeof entries === 'object' && !Array.isArray(entries)) {
        return Object.values(entries).some((value)=>typeof value === 'number') ? 'time' : 'check';
    }
    return 'check';
}
function normalizeHabit(input) {
    if (!input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null;
    const name = typeof candidate.name === 'string' && candidate.name.trim() ? candidate.name.trim() : null;
    const icon = typeof candidate.icon === 'string' && candidate.icon.trim() ? candidate.icon.trim() : '✨';
    const color = typeof candidate.color === 'string' && candidate.color.trim() ? candidate.color.trim() : COLOR_SWATCHES[0];
    const subtasks = normalizeSubtasks(candidate.subtasks);
    const isMajorTask = candidate.isMajorTask === true || candidate.taskType === 'major' || subtasks.length > 0;
    const trackingMode = inferTrackingMode(candidate);
    const rawTargetValue = candidate.targetValue ?? candidate.goalValue ?? candidate.targetMinutes;
    const targetValue = typeof rawTargetValue === 'number' && Number.isFinite(rawTargetValue) && rawTargetValue > 0 ? rawTargetValue : null;
    const targetUnit = typeof candidate.targetUnit === 'string' && candidate.targetUnit.trim() ? candidate.targetUnit.trim() : trackingMode === 'time' ? 'min' : 'check-ins';
    const rawEntries = candidate.entries ?? candidate.completions;
    const entries = {};
    if (rawEntries && typeof rawEntries === 'object' && !Array.isArray(rawEntries)) {
        for (const [dateKey, value] of Object.entries(rawEntries)){
            const normalizedEntry = normalizeHabitEntry(value, trackingMode);
            if (normalizedEntry !== undefined) {
                entries[dateKey] = normalizedEntry;
            }
        }
    }
    if (!id || !name) {
        return null;
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
        createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString()
    };
}
function normalizeWeakListItem(input) {
    if (!input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null;
    const weakness = typeof candidate.weakness === 'string' && candidate.weakness.trim() ? candidate.weakness.trim() : null;
    const futureHabit = typeof candidate.futureHabit === 'string' && candidate.futureHabit.trim() ? candidate.futureHabit.trim() : null;
    const note = typeof candidate.note === 'string' ? candidate.note.trim() : '';
    if (!id || !weakness || !futureHabit) {
        return null;
    }
    return {
        id,
        weakness,
        futureHabit,
        note,
        createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString()
    };
}
function normalizeConqueredHabit(input) {
    const habit = normalizeHabit(input);
    if (!habit || !input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    return {
        ...habit,
        conqueredAt: typeof candidate.conqueredAt === 'string' ? candidate.conqueredAt : new Date().toISOString()
    };
}
function normalizeNotes(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        return {};
    }
    const notes = {};
    for (const [dateKey, value] of Object.entries(input)){
        if (typeof value === 'string') {
            notes[dateKey] = value;
        }
    }
    return notes;
}
function normalizeState(input) {
    if (!input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    if (!Array.isArray(candidate.habits) || !candidate.notes || typeof candidate.notes !== 'object') {
        return null;
    }
    const habits = candidate.habits.map(normalizeHabit).filter((habit)=>habit !== null);
    const weakList = Array.isArray(candidate.weakList) ? candidate.weakList.map(normalizeWeakListItem).filter((item)=>item !== null) : [];
    const conqueredList = Array.isArray(candidate.conqueredList) ? candidate.conqueredList.map(normalizeConqueredHabit).filter((item)=>item !== null) : [];
    return {
        habits,
        notes: normalizeNotes(candidate.notes),
        weakList,
        conqueredList
    };
}
const globalForPool = globalThis;
function getPool() {
    const databaseUrl = process.env.NEON_DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('NEON_DATABASE_URL is missing.');
    }
    if (!globalForPool.habitTrackerPool) {
        globalForPool.habitTrackerPool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
            connectionString: databaseUrl,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }
    return globalForPool.habitTrackerPool;
}
async function ensureSchema() {
    const pool = getPool();
    const normalizedDefaultState = getDefaultState();
    await pool.query(`
    CREATE TABLE IF NOT EXISTS habit_tracker_state (
      id TEXT PRIMARY KEY,
      payload JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
    const existing = await pool.query('SELECT 1 FROM habit_tracker_state WHERE id = $1', [
        'singleton'
    ]);
    if (existing.rowCount === 0) {
        await pool.query('INSERT INTO habit_tracker_state (id, payload) VALUES ($1, $2)', [
            'singleton',
            normalizedDefaultState
        ]);
    }
}
async function ensureSchemaReady() {
    if (!globalForPool.habitTrackerSchemaReady) {
        globalForPool.habitTrackerSchemaReady = ensureSchema().catch((error)=>{
            globalForPool.habitTrackerSchemaReady = undefined;
            throw error;
        });
    }
    return globalForPool.habitTrackerSchemaReady;
}
async function readState() {
    const pool = getPool();
    const result = await pool.query('SELECT payload, updated_at FROM habit_tracker_state WHERE id = $1', [
        'singleton'
    ]);
    if (result.rowCount === 0) {
        return {
            payload: getDefaultState(),
            updatedAt: null
        };
    }
    const normalized = normalizeState(result.rows[0].payload);
    return {
        payload: normalized ?? getDefaultState(),
        updatedAt: result.rows[0].updated_at
    };
}
function json(body, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(body, {
        status,
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
async function GET() {
    try {
        await ensureSchemaReady();
        const state = await readState();
        return json(state.payload);
    } catch (error) {
        console.error(error);
        return json({
            error: 'Internal server error'
        }, 500);
    }
}
async function PUT(request) {
    try {
        const body = await request.json().catch(()=>null);
        const normalizedBody = normalizeState(body);
        if (!normalizedBody) {
            return json({
                error: 'Invalid state payload'
            }, 400);
        }
        await ensureSchemaReady();
        const pool = getPool();
        const result = await pool.query(`
        UPDATE habit_tracker_state
        SET payload = $2, updated_at = NOW()
        WHERE id = $1
        RETURNING payload, updated_at
      `, [
            'singleton',
            normalizedBody
        ]);
        return json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return json({
            error: 'Internal server error'
        }, 500);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01-w2km._.js.map