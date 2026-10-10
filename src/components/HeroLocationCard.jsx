import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { MapPin, Navigation, Clock, Phone, AlertCircle, Calendar, Sparkles, Heart, Flame } from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function HeroLocationCard() {
  const { schedule, announcements, setIsSpecialsModalOpen } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <section id="location" className="relative overflow-hidden pt-6 pb-8 bg-gradient-to-b from-[#181311] via-[#15100E] to-[#120F0E]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heartfelt Welcome Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#2A1D17] via-[#211612] to-[#2A1D17] border border-[#48362D] text-center shadow-lg">
          <p className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
            "Thank You for Choosing Us to Have Your Lunch or Dinner — We Appreciate Your Support!"
          </p>
          <p className="text-stone-300 text-xs mt-1 italic">
            Real wood-smoked meats, good food at affordable prices, and smiling faces.
          </p>
        </div>

        {/* Main Location & Trailer Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#241C18] via-[#1E1714] to-[#17110F] border border-[#44342C] p-5 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* Subtle warm ember glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 Cols: Location & Pitmaster Welcome */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/40 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{current.date || "Today's Food Trailer Stop"}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
                  Come See Us Today at <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#FF6B35]">
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
                  <p className="mt-2 text-xs sm:text-sm text-stone-400 italic">
                    {current.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black px-5 py-3 rounded-xl text-sm transition shadow-lg shadow-orange-950/40"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:9107092900"
                  className="flex items-center gap-2 bg-[#2D231E] hover:bg-[#3D2F28] border border-[#533F34] text-white font-bold px-4 py-3 rounded-xl text-sm transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call to Order: (910) 709-2900</span>
                </a>

                <a
                  href="#specials-section"
                  className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 text-sm font-semibold underline underline-offset-4 px-2 py-1"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>View Trailer Specials</span>
                </a>
              </div>

              {/* Square Payment Acceptance Pill */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-2 bg-[#1A1412] border border-[#3C2D25] text-amber-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-inner">
                  <SquareIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>We Accept Square at the Window • Cards, Apple Pay, Tap & Cash</span>
                </span>
              </div>

              {/* Pitmaster Kitchen Policy Notice */}
              <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-amber-900/40 text-xs sm:text-sm flex items-start gap-3 text-stone-300">
                <Flame className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">A Quick Note From Donald:</strong>{" "}
                  <span>
                    All of our barbecue meats are slow-smoked with real wood smoke. Our whole wings and fried pork chops are fried hot and cooked to order.{" "}
                    <span className="text-rose-300 font-bold">
                      We turn the grease off 30 minutes before closing—nothing will be fried after cutoff!
                    </span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right 5 Cols: Trailer Photo & Weekly Schedule */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Card with authentic flame wrap */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 group shadow-xl">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale's BBQ Food Trailer"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                  <span className="bg-black/80 backdrop-blur px-2.5 py-1 rounded-md border border-white/20 font-bold text-amber-300">
                    NC Food Trailer DA-54744
                  </span>
                  <span className="bg-[#D9381E] px-2.5 py-1 rounded-md text-white font-black tracking-wider uppercase">
                    Low & Slow Real Smoke
                  </span>
                </div>
              </div>

              {/* Upcoming Weekly Stops Card */}
              <div className="bg-[#181311] border border-[#3A2E28] rounded-2xl p-4 text-xs">
                <div className="flex items-center justify-between text-stone-300 font-bold uppercase tracking-wider mb-2.5 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    Where to Find Us This Week
                  </span>
                  <span className="text-[10px] text-stone-400 lowercase">check Facebook for pop-ups</span>
                </div>

                <div className="space-y-1.5">
                  {schedule.upcomingLocations.map((loc, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-white/5 transition">
                      <div className="truncate">
                        <strong className="text-amber-300 mr-2">{loc.day}:</strong>
                        <span className="text-stone-200">{loc.location}</span>
                      </div>
                      <span className="text-[11px] text-stone-400 shrink-0 ml-2">{loc.hours}</span>
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
