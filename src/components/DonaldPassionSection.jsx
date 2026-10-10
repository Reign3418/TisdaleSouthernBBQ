import React from 'react';
import { Heart, Flame, Award, Smile, Phone } from 'lucide-react';

export default function DonaldPassionSection() {
  return (
    <section id="about-donald" className="py-12 bg-[#14100E] border-t border-b border-[#2C211B] relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 Cols: The Story & The Passion */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest bg-[#221814] px-3 py-1 rounded-none border border-[#483327]">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>[ CRAFTSMAN STORY // THE HEART BEHIND THE SMOKE ]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
              Cooking From the Heart <br />
              <span className="text-[#FF7043]">
                Since Donald Was 9 Years Old
              </span>
            </h2>

            {/* Featured Quote Callout - Real Pitmaster Words with Crisp Hairline Borders */}
            <div className="relative bg-[#1C1512] border-l-4 border-[#D9381E] border-y border-r border-[#382821] p-4 sm:p-5 rounded-none space-y-2 shadow-md">
              <p className="text-sm sm:text-base text-amber-200 font-serif italic leading-relaxed">
                "I grew up in a small town called Andrews, SC. As I watched my mom and Dad compete against each other on the stove, I developed a true passion for cooking. I started cooking at the age of 9. I love cooking like a carpenter love building houses. This food trailer is a dream come true and a gift from God."
              </p>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider font-['Bebas_Neue'] text-sm tracking-wide">
                — Donald Tisdale, Owner & Pitmaster
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 text-stone-300 text-xs sm:text-sm leading-relaxed">
              <p>
                At Tisdale's Southern BBQ, we sell barbecue Southern style, and <strong className="text-white">"Summa" everything</strong>. All our meats are honest, slow-smoked with 100% all-natural hickory pellets, and prepared so everyday families and neighbors can enjoy exceptional Southern barbecue at fair, affordable prices.
              </p>
              <p>
                From fall-off-the-bone smoked pork ribs and seasoned beef brisket to our cooked-to-order fried pork chops, whole wings, and fresh-baked Honey Bun cake, Donald prepares every plate with genuine care.
              </p>
              <p className="text-amber-300 font-medium">
                "I'm thrilled as I watch customers enjoying eating what I've prepared. We love smiling faces; we aim to please our customers and value their opinions."
              </p>
            </div>

            {/* Four Pillars with Straight Hairline Precision Cards */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="relative bg-[#1A1411] p-3 rounded-none border border-[#3E2E25] hover:border-amber-500/40 text-center transition-all duration-150">
                <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <strong className="text-white block">Hickory Pellet Smoke</strong>
                <span className="text-[11px] text-stone-400 font-mono">Pure hickory pellets</span>
              </div>
              <div className="relative bg-[#1A1411] p-3 rounded-none border border-[#3E2E25] hover:border-amber-500/40 text-center transition-all duration-150">
                <Heart className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                <strong className="text-white block">Cooked with Love</strong>
                <span className="text-[11px] text-stone-400 font-mono">Since age 9</span>
              </div>
              <div className="relative bg-[#1A1411] p-3 rounded-none border border-[#3E2E25] hover:border-amber-500/40 text-center transition-all duration-150">
                <Smile className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <strong className="text-white block">Smiling Faces</strong>
                <span className="text-[11px] text-stone-400 font-mono">Family hospitality</span>
              </div>
              <div className="relative bg-[#1A1411] p-3 rounded-none border border-[#3E2E25] hover:border-amber-500/40 text-center transition-all duration-150">
                <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <strong className="text-white block">Honest Prices</strong>
                <span className="text-[11px] text-stone-400 font-mono">Generous portions</span>
              </div>
            </div>

          </div>

          {/* Right 5 Cols: Visual Tribute Card with Precision Straight Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative bg-[#181210] border border-[#443126] rounded-none p-6 sm:p-7 shadow-2xl">

              <div className="text-center space-y-3">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Donald Tisdale's Food Trailer"
                  className="w-28 h-28 mx-auto rounded-none object-cover border-2 border-[#D9381E] shadow-md"
                />
                
                <h3 className="text-2xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide">
                  Mouth-Watering, Tongue-Twisting BBQ
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed max-w-sm mx-auto">
                  Pull up to our window in Fayetteville, Sanford, Dunn, and surrounding NC communities. Have lunch, pick up dinner for the family, or order a full slab for the weekend!
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="tel:9107092900"
                    className="flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#B72C15] active:translate-y-0.5 text-white font-bold py-3 rounded-none text-xs uppercase tracking-wider transition-all duration-150 shadow"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call Ahead: (910) 709-2900</span>
                  </a>

                  <a
                    href="#main-menu"
                    className="flex items-center justify-center gap-1.5 bg-[#251B17] hover:bg-[#342520] active:translate-y-0.5 border border-[#48372F] text-amber-200 font-bold py-2.5 rounded-none text-xs transition-all duration-150"
                  >
                    <span>Browse the Main Barbecue Board</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
