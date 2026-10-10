import React, { useState } from 'react';
import { usePitmaster } from '../../context/PitmasterContext';
import { Phone, MapPin, Clock, Navigation, AlertTriangle, Sparkles, Flame, Image as ImageIcon } from 'lucide-react';
import SquareIcon from '../icons/SquareIcon';

export default function ChalkboardLayout() {
  const { menu, specials, schedule, announcements, setIsGpsWhitePageOpen } = usePitmaster();
  const current = schedule.currentLocation;
  const [activeBoard, setActiveBoard] = useState('chalkboard'); // 'chalkboard' | 'tv' | 'photos'

  return (
    <div className="bg-[#141B22] text-[#F0F6FC] font-sans selection:bg-[#38BDF8] selection:text-black min-h-screen">
      
      {/* 1. Street Chalk Header Bar */}
      <div className="bg-[#0D1117] border-b border-[#30363D] py-2 px-3 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#FEF08A] uppercase font-bold text-[11px] bg-black/50 px-2 py-0.5 rounded border border-[#FEF08A]/30">
              ★ Sidewalk Chalkboard Edition ★
            </span>
            <span className="text-stone-300">
              Today's Stop: <strong className="text-white">{current.name}</strong> ({current.hours})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:9107092900" className="flex items-center gap-1.5 font-bold text-white hover:text-[#FEF08A]">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(910) 709-2900</span>
            </a>
            <span className="text-stone-600">|</span>
            <span className="text-emerald-400 text-xs flex items-center gap-1">
              <SquareIcon className="w-3 h-3" /> Square POS Accepted
            </span>
          </div>
        </div>
      </div>

      {/* 2. Chalkboard Header */}
      <header className="bg-[#161F28] border-b border-[#30363D] py-5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="./images/truck-logo-wrap.jpg"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-400 shadow-md"
            />
            <div>
              <span className="text-[#FEF08A] font-['Permanent_Marker'] text-xs tracking-wider uppercase block">
                Mouth-Watering, Tongue-Twisting BBQ
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['Permanent_Marker'] tracking-wide">
                Tisdale's Southern BBQ
              </h1>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                Real Wood Smoked • Andrews, SC Roots • Fayetteville, NC
              </p>
            </div>
          </div>

          {/* Quick Board Switcher */}
          <div className="flex items-center gap-1.5 bg-[#0D1117] p-1.5 rounded-xl border border-[#30363D]">
            <button
              onClick={() => setActiveBoard('chalkboard')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer font-['Permanent_Marker'] ${
                activeBoard === 'chalkboard'
                  ? 'bg-[#38BDF8] text-stone-950 shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              A-Frame Chalkboard
            </button>
            <button
              onClick={() => setActiveBoard('tv')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer font-['Permanent_Marker'] ${
                activeBoard === 'tv'
                  ? 'bg-[#FEF08A] text-stone-950 shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              TV Screen Menu
            </button>
            <button
              onClick={() => setActiveBoard('photos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                activeBoard === 'photos'
                  ? 'bg-[#FDA4AF] text-stone-950 shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Real Signs</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. Main Board Display Area */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        
        {/* VIEW 1: A-Frame Chalkboard Combos & Window Whiteboard (Photos 2 & 3) */}
        {activeBoard === 'chalkboard' && (
          <div className="space-y-6">
            
            {/* The Authentic Sidewalk Chalkboard */}
            <div className="chalkboard-bg rounded-2xl border-4 border-[#3E2E25] p-5 sm:p-8 shadow-2xl relative">
              <div className="text-center mb-6">
                <span className="text-[#FDA4AF] font-['Permanent_Marker'] text-sm uppercase tracking-widest block">
                  ★ Authentic Sidewalk Chalkboard ★ No Refunds ★
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Permanent_Marker'] tracking-wide mt-1">
                  1, 2, 3 Meat Combos & Fresh Seafood Catch
                </h2>
                <p className="text-xs text-stone-300 font-mono mt-1">
                  All Combos served with 2 sides & warm dinner roll • Sub Fries for any side
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {specials.map(s => (
                  <div
                    key={s.id}
                    className="bg-black/60 border border-stone-700/60 rounded-xl p-4 flex flex-col justify-between hover:border-amber-400 transition"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-['Permanent_Marker'] text-[#FDA4AF]">
                          {s.badge}
                        </span>
                        <span className="text-lg font-bold font-['Permanent_Marker'] text-[#FEF08A]">
                          {s.price}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-['Permanent_Marker'] mt-1">
                        {s.title}
                      </h3>

                      <p className="text-xs text-stone-300 mt-1 font-sans leading-relaxed">
                        {s.description}
                      </p>

                      {s.variants && (
                        <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1">
                          {s.variants.map((v, i) => (
                            <div key={i} className="flex justify-between text-[11px] font-mono text-stone-300">
                              <span>• {v.name}</span>
                              <strong className="text-[#FEF08A]">{v.price}</strong>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                      <span>{s.source}</span>
                      <a href="tel:9107092900" className="text-[#38BDF8] font-bold hover:underline font-sans">
                        Order: 910-709-2900
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Window Whiteboard Strip */}
            <div className="bg-[#182330] border-2 border-[#2C3B4E] rounded-xl p-5 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-cyan-200">
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-['Permanent_Marker'] px-3 py-1 rounded text-sm uppercase">
                    Trailer Window Whiteboard
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
                    "Seasoned Fries are $5.00 • Kids Fries & Hotdog $8.00 • Fresh Honey Bun Cake Waiting!"
                  </span>
                </div>
                <span className="text-xs text-[#FEF08A] font-mono">
                  We Accept All Forms of Payment (Square POS)
                </span>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: The TV Screen Digital Board (3 Columns matching photo 1) */}
        {activeBoard === 'tv' && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-[#FEF08A] font-mono text-xs uppercase tracking-widest block">
                Official Truck TV Screen
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Permanent_Marker']">
                Complete Barbecue Menu & Prices
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Col 1: Sides & Desserts */}
              <div className="space-y-6">
                {/* 8oz Sides */}
                <div className="bg-[#1C2530] border-2 border-amber-500/30 rounded-2xl p-5 shadow-md">
                  <div className="border-b-2 border-amber-500/40 pb-2 mb-4 flex justify-between items-baseline">
                    <h3 className="text-xl font-bold font-['Permanent_Marker'] text-[#FEF08A]">
                      Sides (8 oz)
                    </h3>
                    <span className="text-xs font-mono text-stone-400">$5.00 each</span>
                  </div>
                  <div className="space-y-3">
                    {menu.sides?.items.map(item => (
                      <div key={item.id} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                        <div>
                          <strong className="text-white block text-sm">{item.name}</strong>
                          <span className="text-stone-400 text-[11px]">{item.description}</span>
                        </div>
                        <span className="font-bold text-amber-300 font-mono text-sm ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desserts & Drinks */}
                <div className="bg-[#1C2530] border-2 border-amber-500/30 rounded-2xl p-5 shadow-md">
                  <div className="border-b-2 border-amber-500/40 pb-2 mb-4">
                    <h3 className="text-xl font-bold font-['Permanent_Marker'] text-[#FDA4AF]">
                      Desserts & Drinks
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {menu.dessertsAndDrinks?.items.map(item => (
                      <div key={item.id} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                        <div>
                          <strong className="text-white block text-sm">{item.name}</strong>
                          <span className="text-stone-400 text-[11px]">{item.description}</span>
                          {item.extraOption && <span className="text-amber-300 block text-[11px]">{item.extraOption}</span>}
                        </div>
                        <span className="font-bold text-amber-300 font-mono text-sm ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Dinners & Plates */}
              <div className="bg-[#1C2530] border-2 border-amber-500/40 rounded-2xl p-5 shadow-md flex flex-col justify-between">
                <div>
                  <div className="border-b-2 border-amber-500/40 pb-2 mb-4">
                    <h3 className="text-2xl font-bold font-['Permanent_Marker'] text-white">
                      Dinners & Plates
                    </h3>
                    <p className="text-xs text-stone-300 font-mono mt-0.5">
                      Includes choice of 2 sides & warm dinner roll
                    </p>
                  </div>
                  <div className="space-y-4">
                    {menu.dinners?.items.map(item => (
                      <div key={item.id} className="border-b border-white/10 pb-3">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-white text-sm font-['Permanent_Marker']">{item.name}</h4>
                          <span className="font-bold text-[#FEF08A] font-mono text-base">{item.price}</span>
                        </div>
                        <p className="text-xs text-stone-400 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-amber-500/30 text-center text-xs text-amber-300 font-mono">
                  * SOME ITEMS MAY NOT BE AVAILABLE *
                </div>
              </div>

              {/* Col 3: Sandwiches & Meats Only */}
              <div className="space-y-6">
                {/* Sandwiches */}
                <div className="bg-[#1C2530] border-2 border-amber-500/30 rounded-2xl p-5 shadow-md">
                  <div className="border-b-2 border-amber-500/40 pb-2 mb-4">
                    <h3 className="text-xl font-bold font-['Permanent_Marker'] text-[#38BDF8]">
                      Sandwiches & Handhelds
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {menu.sandwiches?.items.map(item => (
                      <div key={item.id} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                        <div>
                          <strong className="text-white block text-sm">{item.name}</strong>
                          <span className="text-stone-400 text-[11px]">{item.description}</span>
                          {item.extraOption && <span className="text-amber-300 block text-[11px]">{item.extraOption}</span>}
                        </div>
                        <span className="font-bold text-amber-300 font-mono text-sm ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meats Only by the Pound */}
                <div className="bg-[#1C2530] border-2 border-amber-500/30 rounded-2xl p-5 shadow-md">
                  <div className="border-b-2 border-amber-500/40 pb-2 mb-4">
                    <h3 className="text-xl font-bold font-['Permanent_Marker'] text-[#FEF08A]">
                      Meats Only (Slab & LB)
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {menu.meatsOnly?.items.map(item => (
                      <div key={item.id} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                        <div>
                          <strong className="text-white block text-sm">{item.name}</strong>
                          {item.extraOption && <span className="text-amber-300 block text-[11px]">{item.extraOption}</span>}
                        </div>
                        <span className="font-bold text-amber-300 font-mono text-sm ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 3: Real Truck Photos Showcase */}
        {activeBoard === 'photos' && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-[#FDA4AF] font-mono text-xs uppercase tracking-widest block">
                Straight from the Food Trailer
              </span>
              <h2 className="text-3xl font-bold text-white font-['Permanent_Marker']">
                Donald’s Real Handwritten Signs & Trailer Wrap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#161F28] rounded-xl p-3 border border-stone-700">
                <img src="./images/chalkboard-specials.jpg" alt="Chalkboard" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-bold text-sm text-white mt-2 font-['Permanent_Marker']">Sidewalk Chalkboard</h4>
                <p className="text-xs text-stone-400">Multi-meat combos & seafood catches.</p>
              </div>

              <div className="bg-[#161F28] rounded-xl p-3 border border-stone-700">
                <img src="./images/window-specials.jpg" alt="Window" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-bold text-sm text-white mt-2 font-['Permanent_Marker']">Window Whiteboard</h4>
                <p className="text-xs text-stone-400">Honey Bun cake & value lunch combos.</p>
              </div>

              <div className="bg-[#161F28] rounded-xl p-3 border border-stone-700">
                <img src="./images/tv-menu.jpg" alt="TV Screen" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-bold text-sm text-white mt-2 font-['Permanent_Marker']">TV Screen Menu</h4>
                <p className="text-xs text-stone-400">Full dinner plates and sides.</p>
              </div>

              <div className="bg-[#161F28] rounded-xl p-3 border border-stone-700">
                <img src="./images/truck-logo-wrap.jpg" alt="Logo Wrap" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-bold text-sm text-white mt-2 font-['Permanent_Marker']">Trailer Art & Wrap</h4>
                <p className="text-xs text-stone-400">Tongue-twisting pig mascot and fire wrap.</p>
              </div>
            </div>
          </div>
        )}

        {/* 4. Find the Trailer Card */}
        <div className="bg-[#161F28] border-2 border-[#30363D] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#FEF08A] font-['Permanent_Marker'] text-xs uppercase block">
              Where to Pull Up Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Permanent_Marker'] mt-0.5">
              {current.name} • {current.hours}
            </h3>
            <p className="text-xs text-stone-300 font-mono mt-1">
              📍 {current.address}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#38BDF8] hover:bg-[#0284C7] text-stone-950 font-black px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition"
            >
              Directions
            </a>
            <a
              href="tel:9107092900"
              className="bg-[#D9381E] hover:bg-[#B72C15] text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition"
            >
              Call Trailer: (910) 709-2900
            </a>
          </div>
        </div>

      </main>

      {/* 5. Chalkboard Footer */}
      <footer className="bg-[#0D1117] border-t border-[#30363D] py-8 px-4 text-center text-xs text-stone-400 font-mono">
        <p className="text-white font-['Permanent_Marker'] text-sm">
          Tisdale's Southern BBQ • Owned & Operated by Donald Tisdale
        </p>
        <p className="text-[11px] text-stone-500 mt-1">
          "I love cooking like a carpenter loves building houses." • Andrews, SC Roots
        </p>
        <div className="mt-3">
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="text-[#38BDF8] hover:underline cursor-pointer text-xs font-['Permanent_Marker']"
          >
            📍 GPS Location Tracking Options (White Paper)
          </button>
        </div>
      </footer>

    </div>
  );
}
