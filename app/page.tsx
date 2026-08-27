'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col justify-between p-6 max-w-md mx-auto font-sans">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20 text-xs">
            GV
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">GoViral</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/80 px-3 py-1 rounded-full text-xs text-purple-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Engine v2.4
        </div>
      </nav>

      {/* Hero Content Section */}
      <div className="space-y-6 my-auto py-8">
        <div className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-purple-400" /> Real-Time Algorithm Sync
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Go Viral Instantly.
            </span>
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Unlock verified behavioral hooks and components designed to capture attention and scale creator distribution effortlessly.
          </p>
        </div>

        {/* Feature Preview Card */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-3 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/60">
            <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-purple-400" /> Curated Vault</span>
            <span className="text-purple-400 font-mono">100% Verified</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/40">
              <span className="text-slate-200 font-medium">High-Retention Hooks</span>
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+340% Avg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="space-y-4 pt-4">
        <Link 
          href="/dashboard"
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-white/5 transition-all text-sm group"
        >
          <span>Launch App Experience</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Instant access • No credit card required
        </div>
      </div>
    </div>
  );
}
