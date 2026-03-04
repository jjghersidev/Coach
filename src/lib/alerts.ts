export function trainingLoadAlert(currentWeekKm: number, previousWeekKm: number) {
  if (previousWeekKm <= 0) return false;
  return currentWeekKm / previousWeekKm > 1.2;
}

export function recoveryAlert(hrvToday: number, hrv7DayAvg: number, energy: number, soreness: number) {
  return hrvToday < hrv7DayAvg * 0.9 && (energy <= 4 || soreness >= 7);
}

export function sleepAlert(lastTwoDaysSleep: number[]) {
  return lastTwoDaysSleep.filter((s) => s < 6).length >= 2;
}
