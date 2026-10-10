import React from 'react';
import { PitmasterProvider, usePitmaster } from './context/PitmasterContext';
import TopMarqueeBar from './components/TopMarqueeBar';
import Header from './components/Header';
import HeroLocationCard from './components/HeroLocationCard';
import SpecialsSpotlight from './components/SpecialsSpotlight';
import MainMenuSection from './components/MainMenuSection';
import DonaldStoryCatering from './components/DonaldStoryCatering';
import Footer from './components/Footer';
import SpecialsDrawerModal from './components/SpecialsDrawerModal';
import OrderDrawer from './components/OrderDrawer';
import PitmasterAdminModal from './components/PitmasterAdminModal';
import { Sparkles, ShoppingBag, Phone, ChefHat } from 'lucide-react';

function AppContent() {
  const { cartItemCount, cartTotal, setIsCartOpen, setIsSpecialsModalOpen, setIsPitmasterMode } = usePitmaster();

  return (
    <div className="min-h-screen flex flex-col bg-[#120F0E] text-[#F3EFEA] font-sans selection:bg-[#E64A19] selection:text-white pb-20 md:pb-0">
      
      {/* 1. Real-time Sticky Marquee Bar (Location, Grease Status, Specials Trigger) */}
      <TopMarqueeBar />

      {/* 2. Brand Header (Pig Logo, Title, Phone, Cart, Specials Button) */}
      <Header />

      {/* 3. Hero & Location Pin (Where the truck is today + Fryer Cutoff Policy) */}
      <HeroLocationCard />

      {/* 4. Specials Spotlight: Chalkboard & Window Whiteboard (Specials in Spot 2) */}
      <SpecialsSpotlight />

      {/* 5. Main TV Screen Menu (Dinners, Sandwiches, Meats LB, Sides, Desserts) */}
      <MainMenuSection />

      {/* 6. Donald's Story & Real Working Catering Intake Form */}
      <DonaldStoryCatering />

      {/* 7. Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <SpecialsDrawerModal />
      <OrderDrawer />
      <PitmasterAdminModal />

      {/* Mobile Bottom Sticky Action Bar (For food truck customers on phones in line!) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1412]/95 backdrop-blur-md border-t border-[#3C2D25] p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <button
          onClick={() => setIsSpecialsModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black py-2.5 px-2 rounded-xl text-xs uppercase tracking-wider shadow cursor-pointer"
        >
          <Sparkles className="w-4 h-4 fill-stone-950" />
          <span>Specials</span>
        </button>

        <a
          href="tel:9107092900"
          className="flex items-center justify-center p-2.5 bg-[#2A201B] border border-[#48372E] text-emerald-400 rounded-xl transition"
          title="Call Trailer"
        >
          <Phone className="w-4 h-4" />
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#D9381E] hover:bg-[#E64A19] text-white font-bold py-2.5 px-2 rounded-xl text-xs transition shadow cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Plate ({cartItemCount})</span>
          {cartTotal > 0 && (
            <span className="font-mono text-[11px] bg-black/40 px-1.5 py-0.5 rounded text-amber-300">
              ${cartTotal.toFixed(0)}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsPitmasterMode(true)}
          className="p-2.5 bg-stone-900 border border-amber-600/40 text-amber-400 rounded-xl"
          title="Pitmaster Quick Admin"
        >
          <ChefHat className="w-4 h-4" />
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
