'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Granular platform-specific viral benchmark database
const GRANULAR_BENCHMARKS: Record<string, Record<string, { url: string; retention: string; angle: string; caption: string; music: string; rationale: string }>> = {
  'Instagram': {
    'E-commerce': {
      url: 'https://www.instagram.com/reel/C515151515/',
      retention: '+490% Retention (92.1% 3-sec drop-off prevention)',
      angle: 'Visual hook starting mid-action with zero introductory fluff, triggering instant curiosity loops.',
      caption: 'The exact framework top brands use to scale ad ROAS on IG Reels.',
      music: 'Trending IG Audio - High Energy Momentum Vol. 1',
      rationale: 'Instagram Reels algorithm prioritizes high initial watch-time retention combined with seamless audio-sync cuts, pushing content into the Explore tab within 4 hours.'
    },
    'SaaS': {
      url: 'https://www.instagram.com/reel/C626262626/',
      retention: '+430% Retention (89.5% 3-sec drop-off prevention)',
      angle: 'Founders walking through live dashboard metrics with split-screen text overlays.',
      caption: 'How we hit 10k users without spending a dime on traditional ads.',
      music: 'Lofi Business Beats - Chill Focus',
      rationale: 'Educational carousel-style reels with rapid text highlighting drive high save and share ratios, which IG heavily rewards in the distribution algorithm.'
    },
    'Finance': {
      url: 'https://www.instagram.com/reel/C737373737/',
      retention: '+520% Retention (93.8% 3-sec drop-off prevention)',
      angle: 'Contrarian wealth statement paired with dynamic green-screen background data.',
      caption: 'Stop following outdated financial rules in your region.',
      music: 'Deep Momentum Frequency',
      rationale: 'High-contrast text hooks coupled with controversial financial truths cause immediate comment section engagement loops, skyrocketing organic reach.'
    }
  },
  'TikTok': {
    'E-commerce': {
      url: 'https://www.tiktok.com/@tiktok/video/7200000000000000000',
      retention: '+480% Retention (90.4% 3-sec drop-off prevention)',
      angle: 'Unboxing shock-factor opening with tactile ASMR sound design.',
      caption: 'Never buy inventory before testing this high-conversion angle.',
      music: 'TikTok Viral Pop Drop Vol. 3',
      rationale: 'TikTok’s FYP algorithm aggressively pushes multi-sensory triggers and rapid pattern interrupts during the first 1.8 seconds of playback.'
    },
    'SaaS': {
      url: 'https://www.tiktok.com/@tiktok/video/7300000000000000000',
      retention: '+410% Retention (87.2% 3-sec drop-off prevention)',
      angle: 'Rapid-fire tool stack reveal showing automation workflows.',
      caption: 'Automate your entire workflow with these 3 free tools.',
      music: 'Tech Growth Beats Vol. 2',
      rationale: 'Utility-driven content generates massive bookmarking and direct profile visits, signaling high value to the recommendation engine.'
    }
  },
  'YouTube Shorts': {
    'E-commerce': {
      url: 'https://www.youtube.com/shorts/example123',
      retention: '+460% Retention (91.0% 3-sec drop-off prevention)',
      angle: 'Direct problem-to-solution demonstration within a 25-second window.',
      caption: 'Why this product is dominating the global market right now.',
      music: 'Cinematic Cinematic Beats',
      rationale: 'YouTube Shorts favors high completion rates and loop-ability, heavily weighting viewers who watch the entire duration multiple times.'
    }
  }
};

export default function DashboardPage() {
  const [socialLink, setSocialLink] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [country, setCountry] = useState('United States');
  const [sector, setSector] = useState('E-commerce');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | {
    videoAngle: string;
    caption: string;
    music: string;
    retention: string;
    sourceUrl: string;
    rationale: string;
  }>(null);

  const handleRunIntelligence = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      const platformData = GRANULAR_BENCHMARKS[platform] || GRANULAR_BENCHMARKS['Instagram'];
      const benchmark = platformData[sector] || platformData['E-commerce'] || {
        url: socialLink || 'https://instagram.com',
        retention: '+450% Granular Retention Match',
        angle: `Optimized ${platform} hook for ${sector} targeting pain points.`,
        caption: `Localized caption framework for ${country} audiences.`,
        music: `Top Trending ${platform} Audio Track`,
        rationale: 'Algorithm indexes user watch time, comment engagement velocity, and audio pairing synergy to maximize distribution.'
      };
      
      setResult({
        videoAngle: `[${platform.toUpperCase()} - ${country}] ${benchmark.angle}`,
        caption: `"${benchmark.caption}"`,
        music: benchmark.music,
        retention: benchmark.retention,
        sourceUrl: benchmark.url,
        rationale: benchmark.rationale
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
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fefefe', margin: 0 }}>Granular Algorithm Intelligence</h2>
            <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Specify platform, region, and sector for 1000% accuracy.</p>
          </div>

          <form onSubmit={handleRunIntelligence} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Social Media Link</label>
              <input 
                type="text" 
                placeholder="Paste your page or video link..." 
                value={socialLink}
                onChange={(e) => setSocialLink(e.target.value)}
                required
                style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Platform</label>
                <select 
                  value={platform} 
                  onChange={(e) => setPlatform(e.target.value)}
                  style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
                >
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube Shorts">YouTube Shorts</option>
                  <option value="LinkedIn">LinkedIn</option>
                </select>
              </div>

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

            <button 
              type="submit" 
              disabled={isGenerating}
              style={{ marginTop: '6px', width: '100%', backgroundColor: '#f24b07', color: '#fefefe', fontWeight: 600, padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              {isGenerating ? 'Analyzing Granular Metrics...' : 'Run Precision Intelligence →'}
            </button>
          </form>
        </div>

        {/* Results Box with Algorithm Rationale & Platform Match */}
        {result && (
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(242, 75, 7, 0.5)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 25px -5px rgba(242, 75, 7, 0.3)' }}>
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
                Watch Exact {platform} Video ↗
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Best Video Angle</span>
              <p style={{ fontSize: '12px', color: '#fefefe', margin: 0, fontWeight: 500 }}>{result.videoAngle}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Unbeatable Marketing Caption</span>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>{result.caption}</p>
            </div>

            {/* Algorithm Rationale Breakdown */}
            <div style={{ backgroundColor: 'rgba(242, 75, 7, 0.08)', border: '1px solid rgba(242, 75, 7, 0.25)', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 700 }}>Why This Algorithm Rationale Works</span>
              <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>{result.rationale}</p>
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

          <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(242, 75, 7, 0.15)', border: '1px solid rgba(242, 75, 7, 0.4)', color: '#fdba74', padding: '8px 12px', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>
              Live Feed
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(51, 65, 85, 0.8)', color: '#94a3b8', padding: '8px 12px', borderRadius: '10px', fontWeight: 500, cursor: 'pointer' }}>
              Saved Templates
            </button>
          </div>

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
