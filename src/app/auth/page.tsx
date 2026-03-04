'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="card max-w-md">
      <h2 className="text-lg font-semibold">Auth</h2>
      <p className="text-sm text-slate-300">Sign in with Supabase magic link.</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="input mt-3" placeholder="Email" />
      <button
        className="mt-2 rounded bg-indigo-600 px-3 py-2"
        onClick={async () => {
          const { error } = await supabase.auth.signInWithOtp({ email });
          setMessage(error ? error.message : 'Check your email for login link');
        }}
      >
        Send magic link
      </button>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
}
