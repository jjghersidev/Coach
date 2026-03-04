import { NextResponse } from 'next/server';
import { generateCoachRecommendation } from '@/lib/coach-engine';
import { computeAdherence } from '@/lib/fitness';
import { checkins, runningSessions, strengthSessions } from '@/lib/demo-data';

export async function GET() {
  const checkin = checkins[0];
  const nutritionAdherence = computeAdherence(8, 10);

  return NextResponse.json(
    generateCoachRecommendation({
      checkin,
      recentRuns: runningSessions,
      recentStrength: strengthSessions,
      nutritionAdherence
    })
  );
}
