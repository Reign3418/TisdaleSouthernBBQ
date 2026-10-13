import React from 'react';
import { PitmasterProvider, usePitmaster } from './context/PitmasterContext';
import DesignSwitcherBar from './components/DesignSwitcherBar';
import SmokehouseLayout from './components/themes/SmokehouseLayout';
import CarolinaGoldLayout from './components/themes/CarolinaGoldLayout';
import ChalkboardLayout from './components/themes/ChalkboardLayout';
import SpecialsDrawerModal from './components/SpecialsDrawerModal';
import OrderDrawer from './components/OrderDrawer';
import PitmasterAdminModal from './components/PitmasterAdminModal';
import GpsTrackingWhitePage from './components/GpsTrackingWhitePage';
import TvMenuModal from './components/TvMenuModal';
import TvSyncWhitePage from './components/TvSyncWhitePage';
import { Sparkles, Phone, Navigation } from 'lucide-react';

function AppContent() {
  const { themeVersion, schedule, setIsSpecialsModalOpen } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <div className={`min-h-screen flex flex-col font-sans pb-20 md:pb-0 w-full max-w-full overflow-x-hidden relative ${
      themeVersion === 'carolinagold'
        ? 'bg-[#FAF7F0] text-[#241C18] selection:bg-[#B45309] selection:text-white'
        : themeVersion === 'chalkboard'
        ? 'bg-[#141B22] text-[#F0F6FC] selection:bg-[#38BDF8] selection:text-black'
        : 'bg-[#120F0E] text-[#F3EFEA] selection:bg-[#E64A19] selection:text-white'
    }`}>
      
      {/* 0. Top Design Switcher Bar (Switch between 3 distinct layouts for Donald) */}
      <DesignSwitcherBar />

      {/* Dynamic Concept Layout */}
      {themeVersion === 'carolinagold' && <CarolinaGoldLayout />}
      {themeVersion === 'chalkboard' && <ChalkboardLayout />}
      {themeVersion === 'smokehouse' && <SmokehouseLayout />}

      {/* Shared Drawers & Modals (Accessible across all themes) */}
      <SpecialsDrawerModal />
      <OrderDrawer />
      <PitmasterAdminModal />
      <GpsTrackingWhitePage />
      <TvMenuModal />
      <TvSyncWhitePage />

      {/* Mobile Bottom Quick-Action Bar for Customers */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 px-3 flex items-center justify-between gap-2 shadow-lg border-t ${
        themeVersion === 'carolinagold'
          ? 'bg-[#FFFFFF] border-[#D5C2A5]'
          : themeVersion === 'chalkboard'
          ? 'bg-[#0D1117] border-[#30363D]'
          : 'bg-[#1A1412] border-[#3C2D25]'
      }`}>
        <a
          href="tel:9107092900"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#D9381E] hover:bg-[#B72C15] text-white font-black py-2.5 px-2 rounded-none text-xs uppercase tracking-wider shadow"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Trailer</span>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
          target="_blank"
          rel="noreferrer"
          className={`flex-1 flex items-center justify-center gap-1.5 font-bold py-2.5 px-2 rounded-none text-xs uppercase tracking-wider border ${
            themeVersion === 'carolinagold'
              ? 'bg-[#FAF4EA] border-[#D5C2A5] text-[#78350F]'
              : themeVersion === 'chalkboard'
              ? 'bg-[#161F28] border-[#30363D] text-[#38BDF8]'
              : 'bg-[#2B201B] border-[#4A372E] text-amber-200'
          }`}
        >
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Directions</span>
        </a>

        <button
          onClick={() => setIsSpecialsModalOpen(true)}
          className={`flex-1 flex items-center justify-center gap-1.5 font-bold py-2.5 px-2 rounded-none text-xs uppercase tracking-wider shadow cursor-pointer border ${
            themeVersion === 'carolinagold'
              ? 'bg-[#B45309] text-white border-[#B45309]'
              : themeVersion === 'chalkboard'
              ? 'bg-[#38BDF8] text-stone-950 border-[#38BDF8]'
              : 'bg-[#2B201B] border-[#543D32] hover:bg-[#382A23] text-amber-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Specials</span>
        </button>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <PitmasterProvider>
      <AppContent />
    </PitmasterProvider>
  );
}
