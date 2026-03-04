import { saveCheckin } from '@/actions/logging';
import { recoveryAlert, sleepAlert, trainingLoadAlert } from '@/lib/alerts';
import { checkins, demoUser, runningSessions } from '@/lib/demo-data';

export default async function HomePage() {
  const currentVolume = runningSessions.reduce((acc, r) => acc + r.distanceKm, 0);
  const previousVolume = 24;
  const recent = checkins[0];
  const hrvAvg = checkins.reduce((a, c) => a + c.hrv, 0) / checkins.length;

  const alerts = [
    trainingLoadAlert(currentVolume, previousVolume) && 'Running volume increased >20% vs prior week.',
    recent && recoveryAlert(recent.hrv, hrvAvg, recent.energy1to10, recent.soreness1to10) && 'Low recovery signal detected.',
    sleepAlert(checkins.slice(0, 2).map((c) => c.sleepHours)) && 'Sleep below 6h for two days.'
  ].filter(Boolean);

  return (
    <section className="space-y-4">
      <div className="card">
        <h2 className="text-lg font-semibold">Today</h2>
        <p className="text-sm text-slate-300">Check-in + readiness insights.</p>
        <form action={saveCheckin} className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <input type="hidden" name="userId" value={demoUser.id} />
          <input type="date" name="date" defaultValue={new Date().toISOString().slice(0, 10)} className="input col-span-2" />
          {['sleepHours', 'hrv', 'energy1to10', 'soreness1to10', 'hunger1to10', 'stress1to10'].map((field) => (
            <input key={field} name={field} placeholder={field} className="input" required />
          ))}
          <button className="col-span-2 rounded-lg bg-emerald-600 p-2">Save check-in</button>
        </form>
      </div>
      <div className="card"><h3 className="font-semibold">Alerts</h3><ul className="mt-2 list-disc pl-5 text-sm text-amber-300">{alerts.length ? alerts.map((a) => <li key={a as string}>{a}</li>) : <li>No active alerts.</li>}</ul></div>
      <div className="card text-sm"><p>Today&apos;s plan: follow Garmin workout prescription. FitCoach AI provides recovery and nutrition context only.</p></div>
    </section>
  );
}
