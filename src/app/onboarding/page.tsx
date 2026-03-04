export default function OnboardingPage() {
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-lg font-semibold">Onboarding Wizard</h2>
        <p className="text-sm text-slate-300">Profile, goals, and preferences are editable in Settings.</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li>Baseline profile: age, weight, height, training frequency.</li>
          <li>Goals: performance + gradual fat loss.</li>
          <li>Preferences: meal prep, repeated meals, alerts.</li>
        </ol>
      </div>
    </div>
  );
}
