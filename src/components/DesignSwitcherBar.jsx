import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Palette, Flame, UtensilsCrossed, ClipboardList, Radio, ChefHat, Tv } from 'lucide-react';

export default function DesignSwitcherBar() {
  const {
    themeVersion,
    setThemeVersion,
    setIsGpsWhitePageOpen,
    setIsPitmasterMode,
    setIsTvMenuOpen,
    setIsTvWhitePageOpen,
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
    <div className="bg-[#0A0807] border-b border-[#2C201B] py-2 px-3 text-xs z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  isActive
                    ? 'bg-[#221814] text-white border-amber-500 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-[#140F0D] text-stone-400 hover:text-stone-200 border-[#2E201B] hover:border-stone-700'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${t.colorDot} shrink-0`}></span>
                <span className="whitespace-nowrap">{t.name}</span>
                {isActive && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-mono uppercase">
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
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

          {/* GPS Tracking White Paper Option */}
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer GPS location tracking options"
          >
            <Radio className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span className="whitespace-nowrap font-black">📍 GPS Options</span>
          </button>

          {/* TV Display White Paper Option */}
          <button
            onClick={() => setIsTvWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer bg-white text-stone-900 hover:bg-amber-100 border border-amber-400 shadow-sm"
            title="Review trailer TV menu and live sync options"
          >
            <Tv className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap font-black">📺 TV Sync</span>
          </button>

          {/* Pitmaster Menu Editor Button */}
          <button
            onClick={() => setIsPitmasterMode(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md font-black"
            title="Your Pitmaster command center: edit prices, add items, 86 sold out on the fly"
          >
            <ChefHat className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">👨‍🍳 Edit Menu</span>
          </button>

          {/* TV Menu 1080p Image & Live Sync Button */}
          <button
            onClick={() => setIsTvMenuOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer bg-[#241A15] hover:bg-[#34241C] text-amber-300 hover:text-white border border-amber-600/40 shadow-sm"
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
