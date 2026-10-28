import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Palette, Flame, UtensilsCrossed, ClipboardList, Radio, ChefHat, Tv, Search } from 'lucide-react';

export default function DesignSwitcherBar() {
  const {
    themeVersion,
    setThemeVersion,
    setIsGpsWhitePageOpen,
    setIsPitmasterMode,
    setIsTvMenuOpen,
    setIsTvWhitePageOpen,
    setIsTrailerSimOpen,
    setIsDiscoveryWhitePageOpen,
    isPitFxActive,
    setIsPitFxActive
  } = usePitmaster();

  const themes = [
    {
      id: 'smokehouse',
      name: 'Option 1: Smokehouse Precision',
      subtitle: 'Dark Hickory, Pit Embers & Clean Lines',
      icon: Flame,
      colorDot: 'bg-[#D9381E]'
    },
    {
      id: 'carolinagold',
      name: 'Option 2: Carolina Gold',
      subtitle: 'Warm Butcher Paper & Hometown Diner',
      icon: UtensilsCrossed,
      colorDot: 'bg-[#D97706]'
    },
    {
      id: 'chalkboard',
      name: 'Option 3: Sidewalk Chalkboard',
      subtitle: 'Street Slate & Authentic Chalk Menus',
      icon: ClipboardList,
      colorDot: 'bg-[#38BDF8]'
    }
  ];

  return (
    <div className="bg-[#0A0807] border-b border-[#2C201B] py-1.5 px-2.5 sm:py-2 sm:px-3 text-xs z-50 relative w-full max-w-full overflow-hidden">
      
      {/* ===================================================================== */}
      {/* MOBILE SLIM BAR (<768px): 100% Zero Overflow, Smooth & Compact        */}
      {/* ===================================================================== */}
      <div className="md:hidden flex items-center justify-between gap-1.5 w-full">
        {/* Compact Theme Dropdown */}
        <div className="flex items-center gap-1 min-w-0">
          <Palette className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <select
            value={themeVersion}
            onChange={(e) => setThemeVersion(e.target.value)}
            className="bg-[#1C1512] text-amber-200 border border-[#3E2E25] text-[11px] font-bold py-1 px-1.5 rounded-none focus:outline-none focus:border-amber-500 max-w-[130px] truncate"
            aria-label="Select design layout"
          >
            <option value="smokehouse">🔥 Smokehouse</option>
            <option value="carolinagold">🍗 Carolina Gold</option>
            <option value="chalkboard">📋 Chalkboard</option>
          </select>
        </div>

        {/* Compact Tool Icons for Mobile */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Embers Toggle */}
          <button
            onClick={() => setIsPitFxActive(!isPitFxActive)}
            className={`p-1 px-1.5 rounded-none text-[11px] font-bold border transition ${
              isPitFxActive
                ? 'bg-[#251712] text-amber-300 border-amber-600/70'
                : 'bg-[#140F0D] text-stone-500 border-stone-800'
            }`}
            title="Toggle embers canvas"
            aria-label="Toggle pit fire embers effect"
          >
            {isPitFxActive ? '🔥' : '💨'}
          </button>

          {/* Quick Pitmaster Menu Edit */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            className="p-1 px-1.5 rounded-none bg-amber-500 text-stone-950 font-black text-[11px] flex items-center gap-0.5"
            title="Pitmaster Quick Admin"
          >
            <ChefHat className="w-3 h-3" />
            <span>Edit</span>
          </button>

          {/* Live Trailer Digital Twin Simulator */}
          <button
            onClick={() => setIsTrailerSimOpen(true)}
            className="p-1 px-1.5 rounded-none bg-emerald-600 text-white font-black text-[11px] flex items-center gap-0.5 shadow"
            title="Live Trailer + Phone Simulator"
          >
            <span>🚚 Sim</span>
          </button>

          {/* TV Menu */}
          <button
            onClick={() => setIsTvMenuOpen(true)}
            className="p-1 px-1.5 rounded-none bg-[#241A15] border border-amber-600/40 text-amber-300 font-bold text-[11px] flex items-center gap-0.5"
            title="1080p TV Menu"
          >
            <Tv className="w-3 h-3 text-amber-400" />
            <span>TV</span>
          </button>

          {/* GPS Options */}
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="p-1 px-1.5 rounded-none bg-stone-800 text-stone-200 border border-stone-700 font-bold text-[11px]"
            title="GPS Tracking Options"
          >
            📍
          </button>

          {/* Being Found White Paper */}
          <button
            onClick={() => setIsDiscoveryWhitePageOpen(true)}
            className="p-1 px-1.5 rounded-none bg-stone-800 text-amber-300 border border-amber-500/50 font-bold text-[11px]"
            title="Being Found & Revenue White Paper"
          >
            🔍
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* DESKTOP BAR (>=768px): Full Rich Control Strip                        */}
      {/* ===================================================================== */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-2">
        
        {/* Label */}
        <div className="flex items-center gap-2 text-stone-300">
          <Palette className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold uppercase tracking-wider text-[11px] text-amber-300">
            Design Concept Switcher:
          </span>
          <span className="text-stone-400 text-[11px] hidden sm:inline">
            (Explore custom layouts crafted for your trailer)
          </span>
        </div>

        {/* Options Switcher */}
        <div className="flex items-center flex-wrap gap-1.5 justify-center">
          {themes.map(t => {
            const Icon = t.icon;
            const isActive = themeVersion === t.id;

            return (
              <button
                key={t.id}
                onClick={() => setThemeVersion(t.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer border ${
                  isActive
                    ? 'bg-[#221814] text-white border-amber-500 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-[#140F0D] text-stone-400 hover:text-stone-200 border-[#2E201B] hover:border-stone-700'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-none ${t.colorDot} shrink-0`}></span>
                <span className="whitespace-nowrap">{t.name}</span>
                {isActive && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded-none font-mono uppercase">
                    Active
                  </span>
                )}
              </button>
            );
          })}

          <div className="h-4 w-px bg-stone-700 mx-1 hidden sm:block"></div>

          {/* Smoldering Pit Fire & Embers Toggle */}
          <button
            onClick={() => setIsPitFxActive(!isPitFxActive)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer border ${
              isPitFxActive
                ? 'bg-[#251712] text-amber-300 border-amber-600/70 shadow-sm'
                : 'bg-[#140F0D] text-stone-400 border-stone-800'
            }`}
            title="Toggle live smoldering fire embers & smoke canvas effect"
          >
            <Flame className={`w-3.5 h-3.5 ${isPitFxActive ? 'text-orange-500 fill-orange-500/40 animate-pulse' : 'text-stone-500'}`} />
            <span className="whitespace-nowrap">{isPitFxActive ? '🔥 Embers: ON' : '💨 Embers: OFF'}</span>
          </button>

          <div className="h-4 w-px bg-stone-700 mx-1 hidden sm:block"></div>

          {/* Being Found & Venue Revenue White Paper */}
          <button
            onClick={() => setIsDiscoveryWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review the 'Being Found' Search Dominance & Field Revenue White Paper"
          >
            <Search className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="whitespace-nowrap font-black">🔍 Being Found</span>
          </button>

          {/* GPS Tracking White Paper Option */}
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer GPS location tracking options"
          >
            <Radio className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span className="whitespace-nowrap font-black">📍 GPS Options</span>
          </button>

          {/* TV Display White Paper Option */}
          <button
            onClick={() => setIsTvWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer TV menu and live sync options"
          >
            <Tv className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap font-black">📺 TV Sync</span>
          </button>

          {/* Pitmaster Menu Editor Button */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md font-black"
            title="Your Pitmaster command center: edit prices, add items, 86 sold out on the fly"
          >
            <ChefHat className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">👨‍🍳 Edit Menu</span>
          </button>

          {/* Live Trailer Digital Twin + Phone Simulator */}
          <button
            onClick={() => setIsTrailerSimOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400 shadow-md"
            title="See Donald's actual trailer with the live TV screen controlled by his cell phone"
          >
            <span className="whitespace-nowrap font-black">🚚 Trailer + Phone Sim</span>
          </button>

          {/* TV Menu 1080p Image & Live Sync Button */}
          <button
            onClick={() => setIsTvMenuOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer bg-[#241A15] hover:bg-[#34241C] text-amber-300 hover:text-white border border-amber-600/40 shadow-sm"
            title="Open your 1080p TV Menu, download a fresh USB image, or sync your trailer screen"
          >
            <Tv className="w-3.5 h-3.5 text-amber-400" />
            <span className="whitespace-nowrap font-black">📺 TV Board</span>
          </button>
        </div>

      </div>
    </div>
  );
}
