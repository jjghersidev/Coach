'use client';

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { week: 'W1', weight: 80, volume: 20, adherence: 72, recovery: 60 },
  { week: 'W2', weight: 79.7, volume: 25, adherence: 78, recovery: 68 },
  { week: 'W3', weight: 79.3, volume: 29, adherence: 81, recovery: 62 },
  { week: 'W4', weight: 79.1, volume: 31, adherence: 84, recovery: 70 }
];

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="font-semibold">KPIs & Trends</h2>
        <p className="text-sm">Weight, running volume, adherence, recovery readiness.</p>
      </div>
      <div className="card h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="week" /><YAxis /><Tooltip />
            <Line dataKey="weight" stroke="#10b981" />
            <Line dataKey="volume" stroke="#60a5fa" />
            <Line dataKey="adherence" stroke="#f59e0b" />
            <Line dataKey="recovery" stroke="#a78bfa" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
