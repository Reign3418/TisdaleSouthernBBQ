import React from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { X, Sparkles, Flame, Plus, Check, Phone, Utensils } from 'lucide-react';

export default function SpecialsDrawerModal() {
  const { isSpecialsModalOpen, setIsSpecialsModalOpen, specials, announcements, addToCart } = usePitmaster();

  if (!isSpecialsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85">
      <div 
        className="bg-[#191412] border-2 border-[#3E2E25] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-[#8C1B0B] border-b border-[#A6220E] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-black/30 border border-white/20">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </span>
            <div>
              <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                Today's Fresh Smoker & Fryer Specials
              </h3>
              <p className="text-xs text-amber-200 mt-0.5">
                Straight from Donald's window whiteboard & sidewalk chalkboard!
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSpecialsModalOpen(false)}
            className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Bar */}
        <div className="bg-amber-950/40 border-b border-amber-900/40 px-4 py-2 text-xs text-amber-200 flex items-center justify-between">
          <span>★ Limited daily quantities on specialty meats & fresh catfish</span>
          <a href="tel:9107092900" className="flex items-center gap-1 font-bold text-amber-400 hover:underline">
            <Phone className="w-3 h-3" /> Call to Hold: 910-709-2900
          </a>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {specials.map((item) => {
            const isFryerDisabled = !announcements.fryerOpen && item.isFryerItem;

            return (
              <div
                key={item.id}
                className="bg-[#221B18] border border-[#3C2E26] hover:border-amber-500/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition"
              >
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-[#8B0000] text-amber-200 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                    <span className="text-xs text-stone-400 italic">
                      Source: {item.source}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-stone-300">
                    {item.description}
                  </p>

                  {item.variants && (
                    <div className="pt-1.5 space-y-0.5">
                      {item.variants.map((v, i) => (
                        <div key={i} className="text-[11px] text-stone-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>{v.name}: <strong className="text-amber-300">{v.price}</strong></span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  <div className="text-xl font-black text-amber-400 font-['Bebas_Neue'] tracking-wider">
                    {item.price}
                  </div>

                  <button
                    onClick={() => {
                      addToCart(item);
                      setIsSpecialsModalOpen(false);
                    }}
                    disabled={!item.inStock || isFryerDisabled}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      !item.inStock || isFryerDisabled
                        ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                        : 'bg-[#D9381E] hover:bg-[#B72C15] text-white font-bold'
                    }`}
                  >
                    {!item.inStock ? 'Sold Out' : isFryerDisabled ? 'Grease Off' : '+ Add to Tray'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#14100E] border-t border-[#352822] flex items-center justify-between text-xs text-stone-400">
          <span>Square, Visa, MC, Cash accepted at trailer</span>
          <button
            onClick={() => setIsSpecialsModalOpen(false)}
            className="px-4 py-2 bg-[#2B221E] hover:bg-[#382C27] text-stone-200 rounded-lg font-bold transition cursor-pointer"
          >
            Back to Full Menu
          </button>
        </div>

      </div>
    </div>
  );
}
