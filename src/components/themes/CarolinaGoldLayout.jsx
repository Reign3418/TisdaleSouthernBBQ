import React, { useState } from 'react';
import { usePitmaster } from '../../context/PitmasterContext';
import { Phone, MapPin, Clock, Navigation, Heart, Flame, Calendar, Award, Sparkles, Check, Plus } from 'lucide-react';
import SquareIcon from '../icons/SquareIcon';
import FacebookIcon from '../icons/FacebookIcon';

export default function CarolinaGoldLayout() {
  const { menu, specials, schedule, announcements, addToCart, setIsSpecialsModalOpen, setIsGpsWhitePageOpen } = usePitmaster();
  const current = schedule.currentLocation;
  const [activeCategory, setActiveCategory] = useState('dinners');
  const [addedIds, setAddedIds] = useState({});

  const handleAdd = (item) => {
    addToCart(item);
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAddedIds(prev => ({ ...prev, [item.id]: false })), 1500);
  };

  const categories = [
    { key: 'dinners', label: 'Dinner Plates (w/ 2 Sides)' },
    { key: 'sandwiches', label: 'Sandwiches & Sliders' },
    { key: 'meatsOnly', label: 'Meats By The Pound' },
    { key: 'sides', label: 'Homestyle Sides (8oz)' },
    { key: 'dessertsAndDrinks', label: 'Desserts & Cold Drinks' }
  ];

  return (
    <div className="bg-[#FAF7F0] text-[#241C18] font-sans selection:bg-[#B45309] selection:text-white">
      
      {/* 1. Top Hometown Welcome Banner */}
      <div className="bg-[#261B14] text-[#F5ECE1] py-2 px-3 text-xs border-b border-[#3E2E25]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#B45309] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-none">
              Andrews, SC Heritage
            </span>
            <span className="font-medium text-amber-200">
              Tisdale's Southern BBQ • Hickory-Smoked Daily in Fayetteville & Surrounding NC
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:9107092900" className="flex items-center gap-1 text-white hover:text-amber-300 font-bold">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(910) 709-2900</span>
            </a>
            <span className="text-stone-500">•</span>
            <span className="text-xs text-stone-300">Square POS Accepted</span>
          </div>
        </div>
      </div>

      {/* 2. Warm Heritage Header */}
      <header className="bg-[#FFFFFF] border-b border-[#E7DFD5] py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="./images/truck-logo-wrap.jpg"
              alt="Tisdale's Southern BBQ Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-none object-cover border-4 border-[#B45309] shadow-md"
            />
            <div>
              <span className="text-[#B45309] text-xs font-black uppercase tracking-widest block">
                Donald Tisdale's Food Trailer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#261B14] font-['Playfair_Display'] tracking-tight leading-none mt-0.5">
                Tisdale’s Southern BBQ
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 italic font-serif">
                "Mouth-Watering, Tongue-Twisting BBQ — Summa Everything"
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            <a
              href="#gold-menu"
              className="px-4 py-2 rounded-none bg-[#FAF4EA] hover:bg-[#F3E7D3] border border-[#D5C2A5] text-[#78350F] font-bold text-xs uppercase tracking-wider transition"
            >
              View Menu
            </a>
            <a
              href="#gold-location"
              className="px-4 py-2 rounded-none bg-[#FAF4EA] hover:bg-[#F3E7D3] border border-[#D5C2A5] text-[#78350F] font-bold text-xs uppercase tracking-wider transition"
            >
              Today's Stop
            </a>
            <a
              href="tel:9107092900"
              className="flex items-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold px-4 py-2.5 rounded-none text-xs uppercase tracking-wider transition shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Trailer</span>
            </a>
          </div>

        </div>
      </header>

      {/* 3. Hero: Donald's Story & The Heart Behind the Food */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-none p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[#B45309] text-xs font-black uppercase tracking-widest bg-[#FEF3C7] px-3 py-1 rounded-none border border-[#FDE68A]">
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                <span>The Story of Donald Tisdale</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#261B14] font-['Playfair_Display'] leading-tight">
                "I love cooking like a carpenter loves building houses."
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed font-serif text-base">
                "I grew up in a small town called Andrews, SC. As I watched my mom and Dad compete against each other on the stove, I developed a true passion for cooking. I started cooking at the age of 9. This food trailer is a dream come true and a gift from God."
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We sell barbecue Southern style, and <strong className="text-stone-900">"Summa" everything</strong>. All our meats are honest, slow-smoked low and slow with pure hickory pellets, and priced so everyday working families can enjoy hearty, delicious meals. Donald's whole wings and pork chops are cooked fresh to order!
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#78350F]">
                <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-600" /> Hickory Pellet Smoked</span>
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#B45309]" /> Andrews, SC Roots</span>
                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-600" /> Family Owned</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F0] border-2 border-[#D5C2A5] rounded-none p-4 shadow-sm text-center space-y-3">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Donald's Trailer"
                  className="w-full h-56 object-cover rounded-none border border-[#D5C2A5]"
                />
                <div className="text-xs text-stone-600 italic font-serif">
                  "We love smiling faces; we aim to please our customers and value their opinions."
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Today's Location Signboard */}
      <section id="gold-location" className="py-6 px-4 max-w-7xl mx-auto">
        <div className="bg-[#261B14] text-white rounded-none p-6 sm:p-8 shadow-lg border-2 border-[#3E2E25]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-[#B45309] text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-none inline-block">
                Where We Are Parked Today
              </span>
              <h3 className="text-3xl font-black text-white font-['Playfair_Display']">
                {current.name}
              </h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-amber-200">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-amber-400" /> {current.address}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-400" /> {current.hours}</span>
              </div>
              <p className="text-xs text-stone-400 pt-1">
                Notice: Fryer grease turns off 30 minutes before closing. Smoked meats are hot until sold out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white font-bold px-5 py-3 rounded-none text-xs uppercase tracking-wider transition shadow"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:9107092900"
                className="flex items-center justify-center gap-2 bg-[#3A2A20] hover:bg-[#4E392B] border border-[#5E4434] text-white font-bold px-5 py-3 rounded-none text-xs uppercase tracking-wider transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call (910) 709-2900</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Butcher Paper Menu */}
      <section id="gold-menu" className="py-10 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[#B45309] text-xs font-black uppercase tracking-widest block">
            The Digital TV Board
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-[#261B14] font-['Playfair_Display']">
            Donald’s Southern Barbecue Menu
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-serif">
            All dinner plates include your choice of two 8oz sides and a warm dinner roll.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-none text-xs font-bold transition cursor-pointer border ${
                activeCategory === cat.key
                  ? 'bg-[#B45309] text-white border-[#B45309] shadow'
                  : 'bg-white text-stone-700 hover:bg-[#FAF4EA] border-[#E7DFD5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu[activeCategory]?.items.filter(item => !item.hidden).map(item => {
            const isSoldOut = !item.inStock;

            return (
              <div
                key={item.id}
                className={`bg-[#FFFFFF] border rounded-none p-5 shadow-sm transition flex flex-col justify-between ${
                  isSoldOut
                    ? 'border-stone-300 opacity-60 bg-stone-50'
                    : 'border-[#E7DFD5] hover:border-[#B45309]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 border-b border-[#F0EAE1] pb-2 mb-2">
                    <h4 className="font-bold text-[#261B14] text-base font-['Playfair_Display']">
                      {item.name}
                    </h4>
                    <div className="text-right shrink-0">
                      {isSoldOut ? (
                        <span className="text-[10px] font-black uppercase bg-rose-600 text-white px-2 py-0.5 rounded-none">
                          SOLD OUT
                        </span>
                      ) : (
                        <span className="text-lg font-black text-[#B45309] font-serif">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                  {item.extraOption && (
                    <p className="text-xs text-[#92400E] font-medium mb-1.5">{item.extraOption}</p>
                  )}
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-stone-500">
                  <span className="italic">{item.badge || "Smoked Fresh Daily"}</span>
                  {isSoldOut ? (
                    <span className="text-rose-700 font-bold">Sold Out Today</span>
                  ) : (
                    <a
                      href="tel:9107092900"
                      className="text-[#991B1B] font-bold hover:underline"
                    >
                      Call to Order
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Window & Chalkboard Specials Highlights */}
      <section className="py-10 bg-[#F2ECE0] border-t border-b border-[#E2D8C9] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[#B45309] text-xs font-black uppercase tracking-widest">Trailer Specials</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#261B14] font-['Playfair_Display']">
                Fresh Cooked-to-Order Catfish, Shrimps & Pork Chops
              </h3>
            </div>
            <a
              href="tel:9107092900"
              className="bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold px-4 py-2 rounded-none text-xs uppercase tracking-wider shadow"
            >
              Call to Check Daily Availability: (910) 709-2900
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specials.filter(s => !s.hidden).slice(0, 4).map(s => (
              <div key={s.id} className="bg-white rounded-none p-4 border border-[#DCD3C5] shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded-none">
                    {s.badge}
                  </span>
                  {s.inStock ? (
                    <span className="font-bold text-[#B45309] font-serif">{s.price}</span>
                  ) : (
                    <span className="text-[10px] font-black uppercase bg-rose-600 text-white px-2 py-0.5 rounded-none">
                      SOLD OUT
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-[#261B14] mt-1">{s.title}</h4>
                <p className="text-xs text-stone-600 mt-1">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Warm Footer */}
      <footer className="bg-[#1F1611] text-[#D5CDC5] py-10 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-stone-800 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <img src="./images/truck-logo-wrap.jpg" alt="Logo" className="w-12 h-12 rounded-none border border-[#B45309]" />
            <div>
              <h4 className="text-lg font-bold text-white font-['Playfair_Display']">Tisdale’s Southern BBQ</h4>
              <p className="text-xs text-amber-300">Andrews, SC Roots • Fayetteville, NC</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="flex items-center justify-center md:justify-end gap-2 text-stone-200 font-bold">
              <Phone className="w-4 h-4 text-emerald-400" />
              <a href="tel:9107092900" className="hover:text-white">(910) 709-2900</a>
            </div>
            <p className="text-[11px] text-stone-400">Square POS Accepted: Cards, Apple Pay, Tap & Cash</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tisdale's Southern BBQ. Owned & Operated by Donald Tisdale.
          </div>
          <button
            onClick={() => setIsGpsWhitePageOpen(true)}
            className="text-amber-400 hover:text-amber-300 hover:underline cursor-pointer font-medium"
          >
            📍 Location Tracking Options (White Page Brief)
          </button>
        </div>
      </footer>

    </div>
  );
}
