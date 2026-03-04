'use server';

import { z } from 'zod';

const runSchema = z.object({
  userId: z.string(),
  date: z.string(),
  type: z.enum(['easy', 'tempo', 'intervals', 'long_run']),
  durationMin: z.coerce.number().int().positive(),
  distanceKm: z.coerce.number().positive(),
  rpe1to10: z.coerce.number().min(1).max(10)
});

export async function saveRunSession(payload: FormData) {
  runSchema.parse(Object.fromEntries(payload));
}

const checkinSchema = z.object({
  userId: z.string(),
  date: z.string(),
  sleepHours: z.coerce.number(),
  hrv: z.coerce.number(),
  energy1to10: z.coerce.number().int().min(1).max(10),
  soreness1to10: z.coerce.number().int().min(1).max(10),
  hunger1to10: z.coerce.number().int().min(1).max(10),
  stress1to10: z.coerce.number().int().min(1).max(10),
  notes: z.string().optional()
});

export async function saveCheckin(payload: FormData) {
  checkinSchema.parse(Object.fromEntries(payload));
}
