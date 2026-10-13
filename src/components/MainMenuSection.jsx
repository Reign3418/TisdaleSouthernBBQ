import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Flame, Plus, Check, AlertCircle, Sparkles, ChefHat } from 'lucide-react';

export default function MainMenuSection() {
  const { menu, announcements, addToCart } = usePitmaster();
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItemIds, setAddedItemIds] = useState({});

  const categories = [
    { key: 'all', label: 'All Menu' },
    { key: 'dinners', label: 'Dinners & Plates (w/ 2 Sides)' },
    { key: 'sandwiches', label: 'Sandwiches & Handhelds' },
    { key: 'meatsOnly', label: 'Meats by the Pound & Slab' },
    { key: 'sides', label: 'Homestyle Sides (8oz)' },
    { key: 'dessertsAndDrinks', label: 'Desserts & Cold Drinks' }
  ];

  const parsePriceFromText = (text) => {
    const match = String(text || '').match(/\$(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
  };

  const handleAdd = (item, extraOption = '', overridePrice = null) => {
    addToCart(item, extraOption, overridePrice);
    const key = item.id + extraOption;
    setAddedItemIds(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [key]: false }));
    }, 1500);
  };

  const getFilteredCategories = () => {
    if (activeCategory === 'all') {
      return Object.entries(menu);
    }
    return [[activeCategory, menu[activeCategory]]];
  };

  return (
    <section id="main-menu" className="py-8 sm:py-12 bg-[#15110F] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-amber-500 text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-amber-950/40 px-2.5 py-1 rounded-none border border-amber-500/30 mb-2">
            <Flame className="w-3.5 h-3.5 fill-amber-500" />
            <span>Official Truck TV Screen Menu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide">
            The Main <span className="text-[#FF6B35]">Barbecue Board</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1.5 sm:mt-2">
            All dinner plates include your choice of two 8oz homestyle sides and a warm dinner roll. Meats smoked low & slow with pure hickory pellets.
          </p>
        </div>

        {/* Category Navigation with Smooth Touch Scrolling & Zero Overflow */}
        <div className="w-full max-w-full overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-8 scrollbar-none overscroll-x-contain touch-pan-x flex items-center gap-1.5 sm:gap-2 justify-start md:justify-center px-1">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-none text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#D9381E] text-white shadow'
                  : 'bg-[#221B17] text-stone-300 hover:text-white hover:bg-[#2F2520] border border-[#3D3029]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {getFilteredCategories().map(([catKey, categoryData]) => {
            if (!categoryData) return null;

            return (
              <div key={catKey} className="space-y-4">
                
                {/* Category Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b-2 border-amber-600/40">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-none bg-amber-500"></span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider">
                      {categoryData.categoryName}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm text-amber-200/80 italic">
                    {categoryData.tagline}
                  </span>
                </div>

                {categoryData.note && (
                  <p className="text-xs text-stone-400 italic bg-[#1E1714] p-2.5 rounded-none border border-[#3A2D26]">
                    💡 {categoryData.note}
                  </p>
                )}

                {/* Items Grid with Razor-Sharp Straight Precision Lines */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {categoryData.items.filter(item => !item.hidden).map(item => {
                    const isSoldOut = !item.inStock;
                    const isFryerDisabled = !announcements.fryerOpen && item.isFryerItem;
                    const isAdded = addedItemIds[item.id];

                    return (
                      <div
                        key={item.id}
                        className={`rounded-none p-4 sm:p-5 flex flex-col justify-between transition relative overflow-hidden ${
                          isSoldOut
                            ? 'bg-[#181413]/70 border border-stone-800 opacity-60'
                            : isFryerDisabled
                            ? 'bg-[#1E1614] border border-rose-900/60'
                            : 'bg-[#1C1614] border border-[#382B24] hover:border-amber-500/50 hover:shadow-xl hover:shadow-black/60'
                        }`}
                      >
                        {/* Sold Out Watermark Badge */}
                        {isSoldOut && (
                          <div className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-none shadow">
                            SOLD OUT
                          </div>
                        )}

                        {/* Fryer Off Notice */}
                        {!isSoldOut && isFryerDisabled && (
                          <div className="absolute top-3 right-3 bg-amber-600 text-stone-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-none shadow">
                            GREASE IS OFF
                          </div>
                        )}

                        <div>
                          {/* Top Badges */}
                          <div className="flex items-center gap-2 mb-2">
                            {item.badge && !isSoldOut && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded-none border border-amber-600/30">
                                {item.badge}
                              </span>
                            )}
                            {item.isFryerItem && (
                              <span className="text-[10px] font-semibold text-orange-400/80">
                                Cooked to Order
                              </span>
                            )}
                          </div>

                          {/* Title & Price */}
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-lg font-bold text-white leading-tight">
                              {item.name}
                            </h4>
                            <span className="text-xl font-black text-amber-400 font-['Bebas_Neue'] tracking-wider shrink-0">
                              {item.price}
                            </span>
                          </div>

                          {/* Extra Options Pricing (1-Tap Addable) */}
                          {item.extraOption && (
                            <div className="mt-1.5 flex items-center justify-between gap-2 bg-[#251C18] border border-amber-500/30 px-2.5 py-1 rounded-none">
                              <span className="text-xs text-amber-300 font-semibold">
                                {item.extraOption}
                              </span>
                              {!isSoldOut && !isFryerDisabled && (
                                <button
                                  type="button"
                                  onClick={() => handleAdd(item, item.extraOption, parsePriceFromText(item.extraOption))}
                                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-none transition cursor-pointer flex items-center gap-1 shrink-0 ${
                                    addedItemIds[item.id + item.extraOption]
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-amber-500/20 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-500/40'
                                  }`}
                                >
                                  {addedItemIds[item.id + item.extraOption] ? (
                                    <>
                                      <Check className="w-3 h-3" />
                                      <span>Added</span>
                                    </>
                                  ) : (
                                    <>
                                      <Plus className="w-3 h-3" />
                                      <span>Add Option</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          )}

                          {/* Description */}
                          <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Action Area */}
                        <div className="mt-5 pt-3 border-t border-[#2F231D] flex items-center justify-between">
                          <span className="text-[11px] text-stone-400">
                            {isSoldOut ? "Check back tomorrow!" : isFryerDisabled ? "Fryer closed for day" : "Made Fresh"}
                          </span>

                          <button
                            onClick={() => handleAdd(item)}
                            disabled={isSoldOut || isFryerDisabled}
                            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-none text-xs font-bold transition cursor-pointer ${
                              isSoldOut || isFryerDisabled
                                ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                                : isAdded
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-[#D9381E] hover:bg-[#B72C15] text-white shadow font-bold'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added to Plate</span>
                              </>
                            ) : isSoldOut ? (
                              <span>Sold Out</span>
                            ) : isFryerDisabled ? (
                              <span>Grease Off</span>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Plate</span>
                              </>
                            )}
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
