# FitCoach AI (MVP)

Production-ready MVP built with **Next.js App Router + TypeScript + Tailwind + Prisma + Supabase**.

## Features
- Running session analysis (easy/tempo/intervals/long run). No run plan generation.
- Strength logging (templates, sets/reps/weight, RPE/RIR).
- Weekly nutrition planning (calories/macros, meal repetition, grocery list).
- Daily check-in + recommendation engine.
- Dashboard KPI trends + alert detection.
- Coach Chat UI with structured coaching cards and non-medical disclaimer.

## Tech Stack
- Next.js 15, React 19, TypeScript, Tailwind
- Prisma + PostgreSQL (compatible with Supabase Postgres)
- Supabase JS Auth client
- Zod + Server Actions
- Recharts
- Vitest

## Setup
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Environment Variables
Create `.env`:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fitcoach
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Useful Commands
```bash
npm run dev
npm run build
npm run test
npx prisma migrate dev --name init
npx prisma db seed
```

## Architecture
- `prisma/schema.prisma`: domain data model.
- `src/lib/fitness.ts`: calorie/macro/adherence logic.
- `src/lib/alerts.ts`: overload/recovery/sleep alerts.
- `src/lib/coach-engine.ts`: recommendation JSON generator.
- `src/app/api/coach/route.ts`: route handler for coaching output.
- `src/app/*`: screen-level routes (home, training, nutrition, dashboard, coach).

## Disclaimer
FitCoach AI provides educational wellness guidance only and does not provide medical advice.
