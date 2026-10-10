import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Phone, MapPin, Flame, Heart, ChefHat, Sparkles, Radio, Tv } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';

export default function Footer() {
  const { setIsPitmasterMode, setIsSpecialsModalOpen, setIsGpsWhitePageOpen, setIsTvMenuOpen, setIsTvWhitePageOpen } = usePitmaster();

  return (
    <footer className="bg-[#0E0C0B] border-t border-[#2A201B] text-stone-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/5">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="./images/truck-logo-wrap.jpg"
                alt="Tisdale's BBQ Logo"
                className="w-12 h-12 rounded-none border border-amber-500/60 object-cover"
              />
              <div>
                <h4 className="text-xl font-black text-white font-['Bebas_Neue'] tracking-wider leading-none">
                  Tisdale's Southern BBQ
                </h4>
                <p className="text-[11px] text-amber-400">
                  Mouth-Watering, Tongue-Twisting BBQ
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Slow-smoked hickory meats, fried-to-order whole wings and pork chops, grandma's homestyle potato salad, and fresh honey bun cake. Proudly serving Fayetteville, Sanford, Dunn, and surrounding North Carolina communities.
            </p>

            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#1C1613] hover:bg-[#28201B] border border-[#3E3029] text-amber-200 px-3 py-1.5 rounded-none text-xs font-semibold transition"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400" />
                <span>TisdalesSouthern BBQ</span>
              </a>
              <span className="text-stone-400 text-xs">Real Smoke • Low & Slow</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-1">
              Food & Menu
            </h5>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#main-menu" className="hover:text-amber-400 transition">Dinner Plates (w/ 2 Sides)</a></li>
              <li><a href="#main-menu" className="hover:text-amber-400 transition">Smoked Sandwiches & Sliders</a></li>
              <li><a href="#main-menu" className="hover:text-amber-400 transition">Meats By The Pound & Slab</a></li>
              <li><a href="#main-menu" className="hover:text-amber-400 transition">Homestyle 8oz Sides</a></li>
              <li>
                <button
                  onClick={() => setIsSpecialsModalOpen(true)}
                  className="text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer font-bold"
                >
                  <Sparkles className="w-3 h-3" /> Today's Specials
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsGpsWhitePageOpen(true)}
                  className="text-stone-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <Radio className="w-3 h-3 text-rose-500" /> GPS Tracking Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTvMenuOpen(true)}
                  className="text-stone-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <Tv className="w-3 h-3 text-amber-500" /> 1080p TV Menu (USB / Live)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTvWhitePageOpen(true)}
                  className="text-stone-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <Tv className="w-3 h-3 text-blue-400" /> TV Menu Sync (White Paper)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-2">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-1">
              Direct Contact
            </h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9107092900" className="hover:underline font-bold text-white">910-709-2900</a>
              </div>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Fayetteville, Sanford, Dunn, and surrounding NC areas</span>
              </div>
              <div className="pt-2 text-[11px] text-stone-400 space-y-1">
                <strong className="text-amber-300 block">Payment Methods:</strong>
                <span>Square POS • Tap to Pay • Apple Pay • Google Pay • Cards & Cash</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Tisdale's Southern BBQ. Owned & Operated by Donald Tisdale.</span>
            <span>•</span>
            <button
              onClick={() => setIsPitmasterMode(true)}
              className="text-stone-400 hover:text-amber-400 font-bold transition cursor-pointer flex items-center gap-1"
            >
              <ChefHat className="w-3 h-3 text-amber-500" />
              <span>Pitmaster Admin</span>
            </button>
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 inline" />
            <span>in support of authentic Carolina pitmasters.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
