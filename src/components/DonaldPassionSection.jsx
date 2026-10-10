import React from 'react';
import { Heart, Flame, Award, Sparkles, Smile, Phone } from 'lucide-react';

export default function DonaldPassionSection() {
  return (
    <section id="about-donald" className="py-12 bg-[#14100E] border-t border-b border-[#2C211B] relative overflow-hidden">
      
      {/* Background warm smoke glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 Cols: The Story & The Passion */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>The Heart Behind the Smoke</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
              Cooking From the Heart <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#FF6B35]">
                Since Donald Was 9 Years Old
              </span>
            </h2>

            {/* Featured Quote Callout */}
            <div className="bg-[#1D1613] border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl space-y-2 shadow-inner">
              <p className="text-sm sm:text-base text-amber-200 font-serif italic leading-relaxed">
                "I grew up in a small town called Andrews, SC. As I watched my mom and Dad compete against each other on the stove, I developed a true passion for cooking. I started cooking at the age of 9. I love cooking like a carpenter love building houses. This food trailer is a dream come true and a gift from God."
              </p>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                — Donald Tisdale, Owner & Pitmaster
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 text-stone-300 text-xs sm:text-sm leading-relaxed">
              <p>
                At Tisdale's Southern BBQ, we sell barbecue Southern style, and <strong className="text-white">"Summa" everything</strong>. All our meats are honest, hickory wood-smoked, and prepared so everyday families and neighbors can enjoy exceptional Southern barbecue at fair, affordable prices.
              </p>
              <p>
                From fall-off-the-bone smoked pork ribs and seasoned beef brisket to our cooked-to-order fried pork chops, whole wings, and fresh-baked Honey Bun cake, Donald prepares every plate with genuine care.
              </p>
              <p className="text-amber-300 font-medium">
                "I'm thrilled as I watch customers enjoying eating what I've prepared. We love smiling faces; we aim to please our customers and value their opinions."
              </p>
            </div>

            {/* Values / Pillars */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#1C1613] p-3 rounded-xl border border-[#3A2D25] text-center">
                <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <strong className="text-white block">Real Wood Smoke</strong>
                <span className="text-[11px] text-stone-400">Low & slow hickory</span>
              </div>
              <div className="bg-[#1C1613] p-3 rounded-xl border border-[#3A2D25] text-center">
                <Heart className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                <strong className="text-white block">Cooked with Love</strong>
                <span className="text-[11px] text-stone-400">Since age 9</span>
              </div>
              <div className="bg-[#1C1613] p-3 rounded-xl border border-[#3A2D25] text-center">
                <Smile className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <strong className="text-white block">Smiling Faces</strong>
                <span className="text-[11px] text-stone-400">Family hospitality</span>
              </div>
              <div className="bg-[#1C1613] p-3 rounded-xl border border-[#3A2D25] text-center">
                <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <strong className="text-white block">Honest Prices</strong>
                <span className="text-[11px] text-stone-400">Generous portions</span>
              </div>
            </div>

          </div>

          {/* Right 5 Cols: Visual Tribute Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-[#221915] to-[#181210] border-2 border-amber-600/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative">
              <div className="text-center space-y-3">
                <img
                  src="./images/truck-logo-wrap.jpg"
                  alt="Donald Tisdale's Food Trailer"
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-amber-500 shadow-xl"
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
                    className="flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#E64A19] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>Call Ahead: (910) 709-2900</span>
                  </a>

                  <a
                    href="#main-menu"
                    className="flex items-center justify-center gap-1.5 bg-[#2A201B] hover:bg-[#382C26] border border-[#48372F] text-amber-200 font-bold py-2.5 rounded-xl text-xs transition"
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
