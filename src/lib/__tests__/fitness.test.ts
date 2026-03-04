import { describe, expect, it } from 'vitest';
import { calculateMaintenanceCalories, calculateCalorieTarget, computeAdherence } from '@/lib/fitness';
import { trainingLoadAlert, recoveryAlert, sleepAlert } from '@/lib/alerts';

describe('fitness calculations', () => {
  it('calculates maintenance and deficit calories', () => {
    const maintenance = calculateMaintenanceCalories(80, 172, 38, 1.55);
    expect(maintenance).toBeGreaterThan(2000);
    expect(calculateCalorieTarget(maintenance, 0.1)).toBeLessThan(maintenance);
  });

  it('computes adherence', () => {
    expect(computeAdherence(8, 10)).toBe(80);
    expect(computeAdherence(0, 0)).toBe(100);
  });

  it('evaluates alerts', () => {
    expect(trainingLoadAlert(30, 20)).toBe(true);
    expect(recoveryAlert(24, 30, 4, 6)).toBe(true);
    expect(sleepAlert([5.4, 5.8])).toBe(true);
  });
});
