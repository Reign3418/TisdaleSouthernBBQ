import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Flame, MapPin, Sparkles, Phone, AlertTriangle } from 'lucide-react';

export default function TopMarqueeBar() {
  const { announcements, schedule, setIsSpecialsModalOpen } = usePitmaster();

  return (
    <div className="bg-[#8C1B0B] text-white py-1.5 sm:py-2 px-2.5 sm:px-3 text-xs md:text-sm font-medium border-b border-[#B22510] shadow-sm sticky top-0 z-40 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Left: Real-time Location & Hours */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
          <span className="inline-flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-none text-amber-300 font-bold text-[10px] sm:text-[11px] tracking-wide uppercase shrink-0 border border-amber-400/20">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-none bg-emerald-400 animate-pulse"></span>
            <span className="hidden xs:inline">Today:</span>
          </span>
          <span className="flex items-center gap-1 truncate text-amber-100 text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
            <strong className="text-white truncate">{schedule.currentLocation.name}</strong>
            <span className="text-amber-200/80 hidden sm:inline">• {schedule.currentLocation.hours}</span>
          </span>
        </div>

        {/* Right: Status Tag / Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {!announcements.fryerOpen ? (
            <span className="inline-flex items-center gap-1 bg-rose-950/90 border border-rose-500 text-rose-200 px-2 py-0.5 rounded-none text-[10px] sm:text-[11px] font-bold">
              <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
              <span className="hidden sm:inline">Grease Off • Smoked Meats Ready</span>
              <span className="sm:hidden">Grease Off</span>
            </span>
          ) : (
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-amber-200 max-w-xs lg:max-w-md truncate">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
              <span className="truncate">{announcements.topMarquee || 'Hickory Smoker Fired Up Daily'}</span>
            </span>
          )}

          {/* Desktop Direct Call */}
          <a
            href="tel:9107092900"
            className="hidden sm:flex items-center gap-1 text-white hover:text-amber-200 text-[11px] font-bold px-2 py-0.5"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>910-709-2900</span>
          </a>

          {/* Specials Button */}
          <button
            onClick={() => setIsSpecialsModalOpen(true)}
            className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-none transition shadow text-[10px] sm:text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <Sparkles className="w-3 h-3 fill-stone-950" />
            <span className="hidden sm:inline">Today's Specials</span>
            <span className="sm:hidden">Specials</span>
          </button>
        </div>

      </div>
      {announcements.topMarquee && (
        <div className="md:hidden mt-1 pt-1 border-t border-white/15 text-[11px] text-amber-100 truncate text-center font-medium">
          {announcements.topMarquee}
        </div>
      )}
    </div>
  );
}
