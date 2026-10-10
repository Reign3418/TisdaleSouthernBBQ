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
  Smartphone,
  Heart
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
      <div className="bg-white text-stone-900 rounded-none shadow-2xl max-w-4xl w-full my-4 border border-stone-200 overflow-hidden print:shadow-none print:border-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-stone-900 text-stone-200 px-6 py-3 flex items-center justify-between print:hidden border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-black font-black text-xs px-2 py-0.5 rounded-none font-mono uppercase">
              Craftsman Options Brief
            </span>
            <span className="text-xs text-stone-300 font-medium">
              Prepared for Mr. Donald Tisdale • Tisdale’s Southern BBQ
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition cursor-pointer border border-stone-700"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => setIsTvWhitePageOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition cursor-pointer border border-stone-700"
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
                Craftsman Technology Brief
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Your Food Trailer TV Menu & Display Options
              </h1>
              <p className="text-sm text-stone-600 mt-1">
                How you can display, update, and sync your barbecue menu on your trailer TV monitor with little to zero equipment.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 shrink-0 font-mono bg-white p-3 rounded-none border border-stone-200">
              <div><strong>Craftsman:</strong> Mr. Donald Tisdale</div>
              <div><strong>Business:</strong> Tisdale’s Southern BBQ</div>
              <div><strong>Date:</strong> October 2026</div>
              <div><strong>Focus:</strong> Your TV Menu, USB & Live Web Sync Options</div>
            </div>
          </div>
        </div>

        {/* Document Body */}
        <div className="p-6 sm:p-10 space-y-10 text-stone-800 leading-relaxed text-sm">
          
          {/* Section 1: Executive Summary */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                1
              </span>
              Your Trailer, Your Craft: The Vision
            </h2>
            <p className="text-stone-700">
              Mr. Tisdale, you’ve said that you love cooking like a carpenter loves building houses. We have that exact same passion for creating. When folks pull up to your food trailer window, your TV screen is the showcase for your hard work—from your hickory-smoked ribs and beef brisket to your fried pork chops and whole wings. You deserve a setup that puts you in total control, without headaches, complicated gear, or monthly bills.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-none">
              <h4 className="font-bold text-amber-900 text-sm">Our Shared Standard: Maximum Impact, Zero Monthly Fees, Your Choice of Workflow</h4>
              <p className="text-xs text-amber-800 mt-1">
                You are the pitmaster and in complete command. We built this so you have the freedom to work however you feel most comfortable: whether you prefer <strong>(A) downloading a fresh 1080p image to your thumb drive in 5 seconds</strong>, or <strong>(B) having your TV update wirelessly over the air directly from your phone</strong> when you mark an item sold out during a heavy rush.
              </p>
            </div>
          </section>

          {/* Section 2: Interactive Simulator */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
              <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                  2
                </span>
                Interactive Simulator: See How Your TV Screen Responds
              </h2>
              <span className="text-xs text-stone-500 font-mono italic">
                (Tap the buttons below to see how your menu screen adapts to your shift)
              </span>
            </div>

            {/* Test buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-3 rounded-none border border-stone-200">
              <span className="text-xs font-bold text-stone-700 font-mono">Test Shift Event:</span>
              <button
                onClick={() => setSimMode('normal')}
                className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                  simMode === 'normal'
                    ? 'bg-stone-900 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                1. Normal Shift (All Meats Smoking & Ready)
              </button>

              <button
                onClick={() => setSimMode('rush86')}
                className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                  simMode === 'rush86'
                    ? 'bg-rose-700 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                2. 5:00 PM Rush (Ribs & Brisket Sold Out)
              </button>

              <button
                onClick={() => setSimMode('fryerOff')}
                className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                  simMode === 'fryerOff'
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                3. 30-Min Cutoff (Fryer Grease OFF)
              </button>
            </div>

            {/* Mock TV Frame */}
            <div className="bg-[#120F0E] rounded-none border-4 border-stone-800 p-4 sm:p-6 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-amber-600/40 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-none bg-amber-500 text-stone-950 flex items-center justify-center font-black font-['Bebas_Neue'] text-lg">
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

                <span className="text-xs font-mono bg-stone-800 px-2.5 py-1 rounded-none text-stone-300">
                  Call: (910) 709-2900
                </span>
              </div>

              {/* 3 mini columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                
                {/* Col 1 */}
                <div className="bg-stone-900/80 p-3 rounded-none border border-stone-800">
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
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$18.00</span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Smoked Ribs (Slab/Plate)</span>
                      {simMode === 'rush86' ? (
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$30 / $18</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="bg-stone-900/80 p-3 rounded-none border border-stone-800">
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
                <div className="bg-stone-900/80 p-3 rounded-none border border-stone-800">
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
                        <span className="bg-amber-600 text-stone-950 font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
                          GREASE OFF
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">$16.00</span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">12pc XL Fried Shrimp</span>
                      {simMode === 'fryerOff' ? (
                        <span className="bg-amber-600 text-stone-950 font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
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
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              The Four Practical Ways You Can Run Your Trailer Screen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Option A: USB Drive */}
              <div className="border border-stone-300 rounded-none p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Usb className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="font-bold text-base">Option A: Your USB Flash Drive (100% Offline)</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    Whenever you want a fresh menu for your trailer, just tap the green <strong>"Download TV JPG"</strong> button on your phone or computer. Copy that image onto your thumb drive, plug it into your TV's USB port, and put it on slideshow. It's solid, simple, and never depends on cellular reception.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> $0 (uses your existing USB flash drive)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> None (100% offline)</li>
                    <li><strong>Updating:</strong> Pop in your updated USB stick</li>
                  </ul>
                </div>
                <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-none border border-emerald-200">
                  ✓ Bulletproof for festivals, county fairs, or rural pop-ups where cell service is spotty.
                </div>
              </div>

              {/* Option B: Smart TV Browser (Recommended) */}
              <div className="border-2 border-emerald-500 rounded-none p-5 bg-emerald-50/40 space-y-3 flex flex-col justify-between relative">
                <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-none shadow">
                  ⭐ Top Choice for Zero Extra Gear
                </div>
                <div>
                  <div className="flex items-center gap-2 text-stone-900 pt-1">
                    <Wifi className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-base">Option B: Your Smart TV's Web Browser (Live Auto-Sync)</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If your trailer TV is a modern smart TV (Roku, Samsung, LG, TCL, or Fire TV), it already has a free built-in web browser app. You connect the TV to your phone's personal hotspot (the very same hotspot powering your Square card reader) and open your menu page.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> $0 (uses the TV you already have)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Yes (your phone mobile hotspot)</li>
                    <li><strong>Updating:</strong> Instant live over-the-air sync!</li>
                  </ul>
                </div>
                <div className="text-[11px] text-emerald-900 bg-white p-2.5 rounded-none border border-emerald-200 font-medium">
                  ✓ Whenever you mark an item "Sold Out" on your phone, your TV updates live automatically right before your customers' eyes!
                </div>
              </div>

              {/* Option C: $20 Amazon Fire Stick */}
              <div className="border border-stone-300 rounded-none p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Tv className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="font-bold text-base">Option C: A $20 Amazon Fire TV Stick</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If the TV in your trailer is a basic monitor without built-in web apps, plugging an inexpensive $20 Fire Stick into the HDMI port turns it into a smart display. It connects to your phone hotspot and runs your menu full-screen all shift long.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$20.00 one-time</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Yes (phone hotspot)</li>
                    <li><strong>Updating:</strong> Instant live over-the-air sync</li>
                  </ul>
                </div>
                <div className="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-none border border-blue-200">
                  ✓ Turns any standard HDMI monitor into an auto-syncing digital signage board.
                </div>
              </div>

              {/* Option D: $10 HDMI Direct Mirror Cable */}
              <div className="border border-stone-300 rounded-none p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Cable className="w-5 h-5 text-purple-600 shrink-0" />
                    <h3 className="font-bold text-base">Option D: A $10 Direct HDMI Mirror Cable</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If you prefer a wired connection with zero Wi-Fi or hotspot configuration, a simple $10 adapter cable plugs directly from your phone or iPad register straight into the TV monitor. Whatever is on your screen mirrors onto the TV.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$10.00 (adapter cable)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> No Wi-Fi required</li>
                    <li><strong>Updating:</strong> Direct live mirror of your screen</li>
                  </ul>
                </div>
                <div className="text-[11px] text-purple-900 bg-purple-50 p-2.5 rounded-none border border-purple-200">
                  ✓ Simple plug-and-play with zero wireless setup or troubleshooting.
                </div>
              </div>

            </div>
          </section>

          {/* Section 4: Commercial Digital Signage Comparison */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                4
              </span>
              Why We Don't Want You Paying for Commercial Signage Systems
            </h2>

            <div className="bg-stone-50 border border-stone-200 rounded-none p-4 text-xs space-y-2">
              <p className="text-stone-700">
                Many food truck owners get pitched commercial digital signage services like <strong>Toast Digital Signage</strong>, <strong>Raydiant</strong>, or <strong>Mood Media</strong>. Here is why we want you to keep that hard-earned money in your pocket:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>They lock you into paying <strong>$35 to $75 every single month</strong> ($420 to $900 every year) just to show a menu on your own screen.</li>
                <li>They require buying <strong>$200 to $400 proprietary media player boxes</strong> that can fail in food trailer heat and road vibrations.</li>
                <li>They trap you into contracts and force you to use separate logins and confusing portals.</li>
              </ul>
              <div className="bg-emerald-100/60 p-3 rounded-none border border-emerald-300 font-medium text-emerald-950">
                💡 <strong>What We Built Specifically For You:</strong> Your new website <em>is</em> your digital menu board. Whenever you make a change on your phone, your TV updates at that exact moment for <strong>$0 extra cost and zero recurring bills</strong>.
              </div>
            </div>
          </section>

          {/* Section 5: Side-by-Side Matrix */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                5
              </span>
              Side-by-Side Comparison of Your Choices
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-none">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Evaluation Factor</th>
                    <th className="p-3">Option A: Your USB Drive</th>
                    <th className="p-3 bg-emerald-50 text-emerald-900 border-x border-emerald-200">
                      Option B: Your Smart TV Browser ⭐
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
                    <td className="p-3 text-stone-500">Requires new JPG export</td>
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

          {/* Section 6: Action Plan / Partnership */}
          <section className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                6
              </span>
              How We Can Bring This to Life Together
            </h2>

            <div className="bg-stone-50 border border-stone-200 rounded-none p-5 space-y-3 text-xs">
              <h4 className="font-bold text-stone-900 text-sm">
                Three Simple Steps We Can Take at Your Pace:
              </h4>
              <ol className="space-y-2 text-stone-700 list-decimal list-inside font-medium leading-relaxed">
                <li>
                  <strong>Step 1 (Ready Right Now - Your USB Drive):</strong> Whenever you want to refresh the picture on your thumb drive, just tap the green <strong>"Download TV JPG (for USB)"</strong> button. It creates a crisp, perfectly sized 1080p image with your exact trailer colors and prices ready to plug in.
                </li>
                <li>
                  <strong>Step 2 (Let's Test Your TV's Browser):</strong> Next time we're together at your trailer, let's look at the TV in your window (Roku, Samsung, LG, TCL, Vizio). We'll connect it to your phone hotspot, load your live menu, and see if live wireless sync is your favorite way to roll.
                </li>
                <li>
                  <strong>Step 3 (If You Want Live Sync on an Older TV):</strong> If your TV doesn't have a web browser built in, we can grab an inexpensive $20 Amazon Fire Stick and have you syncing live over the air in under 10 minutes.
                </li>
              </ol>
            </div>
          </section>

        </div>

        {/* Footer / Print Note */}
        <div className="p-6 bg-stone-100 border-t border-stone-200 text-center text-xs text-stone-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Tisdale’s Southern BBQ • Technology & Signage Planning Brief • Crafted with Passion</span>
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
