'use client';

import { useState } from 'react';

type Recommendation = {
  focusToday: string[];
  nutritionTweak: string;
  recoveryAction: string;
  trainingNote: string;
  disclaimer: string;
};

export default function CoachPage() {
  const [question, setQuestion] = useState('How should I adjust today if sleep was low?');
  const [data, setData] = useState<Recommendation | null>(null);

  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="font-semibold">Coach Chat</h2>
        <textarea className="input mt-2" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button
          className="mt-2 rounded bg-indigo-600 px-3 py-2"
          onClick={async () => {
            const res = await fetch('/api/coach');
            const json = await res.json();
            setData(json);
          }}
        >
          Ask coach
        </button>
      </div>
      {data && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="card"><h3 className="font-medium">Focus today</h3>{data.focusToday.map((f) => <p key={f} className="text-sm">• {f}</p>)}</div>
          <div className="card"><h3 className="font-medium">Nutrition tweak</h3><p className="text-sm">{data.nutritionTweak}</p></div>
          <div className="card"><h3 className="font-medium">Recovery action</h3><p className="text-sm">{data.recoveryAction}</p></div>
          <div className="card"><h3 className="font-medium">Training note</h3><p className="text-sm">{data.trainingNote}</p></div>
          <p className="text-xs text-slate-400 md:col-span-2">{data.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
