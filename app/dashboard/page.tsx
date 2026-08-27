'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [socialLink, setSocialLink] = useState('');
  const [country, setCountry] = useState('United States');
  const [sector, setSector] = useState('E-commerce');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | {
    videoAngle: string;
    caption: string;
    music: string;
    retention: string;
    sourceUrl: string;
  }>(null);

  const handleRunIntelligence = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      setResult({
        videoAngle: `High-retention ${sector} pattern interrupt focusing on consumer pain points.`,
        caption: `Stop scrolling if you want to scale in ${country}. Here is the exact framework...`,
        music: `Trending Audio - ${sector} Momentum Vol. 2`,
        retention: '+412% Surging Retention',
        sourceUrl: socialLink || 'https://tiktok.com'
      });
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#090D16', color: '#fefefe', minHeight: '100vh', padding: '24px', maxWidth: '420px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Top Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid rgba(51, 65, 85, 0.6)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(51, 65, 85, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none' }}>
            ←
          </Link>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f24b07', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fefefe', fontSize: '12px', boxShadow: '0 4px 12px rgba(242, 75, 7, 0.3)' }}>
            GV
          </div>
          <div>
            <h1 style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '-0.01em', margin: 0 }}>Goviral Engine</h1>
            <p style={{ fontSize: '10px', color: '#f24b07', margin: 0, fontWeight: 500 }}>Pro Workspace</p>
          </div>
        </div>
        <div style={{ background: 'rgba(242, 75, 7, 0.1)', border: '1px solid rgba(242, 75, 7, 0.25)', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', color: '#fdba74', fontWeight: 500 }}>
          3 Free Uses Left
        </div>
      </header>

      {/* Main Container */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Master Rule Banner */}
        <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(242, 75, 7, 0.3)', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(12px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07' }}>The Master Rule</span>
          </div>
          <p style={{ fontSize: '13px', fontWeight: 500, fontStyle: 'italic', color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>
            &ldquo;Content is King and Distribution is Queen. Build Your Viral.&rdquo;
          </p>
        </div>

        {/* Algorithm Intelligence Input Form */}
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fefefe', margin: 0 }}>Algorithm Intelligence</h2>
            <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Analyze top performers by target market and link.</p>
          </div>

          <form onSubmit={handleRunIntelligence} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Social Media Link</label>
              <input 
                type="text" 
                placeholder="https://tiktok.com/@creator/video/..." 
                value={socialLink}
                onChange={(e) => setSocialLink(e.target.value)}
                required
                style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Country</label>
                <select 
                  value={country} 
                  onChange={(e) => setCountry(e.target.value)}
                  style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Kenya">Kenya</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Sector</label>
                <select 
                  value={sector} 
                  onChange={(e) => setSector(e.target.value)}
                  style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
                >
                  <option value="E-commerce">E-commerce</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Finance">Finance</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Creator Economy">Creator Economy</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isGenerating}
              style={{ marginTop: '6px', width: '100%', backgroundColor: '#f24b07', color: '#fefefe', fontWeight: 600, padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              {isGenerating ? 'Running Algorithm Engine...' : 'Run Algorithm Intelligence →'}
            </button>
          </form>
        </div>

        {/* Results Box with Video Output Link */}
        {result && (
          <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(242, 75, 7, 0.4)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 25px -5px rgba(242, 75, 7, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
              <span style={{ color: '#34d399', fontWeight: 600, backgroundColor: 'rgba(52, 211, 153, 0.1)', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                {result.retention}
              </span>
              <a 
                href={result.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#fdba74', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Watch Best Performing Video ↗
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Best Video Angle</span>
              <p style={{ fontSize: '12px', color: '#fefefe', margin: 0, fontWeight: 500 }}>{result.videoAngle}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Unbeatable Marketing Caption</span>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>&ldquo;{result.caption}&rdquo;</p>
            </div>

            <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(51, 65, 85, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#cbd5e1' }}>
                <span style={{ color: '#f24b07', fontWeight: 700 }}>♫</span>
                <span>{result.music}</span>
              </div>
              <button style={{ fontSize: '10px', color: '#fefefe', backgroundColor: '#f24b07', fontWeight: 600, padding: '4px 8px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                Pair
              </button>
            </div>
          </div>
        )}

        {/* Active Market Trends Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.01em', color: '#fefefe', margin: 0 }}>
              Active Market Trends
            </h2>
          </div>

          {/* Action Tabs */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(242, 75, 7, 0.15)', border: '1px solid rgba(242, 75, 7, 0.4)', color: '#fdba74', padding: '8px 12px', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>
              Live Feed
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(51, 65, 85, 0.8)', color: '#94a3b8', padding: '8px 12px', borderRadius: '10px', fontWeight: 500, cursor: 'pointer' }}>
              Saved Templates
            </button>
          </div>

          {/* Trend Card */}
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(12px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
              <span style={{ color: '#34d399', fontWeight: 600, backgroundColor: 'rgba(52, 211, 153, 0.1)', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                +340% Surging Retention
              </span>
              <span style={{ color: '#94a3b8', fontFamily: 'monospace' }}>84.2% (3-sec)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Unbeatable Marketing</span>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#fefefe', margin: 0, lineHeight: 1.4 }}>
                &ldquo;Never buy inventory before testing this high-conversion angle...&rdquo;
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', borderRadius: '12px', padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(51, 65, 85, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                <span style={{ color: '#f24b07', fontWeight: 700 }}>♫</span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px', fontSize: '11px' }}>Viral Momentum Audio Vol. 4</span>
              </div>
              <button style={{ fontSize: '11px', color: '#fefefe', backgroundColor: '#f24b07', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                Pair →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
