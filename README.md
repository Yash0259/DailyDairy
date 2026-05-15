# Habit Tracker

A React + Vite monthly habit tracker inspired by the reference sheet layout:

- Add habits with a name, icon, and color
- Tick habits day by day in a month grid
- See progress, consistency, active days, and habit-level analytics
- Persist data in Neon Postgres through a small backend API
- Keep a `NEON_DATABASE_URL` placeholder ready in `.env`

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Neon

The app uses a Postgres-backed API. The environment slot is:

```env
NEON_DATABASE_URL=
```
