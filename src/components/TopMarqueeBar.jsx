import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Flame, MapPin, Sparkles, Phone, AlertTriangle } from 'lucide-react';

export default function TopMarqueeBar() {
  const { announcements, schedule, setIsSpecialsModalOpen } = usePitmaster();

  return (
    <div className="bg-[#8C1B0B] text-white py-2 px-3 text-xs md:text-sm font-medium border-b border-[#B22510] shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Real-time Location & Hours */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 bg-black/40 px-2.5 py-0.5 rounded text-amber-300 font-bold text-[11px] tracking-wide uppercase shrink-0 border border-amber-400/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Today's Trailer Stop
          </span>
          <span className="flex items-center gap-1.5 truncate text-amber-100">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <strong className="text-white">{schedule.currentLocation.name}</strong>
            <span className="text-amber-200/80 hidden sm:inline">• {schedule.currentLocation.hours}</span>
          </span>
        </div>

        {/* Right: Quick friendly call & specials buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {!announcements.fryerOpen ? (
            <span className="inline-flex items-center gap-1 bg-rose-950/80 border border-rose-500 text-rose-200 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
              <AlertTriangle className="w-3 h-3 text-rose-400" />
              <span>Grease Off (Fryer Closed) • Smoked Meats Ready</span>
            </span>
          ) : (
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-amber-200">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Wood Smoker Fired Up Daily</span>
            </span>
          )}

          <a
            href="tel:9107092900"
            className="flex items-center gap-1 text-white hover:text-amber-200 text-[11px] font-bold px-2 py-0.5"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>910-709-2900</span>
          </a>

          <button
            onClick={() => setIsSpecialsModalOpen(true)}
            className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-2.5 py-1 rounded-md transition shadow text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <Sparkles className="w-3 h-3 fill-stone-950" />
            <span>Today's Specials</span>
          </button>
        </div>

      </div>
    </div>
  );
}
