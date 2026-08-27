// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HookItem {
  id: string;
  niche: string;
  hookText: string;
  shengContext: string;
  retention: string;
  velocity: string;
  audioName: string;
}

const liveHooks: HookItem[] = [
  {
    id: '1',
    niche: 'ecommerce',
    hookText: '"Usiwahi nunua stock kabla hujaangalia hii trick ya Nairobi soko..."',
    shengContext: 'High FOMO / Local wholesale secret angle',
    retention: '84.2% (3-sec)',
    velocity: '+340% Surging',
    audioName: 'Gen Z Nairobi Amapiano Mix Vol. 4',
  },
  {
    id: '2',
    niche: 'creator',
    hookText: '"Watu wa CBD wamezoea hii, lakini ukweli ndio huu..."',
    shengContext: 'Provocative local narrative hook',
    retention: '79.8% (3-sec)',
    velocity: '+210% Trending',
    audioName: 'Matatu Culture Bassline (Viral)',
  },
  {
    id: '3',
    niche: 'services',
    hookText: '"Kazi Nairobi inataka akili, sio nguvu. Angalia hapa..."',
    shengContext: 'Value shortcut & operational ease',
    retention: '88.1% (3-sec)',
    velocity: '+415% Explosive',
    audioName: 'Nairobi Corporate Chill Beats',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');
  const [usesLeft, setUsesLeft] = useState<number>(3);

  return (
    <div className="flex flex-col justify-between p-5 h-full flex-grow pb-12">
      <div>
        {/* Header Branding */}
        <div className="flex items-center justify-between pt-4 mb-6">
          <div>
            <div className="text-[10px] tracking-widest text-rose-500 font-bold uppercase">GoViral Engine v2.4</div>
            <h1 className="text-xl font-black text-white tracking-tight">Active Kenyan Trends</h1>
          </div>
          <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            {usesLeft} Free Uses Left
          </div>
        </div>

        {/* Tagline Banner representing Brand Philosophy */}
        <div className="bg-gradient-to-r from-rose-950/40 via-purple-950/40 to-slate-900 p-4 rounded-2xl border border-rose-500/20 mb-6 shadow-lg">
          <p className="text-xs text-rose-300 font-semibold mb-1">👑 THE MASTER RULE</p>
          <p className="text-sm font-bold text-white italic">&quot;Content is King and Distribution is Queen. Build Your Viral.&quot;</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex gap-2 mb-6">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeTab === 'all' ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
          >
            🔥 Live Nairobi Feed
          </button>
          <button 
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeTab === 'saved' ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
          >
            ⭐ Saved Templates
          </button>
        </div>

        {/* Hook Feed Cards */}
        <div className="space-y-4">
          {liveHooks.map((hook) => (
            <div key={hook.id} className="bg-slate-900/90 border border-slate-800/80 hover:border-rose-500/50 p-4 rounded-2xl transition-all shadow-xl group">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-400 font-mono text-[10px] font-semibold border border-rose-500/20">
                  {hook.velocity}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Retention: <strong className="text-emerald-400">{hook.retention}</strong></span>
              </div>
              
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-rose-200 transition-colors">
                {hook.hookText}
              </h3>

              <div className="text-xs text-slate-400 mb-3 flex items-center gap-1 bg-slate-950/50 p-2 rounded-lg border border-slate-800/50">
                <span className="text-purple-400 font-semibold">🎵 Audio:</span> {hook.audioName}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-500 font-medium">{hook.shengContext}</span>
                <Link
                  href={`/studio?hookId=${hook.id}`}
                  onClick={() => setUsesLeft(Math.max(0, usesLeft - 1))}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg shadow transition-all flex items-center gap-1 active:scale-95"
                >
                  <span>Pair Template</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Banner Prompt for M-Pesa Integration */}
      <div className="mt-8 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-white">Unlock Unlimited Engine</div>
            <div className="text-[11px] text-slate-400">KES 800/mo via Lipa na M-Pesa</div>
          </div>
          <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition-all">
            STK Push
          </button>
        </div>
      </div>
    </div>
  );
}
