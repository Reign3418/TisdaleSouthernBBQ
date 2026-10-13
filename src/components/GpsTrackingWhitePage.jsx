import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  Printer,
  Smartphone,
  Radio,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Flame,
  Power,
  DollarSign,
  BatteryCharging,
  Navigation,
  ExternalLink,
  Heart
} from 'lucide-react';

export default function GpsTrackingWhitePage() {
  const { isGpsWhitePageOpen, setIsGpsWhitePageOpen, schedule } = usePitmaster();

  // Interactive Simulator State for Donald
  const [simState, setSimState] = useState('on'); // 'on' | 'off'
  const [simPreset, setSimPreset] = useState({
    name: 'Stop Button Bar & Arcade',
    address: '6114 Legion Rd, Fayetteville, NC',
    hours: '1:30 PM - 6:30 PM'
  });

  if (!isGpsWhitePageOpen) return null;

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
              onClick={() => setIsGpsWhitePageOpen(false)}
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
                Craftsman Operations Brief
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Your Food Trailer Location Tracking Options
              </h1>
              <p className="text-sm text-stone-600 mt-1">
                How you can let your customers know where Tisdale’s Southern BBQ is parked, boost walk-up sales, and keep your home 100% private when off-duty.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 shrink-0 font-mono bg-white p-3 rounded-none border border-stone-200">
              <div><strong>Craftsman:</strong> Mr. Donald Tisdale</div>
              <div><strong>Business:</strong> Tisdale’s Southern BBQ</div>
              <div><strong>Date:</strong> October 2026</div>
              <div><strong>Focus:</strong> On/Off Location Hardware & Software Options</div>
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
              Your Freedom, Your Privacy & Reaching Your Customers
            </h2>
            <p className="text-stone-700">
              As a mobile pitmaster serving Fayetteville, Sanford, Dunn, and surrounding North Carolina communities, getting hungry crowds to your window comes down to answering one question: <strong>“Where are you parked right now?”</strong>
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-none">
              <h4 className="font-bold text-amber-900 text-sm">The Golden Rule: Complete On/Off Control & Home Privacy</h4>
              <p className="text-xs text-amber-800 mt-1">
                You must always have total control with a clear <strong>ON/OFF switch</strong>. When you're open for service, your customers see your exact spot with 1-tap Google Maps directions. When you finish cooking, pack up, and head home to your family, tracking is completely OFF so your personal residence is never shared.
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
                Interactive Simulator: Test Your On/Off Switch
              </h2>
              <span className="text-xs text-stone-500 font-mono italic">
                (Click the buttons below to see how your site protects your privacy or welcomes hungry customers)
              </span>
            </div>

            <p className="text-xs text-stone-600">
              Test how both states look from a customer's phone when you switch tracking on or off:
            </p>

            {/* Simulator Controls */}
            <div className="flex flex-wrap items-center gap-3 bg-stone-100 p-3 rounded-none border border-stone-200">
              <span className="text-xs font-bold text-stone-700 font-mono">Your Control Switch:</span>
              <button
                onClick={() => setSimState('on')}
                className={`flex items-center gap-2 px-4 py-2 rounded-none font-bold text-xs transition cursor-pointer ${
                  simState === 'on'
                    ? 'bg-emerald-600 text-white shadow ring-2 ring-emerald-500/50'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>🟢 TURN ON (Open at Venue)</span>
              </button>

              <button
                onClick={() => setSimState('off')}
                className={`flex items-center gap-2 px-4 py-2 rounded-none font-bold text-xs transition cursor-pointer ${
                  simState === 'off'
                    ? 'bg-rose-700 text-white shadow ring-2 ring-rose-500/50'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>🛑 TURN OFF (Heading Home / Off-Duty)</span>
              </button>
            </div>

            {/* Simulated Customer Website View */}
            <div className="border-2 border-stone-300 rounded-none overflow-hidden shadow-sm">
              <div className="bg-stone-800 text-stone-300 px-4 py-2 text-xs font-mono flex items-center justify-between border-b border-stone-700">
                <span>SIMULATED CUSTOMER SMARTPHONE SCREEN</span>
                <span className={`px-2 py-0.5 rounded-none text-[10px] font-bold uppercase ${
                  simState === 'on' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-300'
                }`}>
                  {simState === 'on' ? 'Status: Broadcast Active' : 'Status: Location Protected'}
                </span>
              </div>

              {simState === 'on' ? (
                <div className="p-5 bg-stone-900 text-white space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-none text-xs font-bold font-mono uppercase">
                      <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse"></span>
                      🔴 LIVE NOW AT FOOD TRAILER
                    </span>
                    <span className="text-xs text-amber-400 font-bold font-mono">
                      Fryers Hot & Meats Smoking
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-['Playfair_Display']">
                      {simPreset.name}
                    </h3>
                    <p className="text-xs text-stone-300 font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{simPreset.address} • {simPreset.hours}</span>
                    </p>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <div className="flex-1 bg-amber-600 text-white font-bold py-2 px-3 rounded-none text-xs text-center uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get 1-Tap Google Directions</span>
                    </div>
                    <div className="bg-stone-800 border border-stone-700 text-stone-200 font-bold py-2 px-3 rounded-none text-xs flex items-center gap-1">
                      <span>Square POS Ready</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-stone-100 text-stone-800 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-none bg-stone-200 text-stone-600 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900">
                      🔒 Trailer Location is Private & Off-Duty
                    </h3>
                    <p className="text-xs text-stone-600 max-w-md mx-auto mt-1">
                      You are off the clock, prepping your hickory pellets, or traveling home. No live GPS coordinates are broadcast to protect your private residence.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-none border border-stone-200 text-xs text-stone-600 max-w-sm mx-auto font-mono">
                    <strong>Next Public Stop:</strong> Static Line Brewing Co. • Saturday 4:30 PM
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Section 3: The 3 Viable Options Compared */}
          <section className="space-y-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              The Three Practical Ways You Can Share Your Location
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Option A: Phone 1-Tap */}
              <div className="border-2 border-emerald-500 rounded-none p-5 bg-emerald-50/30 flex flex-col justify-between relative">
                <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-none shadow">
                  ⭐ Top Choice for Zero Extra Cost
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 pt-2">
                    <Smartphone className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-base text-stone-900">Option A: Your 1-Tap Phone Button</h3>
                  </div>

                  <p className="text-xs text-stone-600">
                    Built right into your private Pitmaster Admin screen on your site. You open your phone or Square iPad, tap <strong>"Update Location to Here"</strong>, and it grabs your spot instantly.
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-700 pt-2 border-t border-emerald-200 font-mono">
                    <div><strong>Device Cost:</strong> $0 (Uses your existing phone)</div>
                    <div><strong>Monthly Cost:</strong> $0 / month</div>
                    <div><strong>Battery Hassle:</strong> None</div>
                    <div><strong>Privacy:</strong> 100% In Your Control</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-emerald-800 font-medium">
                  ✓ Ready right now on your phone with zero monthly bills or extra gadgets to carry.
                </div>
              </div>

              {/* Option B: Physical GPS Puck */}
              <div className="border border-stone-300 rounded-none p-5 bg-white flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="font-bold text-base text-stone-900">Option B: Tracki 4G Magnetic Puck</h3>
                  </div>

                  <p className="text-xs text-stone-600">
                    A physical matchbox-sized magnetic GPS device kept on your trailer counter with an actual physical power slider switch. Flip <strong>ON</strong> at the window; flip <strong>OFF</strong> when hitching the trailer.
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-700 pt-2 border-t border-stone-200 font-mono">
                    <div><strong>Device Cost:</strong> ~$18.00 (Amazon)</div>
                    <div><strong>Monthly Cost:</strong> ~$13.95 / month (cellular SIM)</div>
                    <div><strong>Battery Hassle:</strong> Charge every 3-5 days</div>
                    <div><strong>Privacy:</strong> Good (Manual switch)</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                  ⚠️ Requires paying an ongoing monthly cellular fee and remembering to charge it.
                </div>
              </div>

              {/* Option C: Free Glympse Timer App */}
              <div className="border border-stone-300 rounded-none p-5 bg-white flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="font-bold text-base text-stone-900">Option C: Glympse Auto-Timer App</h3>
                  </div>

                  <p className="text-xs text-stone-600">
                    A free mobile app built for mobile businesses. You tap <strong>"Share for 4 Hours"</strong> when opening. When the timer runs out, it <em>automatically shuts off</em> so you can never forget on your drive home.
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-700 pt-2 border-t border-stone-200 font-mono">
                    <div><strong>Device Cost:</strong> $0 (Free App)</div>
                    <div><strong>Monthly Cost:</strong> $0 / month</div>
                    <div><strong>Battery Hassle:</strong> None</div>
                    <div><strong>Privacy:</strong> Automatic timer shutoff</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                  ✓ Great peace of mind if you ever worry about forgetting to turn it off when driving home.
                </div>
              </div>

            </div>
          </section>

          {/* Section 4: Full Comparison Matrix */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                4
              </span>
              Side-by-Side Comparison Matrix
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-none">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Evaluation Factor</th>
                    <th className="p-3 bg-emerald-50 text-emerald-900 border-x border-emerald-200">
                      Option A: Your 1-Tap Phone Button ⭐
                    </th>
                    <th className="p-3">Option B: Tracki GPS Puck</th>
                    <th className="p-3">Option C: Glympse Timer App</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-sans">
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Hardware Purchase</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">$0 (Existing Phone)</td>
                    <td className="p-3 text-stone-600">~$18.00 on Amazon</td>
                    <td className="p-3 text-stone-600">$0 (Free App)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Monthly Cellular Fee</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">$0 (Included in website)</td>
                    <td className="p-3 text-stone-600">~$13.95 / month</td>
                    <td className="p-3 text-stone-600">$0 / month</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Physical On/Off Switch?</td>
                    <td className="p-3 bg-emerald-50/50 text-stone-800 border-x border-emerald-200">1-Tap Screen Toggle</td>
                    <td className="p-3 text-stone-800">Physical Slider Switch</td>
                    <td className="p-3 text-stone-800">App Button + Auto-Timer</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Charging / Cables</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">None (Normal phone charge)</td>
                    <td className="p-3 text-stone-600">Recharge every 3–5 days</td>
                    <td className="p-3 text-stone-600">None</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Home Address Privacy</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">100% Protected</td>
                    <td className="p-3 text-amber-700">Tracks if left ON</td>
                    <td className="p-3 font-bold text-emerald-700">100% (Auto-expires)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-700">Customer Experience</td>
                    <td className="p-3 bg-emerald-50/50 font-bold text-emerald-700 border-x border-emerald-200">Directly on tisdalesbbq.com</td>
                    <td className="p-3 text-stone-600">External map link</td>
                    <td className="p-3 text-stone-600">Embedded Glympse map</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Why Not AirTags or OBD-II */}
          <section className="space-y-3 bg-stone-50 p-5 rounded-none border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Devices We Advise Against:</span>
            </h3>
            <ul className="text-xs space-y-2 text-stone-600 list-disc list-inside">
              <li>
                <strong>Apple AirTags:</strong> AirTags do <em>not</em> have public GPS broadcast capability. They only work on personal Apple IDs for keys and wallets, and cannot be connected to a public website.
              </li>
              <li>
                <strong>Engine Port Trackers (OBD-II / Bouncie):</strong> These plug into your truck’s diagnostic port and track 24/7. When you drive home at night or run errands, the tracker keeps broadcasting your personal location unless you crawl under the dash to unplug it each time.
              </li>
            </ul>
          </section>

          {/* Section 6: Action Plan / Partnership */}
          <section className="space-y-3 border-t border-stone-200 pt-6">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                5
              </span>
              Where We Suggest Starting Together
            </h2>

            <div className="bg-emerald-50 border border-emerald-200 rounded-none p-5 space-y-3">
              <h4 className="font-bold text-emerald-950 text-sm">
                Start with Option A (Your 1-Tap Website Admin Button)
              </h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Because you already have your smartphone (or your Square POS iPad) with you at the trailer, the 1-Tap button costs <strong>$0</strong> and has zero risk of draining an extra battery or charging a monthly subscription.
              </p>
              <ol className="text-xs space-y-1.5 text-emerald-800 list-decimal list-inside font-medium">
                <li>When you pull up to the Stop Button Arcade, Static Line Brewing, or a festival, you tap your private button.</li>
                <li>Your customers immediately see your exact spot and click for 1-tap driving directions.</li>
                <li>When the smoker is shut down, you tap "Off-Duty", and your home is 100% private.</li>
                <li>If you ever decide down the road that you'd rather have an actual physical switch on the trailer counter, we can order the $18 Tracki unit anytime!</li>
              </ol>
            </div>
          </section>

        </div>

        {/* Footer / Print Note */}
        <div className="p-6 bg-stone-100 border-t border-stone-200 text-center text-xs text-stone-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Tisdale’s Southern BBQ • Location & GPS Planning Brief • Crafted with Passion</span>
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
              onClick={() => setIsGpsWhitePageOpen(false)}
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
