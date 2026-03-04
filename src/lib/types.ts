export type CheckinInput = {
  sleepHours: number;
  hrv: number;
  energy: number;
  soreness: number;
  hunger: number;
  stress: number;
};

export type CoachCard = {
  title: string;
  detail: string;
  priority: 'low' | 'medium' | 'high';
};
