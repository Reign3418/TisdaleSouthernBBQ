import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  Printer,
  Tv,
  Usb,
  Wifi,
  Cable,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Power,
  DollarSign,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function TvSyncWhitePage() {
  const { isTvWhitePageOpen, setIsTvWhitePageOpen, menu, specials, schedule } = usePitmaster();

  // Interactive Simulator State for Donald
  const [simMode, setSimMode] = useState('normal'); // 'normal' | 'rush86' | 'fryerOff'

  if (!isTvWhitePageOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm overflow-y-auto p-2 sm:p-6 flex justify-center items-start print:p-0 print:bg-white print:static animate-fadeIn">
      
      {/* Document Container */}
      <div className="bg-white text-stone-900 rounded-2xl shadow-2xl max-w-4xl w-full my-4 border border-stone-200 overflow-hidden print:shadow-none print:border-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-stone-900 text-stone-200 px-6 py-3 flex items-center justify-between print:hidden border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-black font-black text-xs px-2 py-0.5 rounded font-mono uppercase">
              White Paper Brief
            </span>
            <span className="text-xs text-stone-300 font-medium">
              Prepared for Donald Tisdale • Tisdale’s Southern BBQ
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition cursor-pointer border border-stone-700"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => setIsTvWhitePageOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition cursor-pointer border border-stone-700"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Brief</span>
            </button>
          </div>
        </div>

        {/* White Paper Header */}
        <div className="p-6 sm:p-10 border-b border-stone-200 bg-stone-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-amber-800 text-xs font-black uppercase tracking-widest block font-mono">
                Technology & Operations Brief
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Food Trailer TV Menu & Digital Board Options
              </h1>
              <p className="text-sm text-stone-600 mt-1">
                How to display, update, and sync Donald's barbecue menu on the truck TV monitor with little to zero equipment.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 shrink-0 font-mono bg-white p-3 rounded-lg border border-stone-200">
              <div><strong>Client:</strong> Donald Tisdale</div>
              <div><strong>Business:</strong> Tisdale’s Southern BBQ</div>
              <div><strong>Date:</strong> October 2026</div>
              <div><strong>Topic:</strong> TV Menu Display, USB & Live Web Sync</div>
            </div>
          </div>
        </div>

        {/* Document Body */}
        <div className="p-6 sm:p-10 space-y-10 text-stone-800 leading-relaxed text-sm">
          
          {/* Section 1: Executive Summary */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                1
              </span>
              Executive Summary: The Opportunity & Challenge
            </h2>
            <p className="text-stone-700">
              In Donald's food trailer, the TV screen is the primary visual centerpiece where walk-up customers see dinner plates, sandwich options, and sides. Currently, changing prices or updating sold-out meats requires either handwriting on whiteboard stickers or generating a graphic on a computer and loading it onto a USB thumb drive.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
              <h4 className="font-bold text-amber-900 text-sm">The Goal: Maximum Impact, Zero Hassle, Low/No Equipment</h4>
              <p className="text-xs text-amber-800 mt-1">
                Donald needs a solution that requires <strong>no expensive monthly digital signage subscriptions</strong> ($30–$80/mo) and lets him either <strong>(A) download a fresh 1080p image for his USB drive in 5 seconds</strong>, or <strong>(B) sync his phone directly to the TV over the air</strong> using equipment he already owns in the trailer.
              </p>
            </div>
          </section>

          {/* Section 2: Interactive Simulator */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
              <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                  2
                </span>
                Interactive Simulator: How Donald's TV Responds
              </h2>
              <span className="text-xs text-stone-500 font-mono italic">
                (Click the test buttons to see how the TV screen automatically adapts)
              </span>
            </div>

            {/* Test buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-3 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-700 font-mono">Simulate Shift Event:</span>
              <button
                onClick={() => setSimMode('normal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  simMode === 'normal'
                    ? 'bg-stone-900 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                1. Normal Shift (All Meats In Stock)
              </button>

              <button
                onClick={() => setSimMode('rush86')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  simMode === 'rush86'
                    ? 'bg-rose-700 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                2. 5:00 PM Rush (Ribs & Brisket Sold Out)
              </button>

              <button
                onClick={() => setSimMode('fryerOff')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  simMode === 'fryerOff'
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                3. 30-Min Cutoff (Fryer Grease OFF)
              </button>
            </div>

            {/* Mock TV Frame */}
            <div className="bg-[#120F0E] rounded-xl border-4 border-stone-800 p-4 sm:p-6 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-amber-600/40 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-black font-['Bebas_Neue'] text-lg">
                    T
                  </span>
                  <div>
                    <h4 className="text-lg font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none text-white">
                      Tisdale's Southern BBQ — TV Screen Preview
                    </h4>
                    <span className="text-[10px] text-amber-300 font-mono">
                      Fayetteville & Sanford Pop-Up • Square POS Accepted
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono bg-stone-800 px-2.5 py-1 rounded text-stone-300">
                  Call: (910) 709-2900
                </span>
              </div>

              {/* 3 mini columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                
                {/* Col 1 */}
                <div className="bg-stone-900/80 p-3 rounded-lg border border-stone-800">
                  <h5 className="font-bold text-amber-400 border-b border-stone-800 pb-1 mb-2 font-mono uppercase text-[11px]">
                    Dinners & Plates (w/ 2 Sides)
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">BBQ Chicken Leg Qtr</span>
                      <span className="font-mono text-amber-400 font-bold">$12.00</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Smoked Turkey Leg</span>
                      <span className="font-mono text-amber-400 font-bold">$14.00</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">1/2 LB Beef Brisket</span>
                      {simMode === 'rush86' ? (
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$18.00</span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Smoked Ribs (Slab/Plate)</span>
                      {simMode === 'rush86' ? (
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$30 / $18</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="bg-stone-900/80 p-3 rounded-lg border border-stone-800">
                  <h5 className="font-bold text-amber-400 border-b border-stone-800 pb-1 mb-2 font-mono uppercase text-[11px]">
                    Sandwiches & Bulk Meats
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Pulled Pork Sandwich</span>
                      <span className="font-mono text-amber-400 font-bold">$8.00</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Beef Brisket Sandwich</span>
                      <span className="font-mono text-amber-400 font-bold">$11.50</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">1 LB Pulled Pork</span>
                      <span className="font-mono text-amber-400 font-bold">$16.00</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">1 LB Smoked Brisket</span>
                      <span className="font-mono text-amber-400 font-bold">$24.00</span>
                    </div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="bg-stone-900/80 p-3 rounded-lg border border-stone-800">
                  <h5 className="font-bold text-amber-400 border-b border-stone-800 pb-1 mb-2 font-mono uppercase text-[11px]">
                    Sides, Fryer & Desserts
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">8oz Homestyle Sides</span>
                      <span className="font-mono text-amber-400 font-bold">$5.00</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Fried Pork Chop Dinner</span>
                      {simMode === 'fryerOff' ? (
                        <span className="bg-amber-600 text-stone-950 font-mono text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                          GREASE OFF
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$16.00</span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">12pc XL Fried Shrimp</span>
                      {simMode === 'fryerOff' ? (
                        <span className="bg-amber-600 text-stone-950 font-mono text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                          GREASE OFF
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$16.00</span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Honey Bun Cake Slice</span>
                      <span className="font-mono text-amber-400 font-bold">$3.75</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Ticker */}
              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span className="text-amber-300">
                  {simMode === 'fryerOff' ? "⚠️ FRYER CUTOFF: Fryer grease is off for the night. Smoked meats hot until sold out!" : "🟢 FRYER IS HOT & COOKING TO ORDER"}
                </span>
                <span>Square POS: Tap to Pay, Cards & Cash</span>
              </div>
            </div>
          </section>

          {/* Section 3: The 4 Equipment Options Explained */}
          <section className="space-y-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              The Four Practical Equipment Options for Donald
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Option A: USB Drive */}
              <div className="border border-stone-300 rounded-xl p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Usb className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="font-bold text-base">Option A: The USB Flash Drive (Offline)</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    Donald clicks the green <strong>"Download TV JPG"</strong> button on his phone or computer. He copies the image onto his thumb drive and plugs it into the TV's USB port.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> $0 (uses existing USB drive)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> No (100% offline)</li>
                    <li><strong>Updating:</strong> Requires re-plugging USB</li>
                  </ul>
                </div>
                <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  ✓ Rock solid for rural locations or festivals with zero cellular service.
                </div>
              </div>

              {/* Option B: Smart TV Browser (Recommended) */}
              <div className="border-2 border-emerald-500 rounded-xl p-5 bg-emerald-50/40 space-y-3 flex flex-col justify-between relative">
                <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                  ⭐ Recommended for Zero Equipment
                </div>
                <div>
                  <div className="flex items-center gap-2 text-stone-900 pt-1">
                    <Wifi className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-base">Option B: Smart TV Browser (Live Auto-Sync)</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    Most modern TVs (Roku TV, Samsung, LG, TCL, Fire TV) have a free built-in web browser app. The TV connects to Donald's phone personal hotspot (the same hotspot powering his Square card reader).
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> $0 (uses existing TV)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Yes (Phone mobile hotspot)</li>
                    <li><strong>Updating:</strong> Instant live over-the-air sync!</li>
                  </ul>
                </div>
                <div className="text-[11px] text-emerald-900 bg-white p-2.5 rounded-lg border border-emerald-200 font-medium">
                  ✓ Whenever Donald marks an item "Sold Out" on his phone, the TV updates live automatically across the truck!
                </div>
              </div>

              {/* Option C: $20 Amazon Fire Stick */}
              <div className="border border-stone-300 rounded-xl p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Tv className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="font-bold text-base">Option C: $20 Amazon Fire TV Stick</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If Donald's TV is a basic non-smart monitor, plugging a $20 Fire Stick or Roku into the HDMI port turns it into a full smart display. It connects to his phone hotspot and runs the Silk browser fullscreen.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$20.00 one-time</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Yes (Phone hotspot)</li>
                    <li><strong>Updating:</strong> Instant live over-the-air sync</li>
                  </ul>
                </div>
                <div className="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-200">
                  ✓ Turns any old HDMI monitor into an auto-syncing digital signage board.
                </div>
              </div>

              {/* Option D: $10 HDMI Direct Mirror Cable */}
              <div className="border border-stone-300 rounded-xl p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Cable className="w-5 h-5 text-purple-600 shrink-0" />
                    <h3 className="font-bold text-base">Option D: $10 Direct HDMI Mirror Cable</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    A simple $10 Lightning or USB-C to HDMI adapter cable connects Donald's register iPad or phone directly to the TV monitor. It mirrors the screen continuously with zero lag and zero Wi-Fi.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$10.00 (adapter cable)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> No Wi-Fi required</li>
                    <li><strong>Updating:</strong> Live mirror of the device screen</li>
                  </ul>
                </div>
                <div className="text-[11px] text-purple-900 bg-purple-50 p-2.5 rounded-lg border border-purple-200">
                  ✓ Simple plug-and-play with zero wireless troubleshooting.
                </div>
              </div>

            </div>
          </section>

          {/* Section 4: Commercial Digital Signage Comparison */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                4
              </span>
              Commercial Systems vs. Donald's Custom Web Board
            </h2>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2">
              <p className="text-stone-700">
                Many food truck owners get pitched commercial digital signage services like <strong>Toast Digital Signage</strong>, <strong>Raydiant</strong>, or <strong>Mood Media</strong>. Here is why Donald should avoid them:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>They charge <strong>$35 to $75 every month</strong> ($420 to $900 per year) just for the software license.</li>
                <li>They require buying <strong>$200 to $400 proprietary media player boxes</strong> that break down in truck vibration and heat.</li>
                <li>They lock the owner into contracts and require separate logins for the menu board vs the website.</li>
              </ul>
              <div className="bg-emerald-100/60 p-3 rounded-lg border border-emerald-300 font-medium text-emerald-950">
                💡 <strong>The Benefit of What We Built:</strong> Donald’s new website <em>is</em> his digital menu board. Whenever he updates his site on his phone, the TV menu updates at the exact same moment for <strong>$0 extra cost</strong>.
              </div>
            </div>
          </section>

          {/* Section 5: Side-by-Side Matrix */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                5
              </span>
              Side-by-Side Decision Matrix
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Evaluation Factor</th>
                    <th className="p-3">Option A: USB Drive</th>
                    <th className="p-3 bg-emerald-50 text-emerald-900 border-x border-emerald-200">
                      Option B: Smart TV Browser ⭐
                    </th>
                    <th className="p-3">Option C: $20 Fire Stick</th>
                    <th className="p-3">Option D: $10 HDMI Cable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-sans">
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Hardware Cost</td>
                    <td className="p-3 font-bold text-emerald-700">$0</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">$0</td>
                    <td className="p-3 text-stone-600">~$20.00</td>
                    <td className="p-3 text-stone-600">~$10.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Monthly Fees</td>
                    <td className="p-3 font-bold text-emerald-700">$0</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">$0</td>
                    <td className="p-3 font-bold text-emerald-700">$0</td>
                    <td className="p-3 font-bold text-emerald-700">$0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Live 86 / Sold Out Sync</td>
                    <td className="p-3 text-stone-500">Requires new JPG</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">Instant (Over the air)</td>
                    <td className="p-3 font-bold text-emerald-700">Instant (Over the air)</td>
                    <td className="p-3 font-bold text-emerald-700">Instant (Mirrored)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Internet Connection Needed</td>
                    <td className="p-3 text-emerald-700 font-bold">None (100% Offline)</td>
                    <td className="p-3 bg-emerald-50/50 text-stone-700 border-x border-emerald-200">Phone Hotspot</td>
                    <td className="p-3 text-stone-700">Phone Hotspot</td>
                    <td className="p-3 text-emerald-700 font-bold">None</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Ease of Daily Use</td>
                    <td className="p-3 text-stone-700">Plug & Play</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">100% Hands-Free</td>
                    <td className="p-3 text-stone-700">100% Hands-Free</td>
                    <td className="p-3 text-stone-700">Plug in cable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Action Plan for the Meeting */}
          <section className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                6
              </span>
              Suggested Action Plan for Your Meeting With Donald
            </h2>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3 text-xs">
              <h4 className="font-bold text-stone-900 text-sm">
                How to Guide Donald Through His TV Setup in 3 Simple Steps:
              </h4>
              <ol className="space-y-2 text-stone-700 list-decimal list-inside font-medium leading-relaxed">
                <li>
                  <strong>Step 1 (Immediate - USB Fallback):</strong> Show him the new green <strong>"Download TV JPG (for USB)"</strong> button. Explain that anytime he wants an updated picture for his thumb drive, it takes 1 click.
                </li>
                <li>
                  <strong>Step 2 (Test Smart TV Browser):</strong> Ask Donald what brand TV is in the truck (Roku, Samsung, LG, TCL, Vizio). Turn on his phone hotspot, open the TV's browser app to the site URL, and test the live auto-sync.
                </li>
                <li>
                  <strong>Step 3 (If it's an older TV):</strong> If the TV doesn't have a web browser, order a $20 Amazon Fire Stick on Amazon so he can permanently enjoy live wireless syncing!
                </li>
              </ol>
            </div>
          </section>

        </div>

        {/* Footer / Print Note */}
        <div className="p-6 bg-stone-100 border-t border-stone-200 text-center text-xs text-stone-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Tisdale’s Southern BBQ • Technology & Signage Planning Brief</span>
          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="text-amber-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print This One-Pager</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsTvWhitePageOpen(false)}
              className="text-stone-700 font-bold hover:underline cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
