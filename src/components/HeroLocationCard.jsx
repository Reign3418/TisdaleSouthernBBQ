import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { MapPin, Navigation, Clock, Phone, AlertCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroLocationCard() {
  const { schedule, announcements, setIsSpecialsModalOpen } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <section className="relative overflow-hidden pt-6 pb-8 bg-gradient-to-b from-[#181311] via-[#15100E] to-[#120F0E]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Banner Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#241C18] via-[#1E1714] to-[#17110F] border border-[#44342C] p-5 sm:p-7 shadow-2xl overflow-hidden">
          
          {/* Subtle warm ember background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left 7 Cols: Today's Location & Real-Time Status */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/40 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{current.date || "Today's Food Trailer Stop"}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
                  Catch Us Today at <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#FF6B35]">
                    {current.name}
                  </span>
                </h2>
                
                <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-stone-200 text-sm sm:text-base">
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
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2.5 rounded-lg text-sm transition shadow-md shadow-amber-950/30"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:9107092900"
                  className="flex items-center gap-2 bg-[#2D231E] hover:bg-[#3D2F28] border border-[#533F34] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call to Order Ahead</span>
                </a>

                <button
                  onClick={() => setIsSpecialsModalOpen(true)}
                  className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 text-sm font-semibold underline underline-offset-4 px-2 py-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>See Chalkboard Specials</span>
                </button>
              </div>

              {/* Kitchen Policy Alert (The Fryer Grease Rule) */}
              <div className="mt-4 p-3.5 rounded-xl bg-black/40 border border-amber-900/40 text-xs sm:text-sm flex items-start gap-3 text-stone-300">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-200">Pitmaster Operating Notice:</strong>{" "}
                  <span>
                    Our meats (Brisket, Ribs, Pulled Pork, Turkey Legs) are smoked slow & hot daily. Whole wings and pork chops are cooked fresh to order.{" "}
                    <span className="text-rose-300 font-bold">
                      We turn the grease off 30 minutes before closing—nothing will be fried after cutoff!
                    </span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right 5 Cols: Trailer Photo & Upcoming Stops */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Card with authentic flame wrap */}
              <div className="relative rounded-xl overflow-hidden border-2 border-amber-500/30 group shadow-lg">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale's BBQ Food Trailer"
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                  <span className="bg-black/70 backdrop-blur px-2.5 py-1 rounded border border-white/20 font-bold text-amber-300">
                    NC Plate DA-54744
                  </span>
                  <span className="bg-[#D9381E] px-2.5 py-1 rounded text-white font-bold tracking-wider">
                    LOW & SLOW SMOKE
                  </span>
                </div>
              </div>

              {/* Mini Upcoming Schedule Card */}
              <div className="bg-[#181311] border border-[#3A2E28] rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between text-stone-300 font-bold uppercase tracking-wider mb-2.5 pb-1.5 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    Upcoming Stops This Week
                  </span>
                  <span className="text-[10px] text-stone-400 lowercase">subject to weather</span>
                </div>

                <div className="space-y-1.5">
                  {schedule.upcomingLocations.slice(0, 3).map((loc, i) => (
                    <div key={i} className="flex items-center justify-between py-1 px-2 rounded hover:bg-white/5 transition">
                      <div className="truncate">
                        <strong className="text-amber-200 mr-2">{loc.day}:</strong>
                        <span className="text-stone-300">{loc.location}</span>
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
