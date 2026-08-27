// app/onboarding/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const niches = [
  { id: 'ecommerce', title: 'E-Commerce & Retail', subtitle: 'Selling physical products online' },
  { id: 'creator', title: 'Personal Brand & Creator', subtitle: 'Building authority & audience' },
  { id: 'services', title: 'Professional Services', subtitle: 'Agencies, consultants, & coaches' },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;
    // Save state or proceed to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col justify-between p-6 h-full flex-grow">
      <div className="pt-6">
        <div className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-2">Step 1 of 2</div>
        <h2 className="text-2xl font-bold text-white mb-2">How do you operate?</h2>
        <p className="text-slate-400 text-sm mb-6">
          Select your primary identity to calibrate the algorithm tracer for your exact niche.
        </p>

        {/* Niche Options */}
        <div className="space-y-3">
          {niches.map((niche) => (
            <div
              key={niche.id}
              onClick={() => setSelected(niche.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selected === niche.id
                  ? 'bg-rose-500/10 border-rose-500 text-white'
                  : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="font-semibold text-sm">{niche.title}</div>
              <div className="text-xs text-slate-400 mt-0.5">{niche.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-6 pt-4">
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-4 rounded-xl font-semibold transition-all ${
            selected
              ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 active:scale-95'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Initialize Dashboard Feed
        </button>
      </div>
    </div>
  );
}
