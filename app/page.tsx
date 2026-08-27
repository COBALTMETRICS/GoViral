'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 max-w-md mx-auto flex flex-col justify-between">
      {/* Top Banner */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
          <Zap className="w-3.5 h-3.5 text-purple-400" /> Live Algorithm Data Active
        </div>

        {/* Hero Copy */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
            Stop Guessing What Works. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Go Viral Instantly.</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every day you post blind, you waste hours of labor. Access real-time verified hooks and plug-and-play templates tailored for high-growth creators.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-2 backdrop-blur-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trusted by operators across</p>
          <p className="text-sm font-medium text-slate-200">Top Creator & Brand Ecosystems</p>
        </div>
      </div>

      {/* Action CTA Area */}
      <div className="space-y-4 pt-6">
        <Link 
          href="/dashboard"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-purple-600/30 transition-all text-sm"
        >
          <span>Track Current Trends Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Instant access • No credit card required
        </div>
      </div>
    </div>
  );
}
