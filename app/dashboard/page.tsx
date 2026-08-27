'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Bookmark, TrendingUp, ArrowUpRight, ChevronLeft, Sparkles } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans p-4 max-w-md mx-auto">
      {/* Top Header */}
      <header className="flex items-center justify-between py-4 border-b border-slate-800/80 mb-6">
        <div className="flex items-center space-x-2.5">
          <Link href="/" className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20 text-xs">
            GV
          </div>
          <div>
            <h1 className="font-bold text-xs tracking-wide text-white">GoViral Engine</h1>
            <p className="text-[10px] text-purple-400">Pro Workspace</p>
          </div>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-[11px] text-purple-300 font-medium">
          ⚡ 3 Free Uses Left
        </div>
      </header>

      {/* Main Container */}
      <main className="space-y-5">
        {/* Master Rule Banner */}
        <div className="bg-gradient-to-br from-purple-950/40 via-slate-900/60 to-slate-900 border border-purple-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="text-amber-400 text-xs">👑</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300">The Master Rule</span>
          </div>
          <p className="text-xs font-medium italic text-slate-300 leading-relaxed">
            &ldquo;Content is King and Distribution is Queen. Build Your Viral.&rdquo;
          </p>
        </div>

        {/* Active Trends Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-purple-400" /> Active Market Trends
            </h2>
          </div>

          {/* Action Tabs */}
          <div className="flex gap-2 text-xs">
            <button className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-xl font-medium shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Live Feed
            </button>
            <button className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-xl font-medium hover:text-white transition-colors">
              <Bookmark className="w-3.5 h-3.5 text-slate-400" /> Saved Templates
            </button>
          </div>

          {/* Trend Card */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 space-y-3.5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                +340% Surging Retention
              </span>
              <span className="text-slate-400 font-mono text-[11px]">84.2% (3-sec)</span>
            </div>

            <p className="text-xs font-semibold text-slate-100 leading-snug">
              &ldquo;Never buy inventory before testing this high-conversion angle...&rdquo;
            </p>

            <div className="bg-slate-950/60 rounded-xl p-2.5 flex items-center justify-between border border-slate-800/60">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="text-purple-400">🎵</span>
                <span className="truncate max-w-[190px] text-[11px]">Viral Momentum Audio Vol. 4</span>
              </div>
              <button className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-0.5 bg-purple-500/10 px-2 py-1 rounded-lg border border-purple-500/20">
                Pair <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
