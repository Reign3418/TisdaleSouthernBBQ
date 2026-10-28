import React from 'react';
import { usePitmaster } from '../../context/PitmasterContext';
import TopMarqueeBar from '../TopMarqueeBar';
import Header from '../Header';
import HeroLocationCard from '../HeroLocationCard';
import DonaldPassionSection from '../DonaldPassionSection';
import SpecialsSpotlight from '../SpecialsSpotlight';
import MainMenuSection from '../MainMenuSection';
import CateringSection from '../CateringSection';
import Footer from '../Footer';
import { MapPin, Sparkles } from 'lucide-react';

export default function SmokehouseLayout() {
  const { schedule, announcements, setIsSpecialsModalOpen } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <div className="bg-[#120F0E] text-[#F3EFEA] w-full max-w-full overflow-x-hidden">
      {/* Desktop Only: Top Marquee & Full Hero Location Showcase */}
      <div className="hidden md:block">
        <TopMarqueeBar />
      </div>

      <Header />

      {/* Mobile Only (<768px): Ultra-Compact 1-Line Stop + Specials Bar -> Straight to Menu! */}
      <div className="md:hidden bg-[#1A1310] border-b border-[#382922] px-3 py-2 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 min-w-0 truncate">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-bold text-amber-200 truncate">{current.name}</span>
          <span className="text-stone-400 text-[11px] shrink-0">({current.hours})</span>
        </div>
        <button
          onClick={() => setIsSpecialsModalOpen(true)}
          className="bg-[#D9381E] text-white font-black text-[10px] uppercase px-2 py-1 rounded-none shrink-0 flex items-center gap-1 shadow"
        >
          <Sparkles className="w-3 h-3" />
          <span>Specials</span>
        </button>
      </div>

      {!announcements.fryerOpen && (
        <div className="md:hidden bg-rose-950/80 border-b border-rose-600/50 px-3 py-1.5 text-[11px] text-rose-200 font-mono font-bold text-center">
          🛑 FRYER GREASE IS OFF FOR THE NIGHT • SMOKED BBQ MEATS READY!
        </div>
      )}

      {/* Desktop Only (>=768px): Full Hero Location Card & Donald's Story */}
      <div className="hidden md:block">
        <HeroLocationCard />
        <DonaldPassionSection />
        <SpecialsSpotlight />
      </div>

      {/* Main Interactive Menu (Renders IMMEDIATELY at the top on Mobile!) */}
      <MainMenuSection />

      {/* Mobile Only: Trailer Specials Below Main Menu */}
      <div className="md:hidden">
        <SpecialsSpotlight />
      </div>

      {/* Mobile Only: Simple 1-Line Catering Contact Notice */}
      <div className="md:hidden py-4 px-4 bg-[#1A1412] border-t border-b border-[#342721] text-center">
        <p className="text-xs text-stone-300">
          🎉 <strong>Need Event or Family Catering?</strong> Call Donald at{' '}
          <a href="tel:9107092900" className="text-amber-400 font-bold underline">(910) 709-2900</a>
        </p>
      </div>

      {/* Website / Desktop Only: Full Interactive Catering Section & Full Footer */}
      <div className="hidden md:block">
        <CateringSection />
        <Footer />
      </div>
    </div>
  );
}
