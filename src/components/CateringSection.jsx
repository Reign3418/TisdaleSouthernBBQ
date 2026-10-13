import React, { useState } from 'react';
import { Calendar, Users, Phone, CheckCircle2, Flame, Award, Utensils } from 'lucide-react';

export default function CateringSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '30-50',
    meats: ['Pulled Pork', 'Beef Brisket'],
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const meatOptions = ['Pulled Pork', 'Beef Brisket', 'Pork Ribs', 'Chicken Leg Quarters', 'Smoked Turkey Legs', 'Fried Pork Chops'];

  const toggleMeat = (meat) => {
    setFormData(prev => {
      const exists = prev.meats.includes(meat);
      return {
        ...prev,
        meats: exists ? prev.meats.filter(m => m !== meat) : [...prev.meats, meat]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = `Catering Request for Donald Tisdale:\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nGuests: ${formData.guests}\nMeats: ${formData.meats.join(', ')}\nNotes: ${formData.notes}`;
    window.open(`sms:9107092900?body=${encodeURIComponent(summary)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="about-catering" className="py-8 sm:py-14 bg-[#120F0E] border-t border-[#342721] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left 5 Cols: Catering Info & Donald's Hospitality */}
          <div className="lg:col-span-5 bg-[#1A1412] border border-[#3C2E27] rounded-none p-4 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-none border border-amber-500/30">
                <Utensils className="w-3.5 h-3.5" />
                <span>Southern Hospitality</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
                Bring Donald's Smoker <br />
                <span className="text-[#FF6B35]">To Your Next Event</span>
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Whether you're hosting a family reunion, church gathering, corporate luncheon, wedding, or block party—let Donald do the smoking so you can enjoy your guests!
              </p>

              <div className="p-4 rounded-none bg-[#231A16] border border-[#443229] space-y-2">
                <h4 className="text-sm font-bold text-amber-300">Popular Catering Packages:</h4>
                <ul className="text-xs text-stone-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-amber-400 shrink-0"></span>
                    <span><strong>Big Family Dinners ($80):</strong> 1lb Brisket, 1lb Pork, 1/2 slab ribs, 4 sides, drinks & rolls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-amber-400 shrink-0"></span>
                    <span><strong>Bulk Meats by the Pound:</strong> Tender brisket ($25/lb), pulled pork ($18/lb), whole slabs of ribs ($31)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-amber-400 shrink-0"></span>
                    <span><strong>Full Trailer Pop-Up:</strong> Donald brings the food trailer directly to your venue</span>
                  </li>
                </ul>
              </div>

              <div className="pt-1">
                <a
                  href="tel:9107092900"
                  className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm bg-[#2B201B] hover:bg-[#382B24] border border-amber-600/40 px-4 py-2.5 rounded-none transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Prefer to talk? Call Donald at (910) 709-2900</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Licensed NC Food Trailer</span>
              <span className="text-amber-300 font-medium">Serving Fayetteville, Sanford, Dunn & Beyond</span>
            </div>
          </div>

          {/* Right 7 Cols: Working Intake Form with Straight Lines */}
          <div className="lg:col-span-7 bg-[#1D1613] border-2 border-[#3E2E25] rounded-none p-4 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                <Calendar className="w-4 h-4" />
                <span>Check Date Availability</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide">
                Tell Us About Your Gathering
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Fill out the quick details below and it will prepare a direct message for Donald to review your date and quote:
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 p-6 rounded-none bg-emerald-950/60 border border-emerald-500 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Inquiry Sent to Donald!</h4>
                <p className="text-xs text-emerald-200">
                  Your catering request details have been prepared. Donald will review your date and guest count and get back to you!
                </p>
                <a
                  href="tel:9107092900"
                  className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 font-bold px-5 py-2.5 rounded-none text-xs mt-2"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Donald Directly: (910) 709-2900
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-none px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(910) 555-0199"
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-none px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Target Event Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-none px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Estimated Guests</label>
                    <select
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-none px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="20-40">20 - 40 guests</option>
                      <option value="40-75">40 - 75 guests</option>
                      <option value="75-150">75 - 150 guests</option>
                      <option value="150+">150+ guests (Full Trailer Service)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1.5">Meats of Interest</label>
                  <div className="flex flex-wrap gap-2">
                    {meatOptions.map(meat => {
                      const selected = formData.meats.includes(meat);
                      return (
                        <button
                          key={meat}
                          type="button"
                          onClick={() => toggleMeat(meat)}
                          className={`px-3 py-1.5 rounded-none text-xs font-bold transition cursor-pointer ${
                            selected
                              ? 'bg-amber-500 text-stone-950 shadow'
                              : 'bg-[#181210] text-stone-300 border border-white/10 hover:border-amber-500/40'
                          }`}
                        >
                          {meat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Event Location & Notes</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell Donald about the venue, time, or favorite sides..."
                    className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-none px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D9381E] hover:bg-[#B72C15] text-white font-black py-3.5 rounded-none text-xs sm:text-sm uppercase tracking-wider transition shadow cursor-pointer"
                >
                  Send Catering Request Direct to Donald
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
