import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Palette, Flame, UtensilsCrossed, ClipboardList } from 'lucide-react';

export default function DesignSwitcherBar() {
  const { themeVersion, setThemeVersion } = usePitmaster();

  const themes = [
    {
      id: 'smokehouse',
      name: 'Option 1: Smokehouse Trailer',
      subtitle: 'Dark Hickory & Wood-Fired Red',
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
            (Choose a style to review with Donald)
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
        </div>

      </div>
    </div>
  );
}
