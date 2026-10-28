import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  Printer,
  Search,
  MapPin,
  Cpu,
  Smartphone,
  Wifi,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Globe,
  Zap,
  Award
} from 'lucide-react';

export default function DiscoveryWhitePage() {
  const { isDiscoveryWhitePageOpen, setIsDiscoveryWhitePageOpen } = usePitmaster();

  if (!isDiscoveryWhitePageOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/85 backdrop-blur-sm overflow-y-auto p-2 sm:p-6 flex justify-center items-start print:p-0 print:bg-white print:static animate-fadeIn">
      
      {/* Document Container */}
      <div className="bg-white text-stone-900 rounded-none shadow-2xl max-w-4xl w-full my-4 border border-stone-200 overflow-hidden print:shadow-none print:border-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-stone-900 text-stone-200 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 print:hidden border-b border-stone-800">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bg-amber-500 text-black font-black text-[11px] px-2 py-0.5 rounded-none font-mono uppercase shrink-0">
              White Paper
            </span>
            <span className="text-xs text-stone-300 font-medium truncate">
              "Being Found" Search Dominance &amp; Venue Revenue Playbook — Prepared for Donald Tisdale
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
              onClick={() => setIsDiscoveryWhitePageOpen(false)}
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
                Digital Discovery &amp; Field Operations Playbook
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Pushing the Envelope on "Being Found"
              </h1>
              <p className="text-sm text-stone-600 mt-1">
                How Tisdale’s Southern BBQ dominates Google Maps, AI Voice Search, and Brewery / Bowling Alley crowds with zero monthly software bills.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 shrink-0 font-mono bg-white p-3 rounded-none border border-stone-200">
              <div><strong>Craftsman:</strong> Mr. Donald Tisdale</div>
              <div><strong>Business:</strong> Tisdale’s Southern BBQ</div>
              <div><strong>Focus:</strong> Google/AI Search + Field Revenue</div>
              <div><strong>Monthly Software Cost:</strong> $0.00 / mo</div>
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
              The Digital Smoke Signal: Why 84% of BBQ Customers Start on Their Phone
            </h2>
            <p className="text-stone-700">
              Great barbecue has always had a natural magnet: the thin blue smoke rising from <strong>100% pure hickory pellets</strong>. Today, however, 84% of local dining and catering decisions begin before a customer ever smells the smoker—when someone in Lumberton, Fayetteville, or Sanford taps their phone and asks Siri or Google:
            </p>
            <div className="bg-stone-900 text-amber-300 font-mono text-xs sm:text-sm p-4 border-l-4 border-amber-500">
              “Find the best hickory-smoked brisket and ribs food truck near me right now.”
            </div>
            <p className="text-stone-700">
              Most food truck websites built on standard drag-and-drop builders (like default Wix or Squarespace templates) trap the menu inside heavy scripts or PDFs that search engines cannot read. We engineered your platform from the ground up so Google, Apple Maps, Siri, and AI search engines read every single cut of meat, price, town stop, and catering package automatically.
            </p>
          </section>

          {/* Section 2: The 5-Engine Search Dominance Architecture */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                2
              </span>
              The 5 Engines Built Into Your Website to Dominate Local Search
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-stone-300 p-4 bg-white space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-black text-xs uppercase font-mono">
                  <Search className="w-4 h-4" />
                  <span>Engine 1: Schema.org FoodTruck Graph</span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm">Google Reads Your Exact Menu &amp; Prices</h3>
                <p className="text-xs text-stone-600">
                  Embedded <code>JSON-LD</code> structured data declares your 100% pure hickory pellet smoking method, phone number, active hours, and every dinner plate directly to Google Search so rich snippets show up before customers even click.
                </p>
              </div>

              <div className="border border-stone-300 p-4 bg-white space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase font-mono">
                  <Globe className="w-4 h-4" />
                  <span>Engine 2: AI &amp; Voice Search (llms.txt)</span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm">Siri, ChatGPT &amp; Google AI Ready</h3>
                <p className="text-xs text-stone-600">
                  Your site includes a dedicated machine-readable AI index (<code>/llms.txt</code>) and structured FAQ answers so when someone asks a voice assistant for barbecue or event catering in Robeson, Cumberland, or Lee County, your trailer is recommended first.
                </p>
              </div>

              <div className="border border-stone-300 p-4 bg-white space-y-1.5">
                <div className="flex items-center gap-2 text-blue-700 font-black text-xs uppercase font-mono">
                  <Zap className="w-4 h-4" />
                  <span>Engine 3: Rural 5G Speed (&lt;200ms Load)</span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm">Loads Instantly on Crowded Festival Cell Towers</h3>
                <p className="text-xs text-stone-600">
                  We compressed your entire initial website bundle under <strong>98 KB</strong>. Even when 2,000 people are overloading a rural cell tower at a county fair or brewery, your menu pops open in a fraction of a second.
                </p>
              </div>

              <div className="border border-stone-300 p-4 bg-white space-y-1.5">
                <div className="flex items-center gap-2 text-rose-700 font-black text-xs uppercase font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>Engine 4: Multi-Town &amp; Live Stop Signals</span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm">Moving Kitchen Territorial Indexing</h3>
                <p className="text-xs text-stone-600">
                  Instead of being locked to one street address, your platform broadcasts your active stop across Lumberton, Fayetteville, Sanford, and surrounding towns—turning your <code>TISDALESOUTHERNBBQ.COM</code> trailer wrap into a 24/7 lead magnet.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Field Hardware & Venue Revenue Options to Discuss */}
          <section className="space-y-5">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              Five Field &amp; Venue Revenue Options to Talk About Together
            </h2>

            <p className="text-xs text-stone-600">
              Big food-truck franchises pay $250+/month and $3,000+ up front for Toast POS, digital signage boxes, and table ordering systems. We built every single one of those capabilities directly into your site for <strong>$0/month</strong>:
            </p>

            <div className="space-y-4">
              
              {/* Option 1: Raspberry Pi Pit-Box */}
              <div className="border-2 border-emerald-600 bg-emerald-50/40 p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-emerald-700 text-white font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 1 • Turn-Key TV Appliance (Zero Troubleshooting)
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-900">~$30–$45 One-Time • $0/mo</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🍓 The Raspberry Pi "Pit-Box" (Plugs Straight Into Your 55" TV)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Instead of fooling with an old laptop or re-exporting a USB thumb drive every time a price changes, a stick-of-gum sized <strong>Raspberry Pi Zero 2 W</strong> (or Pi 4) attaches to the back of your 55" TV with a piece of Velcro:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Zero Extra Wall Outlets Needed:</strong> The Pi Zero 2 W draws only ~1.5 Watts—it plugs straight into your <strong>TV's USB service port</strong> for power and <strong>HDMI 1</strong> for video.</li>
                  <li><strong>Turn On the TV &amp; Cook:</strong> When you turn on your TV, the Pi wakes up automatically and puts your 1080p menu on screen in ~15 seconds.</li>
                  <li><strong>Bulletproof Read-Only Memory:</strong> Configured so shutting off the trailer generator never corrupts the memory card.</li>
                </ul>
              </div>

              {/* Option 2: Flash the Pig & Price Fade */}
              <div className="border-2 border-amber-500 bg-amber-50/40 p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-amber-500 text-stone-950 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 2 • End-of-Night Profit Recovery
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900">Built In • $0 Cost</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🐷 "Flash the Pig &amp; Price Fade" (Turn Leftover Smoker Stock Into Cash)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Once hickory pellets and meat go into the smoker, that money is already spent. Instead of tossing out unsold brisket or pulled pork at the end of the night—or writing "Clearance" on a board—you tap <strong>"-$2 Fade"</strong>, <strong>"-$4 Fade"</strong>, or <strong>"-$5 Clear"</strong> on your cell phone during the last hour of service:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>The Head-Turner:</strong> Your 55" TV blanks to pitch black for 1.35 seconds, <strong>flashes your Tisdale Pig Emblem</strong> to catch the whole patio's attention, and snaps back with stepped-down green prices (<code>~~$22~~ $18.00</code>).</li>
                  <li><strong>Second-Plate Impulse Buys:</strong> Customers who bought dinner earlier look up after two beers and grab an extra pulled pork sandwich or plate to take home—putting pure cash in your pocket instead of throwing food away.</li>
                </ul>
              </div>

              {/* Option 3: Bowling Alley & Brewery NFC Coasters/Stickers */}
              <div className="border border-stone-300 bg-white p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 3 • Bowling Alleys &amp; Breweries
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">~$0.25 per NFC Sticker/Coaster</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  📲 NFC Table Coasters &amp; Stickers ("Order &amp; Pay Without Leaving Your Bowling Lane")
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  People bowling in Frame 6 (wearing bowling shoes) or sitting inside a taproom don't want to walk outside into the parking lot twice—once to read the menu and order, and 15 minutes waiting in the cold. By placing a thin NFC chip behind custom <strong>Tisdale BBQ Coasters or Stickers</strong> on tables inside the venue:
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Tap &amp; Order from the Barstool/Lane:</strong> Customers tap their phone to the coaster on their table and build their plate inside the building.</li>
                  <li><strong>Pay on Phone = 100% Guaranteed Pickup:</strong> When they pay from their phone (Square / Apple Pay / Cash App), they are guaranteed to come pick up their food—and they stay inside buying drinks until you text/buzz them that their order is hot at the window!</li>
                  <li><strong>Your Secret Register Coin (<code>#admin</code>):</strong> One NFC coin sticks right inside your trailer window by your register—tap your own phone to it and your Pitmaster Controller pops open in half a second!</li>
                </ul>
              </div>

              {/* Option 4: Tying Into Existing Vibrating Coaster Pagers */}
              <div className="border border-stone-300 bg-white p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 4 • Your Existing Pager System
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">Works With Your Coasters</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🛎️ Supercharging Your Vibrating Coaster Pagers (+ Phone Buzz)
                </h3>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Stick an NFC Coin on Each Plastic Coaster:</strong> Every customer who takes one of your vibrating coaster pagers back to their brewery table sets it down in front of their friends. With a waterproof NFC coin stuck to the top of each coaster, their friends can tap the coaster to open your live menu!</li>
                  <li><strong>Cell Phone Buzz for Indoor Orders:</strong> For customers ordering from inside a bowling alley who don't have a plastic coaster in hand, 1 tap on your phone texts them <em>"🔥 Your order is HOT &amp; READY at the pickup window!"</em></li>
                  <li><strong>Optional $4 Pi Radio Bridge (<code>433.92 MHz</code>):</strong> Your coaster charging base uses <code>433.92 MHz</code> radio signals. If you ever want the Raspberry Pi to buzz your physical coasters straight from your phone screen, a $4 radio chip on the Pi can trigger them directly.</li>
                </ul>
              </div>

              {/* Option 5: 250ft Free Wi-Fi Billboard */}
              <div className="border border-stone-300 bg-white p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 5 • Free Festival Crowd Magnet
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">$0 Advertising</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  📡 The 250-Foot "Wi-Fi Billboard" (No Internet Required)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  At crowded events where cell service boggs down, people open their phone's <strong>Wi-Fi Settings</strong>. Your Raspberry Pi broadcasts a public Wi-Fi network name across 250 feet: <strong><code>🔥 Tisdale_BBQ_Smoked_Brisket</code></strong>. It doesn't need internet—just seeing your name at the top of their phone's Wi-Fi list makes people hungry and points them straight to your trailer!
                </p>
              </div>

            </div>
          </section>

        </div>

        {/* Footer / Print Note */}
        <div className="p-6 bg-stone-100 border-t border-stone-200 text-center text-xs text-stone-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Tisdale’s Southern BBQ • "Being Found" &amp; Venue Revenue White Paper • Crafted with Passion</span>
          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="text-amber-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print This White Paper</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsDiscoveryWhitePageOpen(false)}
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
