import React, { useState, useRef, useEffect } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import html2canvas from 'html2canvas';
import {
  X,
  Download,
  Maximize2,
  Tv,
  Check,
  RefreshCw,
  Sparkles,
  Phone,
  Usb,
  Wifi,
  Cable,
  ChevronDown,
  ChevronUp,
  Palette
} from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function TvMenuModal() {
  const {
    isTvMenuOpen,
    setIsTvMenuOpen,
    setIsTvWhitePageOpen,
    menu,
    specials,
    schedule,
    announcements
  } = usePitmaster();

  const boardRef = useRef(null);
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [showBrainstorm, setShowBrainstorm] = useState(false);
  const [boardTheme, setBoardTheme] = useState('dark'); // 'dark' | 'classicOrange'

  // Fit 1920x1080 into any screen viewport without distortion
  useEffect(() => {
    if (!isTvMenuOpen) return;

    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        const availableHeight = containerRef.current.clientHeight;

        const scaleX = (availableWidth - 32) / 1920;
        const scaleY = (availableHeight - 90) / 1080;
        const fittedScale = Math.min(scaleX, scaleY, 1);
        setScale(Math.max(fittedScale, 0.2));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isTvMenuOpen]);

  if (!isTvMenuOpen) return null;

  const current = schedule.currentLocation;

  // 1-Click Export 1080p Image for USB Drive
  const handleDownloadImage = async () => {
    if (!boardRef.current) return;
    setIsExporting(true);

    try {
      const canvas = await html2canvas(boardRef.current, {
        scale: 1, // Board is natively 1920x1080
        width: 1920,
        height: 1080,
        useCORS: true,
        allowTaint: true,
        backgroundColor: boardTheme === 'dark' ? '#0E0B0A' : '#FFA257',
        logging: false
      });

      const image = canvas.toDataURL('image/jpeg', 0.96);
      const link = document.createElement('a');
      link.href = image;
      link.download = `Tisdales_TV_Menu_1080p_${boardTheme}_${new Date().toISOString().slice(0, 10)}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4500);
    } catch (err) {
      console.error("Failed to export TV menu image:", err);
      alert("Error generating TV menu image. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col overflow-hidden text-white font-sans animate-fadeIn">
      
      {/* Top TV Controls Bar */}
      <div className="bg-[#181311] border-b border-[#35251F] px-4 py-2.5 flex items-center justify-between shrink-0 z-20">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500 text-stone-950 font-black">
            <Tv className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-600/40">
                1080p TV Display Hub
              </span>
              <span className="text-xs text-stone-400 hidden sm:inline">
                Fixed 1920 × 1080 (No Cutoff • Crisp Big Text)
              </span>
            </div>
            <h3 className="text-lg font-black text-white font-['Bebas_Neue'] tracking-wider leading-none mt-0.5">
              Your Trailer TV Menu & USB Image Generator
            </h3>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Theme Switcher for TV */}
          <div className="hidden sm:flex items-center bg-[#251A15] p-1 rounded-lg border border-[#443026] text-xs">
            <button
              onClick={() => setBoardTheme('dark')}
              className={`px-2.5 py-1 rounded font-bold transition cursor-pointer flex items-center gap-1 ${
                boardTheme === 'dark' ? 'bg-amber-500 text-stone-950 shadow' : 'text-stone-300 hover:text-white'
              }`}
            >
              <span>Dark Hickory</span>
            </button>
            <button
              onClick={() => setBoardTheme('classicOrange')}
              className={`px-2.5 py-1 rounded font-bold transition cursor-pointer flex items-center gap-1 ${
                boardTheme === 'classicOrange' ? 'bg-amber-500 text-stone-950 shadow' : 'text-stone-300 hover:text-white'
              }`}
              title="Matches your trailer's original orange and cream colors"
            >
              <span>Classic Orange & Cream</span>
            </button>
          </div>

          {/* Brainstorming Guide Button */}
          <button
            onClick={() => setShowBrainstorm(!showBrainstorm)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#281D18] hover:bg-[#382821] text-amber-300 hover:text-white text-xs font-bold transition cursor-pointer border border-amber-600/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Sync Your TV Live?</span>
            {showBrainstorm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* White Paper Button */}
          <button
            onClick={() => setIsTvWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-stone-900 hover:bg-amber-100 text-xs font-bold transition cursor-pointer border border-stone-300 shadow-sm"
          >
            <span>📄 TV White Paper</span>
          </button>

          {/* Download 1080p Image Button */}
          <button
            onClick={handleDownloadImage}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition cursor-pointer shadow-lg disabled:opacity-50"
            title="Export high-resolution 1080p JPG to put on USB stick"
          >
            {isExporting ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            <span>{isExporting ? "Generating 1080p..." : "⬇️ Download TV JPG (for USB)"}</span>
          </button>

          {/* Fullscreen TV Mode */}
          <button
            onClick={handleToggleFullscreen}
            className="p-2 rounded-lg bg-[#281D18] hover:bg-stone-800 text-stone-300 hover:text-white transition cursor-pointer border border-stone-700"
            title="Toggle Fullscreen on TV"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Close */}
          <button
            onClick={() => setIsTvMenuOpen(false)}
            className="p-2 rounded-lg bg-[#281D18] hover:bg-rose-900 text-stone-300 hover:text-white transition cursor-pointer border border-stone-700"
          >
            <X className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* Success Notification Bar */}
      {exportSuccess && (
        <div className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 flex items-center justify-center gap-2 shrink-0 animate-bounce">
          <Check className="w-4 h-4" />
          <span>Success! Downloaded <strong>Tisdales_TV_Menu_1080p.jpg</strong> (1920 × 1080). Copy it to your USB flash drive and plug it into your TV.</span>
        </div>
      )}

      {/* Slide-Down Brainstorming Guide */}
      {showBrainstorm && (
        <div className="bg-[#1F1714] border-b border-amber-600/40 p-4 sm:p-6 overflow-y-auto max-h-72 shrink-0 z-10 shadow-2xl">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 font-mono">
                  Ideas for Your Trailer Setup
                </span>
                <h4 className="text-lg font-black text-white font-['Bebas_Neue'] tracking-wider">
                  How You Can Display & Sync Your Menu on Your TV (Little to Zero Equipment)
                </h4>
              </div>
              <button
                onClick={() => setShowBrainstorm(false)}
                className="text-xs text-stone-400 hover:text-white font-bold"
              >
                ✕ Close Guide
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Usb className="w-4 h-4" />
                  <span>Option 1: Your USB Flash Drive (Offline)</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Click the green <strong>"Download TV JPG"</strong> button. Save to your flash drive, plug into your TV, and loop the image. 100% offline.
                </p>
              </div>

              <div className="bg-[#140E0C] p-4 rounded-xl border border-amber-600/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Wifi className="w-4 h-4" />
                  <span>Option 2: Your Smart TV Browser (Live Sync)</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Connect your TV to your phone's personal hotspot. Open the TV browser to this page. Your TV updates live the second you mark an item sold out on your phone!
                </p>
              </div>

              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Tv className="w-4 h-4" />
                  <span>Option 3: A $20 Amazon Fire Stick</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Plugs into any TV HDMI port. Runs the browser full-screen all day connected to your phone hotspot with zero monthly fees.
                </p>
              </div>

              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Cable className="w-4 h-4" />
                  <span>Option 4: A $10 Direct HDMI Cable</span>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Plug your iPad or phone directly into the TV HDMI port. Mirrors your live menu with zero lag and zero Wi-Fi needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Preview Container with Dynamic Auto-Scaling */}
      <div 
        ref={containerRef} 
        className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-6 bg-[#070504]"
      >
        <div 
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            boxShadow: '0 30px 100px rgba(0,0,0,0.95)',
            imageRendering: '-webkit-optimize-contrast'
          }}
          className="shrink-0 transition-transform duration-150"
        >
          
          {/* ========================================================================= */}
          {/* THE EXACT 1920 x 1080 TV MENU BOARD CANVAS (Guaranteed Zero Cutoff)        */}
          {/* ========================================================================= */}
          <div
            ref={boardRef}
            id="tv-menu-canvas"
            className={`w-[1920px] h-[1080px] flex flex-col justify-between overflow-hidden select-none border-4 ${
              boardTheme === 'classicOrange'
                ? 'bg-[#E58032] border-[#8A3B05] text-[#1A120E]'
                : 'bg-[#0E0C0B] border-[#38261E] text-white'
            }`}
          >
            
            {/* 1. TOP HEADER (EXACT 115px HEIGHT) */}
            <div className={`h-[115px] px-10 flex items-center justify-between shrink-0 shadow-lg border-b-4 ${
              boardTheme === 'classicOrange'
                ? 'bg-[#FFFFFF] border-[#B95000] text-[#1F1510]'
                : 'bg-[#18120F] border-[#E65100] text-white'
            }`}>
              
              {/* Logo & Main Title */}
              <div className="flex items-center gap-6">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Tisdale Logo"
                  className="w-20 h-20 rounded-full border-4 border-amber-500 shadow-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-base font-black uppercase tracking-wider font-['Bebas_Neue'] px-2.5 py-0.5 rounded ${
                      boardTheme === 'classicOrange' ? 'bg-[#FAF0E6] text-[#B95000]' : 'bg-amber-950 text-amber-300 border border-amber-600/40'
                    }`}>
                      Donald Tisdale • Andrews, SC Heritage
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase text-stone-500">
                      Real Hickory Wood Smoked Daily
                    </span>
                  </div>
                  <h1 className="text-5xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none mt-1">
                    Tisdale’s Southern BBQ
                  </h1>
                </div>
              </div>

              {/* Center Slogan */}
              <div className="text-center">
                <div className={`text-xl font-['Permanent_Marker'] italic tracking-wide ${
                  boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                }`}>
                  "Mouth-Watering, Tongue-Twisting BBQ"
                </div>
                <div className="text-xs font-bold tracking-wider uppercase text-stone-500 mt-0.5">
                  Cooked Fresh To Order • Summa Everything
                </div>
              </div>

              {/* Right Phone & Square */}
              <div className="text-right space-y-0.5">
                <div className="flex items-center justify-end gap-2 text-3xl font-black font-['Bebas_Neue'] tracking-wider">
                  <Phone className="w-6 h-6 text-emerald-500" />
                  <span>CALL ORDER: (910) 709-2900</span>
                </div>
                <div className={`flex items-center justify-end gap-1.5 text-xs font-bold ${
                  boardTheme === 'classicOrange' ? 'text-stone-700' : 'text-amber-300'
                }`}>
                  <SquareIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Square POS: Tap to Pay • Apple Pay • Cards • Cash</span>
                </div>
              </div>

            </div>

            {/* 2. MAIN 3-COLUMN CONTENT BOARD (EXACT 870px HEIGHT) */}
            <div className="h-[870px] px-8 py-5 grid grid-cols-3 gap-6 shrink-0">
              
              {/* ================================================================= */}
              {/* COLUMN 1: DINNERS & PLATES (w/ 2 SIDES & ROLL)                    */}
              {/* ================================================================= */}
              <div className={`rounded-2xl p-5 flex flex-col justify-between shadow-xl border-2 ${
                boardTheme === 'classicOrange'
                  ? 'bg-[#FFFFFF] border-[#C86010] text-[#1A120E]'
                  : 'bg-[#15100E] border-amber-600/40 text-white'
              }`}>
                <div>
                  
                  {/* Category Title */}
                  <div className={`border-b-4 pb-2 mb-3 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-[#E65100]' : 'border-amber-500'
                  }`}>
                    <div>
                      <h2 className="text-3xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                        Dinners & Plates
                      </h2>
                      <p className={`text-[13px] font-bold uppercase tracking-wider ${
                        boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-300'
                      }`}>
                        Served with your choice of 2 sides & dinner roll
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-400 font-bold uppercase">
                      Wood Smoked
                    </span>
                  </div>

                  {/* Dinners List (Big Crisp Text, Zero Overflow) */}
                  <div className="space-y-1.5">
                    {menu.dinners?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between py-2 border-b ${
                            boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                          } ${isSoldOut ? 'opacity-40' : ''}`}
                        >
                          <div className="flex-1 pr-3">
                            <span className="text-[19px] font-extrabold uppercase tracking-wide block leading-tight">
                              {item.name}
                            </span>
                            {item.description && (
                              <span className={`text-[12px] font-medium block leading-none mt-0.5 ${
                                boardTheme === 'classicOrange' ? 'text-stone-600' : 'text-stone-400'
                              }`}>
                                {item.description}
                              </span>
                            )}
                          </div>

                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded font-mono shadow">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className={`text-[23px] font-black font-mono tracking-tight ${
                                boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                              }`}>
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Bottom Dinners Note */}
                <div className={`pt-2 border-t-2 text-center text-xs font-mono uppercase font-bold ${
                  boardTheme === 'classicOrange' ? 'border-stone-200 text-[#B95000]' : 'border-stone-800 text-amber-300'
                }`}>
                  ★ All Meats Smoked Low & Slow with Real Hickory Wood ★
                </div>
              </div>

              {/* ================================================================= */}
              {/* COLUMN 2: SANDWICHES & MEATS BY THE POUND (SLAB & LB)            */}
              {/* ================================================================= */}
              <div className={`rounded-2xl p-5 flex flex-col justify-between shadow-xl border-2 ${
                boardTheme === 'classicOrange'
                  ? 'bg-[#FFFFFF] border-[#C86010] text-[#1A120E]'
                  : 'bg-[#15100E] border-amber-600/40 text-white'
              }`}>
                <div>
                  
                  {/* Sandwiches Header */}
                  <div className={`border-b-4 pb-2 mb-2.5 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-[#E65100]' : 'border-amber-500'
                  }`}>
                    <div>
                      <h2 className="text-3xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                        Sandwiches & Handhelds
                      </h2>
                      <p className={`text-[13px] font-bold uppercase tracking-wider ${
                        boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-300'
                      }`}>
                        Served hot on toasted buns with custom toppings
                      </p>
                    </div>
                  </div>

                  {/* Sandwiches Items */}
                  <div className="space-y-1.5 mb-4">
                    {menu.sandwiches?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between py-1.5 border-b ${
                            boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                          } ${isSoldOut ? 'opacity-40' : ''}`}
                        >
                          <div className="flex-1 pr-2">
                            <span className="text-[17px] font-extrabold uppercase tracking-wide">
                              {item.name}
                            </span>
                            {item.extraOption && (
                              <span className="text-[12px] font-semibold text-stone-500 block leading-none mt-0.5">
                                {item.extraOption}
                              </span>
                            )}
                          </div>

                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded font-mono">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className={`text-[21px] font-black font-mono ${
                                boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                              }`}>
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Meats Only Header */}
                  <div className={`border-b-2 pb-1 mb-2 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-stone-300 text-[#B95000]' : 'border-amber-600/60 text-amber-300'
                  }`}>
                    <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                      Meats Only (Slab & LB)
                    </h3>
                    <span className="text-xs font-mono text-stone-400 uppercase font-bold">Bulk Orders</span>
                  </div>

                  {/* Meats Only List */}
                  <div className="space-y-1.5">
                    {menu.meatsOnly?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between py-1 border-b ${
                            boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                          } ${isSoldOut ? 'opacity-40' : ''}`}
                        >
                          <div className="flex-1 pr-2">
                            <span className="text-[17px] font-extrabold uppercase tracking-wide">
                              {item.name}
                            </span>
                            {item.extraOption && (
                              <span className="text-[12px] font-semibold text-stone-500 block leading-none">
                                {item.extraOption}
                              </span>
                            )}
                          </div>

                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded font-mono">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className={`text-[21px] font-black font-mono ${
                                boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                              }`}>
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                <div className={`pt-2 border-t-2 text-center text-xs font-mono uppercase font-bold ${
                  boardTheme === 'classicOrange' ? 'border-stone-200 text-stone-600' : 'border-stone-800 text-stone-400'
                }`}>
                  Toppings: Slaw, Onions, Kraut, Chili, Jalapeños, Cheese
                </div>
              </div>

              {/* ================================================================= */}
              {/* COLUMN 3: SIDES, SPECIALS & DESSERTS                              */}
              {/* ================================================================= */}
              <div className={`rounded-2xl p-5 flex flex-col justify-between shadow-xl border-2 ${
                boardTheme === 'classicOrange'
                  ? 'bg-[#FFFFFF] border-[#C86010] text-[#1A120E]'
                  : 'bg-[#15100E] border-amber-600/40 text-white'
              }`}>
                <div>
                  
                  {/* Sides Header */}
                  <div className={`border-b-4 pb-2 mb-2.5 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-[#E65100]' : 'border-amber-500'
                  }`}>
                    <div>
                      <h2 className="text-3xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                        Homestyle Sides (8 oz)
                      </h2>
                      <p className={`text-[13px] font-bold uppercase tracking-wider ${
                        boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-300'
                      }`}>
                        Grandma's recipes • $5.00 Each
                      </p>
                    </div>
                  </div>

                  {/* Sides 2-Column Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3.5">
                    {menu.sides?.items.filter(i => !i.hidden).map(item => (
                      <div
                        key={item.id}
                        className={`flex justify-between items-baseline py-1 border-b ${
                          boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                        }`}
                      >
                        <span className="text-[16px] font-bold uppercase truncate pr-1">
                          {item.name}
                        </span>
                        <span className={`text-[17px] font-black font-mono shrink-0 ${
                          boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                        }`}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Fryer Specials / Seafood Catches */}
                  <div className={`border-b-2 pb-1 mb-2 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-stone-300 text-[#B95000]' : 'border-[#E65100] text-amber-300'
                  }`}>
                    <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Today's Fryer & Smoker Specials</span>
                    </h3>
                    <span className="text-xs font-mono text-stone-400 uppercase font-bold">Hot Catch</span>
                  </div>

                  <div className="space-y-1.5 mb-3.5">
                    {specials.filter(s => !s.hidden).slice(0, 3).map(s => {
                      const isSoldOut = !s.inStock;

                      return (
                        <div
                          key={s.id}
                          className={`flex items-center justify-between py-1 border-b ${
                            boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                          } ${isSoldOut ? 'opacity-40' : ''}`}
                        >
                          <div className="flex-1 pr-2">
                            <span className="text-[17px] font-extrabold uppercase tracking-wide">
                              {s.title}
                            </span>
                            {s.description && (
                              <span className="text-[11px] text-stone-500 block leading-none">
                                {s.description}
                              </span>
                            )}
                          </div>

                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded font-mono">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className={`text-[20px] font-black font-mono ${
                                boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                              }`}>
                                {s.price}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Desserts & Cold Drinks */}
                  <div className={`border-b-2 pb-1 mb-2 flex items-baseline justify-between ${
                    boardTheme === 'classicOrange' ? 'border-stone-300 text-[#B95000]' : 'border-amber-600/60 text-amber-300'
                  }`}>
                    <h3 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider">
                      Desserts & Cold Drinks
                    </h3>
                  </div>

                  <div className="space-y-1">
                    {menu.dessertsAndDrinks?.items.filter(i => !i.hidden).map(item => (
                      <div
                        key={item.id}
                        className={`flex justify-between items-baseline py-0.5 border-b ${
                          boardTheme === 'classicOrange' ? 'border-stone-200' : 'border-stone-800'
                        }`}
                      >
                        <span className="text-[16px] font-bold uppercase truncate pr-2">
                          {item.name}
                        </span>
                        <span className={`text-[17px] font-black font-mono shrink-0 ${
                          boardTheme === 'classicOrange' ? 'text-[#B95000]' : 'text-amber-400'
                        }`}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Fryer Grease Notice */}
                <div className={`pt-2 border-t-2 flex items-center justify-between text-xs font-mono font-bold ${
                  boardTheme === 'classicOrange' ? 'border-stone-200 text-stone-800' : 'border-stone-800 text-amber-300'
                }`}>
                  <span>
                    {announcements.fryerOpen ? "🟢 FRYER GREASE IS HOT & FRYING FRESH" : "🔴 FRYER GREASE IS OFF (SMOKED MEATS ACTIVE)"}
                  </span>
                  <span className="text-stone-500 font-normal">Cutoff: 30m before close</span>
                </div>
              </div>

            </div>

            {/* 3. BOTTOM FOOTER & LOCATION TICKER (EXACT 95px HEIGHT) */}
            <div className={`h-[95px] px-10 flex items-center justify-between shrink-0 shadow-2xl border-t-4 ${
              boardTheme === 'classicOrange'
                ? 'bg-[#FFFFFF] border-[#B95000] text-[#1F1510]'
                : 'bg-[#150F0D] border-[#E65100] text-white'
            }`}>
              
              {/* Location Badge */}
              <div className="flex items-center gap-4">
                <span className={`font-black text-sm uppercase px-3 py-1.5 rounded-lg font-mono tracking-wider ${
                  boardTheme === 'classicOrange' ? 'bg-[#B95000] text-white' : 'bg-[#E65100] text-white'
                }`}>
                  TODAY'S LOCATION
                </span>
                <div>
                  <h4 className="text-2xl font-black uppercase font-['Bebas_Neue'] tracking-wider leading-none">
                    {current.name} • {current.hours}
                  </h4>
                  <p className="text-xs font-mono mt-0.5 text-stone-500 font-bold">
                    📍 {current.address}
                  </p>
                </div>
              </div>

              {/* Center Slogan */}
              <div className="text-center font-mono text-xs">
                <div className="font-bold uppercase tracking-wider">★ ALL DINNER PLATES INCLUDE 2 SIDES & WARM DINNER ROLL ★</div>
                <div className="text-stone-500 text-[11px] mt-0.5">
                  "I love cooking like a carpenter loves building houses." — Donald Tisdale
                </div>
              </div>

              {/* Right Branding */}
              <div className="text-right">
                <div className="text-base font-black uppercase font-['Bebas_Neue'] tracking-widest leading-none">
                  TISDALE’S SOUTHERN BBQ
                </div>
                <div className="text-xs text-emerald-600 font-mono font-bold mt-0.5">
                  We Accept Square • Tap To Pay • Apple Pay • Cash
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
