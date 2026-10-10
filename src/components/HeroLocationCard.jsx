import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { MapPin, Navigation, Clock, Phone, AlertCircle, Calendar, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import SquareIcon from './icons/SquareIcon';
import PitFireSmokeCanvas from './effects/PitFireSmokeCanvas';

export default function HeroLocationCard() {
  const { schedule, announcements } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <section id="location" className="relative pt-6 pb-12 bg-[#120F0E] overflow-hidden">
      
      {/* 1. SMOLDERING PIT FIRE & HICKORY SMOKE ENGINE (Canvas Background) */}
      <PitFireSmokeCanvas />

      {/* Subtle architectural vertical gridlines for precision feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between max-w-7xl mx-auto px-4 z-0">
        <div className="w-px h-full bg-amber-500"></div>
        <div className="w-px h-full bg-amber-500"></div>
        <div className="w-px h-full bg-amber-500"></div>
        <div className="w-px h-full bg-amber-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Heartfelt Welcome Signboard with Clean Straight Precision Hairline Borders */}
        <div className="relative mb-6 p-4 rounded-none bg-[#1A1411]/90 backdrop-blur-sm border border-[#3E2E25] text-center shadow-lg">
          <p className="text-[#F59E0B] text-xs sm:text-sm font-bold uppercase tracking-widest font-['Bebas_Neue'] text-lg sm:text-xl">
            "Thank You for Choosing Us to Have Your Lunch or Dinner — We Appreciate Your Support!"
          </p>
          <p className="text-stone-300 text-xs mt-0.5">
            Slow-smoked hickory pellet meats, good food at affordable prices, and smiling faces.
          </p>
        </div>

        {/* Main Location & Trailer Showcase Card - Crisp 90-Degree Straight Lines */}
        <div className="relative rounded-none bg-[#171210]/95 backdrop-blur-md border border-[#3E2E25] p-5 sm:p-8 shadow-2xl transition-all duration-200">
          
          {/* Top Precision Metadata Strip */}
          <div className="flex items-center justify-between border-b border-[#35251F] pb-3 mb-5 font-mono text-[10px] text-stone-400 uppercase tracking-widest">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse"></span>
              <span>[ SPEC: 100% PURE HICKORY PELLETS • LOW & SLOW ]</span>
            </div>
            <span className="hidden sm:inline text-stone-500">
              ANDREWS, SC TRADITION • FAYETTEVILLE & SANFORD, NC
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Cols: Location & Pitmaster Welcome */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 bg-[#261B16] border border-[#523A2E] px-3 py-1 rounded-none text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-none bg-emerald-400"></span>
                <span>{current.date || "Today's Food Trailer Stop"}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
                  Come See Us Today at <br className="hidden sm:inline" />
                  <span className="text-[#FF7043]">
                    {current.name}
                  </span>
                </h2>
                
                <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-stone-200 text-sm sm:text-base">
                  <div className="flex items-center gap-1.5 text-amber-200 font-semibold">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{current.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-300 font-medium">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{current.hours}</span>
                  </div>
                </div>

                {current.notes && (
                  <p className="mt-2 text-xs sm:text-sm text-stone-400">
                    {current.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons with Snappy Instant Response & Straight Lines */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#D9381E] hover:bg-[#B72C15] active:translate-y-0.5 text-white font-black px-5 py-3 rounded-none text-sm transition-all duration-150 shadow-md cursor-pointer uppercase tracking-wider border border-[#FF6B35]/40"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:9107092900"
                  className="flex items-center gap-2 bg-[#251A15] hover:bg-[#34241D] active:translate-y-0.5 border border-[#4E3529] hover:border-amber-500/60 text-stone-100 font-bold px-4 py-3 rounded-none text-sm transition-all duration-150 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call to Order: (910) 709-2900</span>
                </a>

                <a
                  href="#specials-section"
                  className="flex items-center gap-1.5 text-amber-300 hover:text-white text-sm font-semibold underline underline-offset-4 px-2 py-1 transition"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>View Trailer Specials</span>
                </a>
              </div>

              {/* Square Payment Acceptance Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-2 bg-[#1C1512] border border-[#3E2E25] text-stone-200 px-3 py-1.5 rounded-none text-xs font-semibold">
                  <SquareIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>We Accept Square at the Window: Cards, Apple Pay, Tap & Cash</span>
                </span>
              </div>

              {/* Pitmaster Kitchen Policy Notice */}
              <div className="mt-4 p-4 rounded-none bg-[#201713] border border-[#3E2D24] text-xs sm:text-sm flex items-start gap-3 text-stone-300 relative">
                <Flame className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">A Quick Note From Donald:</strong>{" "}
                  <span>
                    All of our barbecue meats are slow-smoked with pure hickory pellets. Our whole wings and fried pork chops are fried hot and cooked to order.{" "}
                    <span className="text-rose-300 font-bold">
                      We turn the grease off 30 minutes before closing—nothing will be fried after cutoff!
                    </span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right 5 Cols: Trailer Photo & Weekly Schedule */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Card with authentic flame wrap & straight borders */}
              <div className="relative rounded-none overflow-hidden border border-[#443026] group shadow-xl">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale's BBQ Food Trailer"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                  <span className="bg-black/90 px-2.5 py-1 rounded-none border border-stone-700 font-bold text-amber-300 font-mono text-[11px]">
                    Family Owned & Operated
                  </span>
                  <span className="bg-[#D9381E] px-2.5 py-1 rounded-none text-white font-bold tracking-wider uppercase font-mono text-[11px]">
                    Low & Slow Smoke
                  </span>
                </div>
              </div>

              {/* Upcoming Weekly Stops Card with Precision Straight Lines */}
              <div className="relative bg-[#1A1411]/90 backdrop-blur-sm border border-[#3E2E25] rounded-none p-4 text-xs shadow-lg">
                <div className="flex items-center justify-between text-stone-300 font-bold uppercase tracking-wider mb-2.5 pb-2 border-b border-[#35261F]">
                  <span className="flex items-center gap-1.5 text-amber-400 font-['Bebas_Neue'] text-base tracking-wide">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Where to Find Us This Week
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono lowercase">check Facebook for pop-ups</span>
                </div>

                <div className="space-y-1.5 font-sans">
                  {schedule.upcomingLocations.map((loc, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between py-1.5 px-2 rounded-none border border-transparent hover:border-amber-500/20 hover:bg-white/5 transition-all duration-150"
                    >
                      <div className="truncate">
                        <strong className="text-amber-300 mr-2 font-mono text-[11px]">{loc.day}:</strong>
                        <span className="text-stone-200">{loc.location}</span>
                      </div>
                      <span className="text-[11px] text-stone-400 font-mono shrink-0 ml-2">{loc.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
