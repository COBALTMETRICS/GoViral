'use client';

import React from 'react';
import { Flame, Bookmark, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 max-w-md mx-auto">
      {/* Top Header with Logo Placeholder */}
      <header className="flex items-center justify-between py-4 border-b border-slate-800 mb-6">
        <div className="flex items-center space-x-2">
          {/* Logo container */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
            GV
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wide text-white">GoViral Engine</h1>
            <p className="text-xs text-purple-400">v2.4 Pro</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs text-slate-300">
          ⚡ 3 Free Uses Left
        </div>
      </header>

      {/* Main Container */}
      <main className="space-y-6">
        {/* Master Rule Banner */}
        <div className="bg-gradient-to-r from-purple-900/40 to-slate-900 border border-purple-500/30 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-amber-400">👑</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">The Master Rule</span>
          </div>
          <p className="text-sm font-medium italic text-slate-200">
            &ldquo;Content is King and Distribution is Queen. Build Your Viral.&rdquo;
          </p>
        </div>

        {/* Active Trends Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" /> Active Kenyan Trends
            </h2>
          </div>

          {/* Action Tabs */}
          <div className="flex gap-2 text-xs">
            <button className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-lg font-medium">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Live Nairobi Feed
            </button>
            <button className="flex items-center gap-1 bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-lg font-medium hover:text-white">
              <Bookmark className="w-3.5 h-3.5 text-slate-400" /> Saved Templates
            </button>
          </div>

          {/* Trend Card */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 space-y-3 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                +340% Surging Retention
              </span>
              <span className="text-slate-400 font-mono">84.2% (3-sec)</span>
            </div>

            <p className="text-sm font-semibold text-white leading-snug">
              &ldquo;Usiwahi nunua stock kabla hujaangalia hii trick ya Nairobi soko...&rdquo;
            </p>

            <div className="bg-slate-950/60 rounded-xl p-2.5 flex items-center justify-between border border-slate-800/50">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="text-purple-400">🎵</span>
                <span className="truncate max-w-[200px]">Gen Z Nairobi Amapiano Mix Vol. 4</span>
              </div>
              <button className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-0.5">
                Pair <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
