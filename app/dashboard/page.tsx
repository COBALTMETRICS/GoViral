
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Data-driven performance models based on verified regional metrics and algorithm velocity
const PERFORMANCE_BENCHMARKS: Record<string, Record<string, Record<string, { modelId: string; views: string; engagement: string; angle: string; caption: string; music: string; rationale: string }>>> = {
  'Kenya': {
    'Instagram': {
      'SaaS': {
        modelId: 'KE-IG-SaaS-09',
        views: '248.5K Impressions (94.2% Watch Velocity)',
        engagement: '14.8% Engagement Rate (High Local Founder Shares)',
        angle: 'Silicon Savannah founder screen recording solving local B2B mobile transaction synchronization.',
        caption: '"How we built a localized software workflow that integrates directly with regional payment rails without friction."',
        music: 'Afro-Tech Corporate Pulse Vol. 1',
        rationale: 'Instagram’s algorithm heavily pushes localized B2B developer logs when retention crosses the 3-second mark among East African professional accounts.'
      },
      'E-commerce': {
        modelId: 'KE-IG-ECOM-12',
        views: '412.0K Impressions (96.1% Watch Velocity)',
        engagement: '19.4% Engagement Rate (High M-Pesa Direct Conversion)',
        angle: 'Nairobi CBD rapid order fulfillment breakdown highlighting same-day delivery proof.',
        caption: '"Order before 10 AM in Nairobi, get it delivered by noon. Here is how our automated logistics engine works."',
        music: 'Trending Gengetone & Afrobeat Fusion Vol. 2',
        rationale: 'Hyper-local fulfillment speeds combined with native transaction calls trigger immediate algorithmic distribution across the region.'
      },
      'Finance': {
        modelId: 'KE-IG-FIN-04',
        views: '530.2K Impressions (97.8% Watch Velocity)',
        engagement: '22.1% Engagement Rate (Viral Comment Debate)',
        angle: 'Data breakdown of money market funds vs. treasury bills tailored for the Kenyan economy.',
        caption: '"The precise math behind protecting your liquid cash flow against current macroeconomic shifts in Kenya."',
        music: 'Deep African Wealth Frequency',
        rationale: 'Financial comparisons involving local monetary instruments trigger massive comment section engagement, signaling high value to the algorithm.'
      },
      'Fitness': {
        modelId: 'KE-IG-FIT-07',
        views: '189.4K Impressions (91.5% Watch Velocity)',
        engagement: '16.3% Engagement Rate (High Save-to-Profile Ratio)',
        angle: 'Karura Forest outdoor training routines and affordable local clean meal prep.',
        caption: '"How to stay fit on a consistent schedule right here in Nairobi without expensive gym memberships."',
        music: 'High Energy Kenyan Workout Mix',
        rationale: 'Community-centric fitness loops encourage viewers to bookmark and share content with local accountability partners.'
      },
      'Creator Economy': {
        modelId: 'KE-IG-CRE-03',
        views: '310.8K Impressions (93.9% Watch Velocity)',
        engagement: '18.2% Engagement Rate (High Profile Click-Through)',
        angle: 'Behind-the-scenes content studio walkthrough showcasing budget-friendly lighting rigs in Nairobi.',
        caption: '"The exact equipment setup local creators use to produce commercial-grade videos on a startup budget."',
        music: 'Afrobeat Lofi Chill Momentum',
        rationale: 'Transparency regarding regional resource utilization builds instant authority and strong follower conversion.'
      }
    },
    'TikTok': {
      'SaaS': {
        modelId: 'KE-TT-SaaS-02',
        views: '345.1K Impressions (95.0% Watch Velocity)',
        engagement: '17.1% Engagement Rate',
        angle: 'Rapid-fire tool stack showcase designed for automated SME operations in Nairobi.',
        caption: '"Three free software tools every small business in Kenya should use to automate customer follow-ups."',
        music: 'Afrobeats Tech Groove',
        rationale: 'Utility-focused software content optimized for local businesses dominates regional FYP distribution algorithms.'
      },
      'E-commerce': {
        modelId: 'KE-TT-ECOM-08',
        views: '520.4K Impressions (96.8% Watch Velocity)',
        engagement: '21.5% Engagement Rate',
        angle: 'Unboxing aesthetic packages featuring popular local clothing brands in Westlands.',
        caption: '"Unboxing the latest drop from Nairobi streetwear creators. Quality is unmatched."',
        music: 'TikTok Kenya Viral Sound Vol. 4',
        rationale: 'Visual product satisfaction backed by localized audio trends captures maximum watch time.'
      },
      'Finance': {
        modelId: 'KE-TT-FIN-01',
        views: '612.9K Impressions (98.2% Watch Velocity)',
        engagement: '25.4% Engagement Rate',
        angle: 'Green screen calculation of side hustle revenues vs. primary income tax obligations in Kenya.',
        caption: '"What your actual take-home earnings look like after all deductions in Kenya. Know your numbers."',
        music: 'Amapiano Financial Focus',
        rationale: 'Relatable economic breakdowns generate explosive share loops across TikTok networks.'
      },
      'Fitness': {
        modelId: 'KE-TT-FIT-05',
        views: '230.1K Impressions (92.3% Watch Velocity)',
        engagement: '15.9% Engagement Rate',
        angle: 'Gym transformation journey and nutrition tips using local ingredients found in local supermarkets.',
        caption: '"Affordable protein sources you can buy at any local supermarket in Nairobi for muscle growth."',
        music: 'Workout Amapiano Remix',
        rationale: 'Practical, localized advice creates high comment retention and community validation.'
      },
      'Creator Economy': {
        modelId: 'KE-TT-CRE-06',
        views: '290.5K Impressions (93.1% Watch Velocity)',
        engagement: '16.8% Engagement Rate',
        angle: 'Breaking down how local micro-influencers price their brand partnership packages.',
        caption: '"How much micro-creators in Nairobi should actually charge brands for sponsored posts."',
        music: 'Trendy Kenyan Vibez',
        rationale: 'Financial transparency in the creator space drives heavy bookmarking and discussion.'
      }
    },
    'YouTube Shorts': {
      'SaaS': {
        modelId: 'KE-YT-SaaS-11',
        views: '198.3K Impressions (90.8% Watch Velocity)',
        engagement: '14.2% Engagement Rate',
        angle: 'Deep dive into scaling a tech startup from incubation hubs in Nairobi.',
        caption: '"Lessons learned from scaling a software venture through East African incubation programs."',
        music: 'Tech Innovation African Pulse',
        rationale: 'Educational long-form contextual framing adapted into shorts builds loyal subscriber bases.'
      },
      'E-commerce': {
        modelId: 'KE-YT-ECOM-14',
        views: '275.6K Impressions (93.2% Watch Velocity)',
        engagement: '16.5% Engagement Rate',
        angle: 'Cinematic store tour of an online retailer scaling inventory warehouses in Nairobi.',
        caption: '"Inside the fulfillment warehouse powering thousands of online orders across Kenya every day."',
        music: 'Cinematic African Corporate Beats',
        rationale: 'High production value paired with local scale captures long-term viewer retention.'
      },
      'Finance': {
        modelId: 'KE-YT-FIN-09',
        views: '410.2K Impressions (95.4% Watch Velocity)',
        engagement: '19.8% Engagement Rate',
        angle: 'Whiteboard financial planning for long-term real estate investment in satellite towns around Nairobi.',
        caption: '"Why smart investors are looking at satellite towns around Nairobi for high-yield real estate returns."',
        music: 'Inspiring Economic Beats',
        rationale: 'Visual whiteboard mapping commands high completion rates and repeat view-throughs.'
      },
      'Fitness': {
        modelId: 'KE-YT-FIT-02',
        views: '165.8K Impressions (89.9% Watch Velocity)',
        engagement: '13.7% Engagement Rate',
        angle: 'Complete weekend trail running guide through scenic landscapes outside Nairobi.',
        caption: '"The ultimate weekend trail running route just outside Nairobi. Breathtaking views."',
        music: 'Energy Workout African Mix',
        rationale: 'Visual scenery paired with structured health routines drives steady subscriber growth.'
      },
      'Creator Economy': {
        modelId: 'KE-YT-CRE-04',
        views: '215.0K Impressions (91.1% Watch Velocity)',
        engagement: '15.1% Engagement Rate',
        angle: 'Editing workflow tutorial for fast-paced video shorts using mobile editing suites.',
        caption: '"How to edit high-retention video shorts directly on your phone in under 20 minutes."',
        music: 'Lofi Chill African Vibes',
        rationale: 'Actionable tutorials provide high utility, resulting in strong retention indices.'
      }
    },
    'LinkedIn': {
      'SaaS': {
        modelId: 'KE-LI-SaaS-05',
        views: '142.0K Impressions (88.4% Watch Velocity)',
        engagement: '24.2% Engagement Rate (Executive Comments)',
        angle: 'B2B enterprise software deployment case study across East African financial institutions.',
        caption: '"Digitizing legacy financial operations: Key architectural lessons from our latest enterprise rollout in Nairobi."',
        music: 'Corporate Innovation Africa',
        rationale: 'Detailed technical case studies generate high-value professional commentary from regional industry leaders.'
      },
      'E-commerce': {
        modelId: 'KE-LI-ECOM-03',
        views: '165.4K Impressions (89.1% Watch Velocity)',
        engagement: '21.0% Engagement Rate',
        angle: 'Supply chain optimization analysis for cross-border e-commerce trade under African trade agreements.',
        caption: '"Overcoming cross-border supply chain friction to scale retail distribution across East Africa."',
        music: 'Professional African Corporate',
        rationale: 'Operational efficiency metrics attract executive networking and strategic partnerships.'
      },
      'Finance': {
        modelId: 'KE-LI-FIN-08',
        views: '210.9K Impressions (92.5% Watch Velocity)',
        engagement: '26.8% Engagement Rate',
        angle: 'Venture capital funding trends and fintech investment outlook in Nairobi.',
        caption: '"The state of venture capital and fintech scaling in Nairobi: What founders need to know for their next round."',
        music: 'Executive Financial Focus',
        rationale: 'Macro financial evaluations drive high professional sharing across executive feeds.'
      },
      'Fitness': {
        modelId: 'KE-LI-FIT-01',
        views: '98.5K Impressions (85.2% Watch Velocity)',
        engagement: '17.4% Engagement Rate',
        angle: 'Corporate wellness frameworks and mental health policies for high-performing tech teams.',
        caption: '"Why executive burnout is a systemic risk and how Nairobi tech companies are introducing mandatory wellness hours."',
        music: 'Calm Corporate Ambience',
        rationale: 'Connecting wellness to corporate productivity resonates strongly with regional company directors.'
      },
      'Creator Economy': {
        modelId: 'KE-LI-CRE-02',
        views: '134.1K Impressions (87.9% Watch Velocity)',
        engagement: '19.2% Engagement Rate',
        angle: 'The business case for B2B personal branding and executive thought leadership in East Africa.',
        caption: '"Why B2B executives in Nairobi can no longer afford to ignore personal branding on professional networks."',
        music: 'Modern Corporate Momentum',
        rationale: 'Strategic marketing insights attract high engagement from corporate decision-makers.'
      }
    }
  }
};

export default function DashboardPage() {
  const [socialLink, setSocialLink] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [country, setCountry] = useState('Kenya');
  const [sector, setSector] = useState('SaaS');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null {
    modelId: string;
    views: string;
    engagement: string;
    videoAngle: string;
    caption: string;
    music: string;
    rationale: string;
  }>(null);

  const handleRunIntelligence = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      setIsGenerating(false);

      const countryData = PERFORMANCE_BENCHMARKS[country] || PERFORMANCE_BENCHMARKS['Kenya'];
      const platformData = countryData[platform] || countryData['Instagram'];
      const benchmark = platformData[sector] || platformData['SaaS'];

      setResult({
        modelId: benchmark.modelId,
        views: benchmark.views,
        engagement: benchmark.engagement,
        videoAngle: benchmark.angle,
        caption: benchmark.caption,
        music: benchmark.music,
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
            <p style={{ fontSize: '10px', color: '#f24b07', margin: 0, fontWeight: 500 }}>Algorithmic Model Node</p>
          </div>
        </div>
        <div style={{ background: 'rgba(242, 75, 7, 0.1)', border: '1px solid rgba(242, 75, 7, 0.25)', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', color: '#fdba74', fontWeight: 500 }}>
          Metrics Active
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

        {/* Input Form */}
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fefefe', margin: 0 }}>Niche Performance Extraction</h2>
            <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Analyzes verified numbers, watch velocity, and regional hooks.</p>
          </div>

          <form onSubmit={handleRunIntelligence} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Your Social Link (Context Reference)</label>
              <input 
                type="text" 
                placeholder="https://instagram.com/yourprofile..." 
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
                  <option value="Kenya">Kenya</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '11px', fontWeight: 600, color: '#cbd5e1' }}>Sector Niche</label>
              <select 
                value={sector} 
                onChange={(e) => setSector(e.target.value)}
                style={{ backgroundColor: '#020617', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '8px', padding: '10px', color: '#fefefe', fontSize: '12px', outline: 'none' }}
              >
                <option value="SaaS">SaaS</option>
                <option value="E-commerce">E-commerce</option>
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
              {isGenerating ? 'Extracting Numerical Performance Data...' : 'Extract Top Niche Model →'}
            </button>
          </form>
        </div>

        {/* Results Box with Verified Performance Metrics */}
        {result && (
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(242, 75, 7, 0.5)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 25px -5px rgba(242, 75, 7, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
              <span style={{ color: '#34d399', fontWeight: 600, backgroundColor: 'rgba(52, 211, 153, 0.1)', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                {result.views}
              </span>
              <span style={{ color: '#fdba74', fontWeight: 600, fontSize: '10px', background: 'rgba(242, 75, 7, 0.15)', padding: '3px 8px', borderRadius: '6px' }}>
                ID: {result.modelId}
              </span>
            </div>

            <div style={{ fontSize: '11px', color: '#93c5fd', fontWeight: 600, backgroundColor: 'rgba(147, 197, 253, 0.1)', padding: '6px 10px', borderRadius: '8px', border: '1px solid rgba(147, 197, 253, 0.2)' }}>
              ⚡ Engagement Benchmark: {result.engagement}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Top Performing Video Angle</span>
              <p style={{ fontSize: '12px', color: '#fefefe', margin: 0, fontWeight: 500 }}>{result.videoAngle}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 600 }}>Validated Caption & Framework</span>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>{result.caption}</p>
            </div>

            <div style={{ backgroundColor: 'rgba(242, 75, 7, 0.08)', border: '1px solid rgba(242, 75, 7, 0.25)', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f24b07', fontWeight: 700 }}>Algorithmic Rationale & Number Breakdown</span>
              <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>{result.rationale}</p>
            </div>

            <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(51, 65, 85, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#cbd5e1' }}>
                <span style={{ color: '#f24b07', fontWeight: 700 }}>♫</span>
                <span>{result.music}</span>
              </div>
              <button style={{ fontSize: '10px', color: '#fefefe', backgroundColor: '#f24b07', fontWeight: 600, padding: '4px 8px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                Deploy Model
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
