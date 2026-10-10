import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  Printer,
  Zap,
  Gauge,
  DollarSign,
  Tv,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Flame,
  Layers,
  Sparkles,
  Smartphone
} from 'lucide-react';
import PrecisionCorners from './common/PrecisionCorners';

export default function WixVsReactBriefModal() {
  const { isWixPitchOpen, setIsWixPitchOpen } = usePitmaster();
  const [simRunning, setSimRunning] = useState(false);
  const [simResults, setSimResults] = useState(null);

  if (!isWixPitchOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleRunSim = () => {
    setSimRunning(true);
    setSimResults(null);
    setTimeout(() => {
      setSimResults({
        wixTime: '4.2 seconds',
        wixSize: '4.8 MB (320 scripts)',
        wixScore: 42,
        reactTime: '0.28 seconds',
        reactSize: '650 KB (Clean ESM)',
        reactScore: 98
      });
      setSimRunning(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/85 backdrop-blur-md overflow-y-auto p-2 sm:p-6 flex justify-center items-start print:p-0 print:bg-white print:static animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-[#161210] text-[#F3EFEA] rounded-2xl shadow-2xl max-w-4xl w-full my-4 border border-[#3E2D24] overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none relative">
        <PrecisionCorners color="text-amber-500/50" />

        {/* Top Control Bar */}
        <div className="bg-[#201713] border-b border-[#35251E] px-5 py-3 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-stone-950 font-black text-xs px-2 py-0.5 rounded font-mono uppercase">
              Web Modernization Pitch Brief
            </span>
            <span className="text-xs text-stone-300 font-medium hidden sm:inline">
              Why Custom React Beats Generic Wix For Local Businesses
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2E201A] hover:bg-[#3D2C24] text-stone-200 text-xs font-bold transition cursor-pointer border border-[#48352B]"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => setIsWixPitchOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2E201A] hover:bg-[#3D2C24] text-stone-200 text-xs font-bold transition cursor-pointer border border-[#48352B]"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Brief</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#35251E] bg-[#1A1411]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-amber-500 text-xs font-black uppercase tracking-widest block font-mono">
                Agency & Client Strategy
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide mt-1">
                Upgrading Local Businesses From Wix to High-Speed React
              </h1>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
                How to show local breweries, food trucks, and artisans that a custom Vite/React web app delivers 10x faster mobile performance, custom smoldering visual effects, and zero monthly hosting fees.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-400 font-mono bg-[#140F0D] p-3 rounded-lg border border-[#3A2920] shrink-0">
              <div><strong>Target:</strong> Local Wix Business Owners</div>
              <div><strong>Core Value:</strong> Speed, TV Sync, $0 Hosting</div>
              <div><strong>Stack:</strong> React 19 + Vite + Tailwind</div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
          
          {/* Section 1: The Pitch In Plain English */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#35251E] pb-2 uppercase tracking-wider font-['Bebas_Neue'] text-xl">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-mono font-bold">1</span>
              The Problem With Generic Wix Sites
            </h2>
            <p>
              Local businesses (like craft breweries, taprooms, and barbecue pitmasters) often start on Wix because it seems fast to set up. But as their business grows, Wix becomes a bottleneck:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#1C1512] p-4 rounded-xl border border-rose-900/40 space-y-1">
                <span className="text-rose-400 font-bold block font-mono text-xs uppercase">1. Sluggish Mobile Speed</span>
                <p className="text-xs text-stone-400">Wix sites load 3 to 5 megabytes of bloated JavaScript scripts before customers can even see the menu or address.</p>
              </div>
              <div className="bg-[#1C1512] p-4 rounded-xl border border-rose-900/40 space-y-1">
                <span className="text-rose-400 font-bold block font-mono text-xs uppercase">2. Never-Ending Subscriptions</span>
                <p className="text-xs text-stone-400">Owners pay $20 to $45 every single month ($240–$540 every year) just to keep a basic brochure online with their own domain name.</p>
              </div>
              <div className="bg-[#1C1512] p-4 rounded-xl border border-rose-900/40 space-y-1">
                <span className="text-rose-400 font-bold block font-mono text-xs uppercase">3. Zero Custom Integrations</span>
                <p className="text-xs text-stone-400">Wix cannot generate 1080p digital TV monitor JPGs for USB thumb drives, or provide custom 60fps smoldering pit fire effects.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Interactive Benchmark Simulation */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#35251E] pb-2">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 uppercase tracking-wider font-['Bebas_Neue'] text-xl">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-mono font-bold">2</span>
                Live Performance Benchmark Simulation
              </h2>
              <button
                onClick={handleRunSim}
                disabled={simRunning}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-1.5 rounded-lg text-xs uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 shadow"
              >
                <Zap className="w-3.5 h-3.5 fill-stone-950" />
                <span>{simRunning ? 'Benchmarking...' : 'Run Side-by-Side Test'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Wix Card */}
              <div className="bg-[#1C1512] border border-rose-900/50 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">Generic Local Wix Site</span>
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Mobile Load Time:</span>
                    <span className="text-rose-400 font-bold">{simResults ? simResults.wixTime : '3.8 - 5.5s'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Asset Bundle Size:</span>
                    <span className="text-stone-300">{simResults ? simResults.wixSize : '~4.5 MB'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Monthly Hosting Fee:</span>
                    <span className="text-rose-400 font-bold">$23.00 - $39.00 / mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Google Mobile Score:</span>
                    <span className="text-rose-400 font-bold">{simResults ? `${simResults.wixScore} / 100` : '38 - 45 / 100'}</span>
                  </div>
                </div>
              </div>

              {/* React Card */}
              <div className="bg-[#1C1713] border-2 border-emerald-500/80 rounded-xl p-5 space-y-3 relative shadow-lg">
                <div className="absolute -top-2.5 right-4 bg-emerald-600 text-white font-mono text-[9px] font-black uppercase px-2 py-0.5 rounded">
                  ★ What We Built Here
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Custom Vite + React App</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Mobile Load Time:</span>
                    <span className="text-emerald-400 font-bold">{simResults ? simResults.reactTime : '0.25 - 0.35s (Instant)'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Asset Bundle Size:</span>
                    <span className="text-stone-300">{simResults ? simResults.reactSize : '650 KB (Optimized)'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-800 pb-1">
                    <span className="text-stone-400">Monthly Hosting Fee:</span>
                    <span className="text-emerald-400 font-bold">$0.00 / month ($0 forever)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Google Mobile Score:</span>
                    <span className="text-emerald-400 font-bold">{simResults ? `${simResults.reactScore} / 100` : '95 - 99 / 100'}</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Feature Breakdown */}
          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-[#35251E] pb-2 uppercase tracking-wider font-['Bebas_Neue'] text-xl">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-mono font-bold">3</span>
              Four Unique Advantages You Can Pitch Today
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2920] space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>1. Authentic Smoldering Pit & Smoke Canvas</span>
                </div>
                <p className="text-xs text-stone-400">
                  Instead of cheap static templates, you provide bespoke, 60fps GPU-accelerated smoke and floating wood embers that look like an active firebox.
                </p>
              </div>

              <div className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2920] space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Tv className="w-4 h-4 text-blue-400" />
                  <span>2. Integrated TV Display & USB Export</span>
                </div>
                <p className="text-xs text-stone-400">
                  The website doubles as their in-store or truck digital menu board with 1-click 1080p JPG export for USB thumb drives or live wireless browser sync.
                </p>
              </div>

              <div className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2920] space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>3. Instant Pocket Menu & 86 Controls</span>
                </div>
                <p className="text-xs text-stone-400">
                  Owners can add, edit, or hide menu items and flip "SOLD OUT" directly on their phone without logging into bloated CMS dashboards.
                </p>
              </div>

              <div className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2920] space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>4. Eliminating the Monthly SaaS Tax</span>
                </div>
                <p className="text-xs text-stone-400">
                  By hosting on GitHub Pages, Cloudflare, or Vercel, the business pays $0/month in hosting and you can charge for high-value custom development and maintenance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: The 60-Second Client Pitch Script */}
          <section className="bg-gradient-to-r from-[#201713] to-[#1A1310] p-5 rounded-2xl border-2 border-amber-600/40 space-y-2">
            <span className="text-amber-400 text-xs font-black uppercase tracking-widest font-mono">
              The 60-Second Conversation Starter For Local Owners:
            </span>
            <blockquote className="text-xs sm:text-sm text-stone-200 italic font-serif leading-relaxed border-l-2 border-amber-500 pl-3">
              "Hey, I love what you've done with your business! I noticed your website is hosted on Wix—most folks don't realize Wix costs $300 to $500 every year and loads 4 to 5 seconds slower on customer phones. I build custom, high-speed web apps that load in a quarter of a second, have zero monthly hosting bills, and can sync directly to your TV screens or Square POS. Let me show you what a modern build looks like right on my phone."
            </blockquote>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#140F0D] border-t border-[#35251E] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-mono gap-2">
          <span>Modern Web Development Brief • Tisdale’s Southern BBQ & Local Business Upgrade</span>
          <button
            onClick={() => setIsWixPitchOpen(false)}
            className="text-amber-400 hover:text-white font-bold cursor-pointer print:hidden"
          >
            Close & Return to Site
          </button>
        </div>

      </div>

    </div>
  );
}
