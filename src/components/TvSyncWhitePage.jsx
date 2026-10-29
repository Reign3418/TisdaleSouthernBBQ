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
        <div className="bg-stone-900 text-stone-200 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 print:hidden border-b border-stone-800">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bg-amber-500 text-black font-black text-[11px] px-2 py-0.5 rounded-none font-mono uppercase shrink-0">
              Brief
            </span>
            <span className="text-xs text-stone-300 font-medium truncate">
              Prepared for Donald Tisdale
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
                1. Normal Shift (All Meats Hot)
              </button>

              <button
                onClick={() => setSimMode('rush86')}
                className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                  simMode === 'rush86'
                    ? 'bg-rose-700 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                2. 5:00 PM Rush (Ribs &amp; Brisket Sold Out)
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

              <button
                onClick={() => setSimMode('priceFade')}
                className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                  simMode === 'priceFade'
                    ? 'bg-emerald-700 text-white shadow'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                4. &quot;Pig Flash&quot; &amp; Event-Specific Pricing
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
                      <span className="font-mono text-amber-400 font-bold">
                        {simMode === 'priceFade' ? '$10.00' : '$12.00'}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Smoked Turkey Leg</span>
                      <span className="font-mono text-amber-400 font-bold">
                        {simMode === 'priceFade' ? '$12.00' : '$14.00'}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">1/2 LB Beef Brisket</span>
                      {simMode === 'rush86' ? (
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">
                          {simMode === 'priceFade' ? '$14.00' : '$18.00'}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Smoked Ribs (Slab/Plate)</span>
                      {simMode === 'rush86' ? (
                        <span className="bg-rose-600 text-white font-mono text-[9px] font-black px-1.5 py-0.2 rounded-none uppercase">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="font-mono text-amber-400 font-bold">
                          {simMode === 'priceFade' ? '$14.00' : '$30 / $18'}
                        </span>
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
                      <span className="font-mono text-amber-400 font-bold">
                        {simMode === 'priceFade' ? '$6.00' : '$8.00'}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-200">Beef Brisket Sandwich</span>
                      <span className="font-mono text-amber-400 font-bold">
                        {simMode === 'priceFade' ? '$9.50' : '$11.50'}
                      </span>
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
                  {simMode === 'fryerOff'
                    ? '⚠️ FRYER CUTOFF: Fryer grease is off for the night. Smoked meats hot until sold out!'
                    : '🟢 FRYER IS HOT & COOKING TO ORDER • 100% PURE HICKORY SMOKED'}
                </span>
                <span>Square POS: Tap to Pay, Cards & Cash</span>
              </div>
            </div>
          </section>

          {/* Section 3: The Equipment Options Explained */}
          <section className="space-y-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              The Practical Ways You Can Run Your Trailer TV Screen
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
                  ✓ Bulletproof fallback for festivals or rural pop-ups.
                </div>
              </div>

              {/* Option B: $15-$30 Raspberry Pi "Pit-Box" Appliance */}
              <div className="border-2 border-emerald-500 rounded-none p-5 bg-emerald-50/40 space-y-3 flex flex-col justify-between relative">
                <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-none shadow">
                  ⭐ Recommended "Turn-Key Appliance" (Zero Troubleshooting)
                </div>
                <div>
                  <div className="flex items-center gap-2 text-stone-900 pt-1">
                    <Wifi className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-base">Option B: $15 Raspberry Pi Zero 2 W "Pit-Box" (Or Closed-Lid Laptop)</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    A stick-of-gum sized micro-computer (~$15 board / ~$30 total) Velcroed behind your TV. It draws so little power that it plugs straight into your <strong>TV's USB port</strong> for power and <strong>HDMI 1</strong> for video—no extra wall plug needed! When you turn on the TV, it wakes up automatically, puts your live menu on screen, and creates a direct wireless link to your cell phone.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$30 one-time (or $0 using an existing closed-lid laptop)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Works 100% offline phone-to-TV OR via hotspot</li>
                    <li><strong>Updating:</strong> Instant 1-tap from your cell phone!</li>
                  </ul>
                </div>
                <div className="text-[11px] text-emerald-900 bg-white p-2.5 rounded-none border border-emerald-200 font-medium">
                  ✓ Set on a Read-Only SD card so pulling the generator plug never corrupts it—just turn on the TV and cook!
                </div>
              </div>

              {/* Option C: Smart TV Browser / Fire Stick */}
              <div className="border border-stone-300 rounded-none p-5 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stone-900">
                    <Tv className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="font-bold text-base">Option C: Smart TV Browser or $20 Fire TV Stick</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If your trailer TV is a Smart TV (or has a $20 Fire Stick plugged in), it connects to your phone's hotspot (the same hotspot running your Square reader) and loads your live TV menu page full-screen.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> $0 to $20 one-time</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> Yes (phone hotspot)</li>
                    <li><strong>Updating:</strong> Instant live over-the-air sync</li>
                  </ul>
                </div>
                <div className="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-none border border-blue-200">
                  ✓ Updates both your customer website and your trailer TV at the exact same time.
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
                    If you prefer a physical cord with zero wireless setup, a $10 adapter cable plugs from a phone, tablet, or closed-lid laptop straight into the TV HDMI port.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-700 mt-3 font-mono">
                    <li><strong>Equipment Cost:</strong> ~$10.00 (adapter cable)</li>
                    <li><strong>Monthly Cost:</strong> $0 / month</li>
                    <li><strong>Internet Needed:</strong> No Wi-Fi required</li>
                    <li><strong>Updating:</strong> Direct live HDMI signal</li>
                  </ul>
                </div>
                <div className="text-[11px] text-purple-900 bg-purple-50 p-2.5 rounded-none border border-purple-200">
                  ✓ Simple plug-and-play with zero wireless setup.
                </div>
              </div>

            </div>
          </section>

          {/* Section 4: Next-Level Crowd & Revenue Ideas to Discuss */}
          <section className="space-y-5">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                4
              </span>
              Four Game-Changing Revenue &amp; Crowd Ideas to Talk About
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Idea 1: Pig Flash & Event-Specific Pricing */}
              <div className="border-2 border-amber-500/80 bg-amber-50/40 p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500 text-stone-950 font-mono font-black text-[10px] uppercase px-2 py-0.5">
                    Idea #1 • Event-Specific Pricing
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900">$0 Cost</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🐷 &quot;Flash the Pig&quot; &amp; Event-Specific Pricing (Instant Event Menu Sync)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Clean Event &amp; Venue Pricing:</strong> Instead of making a brand-new graphic every time you work a special festival, brewery night, or community event, you can switch between <strong>Event-Specific Pricing Tiers</strong> right from your phone:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li>Your 55&quot; TV briefly blanks for 1 second, <strong>flashes your Tisdale Pig Logo</strong> like a natural brand bumper, and comes right back up with the new event prices in the normal gold font.</li>
                  <li><strong>Clean, Natural Menu Board:</strong> There are no messy crossed-out numbers—to anyone walking up to the window, that is simply today&apos;s Event Menu price!</li>
                  <li>Lets you adjust pricing effortlessly for different venues, festivals, or special events with 1 tap.</li>
                </ul>
              </div>

              {/* Idea 2: Bowling Alley & Brewery NFC Stickers / Coasters */}
              <div className="border-2 border-emerald-600/80 bg-emerald-50/40 p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-600 text-white font-mono font-black text-[10px] uppercase px-2 py-0.5">
                    Idea #2 • Bowling Alleys &amp; Breweries
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-900">~$0.25 / Sticker</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  📲 NFC Table Coasters &amp; Stickers ("Order &amp; Pay Without Leaving Your Lane")
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Inside a bowling alley or taproom, folks don't want to take off their bowling shoes or leave their beer to stand outside in the cold for 15 minutes. By placing a thin NFC chip behind custom <strong>Tisdale BBQ Coasters or Table Stickers</strong> inside the venue:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Tap at the Table:</strong> Customers tap their phone right on the coaster/sticker at their bowling lane or barstool to open your live menu.</li>
                  <li><strong>Pay on the Phone = Guaranteed Pickup:</strong> When they pay right on their phone (Square / Apple Pay / Cash App), you know 100% they are coming to get their food!</li>
                  <li><strong>Secret Pitmaster Coin (#admin):</strong> We also programmed an NFC coin you stick inside your cash register window—tap your own phone to it and your Pitmaster Remote opens immediately without typing a password or URL!</li>
                </ul>
              </div>

              {/* Idea 3: Vibrating Coaster Pagers + Virtual Phone Coaster */}
              <div className="border border-stone-300 bg-white p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2 py-0.5">
                    Idea #3 • Pager Integration
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">Uses Your Existing Coasters</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🛎️ Tying Into Your Vibrating Coaster Pagers (+ Phone Buzz)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  You already own physical vibrating coaster pagers! Here are three ways we supercharge them:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>NFC Coin on Every Coaster:</strong> Stick an NFC coin onto the center of each plastic coaster pager. While a customer sits at a picnic table waiting for their coaster to buzz, their friends can tap the coaster with their phone to pull up your menu!</li>
                  <li><strong>Phone Buzz for Indoor Orders:</strong> When someone orders from inside the bowling alley (and doesn't have a plastic coaster in hand), 1 tap on your phone texts them <em>"🔥 Order Ready at Window!"</em> so their own cell phone buzzes in their pocket.</li>
                  <li><strong>Optional $4 Pi Radio Bridge:</strong> Your coaster base uses <code>433.92 MHz</code> radio signals. If you ever want your phone/Pi to trigger the physical coasters directly, a $4 radio module on the Raspberry Pi can clone those exact pager signals.</li>
                </ul>
              </div>

              {/* Idea 4: Free 250ft Wi-Fi Billboard & Dead-Cell-Tower Offline Sync */}
              <div className="border border-stone-300 bg-white p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2 py-0.5">
                    Idea #4 • Dead-Cell-Tower Festival Mode
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">100% Offline Ready</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  📡 250ft "Wi-Fi Billboard" + NFC Ad-Hoc Offline Sync + Menu Disclaimer
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  At a massive festival where cell towers are overloaded and nobody has internet, how does your phone still update the TV—and how do customers still see your menu?
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Direct 4-Foot Phone-to-Pi Link:</strong> The Raspberry Pi stores a complete copy of your menu on its memory card (`192.168.4.1`). Tapping your register NFC coin connects your phone directly to the Pi inside the trailer—updating the TV in 2 milliseconds with <strong>zero cell service required</strong>.</li>
                  <li><strong>250ft Wi-Fi Billboard &amp; Captive Portal:</strong> Outside, the Pi broadcasts <strong><code>🔥 Tisdale_BBQ_Smoked_Brisket</code></strong>. When hungry customers with no cell signal tap that Wi-Fi name, your offline menu automatically pops up on their phone!</li>
                  <li><strong>1-Line Menu Disclaimer:</strong> A simple note on the online menu states: <em>&quot;Final availability and event-specific pricing are confirmed at the pickup window&quot;</em>—so if you run an Event-Specific Pricing tier on the trailer TV, everything stays 100% seamless.</li>
                  <li><strong>30-Minute Raspberry Pi "Heartbeat" Watchdog:</strong> While your 55&quot; TV is on, the Pi sends a heartbeat ping to the master website every 5 minutes. If the master website doesn&apos;t detect the Pi for <strong>30 minutes during open hours</strong> (because festival internet dropped), the main website automatically switches into <strong>Offline Festival Mode</strong>! And when you turn the TV off at night, 30 minutes later the website automatically closes the kitchen and resets all Sold-Out and Event Pricing tiers for tomorrow.</li>
                </ul>
              </div>

              {/* Idea 5: 7-Inch Countertop Pitmaster Touch Deck ("One Pi, Two Screens") */}
              <div className="md:col-span-2 border-2 border-amber-500 bg-amber-50/40 p-5 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-amber-500 text-stone-950 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Idea #5 • 7-Inch Countertop Touch Deck (Zero Phone Fumbling!)
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900">One Pi 4 Drives Both Screens • 100% Wired</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🖥️ 7-Inch Countertop &quot;Pitmaster Touch Deck&quot; (Edit While Dropping Fries — Cell Phone Can Play Too!)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  When your hands are in BBQ gloves or you&apos;re dropping fries during a rush, you shouldn&apos;t have to pull your cell phone out of your pocket or unlock FaceID. Because the <strong>Raspberry Pi 4 supports two displays at the same time</strong>, we can snap the Pi 4 into the back of a <strong>7-inch Countertop Touchscreen Stand</strong> right next to your fryer and cash register:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Screen 1 (Inside Counter by the Fryer):</strong> The 7&quot; Touchscreen stays <strong>always on</strong> (never locks or sleeps) showing giant glove-friendly buttons (<code>SOLD OUT</code>, <code>GREASE OFF</code>, <code>EVENT -$2 / -$4</code>) plus a <strong>live mirror preview of the outside 55&quot; TV</strong> so you never have to stick your head out the window to check the board!</li>
                  <li><strong>Screen 2 (Outside 55&quot; Trailer TV):</strong> A single HDMI cord runs from the back of that 7&quot; counter stand straight to your 55&quot; TV. Because both screens are plugged into the exact same Pi 4, updates are <strong>100% hardwired and instantaneous</strong>—zero Wi-Fi or cell service required.</li>
                  <li><strong>Your Cell Phone Can Still Play Too:</strong> Whenever you step outside to check the smoker or talk to customers, your phone can still connect to the Pi to flip switches remotely!</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 5: Commercial Digital Signage Comparison */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                5
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

          {/* Section 6: Side-by-Side Matrix */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                6
              </span>
              Side-by-Side Comparison of Your Choices
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-none">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Evaluation Factor</th>
                    <th className="p-3">Option A: USB Drive</th>
                    <th className="p-3 bg-emerald-50 text-emerald-900 border-x border-emerald-200">
                      Option B: $15 Pi "Pit-Box" / Closed Laptop ⭐
                    </th>
                    <th className="p-3">Option C: Smart TV / Fire Stick</th>
                    <th className="p-3">Option D: $10 HDMI Cable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-sans">
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Hardware Cost</td>
                    <td className="p-3 font-bold text-emerald-700">$0</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">~$30 (or $0 Laptop)</td>
                    <td className="p-3 text-stone-600">$0 – $20.00</td>
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
                    <td className="p-3 font-semibold text-stone-700">Live 86, Specials &amp; Event Pricing</td>
                    <td className="p-3 text-stone-500">Requires new JPG export</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">Instant (1-Tap on Phone)</td>
                    <td className="p-3 font-bold text-emerald-700">Instant (Over the air)</td>
                    <td className="p-3 font-bold text-emerald-700">Instant (Mirrored)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">250ft Free Wi-Fi Billboard SSID</td>
                    <td className="p-3 text-stone-400">No</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">Yes (Built-In!)</td>
                    <td className="p-3 text-stone-400">No</td>
                    <td className="p-3 text-stone-400">No</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Ease of Daily Use</td>
                    <td className="p-3 text-stone-700">Plug &amp; Play</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">Powers on with TV USB!</td>
                    <td className="p-3 text-stone-700">100% Hands-Free</td>
                    <td className="p-3 text-stone-700">Plug in cable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Zero-Downtime Fail-Safe & Action Plan */}
          <section className="space-y-4 border-t border-stone-200 pt-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-none bg-emerald-700 text-white flex items-center justify-center text-xs font-bold font-mono">
                7
              </span>
              Our #1 Rule: Zero Downtime, Zero Overwhelm &amp; The "2-Second USB Fail-Safe"
            </h2>

            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-none p-5 space-y-3 text-xs">
              <h4 className="font-black text-emerald-950 text-sm uppercase tracking-wide">
                🛡️ Computers Can Have a Mind of Their Own — Here Is How We Guarantee Zero Lost Revenue:
              </h4>
              <p className="text-stone-700 leading-relaxed">
                During a busy dinner rush, you never have time to stop cooking and troubleshoot technology—downtime is lost money. Every idea in this brief is designed as an <strong>optional tool on the shelf</strong> with a built-in fail-safe:
              </p>
              <ol className="space-y-2 text-stone-800 list-decimal list-inside font-medium leading-relaxed">
                <li>
                  <strong>The 2-Second USB Fail-Safe (Always Plugged In):</strong> Your <strong>USB thumb drive stays plugged into your TV permanently</strong> alongside the HDMI cord. If a computer or wireless link ever acts up during a rush, you don't troubleshoot anything—just press <strong>INPUT → USB</strong> on your TV remote and your crisp static menu is back on screen in <strong>2 seconds flat</strong>!
                </li>
                <li>
                  <strong>100% Tested Beforehand + I’m There With You On-Site:</strong> Nothing goes onto your trailer until it is completely tested on the bench first. Even then, I will be right there with you for the first couple of live runs to watch it work and make sure it’s effortless.
                </li>
                <li>
                  <strong>Phase 1 First (Zero Risk):</strong> We start with your live website, your fresh USB backup image, and passive waterproof NFC coins (which have no batteries or computers and can never crash).
                </li>
                <li>
                  <strong>Phase 2 &amp; 3 Only When You Want Them:</strong> Whenever you're ready, we can plug in the Raspberry Pi "Pit-Box" for 1-tap <strong>"Flash the Pig" Event-Specific Pricing</strong>, Sold-Out toggles, and bowling alley/brewery NFC coasters at your own pace.
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
