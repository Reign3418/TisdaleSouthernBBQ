import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { X, ChefHat, Flame, AlertTriangle, MapPin, Check, RefreshCw, Power } from 'lucide-react';

export default function PitmasterAdminModal() {
  const {
    isPitmasterMode,
    setIsPitmasterMode,
    menu,
    specials,
    schedule,
    announcements,
    toggleItemStock,
    toggleSpecialStock,
    toggleFryerStatus,
    updateCurrentLocation,
    setAnnouncements,
    resetToDefaults
  } = usePitmaster();

  const [locationName, setLocationName] = useState(schedule.currentLocation.name);
  const [locationAddress, setLocationAddress] = useState(schedule.currentLocation.address);
  const [locationHours, setLocationHours] = useState(schedule.currentLocation.hours);
  const [marqueeText, setMarqueeText] = useState(announcements.topMarquee);
  const [saveMessage, setSaveMessage] = useState('');

  if (!isPitmasterMode) return null;

  const presets = [
    { name: "Stop Button Bar & Arcade", address: "Legion Road, Fayetteville, NC", hours: "1:30 PM - 6:30 PM" },
    { name: "North View Lanes Bowling Alley", address: "Ramsey St, Fayetteville, NC", hours: "5:00 PM - Till Closing" },
    { name: "Static Line Brewing Co.", address: "Sanford, NC", hours: "4:30 PM - 8:30 PM" },
    { name: "Dunn Downtown Block Party", address: "Downtown Dunn, NC", hours: "11:00 AM - 7:00 PM" },
    { name: "Closed for Smoker Maintenance", address: "Fayetteville, NC", hours: "Closed" }
  ];

  const applyPreset = (preset) => {
    setLocationName(preset.name);
    setLocationAddress(preset.address);
    setLocationHours(preset.hours);
    updateCurrentLocation({
      name: preset.name,
      address: preset.address,
      hours: preset.hours
    });
    setSaveMessage(`Applied preset: ${preset.name}`);
    setTimeout(() => setSaveMessage(''), 2500);
  };

  const handleSaveLocation = (e) => {
    e.preventDefault();
    updateCurrentLocation({
      name: locationName,
      address: locationAddress,
      hours: locationHours
    });
    setSaveMessage('Location updated on live site!');
    setTimeout(() => setSaveMessage(''), 2500);
  };

  const handleSaveMarquee = () => {
    setAnnouncements(prev => ({ ...prev, topMarquee: marqueeText }));
    setSaveMessage('Marquee banner updated on live site!');
    setTimeout(() => setSaveMessage(''), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#181311] border-2 border-amber-500 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#241A15] border-b border-[#3D2C24] p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500 text-stone-950 font-black">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-600/40">
                  Pitmaster Pocket Admin
                </span>
                <span className="text-xs text-stone-400">10-Second Quick Control</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider leading-none mt-0.5">
                Donald's On-The-Fly Truck Dashboard
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsPitmasterMode(false)}
            className="p-2 rounded-xl bg-[#2E201B] hover:bg-[#3D2B24] text-stone-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Feedback message banner */}
        {saveMessage && (
          <div className="bg-emerald-600 text-white text-xs sm:text-sm font-bold py-2 px-4 flex items-center justify-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* Scrollable controls */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* SECTION 1: THE BIG 1-TAP FRYER GREASE CUTOFF SWITCH */}
          <div className="p-5 rounded-2xl bg-[#221815] border-2 border-amber-600/50 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Kitchen & Fryer Cutoff Switch
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Grease Status:{" "}
                  {announcements.fryerOpen ? (
                    <span className="text-emerald-400">HOT & FRYING (OPEN)</span>
                  ) : (
                    <span className="text-rose-400">OFF (30-MIN CUTOFF ACTIVE)</span>
                  )}
                </h4>
                <p className="text-xs text-stone-300 mt-1 max-w-xl">
                  Tap to immediately notify customers that the grease is turned off for the evening. Fried wings, pork chops, fries, and seafood will show as unavailable, while smoked meats remain active.
                </p>
              </div>

              <button
                onClick={toggleFryerStatus}
                className={`px-5 py-3 rounded-xl font-black text-sm tracking-wider uppercase transition shadow-xl cursor-pointer flex items-center gap-2 shrink-0 ${
                  announcements.fryerOpen
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
                }`}
              >
                <Power className="w-5 h-5" />
                <span>{announcements.fryerOpen ? "Turn Grease OFF" : "Turn Grease ON"}</span>
              </button>
            </div>
          </div>

          {/* SECTION 2: 1-TAP 86 / SOLD OUT BUTTONS */}
          <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22]">
            <div className="mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Instant 86 List (Sold Out Toggles)
              </span>
              <h4 className="text-xl font-bold text-white mt-0.5">
                Tap Any Item to Mark In-Stock or SOLD OUT
              </h4>
              <p className="text-xs text-stone-300">
                Run out of brisket or ribs? Tap once. The live website immediately badges the item as "SOLD OUT". Tap again tomorrow to restock!
              </p>
            </div>

            {/* Specials Stock Toggles */}
            <div className="mb-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 border-b border-white/10 pb-1">
                ★ Daily Specials & Cooked-To-Order Seafood
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {specials.map(s => (
                  <button
                    key={s.id}
                    onClick={() => toggleSpecialStock(s.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition cursor-pointer ${
                      s.inStock
                        ? 'bg-[#291F1A] border-emerald-500/50 hover:border-emerald-400'
                        : 'bg-rose-950/40 border-rose-600 text-stone-400'
                    }`}
                  >
                    <div className="truncate">
                      <div className="text-xs font-bold text-white truncate">{s.title}</div>
                      <div className="text-[10px] text-stone-400">{s.price}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase shrink-0 ${
                      s.inStock ? 'bg-emerald-500 text-stone-950' : 'bg-rose-600 text-white'
                    }`}>
                      {s.inStock ? 'IN STOCK' : 'SOLD OUT'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Menu Categories */}
            {Object.entries(menu).map(([catKey, catData]) => (
              <div key={catKey} className="mb-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 border-b border-white/10 pb-1">
                  {catData.categoryName}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {catData.items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => toggleItemStock(catKey, item.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition cursor-pointer ${
                        item.inStock
                          ? 'bg-[#291F1A] border-emerald-500/50 hover:border-emerald-400'
                          : 'bg-rose-950/40 border-rose-600 text-stone-400'
                      }`}
                    >
                      <div className="truncate">
                        <div className="text-xs font-bold text-white truncate">{item.name}</div>
                        <div className="text-[10px] text-stone-400">{item.price}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase shrink-0 ${
                        item.inStock ? 'bg-emerald-500 text-stone-950' : 'bg-rose-600 text-white'
                      }`}>
                        {item.inStock ? 'IN STOCK' : 'SOLD OUT'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 3: 10-SECOND LOCATION PRESETS */}
          <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22]">
            <div className="mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Where are we parked today?
              </span>
              <h4 className="text-xl font-bold text-white mt-0.5">
                1-Tap Location Presets
              </h4>
              <p className="text-xs text-stone-300">
                Tap any regular food truck stop to update the live location and hours on the website instantly:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => applyPreset(p)}
                  className="bg-[#2D211B] hover:bg-amber-500 hover:text-stone-950 text-amber-200 border border-amber-600/30 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  📍 {p.name}
                </button>
              ))}
            </div>

            {/* Custom Location Form */}
            <form onSubmit={handleSaveLocation} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Location Name</label>
                <input
                  type="text"
                  value={locationName}
                  onChange={e => setLocationName(e.target.value)}
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Address / Town</label>
                <input
                  type="text"
                  value={locationAddress}
                  onChange={e => setLocationAddress(e.target.value)}
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Today's Hours</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={locationHours}
                    onChange={e => setLocationHours(e.target.value)}
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-lg text-xs transition cursor-pointer shrink-0"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* SECTION 4: TOP TICKER MARQUEE EDIT */}
          <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22]">
            <div className="mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Top Screen Banner Message
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Announce Today's Hot Special or Meat Drop
              </h4>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={marqueeText}
                onChange={e => setMarqueeText(e.target.value)}
                className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                placeholder="e.g., Fresh smoked turkey legs coming off the smoker at 2:00 PM!"
              />
              <button
                onClick={handleSaveMarquee}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-lg text-xs transition cursor-pointer shrink-0"
              >
                Update Banner
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#14100E] border-t border-[#352822] flex items-center justify-between">
          <button
            onClick={resetToDefaults}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-rose-400 transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All to Initial Defaults</span>
          </button>

          <button
            onClick={() => setIsPitmasterMode(false)}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-lg"
          >
            Done (Back to Live Site)
          </button>
        </div>

      </div>
    </div>
  );
}
