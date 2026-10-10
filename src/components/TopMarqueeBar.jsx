import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Flame, MapPin, Clock, AlertTriangle, Sparkles, ChefHat } from 'lucide-react';

export default function TopMarqueeBar() {
  const { announcements, schedule, setIsSpecialsModalOpen, setIsPitmasterMode } = usePitmaster();

  return (
    <div className="bg-gradient-to-r from-[#8B0000] via-[#D9381E] to-[#B32400] text-white py-2 px-3 text-xs md:text-sm font-medium border-b border-[#FF6B4A]/30 shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Real-time Location & Hours Pill */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full text-amber-300 font-semibold text-[11px] tracking-wide uppercase shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Live On Site
          </span>
          <span className="flex items-center gap-1 truncate text-amber-100">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <strong className="text-white">{schedule.currentLocation.name}</strong>
            <span className="text-amber-200/80 hidden sm:inline">• {schedule.currentLocation.hours}</span>
          </span>
        </div>

        {/* Center: Live Fryer / Kitchen Status */}
        <div className="flex items-center gap-2 shrink-0">
          {announcements.fryerOpen ? (
            <span className="inline-flex items-center gap-1 bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-0.5 rounded-full text-[11px]">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Smoker & Fryer: <strong>HOT & READY</strong></span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-rose-950/80 border border-rose-500 text-rose-200 px-2.5 py-0.5 rounded-full text-[11px] font-bold animate-pulse">
              <AlertTriangle className="w-3 h-3 text-rose-400" />
              <span>GREASE IS OFF (Fryer Closed) • Smoked Meats Available</span>
            </span>
          )}

          {/* Spot 1: Specials Trigger Button */}
          <button
            onClick={() => setIsSpecialsModalOpen(true)}
            className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-2.5 py-1 rounded-md transition shadow-sm text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <Sparkles className="w-3 h-3 fill-stone-950" />
            <span>Today's Specials</span>
          </button>

          {/* Quick Pitmaster Toggle */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            title="Pitmaster Quick Admin (1-Tap Stock & Grease Updates)"
            className="hidden md:flex items-center gap-1 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 px-2 py-1 rounded text-[11px] transition border border-white/10"
          >
            <ChefHat className="w-3 h-3" />
            <span>Pitmaster Admin</span>
          </button>
        </div>

      </div>
    </div>
  );
}
