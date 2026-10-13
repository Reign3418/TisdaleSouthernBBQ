import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { Sparkles, Flame, Plus, Check, Info, Image as ImageIcon, Utensils, AlertTriangle } from 'lucide-react';

export default function SpecialsSpotlight() {
  const { specials, announcements, addToCart } = usePitmaster();
  const [activeTab, setActiveTab] = useState('window'); // 'window' | 'chalkboard' | 'photos'
  const [addedItemIds, setAddedItemIds] = useState({});

  const parsePriceFromText = (text) => {
    const match = String(text || '').match(/\$(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
  };

  const handleAdd = (special, extraLabel = '', overridePrice = null) => {
    addToCart(special, extraLabel, overridePrice);
    const key = special.id + extraLabel;
    setAddedItemIds(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [key]: false }));
    }, 1500);
  };

  // Filter window whiteboard items vs chalkboard/seafood items (excluding hidden)
  const visibleSpecials = specials.filter(s => !s.hidden);
  const windowItems = visibleSpecials.filter(s => s.spot && s.spot.includes('window'));
  const chalkboardItems = visibleSpecials.filter(s => !s.spot || s.spot.includes('chalkboard') || s.spot.includes('trailer-paper') || !s.spot.includes('window'));

  return (
    <section id="specials-section" className="py-8 sm:py-10 bg-[#120F0E] border-t border-b border-[#30241E] relative w-full max-w-full overflow-hidden">
      
      {/* Background ambient warmth */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-amber-500 font-bold uppercase tracking-wider text-xs">
              <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
              <span>Trailer Window & Sidewalk Specials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide mt-1">
              Fresh Off The Pit & Fryer <span className="text-[#FF6B35]">Specials</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
              Daily deals, rib drops, and fresh catches straight from our trailer window and sidewalk chalkboard!
            </p>
          </div>

          {/* Interactive Mode Tabs - Touch Scrollable & Slim on Mobile */}
          <div className="flex items-center gap-1 bg-[#1C1613] p-1 rounded-none border border-[#3E3029] w-full md:w-auto overflow-x-auto scrollbar-none overscroll-x-contain touch-pan-x shrink-0">
            <button
              onClick={() => setActiveTab('window')}
              className={`px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-none text-xs font-bold transition cursor-pointer shrink-0 ${
                activeTab === 'window'
                  ? 'bg-[#D9381E] text-white shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <span className="sm:hidden">Window Deals</span>
              <span className="hidden sm:inline">Window Whiteboard Deals</span>
            </button>
            <button
              onClick={() => setActiveTab('chalkboard')}
              className={`px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-none text-xs font-bold transition cursor-pointer shrink-0 ${
                activeTab === 'chalkboard'
                  ? 'bg-[#D9381E] text-white shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <span className="sm:hidden">Chalkboard & Fish</span>
              <span className="hidden sm:inline">Chalkboard & Seafood Catch</span>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-none text-xs font-bold transition cursor-pointer shrink-0 ${
                activeTab === 'photos'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photos</span>
            </button>
          </div>
        </div>

        {/* Fryer Off Alert if active */}
        {!announcements.fryerOpen && (
          <div className="mb-6 p-3 rounded-none bg-rose-950/60 border border-rose-600/60 text-xs sm:text-sm text-rose-200 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <strong>Fryer Alert:</strong> The grease has been turned off for the evening. Fried items (catfish, shrimp, pork chops, fries) are currently unavailable, but all smoked BBQ meats are ready!
            </div>
          </div>
        )}

        {/* TAB 1: Window Whiteboard Deals */}
        {activeTab === 'window' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Whiteboard Header Card */}
            <div className="md:col-span-2 lg:col-span-4 bg-[#18212C] border-2 border-[#2C3B4E] rounded-none p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-cyan-100 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-['Permanent_Marker'] px-3 py-1 rounded-none text-sm uppercase">
                  Window Specials
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  "Main Menu on TV • Fries are $5.00 • We Accept Square POS & All Forms of Payment"
                </span>
              </div>
              <div className="text-xs text-amber-300 font-medium">
                Fresh slices of Honey Bun Cake waiting in the window!
              </div>
            </div>

            {windowItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              const isFryerDisabled = !announcements.fryerOpen && item.isFryerItem;

              return (
                <div
                  key={item.id}
                  className="bg-[#1C1613] rounded-none border border-[#3E3029] p-4 flex flex-col justify-between hover:border-amber-500/50 transition group relative overflow-hidden"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded-none border border-amber-600/30">
                        {item.badge || "Window Special"}
                      </span>
                      <span className="text-base font-black text-amber-400 font-['Bebas_Neue'] tracking-wider">
                        {item.price}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.description}
                    </p>

                    {item.doublePrice && !isFryerDisabled && item.inStock && (
                      <div className="pt-1 flex items-center justify-between bg-[#251C18] border border-amber-500/30 px-2.5 py-1 rounded-none">
                        <span className="text-[11px] text-amber-300 font-bold">2-Piece Dinner: ${item.doublePrice.toFixed(2)}</span>
                        <button
                          type="button"
                          onClick={() => handleAdd(item, '2-Piece Dinner', item.doublePrice)}
                          className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-none transition cursor-pointer flex items-center gap-1 ${
                            addedItemIds[item.id + '2-Piece Dinner']
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-500/20 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-500/40'
                          }`}
                        >
                          {addedItemIds[item.id + '2-Piece Dinner'] ? '✓ Added' : '+ Add 2pc'}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 italic">
                      {item.source}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      disabled={!item.inStock || isFryerDisabled}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                        !item.inStock || isFryerDisabled
                          ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                          : isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#D9381E] hover:bg-[#B72C15] text-white shadow font-bold'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : !item.inStock ? (
                        <span>Sold Out</span>
                      ) : isFryerDisabled ? (
                        <span>Grease Off</span>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: Chalkboard & Seafood Catch */}
        {activeTab === 'chalkboard' && (
          <div className="space-y-4">
            
            {/* Authentic Chalkboard Container */}
            <div className="chalkboard-bg rounded-none border-4 border-[#3D2C24] p-5 sm:p-7 shadow-2xl relative">
              <div className="absolute top-2 right-3 text-[10px] text-stone-400 font-mono tracking-widest uppercase">
                ★ A FULL MENU ON TV SCREEN ★ NO REFUNDS ★
              </div>

              <div className="text-center mb-6">
                <span className="text-amber-400 font-['Permanent_Marker'] text-xs sm:text-sm tracking-widest uppercase">
                  Cooked To Order • Sub Fries For Any Side
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Permanent_Marker'] tracking-wide mt-1">
                  1, 2, 3 Meat Combos & Fresh Catfish / Shrimps
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chalkboardItems.map((item) => {
                  const isFryerDisabled = !announcements.fryerOpen && item.isFryerItem;
                  const isAdded = addedItemIds[item.id];
                  return (
                    <div
                      key={item.id}
                      className="bg-black/50 border border-white/10 rounded-none p-4 flex flex-col justify-between hover:border-amber-400/40 transition"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[11px] font-['Permanent_Marker'] text-pink-300">
                            {item.badge}
                          </span>
                          <span className="text-lg font-black text-amber-300 font-['Permanent_Marker']">
                            {item.price}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-stone-100 font-['Permanent_Marker'] mt-1">
                          {item.title}
                        </h4>
                        
                        <p className="text-xs text-stone-400 mt-1 font-sans">
                          {item.description}
                        </p>

                        {/* Interactive Variants list if present */}
                        {item.variants && (
                          <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1.5">
                            {item.variants.map((v, idx) => {
                              const varKey = item.id + v.name;
                              const varAdded = addedItemIds[varKey];
                              return (
                                <div key={idx} className="flex items-center justify-between gap-2 text-[11px] text-stone-300 bg-white/5 px-2 py-1 rounded-none border border-white/5">
                                  <span className="font-mono text-stone-300 truncate">{v.name}</span>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="font-bold text-amber-200 font-mono">{v.price}</span>
                                    {!isFryerDisabled && item.inStock && (
                                      <button
                                        type="button"
                                        onClick={() => handleAdd(item, v.name, parsePriceFromText(v.price))}
                                        className={`px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-none transition cursor-pointer ${
                                          varAdded
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-[#D9381E] hover:bg-[#B72C15] text-white'
                                        }`}
                                      >
                                        {varAdded ? '✓' : '+ Add'}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-stone-500 font-mono">
                          {item.isFryerItem ? "Fried to Order" : "Pit Smoked"}
                        </span>

                        <button
                          onClick={() => handleAdd(item)}
                          disabled={!item.inStock || isFryerDisabled}
                          className={`flex items-center gap-1 px-3 py-1 rounded-none text-xs font-bold font-sans transition cursor-pointer ${
                            !item.inStock || isFryerDisabled
                              ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                              : isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#D9381E] hover:bg-[#B72C15] text-white font-bold'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : !item.inStock ? (
                            <span>Sold Out</span>
                          ) : isFryerDisabled ? (
                            <span>Grease Off</span>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Tray</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Real Truck Photos Showcase */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#1C1613] rounded-none overflow-hidden border border-[#3E3029] group">
              <div className="h-52 overflow-hidden bg-black">
                <img
                  src="./images/tv-menu.jpg"
                  alt="Donald's TV Menu Screen"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold text-white">Full TV Menu Screen</h4>
                <p className="text-xs text-stone-400 mt-0.5">The main digital board inside the food trailer.</p>
              </div>
            </div>

            <div className="bg-[#1C1613] rounded-none overflow-hidden border border-[#3E3029] group">
              <div className="h-52 overflow-hidden bg-black">
                <img
                  src="./images/chalkboard-specials.jpg"
                  alt="Sidewalk Chalkboard & Catfish Sign"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold text-white">Chalkboard & Seafood Catch</h4>
                <p className="text-xs text-stone-400 mt-0.5">Multi-meat combos, fried pork chops & whiting fish.</p>
              </div>
            </div>

            <div className="bg-[#1C1613] rounded-none overflow-hidden border border-[#3E3029] group">
              <div className="h-52 overflow-hidden bg-black">
                <img
                  src="./images/window-specials.jpg"
                  alt="Trailer Window Whiteboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold text-white">Window Specials & Honey Bun Cake</h4>
                <p className="text-xs text-stone-400 mt-0.5">Quick combos and fresh cake slices at the order window.</p>
              </div>
            </div>

            <div className="bg-[#1C1613] rounded-none overflow-hidden border border-[#3E3029] group">
              <div className="h-52 overflow-hidden bg-black">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale's Trailer Flame Wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold text-white">Trailer Vinyl Wrap & Logo</h4>
                <p className="text-xs text-stone-400 mt-0.5">Authentic low & slow smokehouse trailer art.</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
