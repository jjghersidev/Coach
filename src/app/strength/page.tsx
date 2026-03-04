import { strengthSessions } from '@/lib/demo-data';

export default function StrengthPage() {
  return (
    <div className="space-y-4">
      <div className="card"><h2 className="font-semibold">Strength Templates</h2><p className="text-sm">Templates: Upper/Lower A-B, Full Body. Log sets/reps/weight + RPE/RIR.</p></div>
      {strengthSessions.map((s) => (
        <div key={s.id} className="card text-sm">
          <p className="font-medium">{s.templateName} · {s.date.toISOString().slice(0, 10)}</p>
          {s.sets.map((set) => <p key={set.id}>{set.exercise.name} Set {set.setNumber}: {set.reps} reps @ {set.weight}kg (RPE {set.rpe} / RIR {set.rir})</p>)}
        </div>
      ))}
    </div>
  );
}
