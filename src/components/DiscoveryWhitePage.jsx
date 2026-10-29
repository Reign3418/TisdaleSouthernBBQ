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
  const {
    isDiscoveryWhitePageOpen,
    setIsDiscoveryWhitePageOpen,
    setIsTrailerSimOpen,
    setIsTvWhitePageOpen,
    setIsGpsWhitePageOpen
  } = usePitmaster();

  if (!isDiscoveryWhitePageOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/85 backdrop-blur-sm overflow-y-auto p-2 sm:p-6 flex justify-center items-start print:p-0 print:bg-white print:static animate-fadeIn">
      
      {/* Document Container */}
      <div className="bg-white text-stone-900 rounded-none shadow-2xl max-w-4xl w-full my-4 border border-stone-200 overflow-hidden print:shadow-none print:border-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-stone-900 text-stone-200 px-3 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 print:hidden border-b border-stone-800">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bg-amber-400 text-black font-black text-[11px] px-2 py-0.5 rounded-none font-mono uppercase shrink-0">
              📄 Master White Paper
            </span>
            <span className="text-xs text-stone-300 font-medium truncate">
              Field Hardware, Venue Revenue &amp; &quot;Being Found&quot; Playbook — Prepared for Donald Tisdale
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setIsDiscoveryWhitePageOpen(false);
                setIsTrailerSimOpen(true);
              }}
              className="px-2.5 py-1.5 rounded-none bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition cursor-pointer"
              title="Open Live Trailer + Phone Simulator"
            >
              🚚 Open Live Sim
            </button>

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
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* White Paper Header */}
        <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-amber-800 text-xs font-black uppercase tracking-widest block font-mono">
                Meat &amp; Potatoes First • Field Operations &amp; Search Playbook
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Trailer Tech Options &amp; &quot;Being Found&quot; Architecture
              </h1>
              <p className="text-sm text-stone-600 mt-1">
                Six hands-free options to talk about for your 55&quot; Trailer TV, Bowling Alley / Brewery crowds, and Google Search dominance—with <strong>$0/month software bills</strong> and a <strong>2-second USB fail-safe</strong>.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 shrink-0 font-mono bg-white p-3 rounded-none border border-stone-200">
              <div><strong>Craftsman:</strong> Mr. Donald Tisdale</div>
              <div><strong>Business:</strong> Tisdale’s Southern BBQ</div>
              <div><strong>Focus:</strong> Trailer TV + NFC + Google</div>
              <div><strong>Monthly Software Cost:</strong> $0.00 / mo</div>
            </div>
          </div>

          {/* Quick Jump Bar Inside White Paper (Hidden on print) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200 print:hidden text-xs">
            <span className="font-mono font-bold text-stone-500 uppercase text-[10px]">Companion Guides:</span>
            <button
              onClick={() => {
                setIsDiscoveryWhitePageOpen(false);
                setIsTvWhitePageOpen(true);
              }}
              className="px-2.5 py-1 bg-white hover:bg-amber-50 border border-stone-300 font-bold text-stone-800 cursor-pointer"
            >
              📺 Deep-Dive: TV Sync Guide
            </button>
            <button
              onClick={() => {
                setIsDiscoveryWhitePageOpen(false);
                setIsGpsWhitePageOpen(true);
              }}
              className="px-2.5 py-1 bg-white hover:bg-amber-50 border border-stone-300 font-bold text-stone-800 cursor-pointer"
            >
              📍 Deep-Dive: GPS Options Guide
            </button>
          </div>
        </div>

        {/* Document Body — MEAT & POTATOES AT THE VERY TOP */}
        <div className="p-6 sm:p-10 space-y-10 text-stone-800 leading-relaxed text-sm">

          {/* Section 1: Six Field Hardware & Venue Revenue Options (Moved to #1!) */}
          <section className="space-y-5">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                1
              </span>
              The Meat &amp; Potatoes: Six Field &amp; Venue Options to Talk About Together
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

              {/* Option 2: Flash the Pig & Event-Specific Pricing */}
              <div className="border-2 border-amber-500 bg-amber-50/40 p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-amber-500 text-stone-950 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 2 • Event-Specific Pricing (Silent Tier Sync)
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900">Built In • $0 Cost</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  🐷 &quot;Flash the Pig&quot; &amp; Event-Specific Pricing (Flexible Venue &amp; Event Menus)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Seamless Event &amp; Venue Pricing:</strong> Different festivals, breweries, and special events call for different menu pricing—and you never want messy crossed-out numbers on your board. Your phone gives you 1-tap <strong>Event-Specific Pricing Tiers</strong> (<code>Standard</code>, <code>Event -$2</code>, <code>Event -$4</code>, <code>Event -$5</code>):
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>The Seamless Brand Bumper:</strong> When you tap an Event Pricing Tier on your phone, your 55&quot; TV briefly blanks for 1.3 seconds and <strong>flashes your Tisdale Pig Emblem</strong> like a natural TV commercial bumper.</li>
                  <li><strong>Zero Crossed-Out Numbers or &quot;Discount&quot; Signs:</strong> When the menu reappears 1 second later, the updated prices are simply displayed in the normal gold menu font—with <strong>no crossed-out old prices and zero &quot;discount&quot; banners</strong>. To anyone walking up to the window, that is simply today&apos;s Event Menu price!</li>
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

              {/* Option 5: 250ft Free Wi-Fi Billboard & Dead-Zone Captive Portal */}
              <div className="border border-stone-300 bg-white p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-stone-900 text-amber-400 font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 5 • Dead-Cell-Tower Festival Mode &amp; Wi-Fi Billboard
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">Works 100% Offline</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  📡 250ft "Wi-Fi Billboard" + NFC Ad-Hoc Offline Sync + Menu Disclaimer
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  At a massive festival where cell towers are overloaded and nobody has internet, how does your phone still update the TV—and how do customers still see your menu?
                </p>
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  <li><strong>Direct Phone-to-Pi Ad-Hoc Link (4 Feet):</strong> The Raspberry Pi stores a complete copy of your website on its memory card and creates its own private trailer radio bubble (<code>192.168.4.1</code>). When you tap your register NFC coin, your phone talks directly to the Pi 4 feet away—updating the TV in 2 milliseconds with <strong>zero cell service required</strong>.</li>
                  <li><strong>Free 250ft Wi-Fi Billboard &amp; Captive Portal:</strong> Outside, the Pi broadcasts <strong><code>🔥 Tisdale_BBQ_Smoked_Brisket</code></strong>. When customers with no cell signal tap that Wi-Fi name, your offline menu automatically pops up on their phone screen (just like hotel/airport Wi-Fi!).</li>
                  <li><strong>Simple 1-Line Menu Disclaimer:</strong> If you switch to <em>Event-Specific Pricing</em> on the trailer TV while a customer inside a bowling alley is looking at the standard online menu, a clean 1-line note on the menu states: <em>&quot;Final availability and event-specific pricing are confirmed at the pickup window.&quot;</em></li>
                </ul>
              </div>

              {/* Option 6: 30-Minute Raspberry Pi Heartbeat Watchdog & Home-Base Geofence */}
              <div className="border-2 border-emerald-500 bg-emerald-50/40 p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-emerald-700 text-white font-mono font-black text-[10px] uppercase px-2.5 py-0.5">
                    Option 6 • 30-Min Pi "Heartbeat" &amp; Home Geofence Auto-Shutoff
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-900">100% Hands-Free Automation</span>
                </div>
                <h3 className="font-black text-base text-stone-900">
                  💓 30-Minute Raspberry Pi Heartbeat + Home-Base Geofence Auto-Shutoff
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  What if a festival cell tower dies mid-shift, or what if you are exhausted after a 14-hour cook and forget to tap <strong>"Close Kitchen / Off-Duty"</strong> on your drive home?
                </p>
                <ul className="text-xs space-y-1.5 text-stone-700 list-disc list-inside">
                  <li><strong>30-Minute Pi-to-Website "Heartbeat" (Auto-Offline Mode):</strong> Whenever your 55&quot; Trailer TV is powered on, the Raspberry Pi quietly sends a tiny &quot;I&apos;m alive&quot; ping to the master website every 5 minutes. If the master website doesn&apos;t hear from the Pi for <strong>30 minutes during open shift hours</strong> (because festival cell towers are jammed), the online website automatically kicks into <strong>Festival Offline Mode</strong>—reverting to standard base prices and displaying a banner: <em>&quot;📡 Trailer is at a high-traffic event! Check the 55&quot; Trailer TV at the window for live Sold-Out updates &amp; Event-Specific Pricing.&quot;</em></li>
                  <li><strong>Automatic Nightly Reset When TV Turns Off:</strong> When you turn off the 55&quot; Trailer TV at the end of the night, the Pi turns off with it. After 30 minutes of no heartbeat after closing time, the website automatically flips to <em>&quot;Pit Resting for the Night&quot;</em> and resets all Sold-Out and Event Pricing tiers fresh for tomorrow!</li>
                  <li><strong>Home-Base Geofence Auto-Shutoff (100% Home Privacy):</strong> We set an invisible 0.5-mile circle (geofence) around your home / overnight trailer parking spot. As soon as your phone or trailer enters that circle on your drive home, the system <strong>automatically shuts off live GPS location sharing and closes the digital kitchen</strong>—so even if you forget to tap a button after a long night, your home address is 100% protected.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 2: Zero-Downtime Fail-Safe & Crawl-Walk-Run Rollout */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-emerald-700 text-white flex items-center justify-center text-xs font-bold font-mono">
                2
              </span>
              Our #1 Rule: Zero Downtime, Zero Overwhelm &amp; The "2-Second Fail-Safe"
            </h2>

            <div className="bg-emerald-50 border-2 border-emerald-600 p-5 space-y-3 text-xs">
              <h3 className="font-black text-sm sm:text-base text-emerald-950 uppercase tracking-wide">
                🛡️ Technology Must Never Slow Down Your Window During a Rush
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Computers and electronics can sometimes have a mind of their own—and during a Friday night dinner rush, <strong>every minute of downtime is lost revenue</strong>. You should never have to stop cooking or serving customers to troubleshoot a gadget. Here is how we guarantee these ideas never overwhelm you or slow you down:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-emerald-300 p-3.5 space-y-1">
                  <div className="font-mono font-black text-emerald-800 uppercase text-[11px]">
                    1. The 2-Second USB Fail-Safe
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Your <strong>USB thumb drive stays plugged into your TV permanently</strong> as your indestructible backup while the Raspberry Pi plugs into <code>HDMI 1</code>. If technology ever hiccups, you don't troubleshoot anything—just press <strong>INPUT → USB</strong> on your TV remote and your static menu is back up in 2 seconds flat!
                  </p>
                </div>

                <div className="bg-white border border-emerald-300 p-3.5 space-y-1">
                  <div className="font-mono font-black text-emerald-800 uppercase text-[11px]">
                    2. On-Site Testing Together
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Nothing goes onto your trailer until it is 100% bench-tested beforehand. Even then, I will be right there on-site with you for the first couple of shifts to test it live and make sure it runs hands-free before you ever solo it.
                  </p>
                </div>

                <div className="bg-white border border-emerald-300 p-3.5 space-y-1">
                  <div className="font-mono font-black text-emerald-800 uppercase text-[11px]">
                    3. "Crawl → Walk → Run" Pace
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Every option in this paper is just a tool on the shelf. We start with <strong>Phase 1</strong> (Website + USB backup + passive NFC stickers that have no batteries and can never crash), and only turn on Phase 2 or Phase 3 features if and when you want them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The 5-Engine Search Dominance Architecture ("Being Found") */}
          <section className="space-y-4">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="w-6 h-6 rounded-none bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </span>
              &quot;Being Found&quot;: How Your Website Dominates Google, Siri &amp; AI Search
            </h2>
            <p className="text-xs text-stone-700">
              84% of local dining and catering decisions begin when someone in Lumberton, Fayetteville, or Sanford asks Siri or Google for barbecue near them. Unlike standard drag-and-drop website builders that trap menus inside heavy scripts, your site has <strong>4 built-in search engines</strong> working 24/7:
            </p>

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
