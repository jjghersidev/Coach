type CheckinShape = { energy1to10: number; soreness1to10: number } & Record<string, unknown>;
type RunShape = { rpe1to10: number };

type Inputs = {
  checkin: CheckinShape;
  recentRuns: RunShape[];
  recentStrength: unknown[];
  nutritionAdherence: number;
};

export type CoachRecommendation = {
  focusToday: string[];
  nutritionTweak: string;
  recoveryAction: string;
  trainingNote: string;
  disclaimer: string;
};

export function generateCoachRecommendation(input: Inputs): CoachRecommendation {
  const hardRunYesterday = input.recentRuns.some((run) => run.rpe1to10 >= 8);
  const lowReadiness = input.checkin.energy1to10 <= 4 || input.checkin.soreness1to10 >= 7;
  return {
    focusToday: [
      lowReadiness ? 'Prioritize quality sleep and reduce non-essential stressors.' : 'Keep intensity aligned with Garmin workout guidance.',
      input.nutritionAdherence < 75 ? 'Improve meal logging consistency to tighten feedback loops.' : 'Stay consistent with planned meals and hydration.'
    ],
    nutritionTweak: hardRunYesterday
      ? 'Increase carbohydrates by ~0.5 g/kg today to replenish glycogen and maintain training quality.'
      : 'Keep protein distributed across 3-4 meals at 30-40g each.',
    recoveryAction: lowReadiness
      ? 'Use a 15-minute mobility and breathing session; avoid adding extra volume.'
      : 'Include a short walk and 5-10 minutes of stretching post-workout.',
    trainingNote: 'Use Garmin as the source of truth for run structure; this app only helps analyze readiness and execution.',
    disclaimer: 'Educational guidance only. Not medical advice.'
  };
}
