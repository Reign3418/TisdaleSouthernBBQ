import React from 'react';
import TopMarqueeBar from '../TopMarqueeBar';
import Header from '../Header';
import HeroLocationCard from '../HeroLocationCard';
import DonaldPassionSection from '../DonaldPassionSection';
import SpecialsSpotlight from '../SpecialsSpotlight';
import MainMenuSection from '../MainMenuSection';
import CateringSection from '../CateringSection';
import Footer from '../Footer';

export default function SmokehouseLayout() {
  return (
    <div className="bg-[#120F0E] text-[#F3EFEA] w-full max-w-full overflow-x-hidden">
      <TopMarqueeBar />
      <Header />
      <HeroLocationCard />
      
      {/* Website / Desktop Only: Full About Donald, History & Craft Story */}
      <div className="hidden md:block">
        <DonaldPassionSection />
      </div>

      {/* Main Menu & Specials (Both Mobile & Desktop) */}
      <SpecialsSpotlight />
      <MainMenuSection />

      {/* Mobile Only: Simple 1-Line Catering Contact Notice */}
      <div className="md:hidden py-4 px-4 bg-[#1A1412] border-t border-b border-[#342721] text-center">
        <p className="text-xs text-stone-300">
          🎉 <strong>Need Event or Family Catering?</strong> Call Donald at{' '}
          <a href="tel:9107092900" className="text-amber-400 font-bold underline">(910) 709-2900</a>
        </p>
      </div>

      {/* Website / Desktop Only: Full Interactive Catering Section */}
      <div className="hidden md:block">
        <CateringSection />
      </div>

      <Footer />
    </div>
  );
}
