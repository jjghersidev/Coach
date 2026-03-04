export function calculateMaintenanceCalories(weightKg: number, heightCm: number, age: number, activity = 1.55) {
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  return Math.round(bmr * activity);
}

export function calculateCalorieTarget(maintenance: number, deficitPct = 0.12) {
  return Math.round(maintenance * (1 - deficitPct));
}

export function macroTargets(weightKg: number, calories: number, highCarb = false) {
  const protein = Math.round(weightKg * 2);
  const fat = Math.round(weightKg * 0.9);
  const proteinKcal = protein * 4;
  const fatKcal = fat * 9;
  const carbBase = Math.max(0, Math.round((calories - proteinKcal - fatKcal) / 4));

  return {
    protein,
    fat,
    carbs: highCarb ? Math.round(carbBase * 1.1) : carbBase
  };
}

export function computeAdherence(logged: number, planned: number) {
  if (planned === 0) return 100;
  return Math.max(0, Math.min(100, Math.round((logged / planned) * 100)));
}
