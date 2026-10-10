import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Phone, MapPin, Flame, Heart, ChefHat, Sparkles } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';

export default function Footer() {
  const { setIsPitmasterMode, setIsSpecialsModalOpen } = usePitmaster();

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
                className="w-12 h-12 rounded-full border border-amber-500/60 object-cover"
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
              Real wood-smoked meats, fried-to-order whole wings and pork chops, grandma's homestyle potato salad, and fresh honey bun cake. Proudly serving Fayetteville, Sanford, Dunn, and surrounding North Carolina communities.
            </p>

            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#1C1613] hover:bg-[#28201B] border border-[#3E3029] text-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400" />
                <span>TisdalesSouthern BBQ</span>
              </a>
              <span className="text-stone-500 font-mono text-[11px]">Trailer Plate: NC DA-54744</span>
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
              <div className="pt-2">
                <button
                  onClick={() => setIsPitmasterMode(true)}
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 bg-[#1A1412] border border-amber-600/30 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Donald's Quick-Admin</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tisdale's Southern BBQ. Owned & Operated by Donald Tisdale.
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
