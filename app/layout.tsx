import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'GoViral Engine',
  description: 'Behavioral Architecture & Viral Growth Suite',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090D16] text-slate-100 antialiased selection:bg-purple-500 selection:text-white min-h-screen">
        <div className="relative overflow-hidden">
          {/* Subtle ambient background glow matching Webflow/SaaS aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
          {children}
        </div>
      </body>
    </html>
  );
}
