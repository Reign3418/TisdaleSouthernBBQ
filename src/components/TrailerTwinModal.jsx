import React, { useState, useEffect, useRef } from 'react';
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
    triggerPriceFade,
    updateCurrentLocation,
    tvBoardTheme,
    setTvBoardTheme,
    lastSyncPulse,
    lanSyncInfo,
    resetToDefaults
  } = usePitmaster();

  const [phoneTab, setPhoneTab] = useState('pit'); // 'pit' | 'specials' | 'gps'
  const [controlDevice, setControlDevice] = useState('counter7'); // 'counter7' | 'phone'
  const [isTvZoomed, setIsTvZoomed] = useState(false);
  const [showRigGuide, setShowRigGuide] = useState(false);
  const [syncFlash, setSyncFlash] = useState(false);
  const [rotateSlide, setRotateSlide] = useState(0); // 0 = Full Menu, 1 = Giant Spotlight
  const [pigFlashing, setPigFlashing] = useState(false);

  // Measure the TV bezel container so our 1280x720 HD TV board scales with pixel-perfect sharpness
  const tvBezelRef = useRef(null);
  const [tvScale, setTvScale] = useState({ x: 0.1, y: 0.1 });

  useEffect(() => {
    const el = tvBezelRef.current;
    if (!el) return;
    const updateScale = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setTvScale({
          x: rect.width / 1280,
          y: rect.height / 720
        });
      }
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    window.addEventListener('resize', updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [isTrailerSimOpen, isTvZoomed]);

  // Trigger the 1.3-second "Pig Emblem Screen Blank & Flash" whenever Price Fade changes
  useEffect(() => {
    if (!announcements.pigFlashTimestamp) return;
    setPigFlashing(true);
    const t = setTimeout(() => setPigFlashing(false), 1350);
    return () => clearTimeout(t);
  }, [announcements.pigFlashTimestamp]);

  const fadeAmt = Number(announcements.priceFadeAmount || 0);
  const getFadedPriceObj = (rawPrice, numPrice) => {
    const base = numPrice || parseFloat(String(rawPrice || '').replace(/[^0-9.]/g, '')) || 0;
    if (!fadeAmt || base <= 6) {
      return { isFaded: false, current: rawPrice, old: null };
    }
    const discounted = Math.max(5, base - fadeAmt);
    return {
      isFaded: true,
      current: `$${discounted.toFixed(2)}`,
      old: `$${base.toFixed(0)}`
    };
  };

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
            Cell Phone → Trailer 55" TV &amp; Raspberry Pi "Pit-Box" Rig
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

          {/* Toggle Raspberry Pi Pit-Box + Wi-Fi Billboard + NFC Guide */}
          <button
            onClick={() => setShowRigGuide(!showRigGuide)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-bold border transition cursor-pointer ${
              showRigGuide
                ? 'bg-amber-500 text-stone-950 border-amber-400'
                : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>{showRigGuide ? 'Hide Raspberry Pi & NFC Blueprint' : '🍓 Raspberry Pi + Wi-Fi Billboard + NFC Blueprint'}</span>
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
      {/* COLLAPSIBLE HARDWARE GUIDE: RASPBERRY PI + WI-FI BILLBOARD + NFC    */}
      {/* =================================================================== */}
      {showRigGuide && (
        <div className="bg-[#18120F] border-b-2 border-amber-500/60 px-4 sm:px-8 py-4 text-xs text-stone-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>Tactical Field Architecture: Raspberry Pi "Pit-Box" + 250ft Wi-Fi Billboard + NFC Table Coasters</span>
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
                  At a crowded festival or brewery, cell service slows down and people open their phone’s <strong>Wi-Fi Settings</strong>. Your Raspberry Pi broadcasts a public Wi-Fi SSID right to the top of every phone within 250 feet:
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

              {/* Card 2: Raspberry Pi Zero 2 W / Pi 4 "Pit-Box" Appliance */}
              <div className="bg-[#100C0A] border border-emerald-600/50 p-3.5 rounded-none space-y-2">
                <div className="text-emerald-400 font-black font-mono uppercase">
                  2. Raspberry Pi "Pit-Box" + 7" Counter Touch Deck
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Run a <strong>Raspberry Pi Zero 2 W (~$15)</strong> Velcroed behind the 55" TV, OR snap a <strong>Raspberry Pi 4 into a 7" Countertop Touchscreen Stand</strong> by the fryer so one Pi drives <strong>both</strong> the inside counter screen and the outside 55" TV over HDMI!
                </p>
                <ul className="list-disc list-inside space-y-1 text-stone-300 text-[11px]">
                  <li><strong>No Phone Fumbling While Dropping Fries:</strong> Tap giant buttons on the always-on 7" counter screen with a gloved knuckle (+ cell phone still works too!).</li>
                  <li><strong>Read-Only SD Card:</strong> Killing the generator never corrupts it—100% solid-state appliance.</li>
                </ul>
              </div>

              {/* Card 3: NFC Coasters & Stickers (Bowling Alleys & Breweries) */}
              <div className="bg-[#100C0A] border border-stone-800 p-3.5 rounded-none space-y-2">
                <div className="text-amber-400 font-black font-mono uppercase">
                  3. NFC Table Coasters + Register Keycard
                </div>
                <ul className="list-disc list-inside space-y-1 text-stone-300">
                  <li><strong>Bowling Alley / Brewery Coasters:</strong> Customers tap their phone on a Tisdale NFC coaster/sticker at their bowling lane, pre-pay on their phone, and stay inside until their phone buzzes!</li>
                  <li><strong>Vibrating Pager Coins:</strong> Stick an NFC coin on each of Donald's plastic coaster pagers so friends at the table can tap to order too.</li>
                  <li><strong>Register Keycard (<code>#admin</code>):</strong> 1 tap inside the window opens Donald's phone controller!</li>
                </ul>
              </div>

              {/* Card 4: Tabletop Demo with GAEMS Monitor */}
              <div className="bg-[#100C0A] border border-stone-800 p-3.5 rounded-none space-y-2">
                <div className="text-amber-400 font-black font-mono uppercase">
                  4. Live Tabletop Demo (GAEMS HDMI Monitor)
                </div>
                <ol className="list-decimal list-inside space-y-1 text-stone-300">
                  <li>Plug your <strong>GAEMS HDMI monitor</strong> into your laptop (<kbd className="bg-stone-800 px-1 border border-stone-600 font-mono">Win+P</kbd> → <strong>Extend</strong>).</li>
                  <li>Click <strong>"Pop Out TV to GAEMS HDMI Screen"</strong> above, drag it to the GAEMS screen, press <kbd className="bg-stone-800 px-1 border border-stone-600 font-mono">F11</kbd>.</li>
                  <li>Tap <strong>"Event -$4"</strong> or <strong>"SOLD OUT"</strong> on the phone controller (or tap your physical NFC coins) to show Donald live!</li>
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
        {/* LEFT 8 COLUMNS: DONALD'S ACTUAL TRAILER WITH CLEAN INTERACTIVE TV */}
        {/* ================================================================= */}
        <div className="lg:col-span-8 space-y-3">
          
          {/* Clean Interactive TV Control Bar */}
          <div className="bg-[#140F0D] border border-[#2E221D] p-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-mono">
                {isTvZoomed
                  ? '📺 Interactive 55" Trailer TV (Magnified HD View)'
                  : '🚚 Live 55" TV Mounted on Trailer (Click TV to Magnify)'}
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              {/* Switch TV Theme directly */}
              <button
                onClick={() =>
                  setTvBoardTheme(tvBoardTheme === 'darkPit' ? 'classicOrange' : 'darkPit')
                }
                className="px-2.5 py-1 rounded-none text-xs font-mono font-bold bg-[#1C1512] hover:bg-stone-800 text-stone-200 border border-stone-700 cursor-pointer transition"
              >
                🎨 Theme: {tvBoardTheme === 'classicOrange' ? 'Classic Orange' : 'Dark Pit'}
              </button>

              {/* Toggle Auto-Rotate */}
              <button
                onClick={() =>
                  setAnnouncements(prev => ({ ...prev, tvRotateMode: !prev.tvRotateMode }))
                }
                className={`px-2.5 py-1 rounded-none text-xs font-mono font-bold border cursor-pointer transition ${
                  announcements.tvRotateMode
                    ? 'bg-emerald-600 text-white border-emerald-400'
                    : 'bg-[#1C1512] text-stone-300 border-stone-700 hover:text-white'
                }`}
              >
                🔄 Rotate: {announcements.tvRotateMode ? 'ON' : 'OFF'}
              </button>

              {/* Magnify / Shrink TV */}
              <button
                onClick={() => setIsTvZoomed(!isTvZoomed)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-black uppercase tracking-wider transition cursor-pointer border ${
                  isTvZoomed
                    ? 'bg-amber-500 text-stone-950 border-amber-300 shadow-lg'
                    : 'bg-[#261B16] text-amber-300 border-amber-500/50 hover:bg-amber-500 hover:text-stone-950'
                }`}
              >
                {isTvZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{isTvZoomed ? 'Show Full Trailer' : 'Magnify TV Screen'}</span>
              </button>

              {/* Open Full 1080p TV */}
              <button
                onClick={() => {
                  setIsTrailerSimOpen(false);
                  setIsTvMenuOpen(true);
                }}
                className="px-2.5 py-1 rounded-none text-xs font-mono font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 cursor-pointer transition"
              >
                📺 Full 1080p
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* INTERACTIVE TRAILER STAGE (CLEAN TRAILER PHOTO + HD TV OVERLAY) */}
          {/* =============================================================== */}
          <div className="relative w-full border-2 border-amber-600/50 bg-black shadow-2xl overflow-hidden select-none">
            
            {/* Clean Photo of Donald's Trailer (Zero clutter pins) */}
            <img
              src="./images/trailer-side-full.jpg"
              alt="Tisdale's Southern BBQ Food Trailer with Live 55-inch Exterior TV"
              className={`w-full h-auto block transition-all duration-500 ease-out ${
                isTvZoomed ? 'scale-[2.2] origin-[65%_46%] brightness-[0.35] blur-[1px]' : 'scale-100 origin-center'
              }`}
            />

            {/* ============================================================= */}
            {/* LIVE 1280x720 HD INTERACTIVE TV SCREEN                        */}
            {/* Unzoomed: sits cleanly inside Donald's TV enclosure bezel     */}
            {/* Zoomed: expands to crisp full-stage HD view                   */}
            {/* ============================================================= */}
            <div
              ref={tvBezelRef}
              onClick={() => setIsTvZoomed(!isTvZoomed)}
              title={isTvZoomed ? 'Click to return to full trailer view' : 'Click to magnify the live TV screen'}
              style={{
                left: isTvZoomed ? '3%' : '59.1%',
                top: isTvZoomed ? '4%' : '40.2%',
                width: isTvZoomed ? '94%' : '11.6%',
                height: isTvZoomed ? '92%' : '13.6%'
              }}
              className={`absolute z-30 transition-all duration-500 ease-out cursor-pointer overflow-hidden bg-[#0E0B0A] ${
                syncFlash
                  ? 'ring-4 ring-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.95)]'
                  : isTvZoomed
                  ? 'ring-4 ring-amber-500 shadow-[0_0_70px_rgba(0,0,0,0.95)]'
                  : 'ring-1 ring-amber-400/90 shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:ring-2 hover:ring-amber-300'
              }`}
            >
              {/* True 1280x720 HD Canvas scaled proportionally into the bezel */}
              <div
                style={{
                  width: '1280px',
                  height: '720px',
                  transform: `scale(${tvScale.x}, ${tvScale.y})`,
                  transformOrigin: 'top left'
                }}
                className={`relative flex flex-col justify-between select-none ${
                  tvBoardTheme === 'classicOrange'
                    ? 'bg-[#D86018] text-[#1A120E]'
                    : 'bg-[#0E0B0A] text-[#F5EFE6]'
                }`}
              >
                {/* ========================================================= */}
                {/* 1. PIG EMBLEM SCREEN BLANK & FLASH OVERLAY (EVENT SYNC)   */}
                {/* ========================================================= */}
                {pigFlashing && (
                  <div className="absolute inset-0 z-50 bg-[#050403] flex flex-col items-center justify-center text-center animate-fadeIn">
                    <div className="relative mb-5">
                      <div className="absolute -inset-6 bg-amber-500/30 blur-2xl animate-pulse" />
                      <img
                        src="./images/truck-logo-wrap.jpg"
                        alt="Tisdale's Southern BBQ Pig Emblem"
                        className="relative w-52 h-52 rounded-none object-cover border-4 border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.9)] animate-bounce"
                      />
                    </div>
                    <div className="bg-amber-400 text-stone-950 font-mono font-black text-xl uppercase px-6 py-1.5 tracking-widest mb-2">
                      🐷 TISDALE&apos;S SOUTHERN BBQ • 100% PURE HICKORY SMOKED
                    </div>
                    <h2 className="text-6xl font-black uppercase font-['Bebas_Neue'] tracking-wider text-white">
                      🔥 MOUTH WATERING • TONGUE TWISTING LIVE EVENT MENU
                    </h2>
                  </div>
                )}

                {/* ========================================================= */}
                {/* 2. TOP HEADER BAR (78px)                                  */}
                {/* ========================================================= */}
                <div
                  className={`h-[78px] px-7 flex items-center justify-between border-b-4 shrink-0 ${
                    tvBoardTheme === 'classicOrange'
                      ? 'bg-[#1F140E] text-white border-amber-400'
                      : 'bg-[#16100C] text-white border-[#E65100]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="./images/truck-logo-wrap.jpg"
                      alt="Tisdale Logo"
                      className="w-13 h-13 object-cover border-2 border-amber-400 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="bg-[#E65100] text-white text-xs font-mono font-black uppercase px-2 py-0.5 tracking-wider">
                          100% HICKORY SMOKED
                        </span>
                        <span className="text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
                          Mouth Watering • Tongue Twisting BBQ
                        </span>
                      </div>
                      <h1 className="text-4xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none mt-0.5">
                        TISDALE’S SOUTHERN BBQ
                      </h1>
                    </div>
                  </div>

                  {/* Right Status Badges */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-4 py-1.5 font-mono font-black text-sm uppercase border-2 ${
                        announcements.fryerOpen
                          ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500'
                          : 'bg-rose-700 text-white border-rose-300 animate-pulse'
                      }`}
                    >
                      {announcements.fryerOpen ? '🟢 FRYER HOT' : '🛑 FRYER GREASE OFF'}
                    </div>

                    <div className="text-right font-mono pl-2 border-l border-stone-700">
                      <div className="text-[11px] text-stone-400 uppercase font-bold">Call / Text Orders</div>
                      <div className="text-xl font-black text-amber-400 leading-tight">910-709-2900</div>
                    </div>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* 3. MAIN 3-COLUMN HD MENU GRID OR ROTATING SPOTLIGHT       */}
                {/* ========================================================= */}
                {rotateSlide === 1 && announcements.tvRotateMode ? (
                  /* ROTATING GIANT PITMASTER SPOTLIGHT SLIDE */
                  <div className="flex-1 p-8 flex flex-col justify-between bg-gradient-to-br from-[#1A110D] via-[#120C0A] to-[#26140C] text-white">
                    <div className="flex items-center justify-between border-b-2 border-amber-500/40 pb-4">
                      <div>
                        <span className="bg-amber-400 text-stone-950 font-mono font-black text-sm uppercase px-3 py-1 tracking-widest">
                          🔥 LIVE FROM THE HICKORY SMOKER
                        </span>
                        <h2 className="text-6xl font-black uppercase font-['Bebas_Neue'] tracking-wider mt-2 text-amber-400">
                          TODAY’S PITMASTER FEATURE PLATES
                        </h2>
                      </div>
                      <div className="text-right font-mono">
                        <div className="text-sm text-stone-400 uppercase">All Dinners Include</div>
                        <div className="text-2xl font-black text-white">2 Sides + Dinner Roll</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 my-auto py-4">
                      {[
                        ...(menu.dinners?.items.filter(i => i.inStock && !i.hidden).slice(0, 2) || []),
                        ...(specials.filter(s => s.inStock && !s.hidden).slice(0, 1) || [])
                      ].map((feat, idx) => {
                        const fp = getFadedPriceObj(feat.price, feat.numericPrice);
                        return (
                          <div
                            key={feat.id || idx}
                            className="bg-[#18120E] border-2 border-amber-500/60 p-6 flex flex-col justify-between shadow-2xl"
                          >
                            <div>
                              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                                ★ Pitmaster Favorite #{idx + 1}
                              </span>
                              <h3 className="text-4xl font-black uppercase font-['Bebas_Neue'] tracking-wide text-white mt-1">
                                {feat.name || feat.title}
                              </h3>
                              <p className="text-sm text-stone-300 mt-2 line-clamp-2">
                                {feat.description || 'Slow-smoked over 100% pure hickory pellets and served hot.'}
                              </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-stone-800 flex items-baseline justify-between">
                              <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                                Hot &amp; Ready Now
                              </span>
                              <div className="font-mono font-black flex items-baseline gap-2">
                                <span className="text-5xl text-amber-400">
                                  {fp.current}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* STANDARD 3-COLUMN HD MENU BOARD */
                  <div className="flex-1 grid grid-cols-3 gap-4 p-4 overflow-hidden">
                    
                    {/* COLUMN 1: SMOKED BBQ DINNERS */}
                    <div
                      className={`flex flex-col justify-between p-4 border-2 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'bg-[#FFFDF9] border-[#2B1B12] text-[#1A120E]'
                          : 'bg-[#15100D] border-amber-600/40 text-stone-100'
                      }`}
                    >
                      <div>
                        <div
                          className={`flex items-baseline justify-between border-b-2 pb-1.5 mb-2.5 ${
                            tvBoardTheme === 'classicOrange'
                              ? 'border-[#D86018] text-[#B95000]'
                              : 'border-[#E65100] text-amber-400'
                          }`}
                        >
                          <h2 className="text-3xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                            Smoked BBQ Dinners
                          </h2>
                          <span className="text-xs font-mono font-bold uppercase opacity-80">
                            w/ 2 Sides &amp; Roll
                          </span>
                        </div>

                        <div className="space-y-2">
                          {menu.dinners?.items
                            .filter(i => !i.hidden)
                            .slice(0, 8)
                            .map(item => {
                              const isFryerOff = !announcements.fryerOpen && item.isFryerItem;
                              const isOut = !item.inStock || isFryerOff;
                              const fp = getFadedPriceObj(item.price, item.numericPrice);
                              return (
                                <div
                                  key={item.id}
                                  className={`flex items-center justify-between py-1 border-b ${
                                    tvBoardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800/90'
                                  } ${isOut ? 'opacity-45' : ''}`}
                                >
                                  <div className="pr-2 truncate">
                                    <span
                                      className={`text-[19px] font-extrabold uppercase tracking-tight ${
                                        isOut ? 'line-through' : ''
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                  </div>

                                  {isOut ? (
                                    <span className="bg-rose-600 text-white text-xs font-mono font-black px-2 py-0.5 uppercase shrink-0">
                                      {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                    </span>
                                  ) : (
                                    <div className="font-mono font-black shrink-0 flex items-baseline gap-1.5">
                                      <span
                                        className={`text-[21px] ${
                                          tvBoardTheme === 'classicOrange'
                                            ? 'text-[#B95000]'
                                            : 'text-amber-400'
                                        }`}
                                      >
                                        {fp.current}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      <div
                        className={`pt-2 border-t text-xs font-mono font-bold flex items-center justify-between ${
                          tvBoardTheme === 'classicOrange'
                            ? 'border-stone-300 text-stone-600'
                            : 'border-stone-800 text-amber-400/80'
                        }`}
                      >
                        <span>★ 100% Pure Hickory Pellets</span>
                        <span>Choice of 2 Sides</span>
                      </div>
                    </div>

                    {/* COLUMN 2: SANDWICHES & RIBS / MEATS ONLY */}
                    <div
                      className={`flex flex-col justify-between p-4 border-2 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'bg-[#FFFDF9] border-[#2B1B12] text-[#1A120E]'
                          : 'bg-[#15100D] border-amber-600/40 text-stone-100'
                      }`}
                    >
                      <div className="space-y-4">
                        {/* Sandwiches */}
                        <div>
                          <div
                            className={`flex items-baseline justify-between border-b-2 pb-1.5 mb-2 ${
                              tvBoardTheme === 'classicOrange'
                                ? 'border-[#D86018] text-[#B95000]'
                                : 'border-[#E65100] text-amber-400'
                            }`}
                          >
                            <h2 className="text-3xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                              Sandwiches &amp; Baskets
                            </h2>
                            <span className="text-xs font-mono font-bold uppercase opacity-80">
                              Handheld Favorites
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {menu.sandwiches?.items
                              .filter(i => !i.hidden)
                              .slice(0, 4)
                              .map(item => {
                                const isFryerOff = !announcements.fryerOpen && item.isFryerItem;
                                const isOut = !item.inStock || isFryerOff;
                                const fp = getFadedPriceObj(item.price, item.numericPrice);
                                return (
                                  <div
                                    key={item.id}
                                    className={`flex items-center justify-between py-1 border-b ${
                                      tvBoardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800/90'
                                    } ${isOut ? 'opacity-45' : ''}`}
                                  >
                                    <span
                                      className={`text-[18px] font-extrabold uppercase truncate pr-2 ${
                                        isOut ? 'line-through' : ''
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                    {isOut ? (
                                      <span className="bg-rose-600 text-white text-xs font-mono font-black px-2 py-0.5 uppercase shrink-0">
                                        {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                      </span>
                                    ) : (
                                      <div className="font-mono font-black shrink-0 flex items-baseline gap-1.5">
                                        <span
                                          className={`text-[20px] ${
                                            tvBoardTheme === 'classicOrange'
                                              ? 'text-[#B95000]'
                                              : 'text-amber-400'
                                          }`}
                                        >
                                          {fp.current}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        {/* Meats Only */}
                        <div>
                          <div
                            className={`flex items-baseline justify-between border-b-2 pb-1 mb-2 ${
                              tvBoardTheme === 'classicOrange'
                                ? 'border-stone-300 text-[#B95000]'
                                : 'border-amber-600/50 text-amber-300'
                            }`}
                          >
                            <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                              By The Slab &amp; Pound
                            </h3>
                            <span className="text-[11px] font-mono font-bold uppercase opacity-75">
                              Meats Only
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {menu.meatsOnly?.items
                              .filter(i => !i.hidden)
                              .slice(0, 4)
                              .map(item => {
                                const isFryerOff = !announcements.fryerOpen && item.isFryerItem;
                                const isOut = !item.inStock || isFryerOff;
                                const fp = getFadedPriceObj(item.price, item.numericPrice);
                                return (
                                  <div
                                    key={item.id}
                                    className={`flex items-center justify-between py-0.5 border-b ${
                                      tvBoardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800/80'
                                    } ${isOut ? 'opacity-45' : ''}`}
                                  >
                                    <span
                                      className={`text-[17px] font-bold uppercase truncate pr-2 ${
                                        isOut ? 'line-through' : ''
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                    {isOut ? (
                                      <span className="bg-rose-600 text-white text-xs font-mono font-black px-2 py-0.5 uppercase shrink-0">
                                        {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                      </span>
                                    ) : (
                                      <div className="font-mono font-black shrink-0 flex items-baseline gap-1.5">
                                        <span
                                          className={`text-[19px] ${
                                            tvBoardTheme === 'classicOrange'
                                              ? 'text-[#B95000]'
                                              : 'text-amber-400'
                                          }`}
                                        >
                                          {fp.current}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`pt-2 border-t text-xs font-mono font-bold text-center ${
                          tvBoardTheme === 'classicOrange'
                            ? 'border-stone-300 text-stone-600'
                            : 'border-stone-800 text-stone-400'
                        }`}
                      >
                        Toppings: Slaw • Kraut • Homemade Chili • Cheese
                      </div>
                    </div>

                    {/* COLUMN 3: TODAY'S SPECIALS & 8OZ SIDES */}
                    <div
                      className={`flex flex-col justify-between p-4 border-2 ${
                        tvBoardTheme === 'classicOrange'
                          ? 'bg-[#FFFDF9] border-[#2B1B12] text-[#1A120E]'
                          : 'bg-[#15100D] border-amber-600/40 text-stone-100'
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Today's Specials Box */}
                        <div
                          className={`p-3 border-2 ${
                            tvBoardTheme === 'classicOrange'
                              ? 'bg-amber-50/90 border-[#D86018]'
                              : 'bg-[#1E140F] border-amber-500/70'
                          }`}
                        >
                          <div className="flex items-center justify-between border-b border-amber-500/40 pb-1 mb-2">
                            <h2
                              className={`text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none ${
                                tvBoardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                              }`}
                            >
                              ★ Today’s Pit Specials
                            </h2>
                            <span className="bg-amber-400 text-stone-950 text-[10px] font-mono font-black px-1.5 py-0.5 uppercase">
                              Live Board
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {specials
                              .filter(s => !s.hidden)
                              .slice(0, 4)
                              .map(s => {
                                const isFryerOff = !announcements.fryerOpen && s.isFryerItem;
                                const isOut = !s.inStock || isFryerOff;
                                return (
                                  <div
                                    key={s.id}
                                    className={`flex items-center justify-between py-0.5 border-b border-amber-500/20 ${
                                      isOut ? 'opacity-45' : ''
                                    }`}
                                  >
                                    <span
                                      className={`text-[16px] font-extrabold uppercase truncate pr-2 ${
                                        isOut ? 'line-through' : ''
                                      }`}
                                    >
                                      {s.title}
                                    </span>
                                    {isOut ? (
                                      <span className="bg-rose-600 text-white text-[11px] font-mono font-black px-1.5 py-0.5 uppercase shrink-0">
                                        {isFryerOff ? 'GREASE OFF' : 'SOLD OUT'}
                                      </span>
                                    ) : (
                                      <span
                                        className={`text-[18px] font-mono font-black shrink-0 ${
                                          tvBoardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                                        }`}
                                      >
                                        {s.price}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        {/* Southern Sides (8oz = $5) */}
                        <div>
                          <div
                            className={`flex items-baseline justify-between border-b-2 pb-1 mb-2 ${
                              tvBoardTheme === 'classicOrange'
                                ? 'border-stone-300 text-[#B95000]'
                                : 'border-amber-600/50 text-amber-300'
                            }`}
                          >
                            <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                              Southern Sides
                            </h3>
                            <span className="text-xs font-mono font-black uppercase">
                              All 8oz Sides $5.00
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                            {menu.sides?.items
                              .filter(i => !i.hidden)
                              .map(side => {
                                const isFryerOff = !announcements.fryerOpen && side.isFryerItem;
                                const isOut = !side.inStock || isFryerOff;
                                return (
                                  <div
                                    key={side.id}
                                    className={`flex items-center justify-between text-[14px] font-bold uppercase py-0.5 border-b ${
                                      tvBoardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800/70'
                                    } ${isOut ? 'opacity-40 line-through text-rose-400' : ''}`}
                                  >
                                    <span className="truncate">{side.name}</span>
                                    {isOut && (
                                      <span className="text-[10px] font-mono font-black text-rose-500 ml-1 shrink-0">
                                        OFF
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`pt-2 border-t text-xs font-mono font-bold flex items-center justify-between ${
                          tvBoardTheme === 'classicOrange'
                            ? 'border-stone-300 text-stone-700'
                            : 'border-stone-800 text-amber-300'
                        }`}
                      >
                        <span>🍰 Honey Bun Cake &amp; Banana Pudding ($6)</span>
                        <span>Drinks $2–$4</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 4. BOTTOM STATUS / FLASH TICKER BAR (66px)                */}
                {/* ========================================================= */}
                {announcements.flashSpecialActive ? (
                  <div className="h-[66px] px-7 flex items-center justify-between bg-gradient-to-r from-rose-800 via-[#D9381E] to-amber-600 text-white border-t-4 border-amber-300 shrink-0 animate-pulse">
                    <div className="flex items-center gap-3">
                      <span className="bg-amber-300 text-stone-950 font-mono font-black text-sm uppercase px-3 py-1">
                        ⚡ FLASH SPECIAL
                      </span>
                      <span className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                        {announcements.flashSpecialTitle}: {announcements.flashSpecialDeal}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-black uppercase bg-black/40 px-3 py-1 border border-amber-300">
                      LIMITED TIME AT WINDOW
                    </span>
                  </div>
                ) : (
                  <div
                    className={`h-[66px] px-7 flex items-center justify-between border-t-4 shrink-0 ${
                      tvBoardTheme === 'classicOrange'
                        ? 'bg-white border-[#B95000] text-[#1F1510]'
                        : 'bg-[#140E0C] border-[#E65100] text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-[#E65100] text-white font-mono font-black text-xs uppercase px-2.5 py-1">
                        TODAY’S LOCATION
                      </span>
                      <span className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                        {current.name} • {current.hours}
                      </span>
                      <span className="text-xs font-mono text-stone-400 hidden sm:inline">
                        ({current.address})
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-400">
                      Square • Tap To Pay • Apple Pay • Cash
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT 4 COLUMNS: 7" COUNTER TOUCH DECK OR DONALD'S CELL PHONE     */}
        {/* ================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-center space-y-2.5">
          
          {/* 1-Click Switcher: 7" Countertop Touch Deck (By Fryer) vs Cell Phone */}
          <div className="w-full max-w-[420px] grid grid-cols-2 gap-1.5 bg-[#140F0D] p-1.5 border border-[#2E221D]">
            <button
              onClick={() => setControlDevice('counter7')}
              className={`py-2 px-2 text-[11px] font-mono font-black uppercase transition cursor-pointer border ${
                controlDevice === 'counter7'
                  ? 'bg-amber-400 text-stone-950 border-white shadow'
                  : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800'
              }`}
            >
              🖥️ 7&quot; Counter Screen (By Fryer)
            </button>
            <button
              onClick={() => setControlDevice('phone')}
              className={`py-2 px-2 text-[11px] font-mono font-black uppercase transition cursor-pointer border ${
                controlDevice === 'phone'
                  ? 'bg-emerald-500 text-stone-950 border-white shadow'
                  : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800'
              }`}
            >
              📱 Cell Phone Remote
            </button>
          </div>

          {/* Hardware Frame: 7" CanaKit Pi 4 Stand OR Smartphone */}
          <div
            className={`w-full bg-[#0B0908] rounded-none shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col transition-all ${
              controlDevice === 'counter7'
                ? 'max-w-[420px] border-[10px] border-stone-900 ring-2 ring-amber-500/60'
                : 'max-w-[390px] border-4 border-stone-700'
            }`}
          >
            
            {/* Top Bezel / Status Bar */}
            <div className="bg-stone-950 px-3.5 py-2 border-b border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
              {controlDevice === 'counter7' ? (
                <>
                  <span className="font-black text-amber-300 flex items-center gap-1.5">
                    <Tv className="w-3.5 h-3.5 text-amber-400" />
                    <span>7&quot; PI 4 COUNTER TOUCH DECK (BY FRYER)</span>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-black">
                    <span>⚡ HDMI WIRED TO 55&quot; TV</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    <span>DONALD&apos;S PHONE</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Wifi className="w-3.5 h-3.5 animate-pulse" />
                    <span>5G • TRAILER LINKED</span>
                  </span>
                </>
              )}
            </div>

            {/* Live Outside 55" TV Mini-Mirror Strip (Shown on 7" Counter Screen so Donald never has to lean out the window!) */}
            {controlDevice === 'counter7' && (
              <div className="bg-[#18110E] border-b-2 border-amber-500/40 px-3.5 py-2 flex items-center justify-between gap-2 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="px-1.5 py-0.5 bg-emerald-500 text-stone-950 font-black uppercase shrink-0">
                    Live 55&quot; TV Mirror
                  </span>
                  <span className="text-stone-200 truncate font-bold">
                    {announcements.fryerOpen ? '🟢 Fryer Hot' : '🔴 Grease Off'} •{' '}
                    {fadeAmt > 0 ? `🐷 Event -$${fadeAmt} Active` : 'Standard Menu'}
                  </span>
                </div>
                <span className="text-amber-300 font-bold shrink-0">Always On • No Lock</span>
              </div>
            )}

            {/* Controller App Header */}
            <div className="bg-gradient-to-r from-[#261710] to-[#18100C] p-3.5 border-b border-amber-600/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
                    {controlDevice === 'counter7'
                      ? 'Glove-Friendly Countertop KDS (No Phone Needed!)'
                      : 'Pitmaster Pocket Remote'}
                  </span>
                  <h3 className="text-base font-black text-white uppercase tracking-wide font-['Bebas_Neue']">
                    {controlDevice === 'counter7'
                      ? 'Tap With BBQ Gloves While Dropping Fries → Updates 55" TV'
                      : 'Tap Here → Watch Trailer TV Change'}
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

                    {/* 1-Tap "Pig Flash" Event-Specific Pricing Switcher */}
                    <div className="pt-2 border-t border-amber-500/30 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-emerald-400 font-black uppercase">
                          🐷 Event-Specific Pricing (Pig Flash):
                        </span>
                        <span className="text-stone-400">
                          {fadeAmt > 0 ? `Event Tier (-$${fadeAmt})` : 'Standard Menu'}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Standard', val: 0 },
                          { label: 'Event -$2', val: 2 },
                          { label: 'Event -$4', val: 4 },
                          { label: 'Event -$5', val: 5 }
                        ].map(tier => (
                          <button
                            key={tier.val}
                            onClick={() => triggerPriceFade(tier.val)}
                            className={`py-1.5 px-1 font-mono font-black text-[10px] uppercase cursor-pointer border transition ${
                              fadeAmt === tier.val
                                ? 'bg-emerald-500 text-stone-950 border-white shadow'
                                : 'bg-stone-900 hover:bg-stone-800 text-stone-300 border-stone-700'
                            }`}
                          >
                            {tier.label}
                          </button>
                        ))}
                      </div>
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
