import React, { useState, useRef, useEffect } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import html2canvas from 'html2canvas';
import {
  X,
  Download,
  Maximize2,
  Tv,
  HelpCircle,
  Check,
  RefreshCw,
  Sparkles,
  Flame,
  Phone,
  Radio,
  Wifi,
  Usb,
  Cable,
  ChevronDown,
  ChevronUp
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Resize handler to fit 1920x1080 into any screen viewport
  useEffect(() => {
    if (!isTvMenuOpen) return;

    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        const availableHeight = containerRef.current.clientHeight;

        // Target aspect 1920 x 1080
        const scaleX = (availableWidth - 32) / 1920;
        const scaleY = (availableHeight - 100) / 1080;
        const fittedScale = Math.min(scaleX, scaleY, 1);
        setScale(Math.max(fittedScale, 0.25));
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
      // Create high-res 1920x1080 canvas
      const canvas = await html2canvas(boardRef.current, {
        scale: 1, // Board is natively 1920x1080
        width: 1920,
        height: 1080,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0E0B0A',
        logging: false
      });

      const image = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = image;
      link.download = `Tisdales_TV_Menu_1080p_${new Date().toISOString().slice(0, 10)}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4000);
    } catch (err) {
      console.error("Failed to export TV menu image:", err);
      alert("Error generating TV menu image. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // Toggle Fullscreen TV mode
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col overflow-hidden text-white font-sans animate-fadeIn">
      
      {/* Top TV Controls Bar (Hides in clean view or on print) */}
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
                Native 1920 × 1080 Widescreen for Food Trailer Monitor
              </span>
            </div>
            <h3 className="text-lg font-black text-white font-['Bebas_Neue'] tracking-wider leading-none mt-0.5">
              Donald's TV Menu & USB Image Generator
            </h3>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Brainstorming Guide Button */}
          <button
            onClick={() => setShowBrainstorm(!showBrainstorm)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#281D18] hover:bg-[#382821] text-amber-300 hover:text-white text-xs font-bold transition cursor-pointer border border-amber-600/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Sync TV Without USB? (Brainstorm)</span>
            <span className="md:hidden">Sync TV?</span>
            {showBrainstorm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* White Paper Button */}
          <button
            onClick={() => setIsTvWhitePageOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-stone-900 hover:bg-amber-100 text-xs font-bold transition cursor-pointer border border-stone-300 shadow-sm"
            title="Read and Print the Official Food Trailer TV Display White Paper for Donald"
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
          <span>Image downloaded! Move <strong>Tisdales_TV_Menu_1080p.jpg</strong> to Donald's USB thumb drive and plug into TV.</span>
        </div>
      )}

      {/* Slide-Down Brainstorming Guide: How to Sync Web to TV With Very Little Equipment */}
      {showBrainstorm && (
        <div className="bg-[#1F1714] border-b border-amber-600/40 p-4 sm:p-6 overflow-y-auto max-h-72 shrink-0 z-10 shadow-2xl">
          <div className="max-w-6xl mx-auto space-y-4">
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 font-mono">
                  Brainstorming Guide for Donald
                </span>
                <h4 className="text-lg font-black text-white font-['Bebas_Neue'] tracking-wider">
                  How to Sync Donald's Live Website to the Truck TV (With Little to Zero Equipment)
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
              
              {/* Method 1: The USB Stick (What he has now) */}
              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Usb className="w-4 h-4" />
                  <span>Option 1: The USB Drive (Offline)</span>
                </div>
                <p className="text-stone-300">
                  <strong>Equipment needed:</strong> $0 (uses existing USB thumb drive).
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Click the green <strong>"Download TV JPG"</strong> button. Save to the flash drive, plug into the TV, and set the TV to "Photo Slideshow / Loop".
                </p>
                <div className="text-[11px] text-emerald-300 font-mono">
                  ✓ 100% reliable with zero internet or Wi-Fi needed.
                </div>
              </div>

              {/* Method 2: Smart TV Built-in Browser */}
              <div className="bg-[#140E0C] p-4 rounded-xl border border-amber-600/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Wifi className="w-4 h-4" />
                  <span>Option 2: Smart TV Browser (Live Sync)</span>
                </div>
                <p className="text-stone-300">
                  <strong>Equipment needed:</strong> $0 (uses TV's built-in web browser).
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Connect the TV to Donald's phone mobile hotspot (which he already runs for Square POS). Open the TV browser to:
                  <code className="block bg-black/60 p-1 rounded text-amber-200 mt-1 select-all break-all text-[10px]">
                    reign3418.github.io/TisdaleSouthernBBQ/#tv-menu
                  </code>
                </p>
                <div className="text-[11px] text-amber-300 font-mono">
                  ✓ Whenever Donald marks an item "Sold Out" on his phone, the TV updates live automatically!
                </div>
              </div>

              {/* Method 3: $20 Amazon Fire Stick */}
              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Tv className="w-4 h-4" />
                  <span>Option 3: $20 Amazon Fire Stick</span>
                </div>
                <p className="text-stone-300">
                  <strong>Equipment needed:</strong> $20 Amazon Fire Stick in the HDMI port.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  If Donald's TV is an older non-smart TV, a $20 Fire Stick connects to his phone hotspot and runs the pre-installed "Silk Browser" full-screen all day.
                </p>
                <div className="text-[11px] text-blue-300 font-mono">
                  ✓ Inexpensive, durable, and boots right up when the truck generator starts.
                </div>
              </div>

              {/* Method 4: $10 HDMI Cable from iPad/Phone */}
              <div className="bg-[#140E0C] p-4 rounded-xl border border-stone-700 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Cable className="w-4 h-4" />
                  <span>Option 4: $10 HDMI Cable</span>
                </div>
                <p className="text-stone-300">
                  <strong>Equipment needed:</strong> $10 USB-C / Lightning to HDMI adapter cable.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Plug Donald's iPad or spare phone directly into the TV's HDMI port. Mirror this web tab directly to the monitor.
                </p>
                <div className="text-[11px] text-purple-300 font-mono">
                  ✓ Zero lag, zero Wi-Fi required, instant mirror.
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Main Preview Container with Dynamic Auto-Scaling to fit viewport */}
      <div 
        ref={containerRef} 
        className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-[#0A0706]"
      >
        <div 
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            boxShadow: '0 25px 70px rgba(0,0,0,0.9)'
          }}
          className="shrink-0 transition-transform duration-200"
        >
          
          {/* THE 1920 x 1080 EXACT WIDESCREEN TV BOARD CANVAS */}
          <div
            ref={boardRef}
            id="tv-menu-canvas"
            className="w-[1920px] h-[1080px] bg-[#100D0B] text-white flex flex-col justify-between overflow-hidden select-none border-4 border-[#3D2C22] relative"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 20%, #241813 0%, #100D0B 80%)'
            }}
          >
            
            {/* 1. TV SCREEN TOP HEADER (140px height) */}
            <div className="h-[140px] bg-[#1A120E] border-b-4 border-[#E65100] px-10 flex items-center justify-between shrink-0 shadow-xl">
              
              {/* Logo & Main Title */}
              <div className="flex items-center gap-6">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Logo"
                  className="w-24 h-24 rounded-full border-4 border-amber-500 shadow-2xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 text-lg font-black uppercase tracking-widest font-['Bebas_Neue'] bg-amber-950/80 px-3 py-0.5 rounded border border-amber-600/40">
                      Donald Tisdale • Andrews, SC Roots
                    </span>
                    <span className="text-stone-400 text-sm font-bold tracking-wider uppercase">
                      Real Hickory Smoked Daily
                    </span>
                  </div>
                  <h1 className="text-6xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider leading-none mt-1">
                    Tisdale’s Southern BBQ
                  </h1>
                </div>
              </div>

              {/* Center Slogan */}
              <div className="text-center hidden xl:block">
                <div className="text-amber-400 text-xl font-['Permanent_Marker'] italic tracking-wide">
                  "Mouth-Watering, Tongue-Twisting BBQ"
                </div>
                <div className="text-stone-300 text-sm font-bold tracking-wider mt-1 uppercase">
                  Cooked Fresh To Order • Summa Everything
                </div>
              </div>

              {/* Right Phone & Square Badge */}
              <div className="text-right space-y-1">
                <div className="flex items-center justify-end gap-2 text-3xl font-black text-white font-['Bebas_Neue'] tracking-wider">
                  <Phone className="w-7 h-7 text-emerald-400" />
                  <span>CALL ORDER: (910) 709-2900</span>
                </div>
                <div className="flex items-center justify-end gap-2 text-sm text-amber-300 font-bold">
                  <SquareIcon className="w-4 h-4 text-emerald-400" />
                  <span>Square POS: Tap to Pay • Apple Pay • Cards • Cash</span>
                </div>
              </div>

            </div>

            {/* 2. MAIN 3-COLUMN BARBECUE MENU BOARD (840px height) */}
            <div className="h-[840px] px-10 py-6 grid grid-cols-3 gap-8 shrink-0">
              
              {/* COLUMN 1: SMOKED DINNERS & COMBO PLATES */}
              <div className="bg-[#18120F]/90 border-2 border-amber-600/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                <div>
                  <div className="border-b-4 border-amber-500 pb-3 mb-5 flex items-baseline justify-between">
                    <div>
                      <h2 className="text-4xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider">
                        Dinners & Plates
                      </h2>
                      <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mt-0.5">
                        Includes choice of two 8oz sides & dinner roll
                      </p>
                    </div>
                    <span className="text-sm font-mono text-stone-400 uppercase font-bold">
                      Hickory Smoked
                    </span>
                  </div>

                  <div className="space-y-4">
                    {menu.dinners?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div
                          key={item.id}
                          className={`border-b border-stone-800/80 pb-3 relative ${
                            isSoldOut ? 'opacity-40' : ''
                          }`}
                        >
                          {/* Item Row */}
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="text-xl font-black text-stone-100 uppercase tracking-wide flex-1">
                              {item.name}
                            </h3>
                            <div className="shrink-0 text-right">
                              {isSoldOut ? (
                                <span className="bg-rose-600 text-white font-black text-xs uppercase px-2 py-0.5 rounded font-mono shadow">
                                  SOLD OUT
                                </span>
                              ) : (
                                <span className="text-2xl font-black text-amber-400 font-mono">
                                  {item.price}
                                </span>
                              )}
                            </div>
                          </div>

                          {item.description && (
                            <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Col 1 notice */}
                <div className="pt-2 border-t-2 border-stone-800 text-center text-xs text-amber-400 font-mono uppercase">
                  ★ All Meats Smoked Low & Slow with Real Hickory Wood ★
                </div>
              </div>

              {/* COLUMN 2: SANDWICHES, HANDHELDS & MEATS ONLY */}
              <div className="bg-[#18120F]/90 border-2 border-amber-600/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                <div>
                  
                  {/* Sandwiches header */}
                  <div className="border-b-4 border-amber-500 pb-3 mb-4 flex items-baseline justify-between">
                    <div>
                      <h2 className="text-4xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider">
                        Sandwiches & Handhelds
                      </h2>
                      <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mt-0.5">
                        Hot on toasted buns with custom toppings
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {menu.sandwiches?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div key={item.id} className={`flex items-baseline justify-between text-sm border-b border-stone-800/80 pb-2 ${isSoldOut ? 'opacity-40' : ''}`}>
                          <div className="flex-1 pr-2">
                            <span className="font-bold text-white uppercase">{item.name}</span>
                            {item.extraOption && <span className="text-[11px] text-stone-400 block">{item.extraOption}</span>}
                          </div>
                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-[11px] uppercase px-2 py-0.5 rounded font-mono">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className="text-xl font-black text-amber-400 font-mono">{item.price}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Meats Only Header */}
                  <div className="border-b-2 border-amber-600/60 pb-2 mb-3 flex items-baseline justify-between">
                    <h3 className="text-2xl font-black text-amber-300 uppercase font-['Bebas_Neue'] tracking-wider">
                      Meats Only (Slab & LB)
                    </h3>
                    <span className="text-xs text-stone-400 uppercase font-mono">Bulk Take-Home</span>
                  </div>

                  <div className="space-y-2.5">
                    {menu.meatsOnly?.items.filter(i => !i.hidden).map(item => {
                      const isSoldOut = !item.inStock;

                      return (
                        <div key={item.id} className={`flex items-baseline justify-between text-sm border-b border-stone-800/80 pb-1.5 ${isSoldOut ? 'opacity-40' : ''}`}>
                          <div className="flex-1 pr-2">
                            <span className="font-bold text-white uppercase">{item.name}</span>
                            {item.extraOption && <span className="text-[11px] text-amber-300/80 block">{item.extraOption}</span>}
                          </div>
                          <div className="shrink-0 text-right">
                            {isSoldOut ? (
                              <span className="bg-rose-600 text-white font-black text-[11px] uppercase px-2 py-0.5 rounded font-mono">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className="text-xl font-black text-amber-400 font-mono">{item.price}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                <div className="pt-2 border-t-2 border-stone-800 text-center text-xs text-stone-400 font-mono">
                  Rib Slabs, Brisket & Pulled Pork Sold by Pound & Slab
                </div>
              </div>

              {/* COLUMN 3: SIDES, DESSERTS & DAILY FRYER SPECIALS */}
              <div className="bg-[#18120F]/90 border-2 border-amber-600/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                <div>
                  
                  {/* Sides */}
                  <div className="border-b-4 border-amber-500 pb-3 mb-4 flex items-baseline justify-between">
                    <div>
                      <h2 className="text-4xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider">
                        Homestyle Sides (8 oz)
                      </h2>
                      <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mt-0.5">
                        Grandma's scratch recipes • $5.00 Each
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {menu.sides?.items.filter(i => !i.hidden).map(item => (
                      <div key={item.id} className="border-b border-stone-800/60 pb-1.5 flex justify-between items-baseline text-xs">
                        <span className="font-bold text-stone-200 uppercase truncate">{item.name}</span>
                        <span className="font-mono text-amber-400 font-bold ml-1">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Daily Specials / Seafood Catch */}
                  <div className="border-b-2 border-[#E65100] pb-2 mb-3 flex items-baseline justify-between">
                    <h3 className="text-2xl font-black text-amber-300 uppercase font-['Bebas_Neue'] tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <span>Today's Fryer & Smoker Specials</span>
                    </h3>
                    <span className="text-xs text-stone-400 font-mono uppercase">Limited Run</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {specials.filter(s => !s.hidden).slice(0, 3).map(s => {
                      const isSoldOut = !s.inStock;

                      return (
                        <div key={s.id} className={`border-b border-stone-800/80 pb-2 ${isSoldOut ? 'opacity-40' : ''}`}>
                          <div className="flex items-baseline justify-between">
                            <span className="font-bold text-white text-sm uppercase">{s.title}</span>
                            <div className="shrink-0 text-right">
                              {isSoldOut ? (
                                <span className="bg-rose-600 text-white font-black text-[10px] uppercase px-1.5 py-0.5 rounded font-mono">
                                  SOLD OUT
                                </span>
                              ) : (
                                <span className="text-lg font-black text-amber-400 font-mono">{s.price}</span>
                              )}
                            </div>
                          </div>
                          <p className="text-[11px] text-stone-400 line-clamp-1">{s.description}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Desserts */}
                  <div className="border-b-2 border-amber-600/60 pb-2 mb-2 flex items-baseline justify-between">
                    <h3 className="text-2xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider">
                      Desserts & Drinks
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {menu.dessertsAndDrinks?.items.filter(i => !i.hidden).map(item => (
                      <div key={item.id} className="flex justify-between items-baseline text-xs border-b border-stone-800/60 pb-1">
                        <span className="font-bold text-stone-200 uppercase">{item.name}</span>
                        <span className="font-mono text-amber-400 font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Fryer Grease Notice */}
                <div className="pt-2 border-t-2 border-stone-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400">
                    {announcements.fryerOpen ? "🟢 FRYER IS HOT & COOKING TO ORDER" : "🔴 FRYER GREASE OFF (SMOKED MEATS ACTIVE)"}
                  </span>
                  <span className="text-stone-400">Grease off 30m before close</span>
                </div>

              </div>

            </div>

            {/* 3. TV SCREEN BOTTOM TICKER (100px height) */}
            <div className="h-[100px] bg-[#160E0B] border-t-4 border-[#E65100] px-10 flex items-center justify-between shrink-0 shadow-2xl">
              
              {/* Location Badge */}
              <div className="flex items-center gap-4">
                <span className="bg-[#E65100] text-white font-black text-sm uppercase px-3 py-1.5 rounded-lg font-mono tracking-wider">
                  TODAY'S LOCATION
                </span>
                <div>
                  <h4 className="text-2xl font-black text-white font-['Bebas_Neue'] tracking-wider leading-none">
                    {current.name} • {current.hours}
                  </h4>
                  <p className="text-xs text-stone-300 font-mono mt-0.5">
                    📍 {current.address}
                  </p>
                </div>
              </div>

              {/* Center Notice */}
              <div className="text-center font-mono text-xs text-amber-300">
                <div>★ ALL ORDERS COOKED WITH LOVE & HERITAGE ★</div>
                <div className="text-stone-400 text-[11px] mt-0.5">
                  "I love cooking like a carpenter loves building houses." — Donald Tisdale
                </div>
              </div>

              {/* Right Branding */}
              <div className="text-right">
                <div className="text-sm font-black text-white uppercase font-['Bebas_Neue'] tracking-widest">
                  TISDALE’S SOUTHERN BBQ
                </div>
                <div className="text-[11px] text-emerald-400 font-mono">
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
