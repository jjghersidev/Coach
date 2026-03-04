export const demoUser = {
  id: 'demo-user',
  email: 'demo@fitcoach.ai',
  profile: { age: 38, heightCm: 172, weightKg: 80, goalWeightKg: 74, activityLevel: 1.55, runningExpected: 3, strengthExpected: 2 }
};

export const runningSessions = [
  { id: 'r1', userId: 'demo-user', date: new Date(Date.now() - 5 * 86400000), type: 'easy', durationMin: 45, distanceKm: 8.2, rpe1to10: 4 },
  { id: 'r2', userId: 'demo-user', date: new Date(Date.now() - 3 * 86400000), type: 'tempo', durationMin: 50, distanceKm: 9.5, rpe1to10: 7 },
  { id: 'r3', userId: 'demo-user', date: new Date(Date.now() - 1 * 86400000), type: 'long_run', durationMin: 80, distanceKm: 14, rpe1to10: 6 }
];

export const checkins = [
  { date: new Date(), sleepHours: 6.5, hrv: 28, energy1to10: 5, soreness1to10: 6, hunger1to10: 5, stress1to10: 4 },
  { date: new Date(Date.now() - 86400000), sleepHours: 5.8, hrv: 26, energy1to10: 4, soreness1to10: 7, hunger1to10: 6, stress1to10: 6 }
];

export const strengthSessions = [
  { id: 's1', date: new Date(Date.now() - 2 * 86400000), templateName: 'Upper / Lower A', sets: [{ id: 'set1', exercise: { name: 'Back Squat' }, setNumber: 1, reps: 5, weight: 100, rpe: 8, rir: 2 }] }
];

export const recipes = [
  { id: 'rec1', name: 'Chicken Rice Bowl' },
  { id: 'rec2', name: 'Protein Overnight Oats' },
  { id: 'rec3', name: 'Turkey Pasta Prep' }
];

export const meals = [
  { servings: 1, recipe: { recipeIngredients: [{ ingredientId: 'i1', qty: 300, ingredient: { name: 'Chicken breast', unit: 'g' } }, { ingredientId: 'i2', qty: 220, ingredient: { name: 'Rice', unit: 'g' } }] } },
  { servings: 1, recipe: { recipeIngredients: [{ ingredientId: 'i3', qty: 80, ingredient: { name: 'Oats', unit: 'g' } }] } }
];
