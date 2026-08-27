'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main style={{ backgroundColor: '#090D16', color: '#fefefe', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px', maxWidth: '420px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navigation Header */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f24b07', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fefefe', fontSize: '12px', boxShadow: '0 4px 12px rgba(242, 75, 7, 0.3)' }}>
            GV
          </div>
          <span style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em' }}>Goviral</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(89, 35, 120, 0.2)', border: '1px solid rgba(89, 35, 120, 0.4)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', color: '#d8b4fe' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f24b07' }} />
          Engine v2.4
        </div>
      </nav>

      {/* Hero Content Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: 'auto 0', padding: '32px 0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(242, 75, 7, 0.1)', border: '1px solid rgba(242, 75, 7, 0.25)', color: '#fdba74', fontSize: '12px', fontWeight: 500, padding: '6px 12px', borderRadius: '9999px', width: 'fit-content' }}>
          Real-Time Algorithm Sync
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            Quit the trial. <br />
            <span style={{ color: '#f24b07' }}>
              Build the viral.
            </span>
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Unlock unbeatable marketing and components designed to capture attention and scale creator distribution effortlessly.
          </p>
        </div>

        {/* Feature Preview Card */}
        <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(51, 65, 85, 0.8)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', backdropFilter: 'blur(12px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8', paddingBottom: '8px', borderBottom: '1px solid rgba(51, 65, 85, 0.6)' }}>
            <span>Curated Vault</span>
            <span style={{ color: '#f24b07', fontFamily: 'monospace' }}>100% Verified</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderRadius: '12px', background: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(51, 65, 85, 0.4)', fontSize: '12px' }}>
            <span style={{ color: '#fefefe', fontWeight: 500 }}>High-Retention Hooks</span>
            <span style={{ color: '#f24b07', backgroundColor: 'rgba(242, 75, 7, 0.1)', padding: '2px 8px', borderRadius: '6px', border: '1px solid rgba(242, 75, 7, 0.25)' }}>+340% Avg</span>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '16px' }}>
        <Link 
          href="/dashboard"
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#f24b07', color: '#fefefe', fontWeight: 600, padding: '14px 16px', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(242, 75, 7, 0.3)', textDecoration: 'none', fontSize: '14px', boxSizing: 'border-box' }}
        >
          <span>Launch App Experience</span>
          <span>→</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
          <span>Instant access • No credit card required</span>
        </div>
      </div>
    </main>
  );
}
