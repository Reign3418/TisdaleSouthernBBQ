import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { MapPin, Navigation, Clock, Phone, AlertCircle, Calendar, Sparkles, Flame } from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function HeroLocationCard() {
  const { schedule, announcements } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <section id="location" className="relative pt-6 pb-8 bg-[#120F0E]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heartfelt Welcome Signboard */}
        <div className="mb-6 p-4 rounded-xl bg-[#1C1613] border border-[#3E2E25] text-center">
          <p className="text-[#F59E0B] text-xs sm:text-sm font-bold uppercase tracking-widest font-['Bebas_Neue'] text-lg sm:text-xl">
            "Thank You for Choosing Us to Have Your Lunch or Dinner — We Appreciate Your Support!"
          </p>
          <p className="text-stone-300 text-xs mt-0.5">
            Real wood-smoked meats, good food at affordable prices, and smiling faces.
          </p>
        </div>

        {/* Main Location & Trailer Showcase Card */}
        <div className="relative rounded-2xl bg-[#1A1412] border-2 border-[#3E2E25] p-5 sm:p-8 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Cols: Location & Pitmaster Welcome */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 bg-[#261B16] border border-[#523A2E] px-3 py-1 rounded-md text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#D9381E] hover:bg-[#B72C15] text-white font-black px-5 py-3 rounded-lg text-sm transition shadow cursor-pointer uppercase tracking-wider"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:9107092900"
                  className="flex items-center gap-2 bg-[#2D211C] hover:bg-[#3D2E27] border border-[#523C30] text-stone-100 font-bold px-4 py-3 rounded-lg text-sm transition"
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

              {/* Square Payment Acceptance */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-2 bg-[#241B17] border border-[#3E2E25] text-stone-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
                  <SquareIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>We Accept Square at the Window: Cards, Apple Pay, Tap & Cash</span>
                </span>
              </div>

              {/* Pitmaster Kitchen Policy Notice */}
              <div className="mt-4 p-4 rounded-xl bg-[#221915] border border-[#443126] text-xs sm:text-sm flex items-start gap-3 text-stone-300">
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
              <div className="relative rounded-xl overflow-hidden border-2 border-[#4A372E] group shadow-lg">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale's BBQ Food Trailer"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                  <span className="bg-black/90 px-2.5 py-1 rounded border border-stone-700 font-bold text-amber-300">
                    Family Owned & Operated
                  </span>
                  <span className="bg-[#D9381E] px-2.5 py-1 rounded text-white font-bold tracking-wider uppercase">
                    Low & Slow Smoke
                  </span>
                </div>
              </div>

              {/* Upcoming Weekly Stops Card */}
              <div className="bg-[#1C1613] border border-[#3E2E25] rounded-xl p-4 text-xs">
                <div className="flex items-center justify-between text-stone-300 font-bold uppercase tracking-wider mb-2.5 pb-2 border-b border-stone-800">
                  <span className="flex items-center gap-1.5 text-amber-400 font-['Bebas_Neue'] text-base tracking-wide">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Where to Find Us This Week
                  </span>
                  <span className="text-[10px] text-stone-400 lowercase">check Facebook for pop-ups</span>
                </div>

                <div className="space-y-1.5">
                  {schedule.upcomingLocations.map((loc, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/5 transition">
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
