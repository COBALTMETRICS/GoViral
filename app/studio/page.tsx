// app/studio/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const ugcTemplates = [
  { id: 't1', name: 'Nairobi Street Hustle B-Roll', type: 'Vertical 9:16 Video Overlay', duration: '7s Loop', file: 'nairobi_street_bg.mp4' },
  { id: 't2', name: 'Local Reaction & Shock Face', type: 'Human Emotion Asset', duration: '5s Loop', file: 'reaction_ke.mp4' },
  { id: 't3', name: 'CBD Commerce Close-up', type: 'Product Proof Loop', duration: '9s Loop', file: 'unboxing_kenya.mp4' }
];

export default function StudioPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(ugcTemplates[0].id);
  const [customText, setCustomText] = useState('Usiwahi nunua stock kabla hujaangalia hii!');
  const [isExported, setIsExported] = useState(false);

  const handleExport = () => {
    setIsExported(true);
    setTimeout(() => setIsExported(false), 4000);
  };

  return (
    <div className="flex flex-col justify-between p-5 h-full flex-grow pb-10">
      <div>
        {/* Navigation back */}
        <div className="flex items-center justify-between pt-4 mb-4">
          <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Feed
          </Link>
          <div className="text-[10px] text-rose-400 font-mono font-bold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
            UGC Studio Active
          </div>
        </div>

        <h1 className="text-xl font-black text-white mb-1">One-Tap Asset Pairing</h1>
        <p className="text-slate-400 text-xs mb-6">Select a pre-tested human reaction template, inject your hook text, and deploy.</p>

        {/* Interactive Template Preview Box */}
        <div className="relative w-full h-52 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden mb-6 flex flex-col items-center justify-center p-4 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/40 z-10 pointer-events-none"></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-30 bg-cover bg-center">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-950 to-slate-950"></div>
          </div>

          {/* Dynamic Text Overlay Preview */}
          <div className="z-20 text-center max-w-xs px-3 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-rose-500/30">
            <span className="text-[10px] text-rose-400 font-bold block uppercase mb-1">Active Hook Layer</span>
            <p className="text-sm font-extrabold text-white tracking-tight">{customText}</p>
          </div>

          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-300 font-mono">9:16 Vertical UGC Format</span>
          </div>
        </div>

        {/* Template Options Selector */}
        <div className="space-y-3 mb-6">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Choose UGC B-Roll / Reaction Asset</label>
          {ugcTemplates.map((t) => (
            <div 
              key={t.id}
              onClick={() => setSelectedTemplate(t.id)}
              className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${selectedTemplate === t.id ? 'bg-rose-500/10 border-rose-500 text-white' : 'bg-slate-900/60 border-slate-800 text-slate-400'}`}
            >
              <div>
                <div className="text-xs font-bold text-slate-200">{t.name}</div>
                <div className="text-[10px] text-slate-500">{t.type} • {t.duration}</div>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedTemplate === t.id ? 'border-rose-500 bg-rose-500 text-white' : 'border-slate-700'}`}>
                {selectedTemplate === t.id && <span className="text-[9px]">✓</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Text Editor */}
        <div className="mb-6">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">Edit Hook Overlay Text</label>
          <input 
            type="text" 
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
            placeholder="Type your hook text here..."
          />
        </div>
      </div>

      {/* Export & Conversion Action */}
      <div className="space-y-3">
        <button
          onClick={handleExport}
          className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-center text-sm"
        >
          <span>Export 9:16 Video Asset</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
        </button>

        {isExported && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center text-xs text-emerald-300 font-semibold">
            ✅ Asset compiled successfully! Ready for TikTok deployment.
          </div>
        )}
      </div>
    </div>
  );
}
