import React, { useState, useEffect } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  Smartphone,
  Tv,
  Wifi,
  Flame,
  Power,
  MapPin,
  Sparkles,
  ZoomIn,
  ZoomOut,
  Monitor,
  CheckCircle2,
  Sliders,
  DollarSign,
  Eye,
  Radio,
  Layers,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function TrailerTwinModal() {
  const {
    isTrailerSimOpen,
    setIsTrailerSimOpen,
    setIsTvMenuOpen,
    menu,
    specials,
    schedule,
    announcements,
    setAnnouncements,
    toggleItemStock,
    editMenuItem,
    toggleSpecialStock,
    editSpecial,
    toggleFryerStatus,
    updateCurrentLocation,
    tvBoardTheme,
    setTvBoardTheme,
    lastSyncPulse,
    lanSyncInfo,
    resetToDefaults
  } = usePitmaster();

  const [activeZone, setActiveZone] = useState('tv'); // 'ac' | 'logo' | 'window' | 'tv'
  const [phoneTab, setPhoneTab] = useState('pit'); // 'pit' | 'specials' | 'gps'
  const [isTvZoomed, setIsTvZoomed] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);
  const [showRigGuide, setShowRigGuide] = useState(false);
  const [syncFlash, setSyncFlash] = useState(false);
  const [rotateSlide, setRotateSlide] = useState(0); // 0 = Full Menu, 1 = Giant Spotlight + NFC

  // Auto-rotate the TV screen between Full Menu and Giant Spotlight when tvRotateMode is enabled
  useEffect(() => {
    if (!announcements.tvRotateMode) {
      setRotateSlide(0);
      return;
    }
    const timer = setInterval(() => {
      setRotateSlide(prev => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.tvRotateMode]);

  // Trigger a brief visual wireless pulse whenever state changes
  useEffect(() => {
    if (!lastSyncPulse) return;
    setSyncFlash(true);
    const t = setTimeout(() => setSyncFlash(false), 650);
    return () => clearTimeout(t);
  }, [lastSyncPulse, menu, specials, announcements, schedule, tvBoardTheme]);

  if (!isTrailerSimOpen) return null;

  const current = schedule.currentLocation;

  // Launch dedicated 2nd window for GAEMS HDMI Monitor connected to Dell E5550
  const handleLaunchGaemsMonitor = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    window.open(
      `${baseUrl}?tv=1#tv-display`,
      'TisdaleGAEMSTV',
      'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no'
    );
  };

  // Left-to-Right Trailer Architecture Zones (matching Donald's actual trailer photo)
  const trailerZones = [
    {
      id: 'ac',
      number: '1',
      label: 'AC Bay & Roof Wrap',
      shortTitle: 'Left: AC Unit + 910.709.2900 / Website Wrap',
      coords: { left: '12%', top: '34%' },
      box: { left: '3.5%', top: '21%', width: '21%', height: '37%' },
      description:
        'Upper-left wrap displays 910.709.2900 & TISDALESOUTHERNBBQ.COM above the Gree mini-split AC hatch. Connecting his domain to this platform turns that vinyl wrap into a 24/7 Google Maps & mobile pre-order magnet.'
    },
    {
      id: 'logo',
      number: '2',
      label: 'Company Logo Crest',
      shortTitle: 'Center-Left: Tisdale’s Southern BBQ Emblem',
      coords: { left: '32.5%', top: '48%' },
      box: { left: '26%', top: '36%', width: '13%', height: '27%' },
      description:
        'His signature "Mouth Watering Tongue Twisting BBQ" emblem and 100% Pure Hickory Pellet craft are preserved across all 3 website design concepts and the 1080p TV board.'
    },
    {
      id: 'window',
      number: '3',
      label: 'Order & Pickup Window',
      shortTitle: 'Center: Sliding Counter Window (Fast-Lane)',
      coords: { left: '47%', top: '46%' },
      box: { left: '39.2%', top: '35%', width: '16.5%', height: '24%' },
      description:
        'Where walk-up orders and Square POS payments happen. Customers standing in line scan the QR code to build their plate on their phone BEFORE reaching this window—cutting window wait times in half.'
    },
    {
      id: 'tv',
      number: '4',
      label: '55" Exterior TV + Chalkboard',
      shortTitle: 'Right: Live 55" TV Enclosure (Chalkboard Retired!)',
      coords: { left: '65%', top: '36%' },
      box: { left: '57.3%', top: '36.5%', width: '15.2%', height: '21%' },
      description:
        'The live digital menu board is mounted inside his exterior TV frame! Notice the small handwritten chalkboard hanging below the TV in the photo—now Donald can update "Today’s Specials", prices, and "SOLD OUT" badges straight from his cell phone!'
    }
  ];

  const activeZoneData = trailerZones.find(z => z.id === activeZone) || trailerZones[3];

  // Key items for quick 1-tap demo on the simulated cell phone
  const quickDinners = menu.dinners?.items.slice(0, 5) || [];
  const quickSandwiches = menu.sandwiches?.items.slice(0, 3) || [];
  const quickSides = menu.sides?.items.filter(i => i.isFryerItem) || [];

  // Helper to adjust a dinner's price by +$1 or -$1 live
  const handleStepPrice = (categoryKey, item, delta) => {
    const currentNum = item.numericPrice || parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 16;
    const nextNum = Math.max(1, currentNum + delta);
    editMenuItem(categoryKey, item.id, {
      price: `$${nextNum.toFixed(2)}`,
      numericPrice: nextNum
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080605]/95 backdrop-blur-md flex flex-col overflow-y-auto animate-fadeIn">
      
      {/* =================================================================== */}
      {/* TOP COMMAND BAR                                                     */}
      {/* =================================================================== */}
      <div className="bg-[#120D0B] border-b border-amber-600/40 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-500 text-stone-950 font-black text-xs px-2.5 py-1 rounded-none uppercase tracking-wider font-mono flex items-center gap-1.5 shadow">
            <Tv className="w-3.5 h-3.5" />
            <span>Virtual Trailer Digital Twin</span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-stone-200 hidden sm:inline">
            Cell Phone → Trailer 55" TV &amp; Dell E5550 / GAEMS HDMI Rig
          </span>
          <span
            className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-none border transition-all ${
              syncFlash
                ? 'bg-emerald-500 text-stone-950 border-emerald-300 scale-105 shadow-lg'
                : 'bg-emerald-950/60 text-emerald-400 border-emerald-700/50'
            }`}
          >
            {syncFlash ? '📡 SYNC PULSE SENT (<4ms)' : '🟢 LIVE PHONE-TO-TV LINK ACTIVE'}
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {/* 1-Click Pop-Out for GAEMS HDMI Monitor */}
          <button
            onClick={handleLaunchGaemsMonitor}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition cursor-pointer shadow border border-emerald-400"
            title="Opens a second 1080p TV window to drag onto your GAEMS HDMI monitor"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Pop Out TV to GAEMS HDMI Screen</span>
          </button>

          {/* Toggle Dell E5550 + GAEMS + Wi-Fi Billboard Guide */}
          <button
            onClick={() => setShowRigGuide(!showRigGuide)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold border transition cursor-pointer ${
              showRigGuide
                ? 'bg-amber-500 text-stone-950 border-amber-400'
                : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>{showRigGuide ? 'Hide Wi-Fi & Closed-Lid Rig' : '📡 Wi-Fi Billboard + Closed-Lid PC Blueprint'}</span>
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsTrailerSimOpen(false)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-none bg-stone-800 hover:bg-rose-900 text-stone-200 hover:text-white text-xs font-bold border border-stone-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Close Simulator</span>
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* COLLAPSIBLE HARDWARE GUIDE: WI-FI SSID BILLBOARD + CLOSED-LID DELL  */}
      {/* =================================================================== */}
      {showRigGuide && (
        <div className="bg-[#18120F] border-b-2 border-amber-500/60 px-4 sm:px-8 py-4 text-xs text-stone-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>Tactical Field Architecture: Dual-SSID Wi-Fi Billboard + Closed-Lid Dell E5550 + 55" TV</span>
              </h3>
              <button
                onClick={() => setShowRigGuide(false)}
                className="text-stone-400 hover:text-white font-mono text-[11px] underline cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Card 1: The Guest Wi-Fi SSID Billboard */}
              <div className="bg-[#100C0A] border border-amber-500/50 p-3.5 rounded-none space-y-2">
                <div className="text-amber-400 font-black font-mono uppercase">
                  1. Free 250ft Wi-Fi Billboard (No Internet Needed!)
                </div>
                <p className="text-stone-300 leading-relaxed">
                  At a crowded festival or brewery, cell service slows down and people open their phone’s <strong>Wi-Fi Settings</strong>. Your router broadcasts a public Guest SSID right to the top of every phone within 250 feet:
                </p>
                <div className="bg-stone-950 border border-stone-700 p-2 font-mono text-[11px] space-y-1">
                  <div className="text-stone-400 text-[9px] uppercase">Customer iPhone Wi-Fi List:</div>
                  <div className="text-emerald-400 font-black flex items-center justify-between">
                    <span>🔥 Tisdale_BBQ_Smoked_Brisket</span>
                    <span>📶</span>
                  </div>
                  <div className="text-amber-300 font-bold flex items-center justify-between">
                    <span>🍖 Order_BBQ_910-709-2900</span>
                    <span>📶</span>
                  </div>
                </div>
              </div>

              {/* Card 2: The Laptop's Built-In Wi-Fi Card = The Router! */}
              <div className="bg-[#100C0A] border border-emerald-600/50 p-3.5 rounded-none space-y-2">
                <div className="text-emerald-400 font-black font-mono uppercase">
                  2. Zero Router Needed (Dell E5550 Built-In Wi-Fi!)
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Your <strong>Dell Latitude E5550 already has a built-in Wi-Fi card</strong> that can broadcast a Windows Mobile Hotspot (<strong><code>192.168.137.1</code></strong>) directly! Donald's cell phone connects straight to the closed-lid laptop—<strong>zero external router box needed!</strong>
                </p>
                <div className="bg-emerald-950/40 border border-emerald-700/50 p-2 font-mono text-[11px] text-emerald-300">
                  {lanSyncInfo?.active ? (
                    <>
                      <div>🟢 <strong>LIVE LAPTOP WIFI RELAY ACTIVE:</strong></div>
                      <div>Phone URL: <code>http://{lanSyncInfo.lanIp}:{lanSyncInfo.port}/#trailer-sim</code></div>
                    </>
                  ) : (
                    <div>📡 Default Laptop Hotspot IP: <code>http://192.168.137.1:3000</code></div>
                  )}
                </div>
              </div>

              {/* Card 3: Closed-Lid Dell E5550 Space & Power Spec */}
              <div className="bg-[#100C0A] border border-stone-800 p-3.5 rounded-none space-y-2">
                <div className="text-amber-400 font-black font-mono uppercase">
                  3. Closed-Lid Dell E5550 (1 Cable, 0 Counter Space)
                </div>
                <ul className="list-disc list-inside space-y-1 text-stone-300">
                  <li><strong>1-Click Script Included:</strong> Run <code>Start-TisdalePitBox.ps1</code>—it automatically sets Windows <em>Lid Close Action = Do Nothing</em> via <code>powercfg</code>!</li>
                  <li><strong>Only ~15W Power Draw:</strong> With the lid closed and screen off, the E5550 draws ~15W and its internal battery acts as a <strong>free 4-hour UPS backup</strong> if the generator surges!</li>
                  <li><strong>Only 1 HDMI Cord:</strong> Literally just the closed Dell E5550 tucked on a shelf + 1 HDMI cord to the TV!</li>
                </ul>
              </div>

              {/* Card 4: Tabletop Demo with GAEMS Monitor */}
              <div className="bg-[#100C0A] border border-stone-800 p-3.5 rounded-none space-y-2">
                <div className="text-amber-400 font-black font-mono uppercase">
                  4. How to Demo With Your GAEMS Monitor
                </div>
                <ol className="list-decimal list-inside space-y-1 text-stone-300">
                  <li>Plug the <strong>GAEMS HDMI monitor</strong> into your Dell E5550 (<kbd className="bg-stone-800 px-1 border border-stone-600 font-mono">Win+P</kbd> → <strong>Extend</strong>).</li>
                  <li>Click <strong>"Pop Out TV to GAEMS HDMI Screen"</strong> above, drag it to the GAEMS screen, press <kbd className="bg-stone-800 px-1 border border-stone-600 font-mono">F11</kbd>.</li>
                  <li>Close the Dell lid partway or use your real cell phone on the same Wi-Fi (`npm run dev`) to control the GAEMS screen from across the table!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* MAIN WORKSPACE: TRAILER PHOTO (LEFT) + CELL PHONE CONTROLLER (RIGHT)*/}
      {/* =================================================================== */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ================================================================= */}
        {/* LEFT 8 COLUMNS: DONALD'S ACTUAL TRAILER WITH LIVE MOUNTED TV      */}
        {/* ================================================================= */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Trailer Control Sub-Bar */}
          <div className="bg-[#140F0D] border border-[#2E221D] p-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center flex-wrap gap-1.5">
              <span className="text-[11px] font-mono uppercase text-stone-400 font-bold mr-1">
                Left-to-Right Trailer Zones:
              </span>
              {trailerZones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`px-2.5 py-1 rounded-none text-xs font-bold font-mono transition cursor-pointer border ${
                    activeZone === z.id
                      ? 'bg-amber-500 text-stone-950 border-amber-300 font-black shadow'
                      : 'bg-[#1C1512] text-stone-300 border-stone-700 hover:border-amber-500/50'
                  }`}
                >
                  {z.number}. {z.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTvZoomed(!isTvZoomed)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-black uppercase tracking-wider transition cursor-pointer border ${
                  isTvZoomed
                    ? 'bg-amber-500 text-stone-950 border-amber-300 shadow-lg'
                    : 'bg-[#261B16] text-amber-300 border-amber-500/50 hover:bg-amber-500 hover:text-stone-950'
                }`}
              >
                {isTvZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{isTvZoomed ? 'Show Full Trailer' : 'Magnify Trailer TV'}</span>
              </button>

              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className="px-2.5 py-1 rounded-none text-[11px] font-mono font-bold bg-stone-800 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
              >
                {showHotspots ? 'Hide Pins' : 'Show Pins'}
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* INTERACTIVE TRAILER STAGE (EXACT SUNSET PHOTO + LIVE TV OVERLAY)*/}
          {/* =============================================================== */}
          <div className="relative w-full border-2 border-amber-600/50 bg-black shadow-2xl overflow-hidden select-none">
            
            {/* Actual Photo of Donald's Trailer */}
            <img
              src="./images/trailer-side-full.jpg"
              alt="Tisdale's Southern BBQ Food Trailer — Left to right: AC unit, Pig Logo, Order & Pickup Window, and 55-inch Exterior TV"
              className={`w-full h-auto block transition-transform duration-500 ease-out ${
                isTvZoomed ? 'scale-[2.35] origin-[66%_46%]' : 'scale-100 origin-center'
              }`}
            />

            {/* ============================================================= */}
            {/* LIVE INTERACTIVE TV SCREEN SUPERIMPOSED INSIDE TRAILER BEZEL   */}
            {/* Coordinates mapped directly to Donald's TV LCD:               */}
            {/* left: 59.1%, top: 40.2%, width: 11.6%, height: 13.6%          */}
            {/* ============================================================= */}
            <div
              onClick={() => setIsTvZoomed(!isTvZoomed)}
              title="Click to magnify or shrink the live TV screen on the trailer"
              style={{
                left: isTvZoomed ? '12%' : '59.1%',
                top: isTvZoomed ? '8%' : '40.2%',
                width: isTvZoomed ? '76%' : '11.6%',
                height: isTvZoomed ? '78%' : '13.6%'
              }}
              className={`absolute z-30 transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col justify-between ${
                tvBoardTheme === 'classicOrange'
                  ? 'bg-[#D86018] text-[#1A120E]'
                  : 'bg-[#0E0B0A] text-[#F5EFE6]'
              } ${
                syncFlash
                  ? 'ring-4 ring-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.9)]'
                  : isTvZoomed
                  ? 'ring-4 ring-amber-500 shadow-[0_0_60px_rgba(0,0,0,0.95)]'
                  : 'ring-1 ring-amber-400/80 shadow-inner'
              }`}
            >
              {/* TV Top Banner */}
              <div
                className={`px-1.5 py-0.5 flex items-center justify-between border-b ${
                  tvBoardTheme === 'classicOrange'
                    ? 'bg-[#211510] text-white border-amber-500/40'
                    : 'bg-[#1A120E] text-amber-300 border-amber-600/40'
                } ${isTvZoomed ? 'text-xs py-2 px-4' : 'text-[4.5px] leading-tight'}`}
              >
                <div className="font-black uppercase tracking-wider truncate">
                  🔥 TISDALE'S SOUTHERN BBQ • 100% HICKORY SMOKED
                </div>
                <div className="flex items-center gap-1 font-mono font-bold shrink-0">
                  {!announcements.fryerOpen && (
                    <span className="bg-rose-600 text-white px-1 rounded-none uppercase">
                      🛑 GREASE OFF
                    </span>
                  )}
                  <span className="text-amber-400">910-709-2900</span>
                </div>
              </div>

              {/* 3-Column Live Menu Grid inside Trailer TV */}
              <div
                className={`flex-1 grid grid-cols-3 gap-1 p-1 overflow-hidden ${
                  isTvZoomed ? 'gap-3 p-4' : 'gap-0.5 p-0.5'
                }`}
              >
                {/* Col 1: Dinners */}
                <div
                  className={`flex flex-col justify-between p-1 border ${
                    tvBoardTheme === 'classicOrange'
                      ? 'bg-white border-[#C86010] text-stone-900'
                      : 'bg-[#16110E] border-amber-600/30 text-stone-100'
                  } ${isTvZoomed ? 'p-3' : ''}`}
                >
                  <div>
                    <div
                      className={`font-black uppercase border-b pb-0.5 mb-0.5 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'border-[#E65100] text-[#B95000]'
                          : 'border-amber-500 text-amber-400'
                      } ${isTvZoomed ? 'text-sm pb-1 mb-2' : 'text-[5px]'}`}
                    >
                      Dinners (w/ 2 Sides)
                    </div>
                    <div className={isTvZoomed ? 'space-y-1.5' : 'space-y-0.5'}>
                      {menu.dinners?.items
                        .filter(i => !i.hidden)
                        .slice(0, 6)
                        .map(item => {
                          const isFryerOff = !announcements.fryerOpen && item.isFryerItem;
                          const isOut = !item.inStock || isFryerOff;
                          return (
                            <div
                              key={item.id}
                              className={`flex items-center justify-between border-b border-stone-300/20 ${
                                isOut ? 'opacity-45' : ''
                              } ${isTvZoomed ? 'text-xs py-0.5' : 'text-[4.2px] leading-none py-[0.5px]'}`}
                            >
                              <span className="font-bold uppercase truncate pr-1">{item.name}</span>
                              {isOut ? (
                                <span
                                  className={`bg-rose-600 text-white font-black font-mono px-0.5 shrink-0 ${
                                    isTvZoomed ? 'text-[10px] px-1.5 py-0.5' : 'text-[3.8px]'
                                  }`}
                                >
                                  {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                </span>
                              ) : (
                                <span
                                  className={`font-black font-mono shrink-0 ${
                                    tvBoardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                                  }`}
                                >
                                  {item.price}
                                </span>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    className={`text-center font-mono uppercase font-bold opacity-75 ${
                      isTvZoomed ? 'text-[10px] pt-2 border-t border-stone-500/20' : 'text-[3.5px]'
                    }`}
                  >
                    Pure Hickory Pellets
                  </div>
                </div>

                {/* Col 2: Sandwiches & Meats by Slab/LB */}
                <div
                  className={`flex flex-col justify-between p-1 border ${
                    tvBoardTheme === 'classicOrange'
                      ? 'bg-white border-[#C86010] text-stone-900'
                      : 'bg-[#16110E] border-amber-600/30 text-stone-100'
                  } ${isTvZoomed ? 'p-3' : ''}`}
                >
                  <div>
                    <div
                      className={`font-black uppercase border-b pb-0.5 mb-0.5 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'border-[#E65100] text-[#B95000]'
                          : 'border-amber-500 text-amber-400'
                      } ${isTvZoomed ? 'text-sm pb-1 mb-2' : 'text-[5px]'}`}
                    >
                      Sandwiches &amp; Ribs
                    </div>
                    <div className={isTvZoomed ? 'space-y-1.5' : 'space-y-0.5'}>
                      {[...(menu.sandwiches?.items || []).slice(0, 3), ...(menu.meatsOnly?.items || []).slice(0, 3)]
                        .filter(i => !i.hidden)
                        .map(item => {
                          const isFryerOff = !announcements.fryerOpen && item.isFryerItem;
                          const isOut = !item.inStock || isFryerOff;
                          return (
                            <div
                              key={item.id}
                              className={`flex items-center justify-between border-b border-stone-300/20 ${
                                isOut ? 'opacity-45' : ''
                              } ${isTvZoomed ? 'text-xs py-0.5' : 'text-[4.2px] leading-none py-[0.5px]'}`}
                            >
                              <span className="font-bold uppercase truncate pr-1">{item.name}</span>
                              {isOut ? (
                                <span
                                  className={`bg-rose-600 text-white font-black font-mono px-0.5 shrink-0 ${
                                    isTvZoomed ? 'text-[10px] px-1.5 py-0.5' : 'text-[3.8px]'
                                  }`}
                                >
                                  {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                </span>
                              ) : (
                                <span
                                  className={`font-black font-mono shrink-0 ${
                                    tvBoardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                                  }`}
                                >
                                  {item.price}
                                </span>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    className={`text-center font-mono uppercase font-bold opacity-75 ${
                      isTvZoomed ? 'text-[10px] pt-2 border-t border-stone-500/20' : 'text-[3.5px]'
                    }`}
                  >
                    Slaw • Kraut • Chili • Cheese
                  </div>
                </div>

                {/* Col 3: Sides & Today's Specials (Replaces the Hanging Chalkboard!) */}
                <div
                  className={`flex flex-col justify-between p-1 border ${
                    tvBoardTheme === 'classicOrange'
                      ? 'bg-white border-[#C86010] text-stone-900'
                      : 'bg-[#16110E] border-amber-600/30 text-stone-100'
                  } ${isTvZoomed ? 'p-3' : ''}`}
                >
                  <div>
                    <div
                      className={`font-black uppercase border-b pb-0.5 mb-0.5 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'border-[#E65100] text-[#B95000]'
                          : 'border-amber-500 text-amber-400'
                      } ${isTvZoomed ? 'text-sm pb-1 mb-1.5' : 'text-[5px]'}`}
                    >
                      Today's Specials &amp; Sides
                    </div>
                    <div className={isTvZoomed ? 'space-y-1.5' : 'space-y-0.5'}>
                      {specials
                        .filter(s => !s.hidden)
                        .slice(0, 3)
                        .map(s => {
                          const isFryerOff = !announcements.fryerOpen && s.isFryerItem;
                          const isOut = !s.inStock || isFryerOff;
                          return (
                            <div
                              key={s.id}
                              className={`flex items-center justify-between border-b border-stone-300/20 ${
                                isOut ? 'opacity-45' : ''
                              } ${isTvZoomed ? 'text-xs py-0.5' : 'text-[4.2px] leading-none py-[0.5px]'}`}
                            >
                              <span className="font-extrabold uppercase truncate pr-1">{s.title}</span>
                              {isOut ? (
                                <span
                                  className={`bg-rose-600 text-white font-black font-mono px-0.5 shrink-0 ${
                                    isTvZoomed ? 'text-[10px] px-1.5 py-0.5' : 'text-[3.8px]'
                                  }`}
                                >
                                  {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                </span>
                              ) : (
                                <span
                                  className={`font-black font-mono shrink-0 ${
                                    tvBoardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                                  }`}
                                >
                                  {s.price}
                                </span>
                              )}
                            </div>
                          );
                        })}

                      {/* Sides summary */}
                      <div
                        className={`pt-0.5 font-mono font-bold ${
                          isTvZoomed ? 'text-[11px] pt-2 text-stone-500' : 'text-[3.8px] opacity-80'
                        }`}
                      >
                        8oz Sides ($5): Mac, Collards, Yams, Beans, Slaw,{' '}
                        <span className={!announcements.fryerOpen ? 'line-through text-rose-500' : ''}>
                          Fries, Okra, Hushpuppies
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`text-center font-mono uppercase font-bold ${
                      announcements.flashSpecialActive
                        ? 'bg-rose-600 text-white animate-pulse'
                        : tvBoardTheme === 'classicOrange'
                        ? 'bg-amber-100 text-amber-950'
                        : 'bg-amber-500/20 text-amber-300'
                    } ${isTvZoomed ? 'text-[11px] py-1 px-2' : 'text-[3.6px] py-[0.5px]'}`}
                  >
                    {announcements.flashSpecialActive
                      ? `⚡ FLASH: ${announcements.flashSpecialDeal || 'Brisket Sandwich + Side $15!'}`
                      : `📍 ${current.isActive ? current.name : 'Off-Duty / Private'} • 📲 NFC TAP WINDOW`}
                  </div>
                </div>
              </div>

              {/* Rotating Giant Spotlight / Flash Special / Now Serving Overlay inside Trailer TV */}
              {(announcements.nowServingOrder || announcements.flashSpecialActive || rotateSlide === 1) && (
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-2 py-1 border-t-2 ${
                    announcements.nowServingOrder
                      ? 'border-emerald-300 bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 text-white animate-pulse'
                      : 'border-amber-300 bg-gradient-to-r from-rose-800 via-[#D9381E] to-amber-600 text-white'
                  } shadow-lg ${
                    isTvZoomed ? 'py-3 px-5 text-sm' : 'text-[4.5px] leading-tight py-0.5 px-1'
                  }`}
                >
                  <div className="font-black uppercase tracking-wider truncate">
                    {announcements.nowServingOrder
                      ? `🛎️ NOW SERVING AT PICKUP WINDOW: ORDER ${announcements.nowServingOrder}!`
                      : announcements.flashSpecialActive
                      ? `🚨 ${announcements.flashSpecialTitle || 'FLASH SPECIAL'} — ${announcements.flashSpecialDeal}`
                      : '🔥 ROTATING SPOTLIGHT: SMOKED BRISKET ($22) • SPARE RIBS ($18) • 📲 TAP PHONE ON WINDOW NFC CHIP!'}
                  </div>
                  <span className="bg-amber-300 text-stone-950 font-mono font-black px-1 shrink-0 ml-1">
                    {announcements.nowServingOrder ? 'ORDER READY' : 'LIVE NOW'}
                  </span>
                </div>
              )}

              {/* Zoomed Close Hint Bar */}
              {isTvZoomed && (
                <div className="bg-stone-950 text-amber-300 px-4 py-1.5 text-xs font-mono flex items-center justify-between border-t border-amber-500/40">
                  <span>🔍 MAGNIFIED TRAILER TV VIEW — Tap buttons on Donald's Phone (Right) to test live changes!</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTvZoomed(false);
                    }}
                    className="bg-amber-500 text-stone-950 font-black px-2.5 py-0.5 uppercase cursor-pointer"
                  >
                    Shrink Back to Trailer Bezel
                  </button>
                </div>
              )}
            </div>

            {/* ============================================================= */}
            {/* RETIRED HANDWRITTEN CHALKBOARD + NFC COUNTER CALLOUTS         */}
            {/* ============================================================= */}
            {showHotspots && !isTvZoomed && (
              <>
                <div
                  style={{ left: '41%', top: '59%' }}
                  onClick={() => setActiveZone('window')}
                  className="absolute z-20 bg-amber-500 hover:bg-amber-400 text-stone-950 text-[9px] sm:text-[10px] font-mono font-black uppercase px-1.5 py-0.5 border border-white shadow-lg cursor-pointer transition"
                  title="Stick a $0.25 waterproof NFC chip here so customers tap their phone to open the live menu!"
                >
                  📲 Tap Phone Here (NFC Menu Chip)
                </div>

                <div
                  style={{ left: '59.5%', top: '58.5%' }}
                  onClick={() => {
                    setActiveZone('tv');
                    setPhoneTab('specials');
                  }}
                  className="absolute z-20 bg-emerald-600/95 hover:bg-emerald-500 text-white text-[9px] sm:text-[10px] font-mono font-black uppercase px-1.5 py-0.5 border border-emerald-300 shadow-lg cursor-pointer transition"
                  title="In the photo, Donald had to hand-write specials on this hanging chalkboard. Now his phone updates the TV screen above!"
                >
                  ✨ Chalkboard → Live on TV!
                </div>
              </>
            )}

            {/* ============================================================= */}
            {/* LEFT-TO-RIGHT ARCHITECTURE PINS (1. AC, 2. LOGO, 3. WINDOW, 4. TV) */}
            {/* ============================================================= */}
            {showHotspots &&
              !isTvZoomed &&
              trailerZones.map(z => {
                const isSelected = activeZone === z.id;
                return (
                  <React.Fragment key={z.id}>
                    {/* Highlight Box when Selected */}
                    {isSelected && (
                      <div
                        style={z.box}
                        className="absolute z-10 border-2 border-amber-400 bg-amber-500/10 pointer-events-none animate-pulse"
                      />
                    )}
                    {/* Numbered Pin */}
                    <button
                      style={z.coords}
                      onClick={() => setActiveZone(z.id)}
                      className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-none font-mono font-black text-xs flex items-center justify-center transition cursor-pointer shadow-lg border-2 ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 border-white scale-125 ring-4 ring-amber-500/40'
                          : 'bg-stone-950/90 text-amber-400 border-amber-400 hover:scale-110'
                      }`}
                      title={z.shortTitle}
                    >
                      {z.number}
                    </button>
                  </React.Fragment>
                );
              })}
          </div>

          {/* Selected Zone Architecture Explanation Card */}
          <div className="bg-[#16100E] border-l-4 border-amber-500 border border-[#2E221D] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-stone-950 font-mono font-black text-xs px-2 py-0.5">
                  ZONE {activeZoneData.number} OF 4 (LEFT-TO-RIGHT)
                </span>
                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wide">
                  {activeZoneData.shortTitle}
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">{activeZoneData.description}</p>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                onClick={() => setIsTvZoomed(!isTvZoomed)}
                className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/50 text-xs font-bold font-mono uppercase transition cursor-pointer whitespace-nowrap"
              >
                {isTvZoomed ? '🔍 Zoom Out' : '🔍 Zoom Into TV'}
              </button>
              <button
                onClick={() => {
                  setIsTrailerSimOpen(false);
                  setIsTvMenuOpen(true);
                }}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-bold font-mono uppercase transition cursor-pointer whitespace-nowrap"
              >
                📺 Open Full 1080p TV
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT 4 COLUMNS: SIMULATED "DONALD'S CELL PHONE" REMOTE CONTROL   */}
        {/* ================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-center">
          
          {/* Smartphone Hardware Frame */}
          <div className="w-full max-w-[390px] bg-[#0B0908] border-4 border-stone-700 rounded-none shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
            
            {/* Phone Top Speaker / Status Notch */}
            <div className="bg-stone-950 px-4 py-2 border-b border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span className="font-bold text-white flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>DONALD'S PHONE</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Wifi className="w-3.5 h-3.5 animate-pulse" />
                <span>5G • TRAILER LINKED</span>
              </span>
            </div>

            {/* Phone App Header */}
            <div className="bg-gradient-to-r from-[#261710] to-[#18100C] p-3.5 border-b border-amber-600/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
                    Pitmaster Pocket Remote
                  </span>
                  <h3 className="text-base font-black text-white uppercase tracking-wide font-['Bebas_Neue']">
                    Tap Here → Watch Trailer TV Change
                  </h3>
                </div>
                <button
                  onClick={resetToDefaults}
                  className="p-1.5 bg-stone-800/80 hover:bg-stone-700 text-stone-300 border border-stone-700 text-[10px] font-mono flex items-center gap-1 cursor-pointer"
                  title="Reset all demo items back to default"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* 3 Phone Mode Tabs */}
              <div className="grid grid-cols-3 gap-1 mt-3 bg-stone-950 p-1 border border-stone-800">
                <button
                  onClick={() => setPhoneTab('pit')}
                  className={`py-1.5 text-[11px] font-black uppercase font-mono transition cursor-pointer ${
                    phoneTab === 'pit'
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  🔥 86 / Fryer
                </button>
                <button
                  onClick={() => setPhoneTab('specials')}
                  className={`py-1.5 text-[11px] font-black uppercase font-mono transition cursor-pointer ${
                    phoneTab === 'specials'
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  💲 Prices/Spec
                </button>
                <button
                  onClick={() => setPhoneTab('gps')}
                  className={`py-1.5 text-[11px] font-black uppercase font-mono transition cursor-pointer ${
                    phoneTab === 'gps'
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  📍 TV &amp; GPS
                </button>
              </div>
            </div>

            {/* ============================================================= */}
            {/* PHONE BODY CONTENT                                            */}
            {/* ============================================================= */}
            <div className="p-3.5 space-y-3.5 max-h-[540px] overflow-y-auto bg-[#120E0C]">
              
              {/* TAB 1: 1-TAP SOLD OUT, FLASH SPECIAL & FRYER CUTOFF */}
              {phoneTab === 'pit' && (
                <>
                  {/* 1-Tap Flash Special Crowd Magnet + Rotating Screen */}
                  <div className="bg-gradient-to-r from-amber-950/60 to-rose-950/60 border-2 border-amber-500/70 p-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-black uppercase text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Crowd-Magnet Live TV Controls</span>
                        </div>
                        <p className="text-[10px] text-stone-300">
                          Slow crowd? Fire a flashing promo banner or auto-rotate the TV screen!
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() =>
                          setAnnouncements(prev => ({
                            ...prev,
                            flashSpecialActive: !prev.flashSpecialActive
                          }))
                        }
                        className={`py-2 px-2 font-mono font-black text-[10px] uppercase cursor-pointer border transition ${
                          announcements.flashSpecialActive
                            ? 'bg-rose-600 text-white border-amber-300 animate-pulse shadow-lg'
                            : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-300'
                        }`}
                      >
                        {announcements.flashSpecialActive ? '🚨 STOP FLASH DROP' : '⚡ FLASH SPECIAL ON TV'}
                      </button>

                      <button
                        onClick={() =>
                          setAnnouncements(prev => ({
                            ...prev,
                            tvRotateMode: !prev.tvRotateMode
                          }))
                        }
                        className={`py-2 px-2 font-mono font-black text-[10px] uppercase cursor-pointer border transition ${
                          announcements.tvRotateMode
                            ? 'bg-emerald-600 text-white border-emerald-300'
                            : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-600'
                        }`}
                      >
                        {announcements.tvRotateMode ? '🔄 ROTATING: ON' : '🔄 AUTO-ROTATE TV'}
                      </button>
                    </div>

                    {/* 1-Tap "Now Serving Order #" Silent Pager on the 55" TV */}
                    <div className="pt-1 border-t border-amber-500/30 flex items-center gap-1.5">
                      <input
                        type="text"
                        placeholder="Order # or Name (e.g. #42 Mike)"
                        value={announcements.nowServingOrder || ''}
                        onChange={(e) =>
                          setAnnouncements(prev => ({
                            ...prev,
                            nowServingOrder: e.target.value
                          }))
                        }
                        className="flex-1 bg-stone-950 border border-stone-700 px-2 py-1 text-[11px] text-white font-mono focus:outline-none focus:border-emerald-400"
                      />
                      <button
                        onClick={() =>
                          setAnnouncements(prev => ({
                            ...prev,
                            nowServingOrder: prev.nowServingOrder ? '' : '#42 (MIKE)'
                          }))
                        }
                        className={`px-2.5 py-1 font-mono font-black text-[10px] uppercase cursor-pointer border shrink-0 ${
                          announcements.nowServingOrder
                            ? 'bg-stone-800 text-stone-300 border-stone-600'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400'
                        }`}
                      >
                        {announcements.nowServingOrder ? 'Clear' : '🛎️ Call #42'}
                      </button>
                    </div>
                  </div>

                  {/* Master Fryer Grease Cutoff Switch */}
                  <div
                    className={`p-3 border-2 transition ${
                      announcements.fryerOpen
                        ? 'bg-emerald-950/30 border-emerald-600/60'
                        : 'bg-rose-950/50 border-rose-500'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-black uppercase text-white flex items-center gap-1.5">
                          <Flame className="w-4 h-4 text-amber-400" />
                          <span>Master Fryer Switch</span>
                        </div>
                        <p className="text-[11px] text-stone-300 mt-0.5">
                          {announcements.fryerOpen
                            ? 'Fryer is HOT (Whiting, Shrimp, Fries, Okra active)'
                            : '🛑 GREASE OFF — All fried items marked off on TV!'}
                        </p>
                      </div>
                      <button
                        onClick={toggleFryerStatus}
                        className={`px-3 py-2 font-mono font-black text-xs uppercase cursor-pointer border shadow transition shrink-0 ${
                          announcements.fryerOpen
                            ? 'bg-rose-600 hover:bg-rose-500 text-white border-rose-400'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400'
                        }`}
                      >
                        {announcements.fryerOpen ? 'Shut Fryer Off' : 'Turn Fryer On'}
                      </button>
                    </div>
                  </div>

                  {/* 1-Tap Meat & Dinner 86 List */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase text-amber-400 font-bold">
                      <span>Tap Any Meat to Mark SOLD OUT on TV:</span>
                      <span>Status</span>
                    </div>

                    {quickDinners.map(item => (
                      <div
                        key={item.id}
                        onClick={() => toggleItemStock('dinners', item.id)}
                        className={`p-2.5 border flex items-center justify-between gap-2 cursor-pointer transition ${
                          item.inStock
                            ? 'bg-[#1B1411] hover:bg-[#241B17] border-stone-800 text-white'
                            : 'bg-rose-950/40 border-rose-600/60 text-stone-300'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{item.name}</div>
                          <div className="text-[11px] font-mono text-amber-400">{item.price}</div>
                        </div>

                        <span
                          className={`px-2.5 py-1 text-[10px] font-mono font-black uppercase shrink-0 border ${
                            item.inStock
                              ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40'
                              : 'bg-rose-600 text-white border-rose-400'
                          }`}
                        >
                          {item.inStock ? '🟢 IN STOCK' : '🔴 SOLD OUT'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Specials 86 List */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                      Today's Specials (Replaces Hanging Chalkboard):
                    </div>
                    {specials.slice(0, 3).map(s => (
                      <div
                        key={s.id}
                        onClick={() => toggleSpecialStock(s.id)}
                        className={`p-2.5 border flex items-center justify-between gap-2 cursor-pointer transition ${
                          s.inStock
                            ? 'bg-[#1B1411] hover:bg-[#241B17] border-stone-800 text-white'
                            : 'bg-rose-950/40 border-rose-600/60 text-stone-300'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{s.title}</div>
                          <div className="text-[11px] font-mono text-amber-400">{s.price}</div>
                        </div>
                        <span
                          className={`px-2.5 py-1 text-[10px] font-mono font-black uppercase shrink-0 border ${
                            s.inStock
                              ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40'
                              : 'bg-rose-600 text-white border-rose-400'
                          }`}
                        >
                          {s.inStock ? '🟢 ACTIVE' : '🔴 SOLD OUT'}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* TAB 2: LIVE PRICE & CHALKBOARD SPECIAL EDITOR */}
              {phoneTab === 'specials' && (
                <div className="space-y-4">
                  <div className="bg-amber-500/10 border border-amber-500/40 p-2.5 text-[11px] text-amber-200 leading-relaxed">
                    <strong>No More Chalk Dust:</strong> In the trailer photo, Donald had a little chalkboard hanging under the TV. Edit any special or price below and watch the TV on the trailer update live!
                  </div>

                  {/* Edit Top Special Live */}
                  {specials[0] && (
                    <div className="bg-[#1B1411] border border-stone-800 p-3 space-y-2">
                      <label className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                        Edit Featured Special #1 on TV:
                      </label>
                      <input
                        type="text"
                        value={specials[0].title}
                        onChange={(e) => editSpecial(specials[0].id, { title: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-700 px-2.5 py-1.5 text-xs text-white font-bold focus:outline-none focus:border-amber-500"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-400 font-mono">Price:</span>
                        <input
                          type="text"
                          value={specials[0].price}
                          onChange={(e) => editSpecial(specials[0].id, { price: e.target.value })}
                          className="w-28 bg-stone-950 border border-stone-700 px-2.5 py-1 text-xs text-amber-400 font-mono font-bold focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Quick +/- $1 Price Stepper on Dinners */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                      1-Tap Dinner Price Adjuster (Watch TV Update):
                    </div>
                    {quickDinners.slice(0, 4).map(item => (
                      <div
                        key={item.id}
                        className="bg-[#1B1411] border border-stone-800 p-2 flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{item.name}</div>
                          <div className="text-xs font-mono font-black text-amber-400">{item.price}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleStepPrice('dinners', item, -1)}
                            className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-white font-mono font-black text-xs border border-stone-600 cursor-pointer"
                          >
                            -$1
                          </button>
                          <button
                            onClick={() => handleStepPrice('dinners', item, 1)}
                            className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-black text-xs cursor-pointer"
                          >
                            +$1
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TV BOARD THEME & 1-TAP GPS LOCATION */}
              {phoneTab === 'gps' && (
                <div className="space-y-4">
                  {/* TV Board Theme Selector */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                      1. Trailer 55" TV Color Theme:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setTvBoardTheme('classicOrange')}
                        className={`p-2.5 border text-left cursor-pointer transition ${
                          tvBoardTheme === 'classicOrange'
                            ? 'bg-[#D86018] text-white border-white font-black shadow-md'
                            : 'bg-[#1B1411] text-stone-300 border-stone-800'
                        }`}
                      >
                        <div className="text-xs font-black uppercase">🟧 Classic Orange</div>
                        <div className="text-[10px] opacity-85 mt-0.5">
                          Matches white columns in Donald's photo
                        </div>
                      </button>

                      <button
                        onClick={() => setTvBoardTheme('dark')}
                        className={`p-2.5 border text-left cursor-pointer transition ${
                          tvBoardTheme !== 'classicOrange'
                            ? 'bg-stone-900 text-amber-400 border-amber-400 font-black shadow-md'
                            : 'bg-[#1B1411] text-stone-300 border-stone-800'
                        }`}
                      >
                        <div className="text-xs font-black uppercase">⬛ Dark Smokehouse</div>
                        <div className="text-[10px] opacity-85 mt-0.5">
                          Blends into his dark wood &amp; fire wrap
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 1-Tap Trailer Location Broadcast */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                      2. 1-Tap Trailer Location Broadcast:
                    </div>

                    {[
                      {
                        name: 'Stop Button Bar & Arcade',
                        city: 'Fayetteville, NC',
                        address: '6114 Legion Rd, Fayetteville, NC',
                        hours: '1:30 PM - 6:30 PM',
                        isActive: true
                      },
                      {
                        name: 'Static Line Brewing Co.',
                        city: 'Sanford, NC',
                        address: '1635 S Horner Blvd, Sanford, NC',
                        hours: '4:30 PM - 8:30 PM',
                        isActive: true
                      },
                      {
                        name: 'Downtown Dunn Event Stop',
                        city: 'Dunn, NC',
                        address: 'E Broad St, Downtown Dunn, NC',
                        hours: '11:00 AM - 6:00 PM',
                        isActive: true
                      },
                      {
                        name: 'Off-Duty (Home Privacy Active)',
                        city: 'Private / Off-Clock',
                        address: 'Location Hidden for Family Privacy',
                        hours: 'See Weekly Schedule',
                        isActive: false
                      }
                    ].map((loc, idx) => {
                      const isCurrent = current.name === loc.name && current.isActive === loc.isActive;
                      return (
                        <button
                          key={idx}
                          onClick={() => updateCurrentLocation(loc)}
                          className={`w-full p-2.5 border text-left flex items-center justify-between gap-2 cursor-pointer transition ${
                            isCurrent
                              ? 'bg-emerald-950/50 border-emerald-400 text-white'
                              : 'bg-[#1B1411] hover:bg-[#241B17] border-stone-800 text-stone-300'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-bold truncate">
                              {loc.isActive ? '🟢 ' : '🔒 '}
                              {loc.name}
                            </div>
                            <div className="text-[10px] font-mono text-stone-400 truncate">
                              {loc.address}
                            </div>
                          </div>
                          {isCurrent && (
                            <span className="bg-emerald-500 text-stone-950 font-mono font-black text-[10px] px-1.5 py-0.5 uppercase shrink-0">
                              LIVE
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Phone Bottom Bar */}
            <div className="bg-stone-950 px-4 py-2.5 border-t border-stone-800 text-center">
              <div className="text-[10px] font-mono text-stone-400">
                ⚡ Every tap above syncs to the <strong>Trailer Photo TV</strong> &amp; <strong>GAEMS HDMI Monitor</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
