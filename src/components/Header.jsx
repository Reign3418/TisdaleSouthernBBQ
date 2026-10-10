import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Phone, Sparkles, Flame, Calendar, Heart, Utensils } from 'lucide-react';

export default function Header() {
  const { setIsSpecialsModalOpen } = usePitmaster();

  return (
    <header className="bg-[#181311] border-b border-[#362A25] relative">
      {/* Solid hickory-fired top border line */}
      <div className="h-1 w-full bg-[#D9381E]"></div>

      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Brand & Pig Logo with Crisp Craftsman Frame */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-center md:text-left">
            <div className="relative group shrink-0">
              <img
                src="./images/truck-logo-wrap.jpg"
                alt="Tisdale's Southern BBQ Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-none object-cover border-2 border-amber-500/80 shadow-lg shadow-orange-950/40 ring-1 ring-black/60 group-hover:scale-105 transition"
              />
              <span className="absolute -bottom-1 -right-1 bg-[#D9381E] text-white p-1 rounded-none shadow border border-black/50">
                <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-amber-400 text-[11px] font-bold uppercase tracking-widest bg-amber-950/70 px-2.5 py-0.5 rounded-none border border-amber-500/30">
                  Andrews, SC Roots • Fayetteville, NC
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-white uppercase font-['Bebas_Neue'] leading-none mt-1">
                Tisdale's <span className="text-[#FF6B35]">Southern BBQ</span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-300 font-medium tracking-tight mt-0.5">
                Mouth-Watering, Tongue-Twisting BBQ • <span className="text-amber-400 font-semibold">Real Hickory-Smoked Meats</span>
              </p>
            </div>
          </div>

          {/* Right: Friendly Navigation & Direct Call */}
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3">
            
            {/* Quick in-page links */}
            <nav className="hidden lg:flex items-center gap-3 text-xs font-bold text-stone-300 mr-2">
              <a href="#location" className="hover:text-amber-400 transition">Today's Stop</a>
              <a href="#about-donald" className="hover:text-amber-400 transition flex items-center gap-1">
                <Heart className="w-3 h-3 text-rose-400" /> Donald's Story
              </a>
              <a href="#specials-section" className="hover:text-amber-400 transition">Trailer Specials</a>
              <a href="#main-menu" className="hover:text-amber-400 transition">Full Menu</a>
              <a href="#about-catering" className="hover:text-amber-400 transition">Catering</a>
            </nav>

            {/* Direct Phone Call Button */}
            <a
              href="tel:9107092900"
              className="flex items-center gap-2 bg-[#28211E] hover:bg-[#342B27] border border-[#4A3B34] text-amber-100 px-3.5 py-2 rounded-none font-bold text-xs sm:text-sm transition shadow-sm hover:border-amber-500/50"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(910) 709-2900</span>
            </a>

            {/* Specials Spotlight Trigger Button */}
            <button
              onClick={() => setIsSpecialsModalOpen(true)}
              className="flex items-center gap-1.5 bg-[#D9381E] hover:bg-[#B72C15] text-white font-black px-4 py-2 rounded-none text-xs sm:text-sm transition shadow cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
              <span>Today's Specials</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
