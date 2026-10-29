import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Palette, Flame, UtensilsCrossed, ClipboardList, Radio, ChefHat, Tv, Search, Lock } from 'lucide-react';

export default function DesignSwitcherBar({ onLockSite }) {
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
      name: '1. Smokehouse',
      subtitle: 'Dark Hickory, Pit Embers & Clean Lines',
      icon: Flame,
      colorDot: 'bg-[#D9381E]'
    },
    {
      id: 'carolinagold',
      name: '2. Carolina Gold',
      subtitle: 'Warm Butcher Paper & Hometown Diner',
      icon: UtensilsCrossed,
      colorDot: 'bg-[#D97706]'
    },
    {
      id: 'chalkboard',
      name: '3. Chalkboard',
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
          {/* Primary White Paper Button First on Mobile */}
          <button
            onClick={() => setIsDiscoveryWhitePageOpen(true)}
            className="p-1 px-1.5 rounded-none bg-amber-400 text-stone-950 font-black text-[11px] flex items-center gap-0.5 shadow"
            title="Open White Paper (Ideas, Raspberry Pi, NFC & Being Found)"
          >
            <span>📄 White Paper</span>
          </button>

          {/* Live Trailer Digital Twin Simulator */}
          <button
            onClick={() => setIsTrailerSimOpen(true)}
            className="p-1 px-1.5 rounded-none bg-emerald-600 text-white font-black text-[11px] flex items-center gap-0.5 shadow"
            title="Live Trailer + Phone Simulator"
          >
            <span>🚚 Sim</span>
          </button>

          {/* Quick Pitmaster Menu Edit */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            className="p-1 px-1.5 rounded-none bg-stone-800 text-amber-300 border border-amber-500/40 font-bold text-[11px] flex items-center gap-0.5"
            title="Pitmaster Quick Admin"
          >
            <span>Edit</span>
          </button>

          {/* TV Menu */}
          <button
            onClick={() => setIsTvMenuOpen(true)}
            className="p-1 px-1.5 rounded-none bg-[#241A15] border border-amber-600/40 text-amber-300 font-bold text-[11px] flex items-center gap-0.5"
            title="1080p TV Menu"
          >
            <span>TV</span>
          </button>

          {/* Re-Lock Site Button */}
          {onLockSite && (
            <button
              onClick={onLockSite}
              className="p-1 px-1.5 rounded-none bg-rose-950 text-rose-300 border border-rose-700/70 font-bold text-[11px]"
              title="Lock Site"
            >
              🔒
            </button>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* DESKTOP BAR (>=768px): Single-Row Crisp Control Strip                 */}
      {/* ===================================================================== */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-2">
        
        {/* Left: Primary White Paper Button + 3 Concept Layout Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* #1 HERO BUTTON AT THE TOP LEFT: WHITE PAPER (MEAT & POTATOES) */}
          <button
            onClick={() => setIsDiscoveryWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-black uppercase tracking-wider transition cursor-pointer bg-amber-400 hover:bg-amber-300 text-stone-950 border-2 border-white shadow-md mr-1"
            title="Open the Master White Paper: Raspberry Pi Pit-Box, NFC Coasters, Event Pricing, 30-Min Heartbeat & Being Found"
          >
            <Search className="w-3.5 h-3.5 text-stone-950 shrink-0 stroke-[2.5]" />
            <span className="whitespace-nowrap">📄 White Paper</span>
          </button>

          <div className="h-4 w-px bg-stone-700 mx-0.5 hidden lg:block"></div>

          <Palette className="w-3.5 h-3.5 text-amber-400 shrink-0 hidden lg:inline" />
          <span className="font-bold uppercase tracking-wider text-[11px] text-amber-300 hidden xl:inline">
            Layouts:
          </span>
          {themes.map(t => {
            const isActive = themeVersion === t.id;

            return (
              <button
                key={t.id}
                onClick={() => setThemeVersion(t.id)}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-none text-xs font-bold transition cursor-pointer border ${
                  isActive
                    ? 'bg-[#221814] text-white border-amber-500 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-[#140F0D] text-stone-400 hover:text-stone-200 border-[#2E201B] hover:border-stone-700'
                }`}
              >
                <span className={`w-2 h-2 rounded-none ${t.colorDot} shrink-0`}></span>
                <span className="whitespace-nowrap">{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Single-Row Action & Guide Buttons (Zero Duplicate Icons) */}
        <div className="flex items-center gap-1.5 justify-end shrink-0">

          {/* Live Trailer Digital Twin + Phone Simulator */}
          <button
            onClick={() => setIsTrailerSimOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-none text-xs font-black transition cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400 shadow-sm"
            title="See Donald's actual trailer with the live TV screen controlled by his cell phone"
          >
            <span className="whitespace-nowrap">🚚 Trailer + Phone Sim</span>
          </button>

          {/* Pitmaster Menu Editor Button */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-none text-xs font-black transition cursor-pointer bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm"
            title="Your Pitmaster command center: edit prices, add items, 86 sold out on the fly"
          >
            <ChefHat className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Edit Menu</span>
          </button>

          {/* TV Display White Paper Option */}
          <button
            onClick={() => setIsTvWhitePageOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-none text-xs font-black transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer TV menu and live sync options"
          >
            <Tv className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">TV Sync</span>
          </button>

          {/* GPS Tracking White Paper Option */}
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-none text-xs font-black transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer GPS location tracking options"
          >
            <Radio className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span className="whitespace-nowrap">GPS Options</span>
          </button>

          {/* TV Menu 1080p Image & Live Sync Button */}
          <button
            onClick={() => setIsTvMenuOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-none text-xs font-black transition cursor-pointer bg-[#241A15] hover:bg-[#34241C] text-amber-300 hover:text-white border border-amber-600/40 shadow-sm"
            title="Open your 1080p TV Menu, download a fresh USB image, or sync your trailer screen"
          >
            <Tv className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">TV Board</span>
          </button>

          {/* Smoldering Pit Fire & Embers Toggle */}
          <button
            onClick={() => setIsPitFxActive(!isPitFxActive)}
            className={`flex items-center gap-1 px-2 py-1 rounded-none text-xs font-bold transition cursor-pointer border ${
              isPitFxActive
                ? 'bg-[#251712] text-amber-300 border-amber-600/70'
                : 'bg-[#140F0D] text-stone-400 border-stone-800'
            }`}
            title="Toggle live smoldering fire embers & smoke canvas effect"
          >
            <Flame className={`w-3.5 h-3.5 shrink-0 ${isPitFxActive ? 'text-orange-500 fill-orange-500/40 animate-pulse' : 'text-stone-500'}`} />
            <span className="whitespace-nowrap hidden xl:inline">{isPitFxActive ? 'Embers' : 'Off'}</span>
          </button>

          {/* Re-Lock Site Button */}
          {onLockSite && (
            <button
              onClick={onLockSite}
              className="flex items-center gap-1 px-2 py-1 rounded-none text-xs font-black transition cursor-pointer bg-rose-950/90 hover:bg-rose-800 text-rose-200 border border-rose-700/70 shadow-sm"
              title="Lock entire site behind the 4-digit PIN gate"
            >
              <Lock className="w-3 h-3 text-rose-400 shrink-0" />
              <span className="whitespace-nowrap">Lock</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
