import React from 'react';
import { PitmasterProvider, usePitmaster } from './context/PitmasterContext';
import TopMarqueeBar from './components/TopMarqueeBar';
import Header from './components/Header';
import HeroLocationCard from './components/HeroLocationCard';
import DonaldPassionSection from './components/DonaldPassionSection';
import SpecialsSpotlight from './components/SpecialsSpotlight';
import MainMenuSection from './components/MainMenuSection';
import CateringSection from './components/CateringSection';
import Footer from './components/Footer';
import SpecialsDrawerModal from './components/SpecialsDrawerModal';
import OrderDrawer from './components/OrderDrawer';
import PitmasterAdminModal from './components/PitmasterAdminModal';
import { Sparkles, Phone, Navigation, Utensils, Heart } from 'lucide-react';

function AppContent() {
  const { schedule, setIsSpecialsModalOpen } = usePitmaster();
  const current = schedule.currentLocation;

  return (
    <div className="min-h-screen flex flex-col bg-[#120F0E] text-[#F3EFEA] font-sans selection:bg-[#E64A19] selection:text-white pb-20 md:pb-0">
      
      {/* 1. Real-time Welcome & Location Bar */}
      <TopMarqueeBar />

      {/* 2. Authentic Brand Header with Pig Mascot Logo */}
      <Header />

      {/* 3. Hero Showcase: Where Donald is Today + Google Maps + Square Accepted */}
      <HeroLocationCard />

      {/* 4. The Heart Behind the Smoke: Donald's Story, Andrews SC & Passion */}
      <DonaldPassionSection />

      {/* 5. Specials Spotlight: Window Whiteboard & Sidewalk Chalkboard Combos */}
      <SpecialsSpotlight />

      {/* 6. The Main Barbecue Board: Full TV Screen Dinners, Sandwiches, Bulk Meats & Sides */}
      <MainMenuSection />

      {/* 7. Catering: Bring Donald's Food Trailer to Your Event */}
      <CateringSection />

      {/* 8. Smokehouse Footer */}
      <Footer />

      {/* Drawers & Modals (Accessible when needed) */}
      <SpecialsDrawerModal />
      <OrderDrawer />
      <PitmasterAdminModal />

      {/* Mobile Bottom Quick-Action Bar for Customers */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1412]/95 backdrop-blur-md border-t border-[#3C2D25] p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:9107092900"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#D9381E] text-white font-black py-2.5 px-2 rounded-xl text-xs uppercase tracking-wider shadow"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Trailer</span>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.name + ' ' + current.address)}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#2B201B] border border-[#4A372E] text-amber-200 font-bold py-2.5 px-2 rounded-xl text-xs uppercase tracking-wider"
        >
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Directions</span>
        </a>

        <button
          onClick={() => setIsSpecialsModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black py-2.5 px-2 rounded-xl text-xs uppercase tracking-wider shadow cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
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
