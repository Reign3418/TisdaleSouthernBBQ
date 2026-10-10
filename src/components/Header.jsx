import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Phone, ShoppingBag, Sparkles, ChefHat, Flame } from 'lucide-react';

export default function Header() {
  const { cartItemCount, setIsCartOpen, setIsSpecialsModalOpen, setIsPitmasterMode } = usePitmaster();

  return (
    <header className="bg-[#181311] border-b border-[#362A25] relative">
      {/* Decorative top ember line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-rose-600 to-amber-600"></div>

      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Brand & Pig Logo */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-center md:text-left">
            <div className="relative group shrink-0">
              <img
                src="./images/truck-logo-wrap.jpg"
                alt="Tisdale's Southern BBQ Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-500/80 shadow-lg shadow-orange-950/40 ring-2 ring-black/60 group-hover:scale-105 transition"
              />
              <span className="absolute -bottom-1 -right-1 bg-[#D9381E] text-white p-1 rounded-full shadow border border-black/50">
                <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Andrews, SC Roots • Fayetteville, NC
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-white uppercase font-['Bebas_Neue'] leading-none mt-1">
                Tisdale's <span className="text-[#FF6B35]">Southern BBQ</span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-300 font-medium tracking-tight mt-0.5">
                Mouth-Watering, Tongue-Twisting BBQ • <span className="text-amber-400 font-semibold">Real Wood-Smoked Meats</span>
              </p>
            </div>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center flex-wrap justify-center gap-2.5 sm:gap-3">
            
            {/* Phone Call Button */}
            <a
              href="tel:9107092900"
              className="flex items-center gap-2 bg-[#28211E] hover:bg-[#342B27] border border-[#4A3B34] text-amber-100 px-3.5 py-2.5 rounded-lg font-semibold text-sm transition shadow-sm hover:border-amber-500/50"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>910-709-2900</span>
            </a>

            {/* Specials Spotlight Trigger Button */}
            <button
              onClick={() => setIsSpecialsModalOpen(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-black px-4 py-2.5 rounded-lg text-sm transition shadow-lg shadow-orange-950/50 cursor-pointer uppercase tracking-wide"
            >
              <Sparkles className="w-4 h-4 fill-stone-950" />
              <span>Today's Specials</span>
            </button>

            {/* Order Tray / Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#D9381E] hover:bg-[#E64A19] text-white font-bold px-4 py-2.5 rounded-lg text-sm transition shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">My Plate</span>
              {cartItemCount > 0 && (
                <span className="bg-amber-400 text-stone-950 text-xs font-black px-2 py-0.5 rounded-full shadow">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Pitmaster Mode Button */}
            <button
              onClick={() => setIsPitmasterMode(true)}
              className="flex items-center gap-1.5 bg-[#1F1815] hover:bg-[#2B211D] border border-amber-600/40 text-amber-300 font-medium px-3 py-2.5 rounded-lg text-xs transition cursor-pointer"
              title="Pitmaster Quick Admin"
            >
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span className="hidden lg:inline">Pitmaster Quick Admin</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
