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
    <div className="bg-[#120F0E] text-[#F3EFEA]">
      <TopMarqueeBar />
      <Header />
      <HeroLocationCard />
      <DonaldPassionSection />
      <SpecialsSpotlight />
      <MainMenuSection />
      <CateringSection />
      <Footer />
    </div>
  );
}
