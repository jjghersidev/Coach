import { runningSessions, demoUser } from '@/lib/demo-data';
import { saveRunSession } from '@/actions/logging';

export default function TrainingPage() {
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="font-semibold">Running Calendar</h2>
        <form action={saveRunSession} className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <input type="hidden" name="userId" value={demoUser.id} />
          <input type="date" name="date" className="input" required />
          <select name="type" className="input"><option value="easy">Easy</option><option value="tempo">Tempo</option><option value="intervals">Intervals</option><option value="long_run">Long run</option></select>
          <input name="durationMin" placeholder="Duration (min)" className="input" required />
          <input name="distanceKm" placeholder="Distance (km)" className="input" required />
          <input name="rpe1to10" placeholder="RPE" className="input" required />
          <button className="col-span-2 rounded bg-emerald-600 p-2">Save run</button>
        </form>
      </div>
      <div className="card text-sm">{runningSessions.map((r) => <p key={r.id}>{r.date.toISOString().slice(0, 10)} · {r.type} · {r.distanceKm}km · RPE {r.rpe1to10}</p>)}</div>
    </div>
  );
}
