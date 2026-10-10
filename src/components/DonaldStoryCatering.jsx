import React, { useState } from 'react';
import { Heart, Calendar, Users, Phone, Mail, CheckCircle2, Flame, Award } from 'lucide-react';

export default function DonaldStoryCatering() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
    
    // Open sms or mailto
    window.open(`sms:9107092900?body=${encodeURIComponent(summary)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="about-catering" className="py-14 bg-[#14100E] border-t border-[#342721]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 6 Cols: Donald's Story */}
          <div className="lg:col-span-6 bg-[#1A1412] border border-[#3C2E27] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
                <Heart className="w-4 h-4 fill-amber-500" />
                <span>Our Heritage & Pitmaster</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide leading-tight">
                Meet Donald Tisdale <br />
                <span className="text-[#FF6B35]">Cooking With Heart Since Age 9</span>
              </h3>

              <div className="mt-4 space-y-3 text-stone-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">"I grew up in a small town called Andrews, SC."</strong> As I watched my mom and dad compete against each other on the stove, I developed a true passion for cooking. I started cooking at the age of 9.
                </p>
                <p>
                  I love cooking like a carpenter loves building houses. This food trailer is a dream come true and a gift from God. We sell BBQ Southern Style, and <em className="text-amber-300">"Summa" everything</em>. Our meats are wood-smoked, honest, and priced so everyday working families can eat like royalty.
                </p>
                <p className="italic text-amber-200/90 font-serif border-l-2 border-amber-500 pl-3 py-1">
                  "I'm thrilled as I watch customers enjoying eating what I've prepared. We love smiling faces; we aim to please our customers and value their opinions."
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-200">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Andrews, SC Roots</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <Flame className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Real Wood Smoked</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Family Owned & Operated</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Community Proud</span>
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Real Working Catering Form */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#231A16] to-[#1C1411] border-2 border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                <Calendar className="w-4 h-4" />
                <span>Southern BBQ Catering Services</span>
              </div>
              <h3 className="text-3xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wide">
                Book Donald's Trailer For Your Event
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Weddings, church gatherings, corporate luncheons, family reunions, and block parties. Let us smoke the meats so you can enjoy your guests!
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Inquiry Ready to Send!</h4>
                <p className="text-xs text-emerald-200">
                  Your catering request details have been prepared. Donald will review your date and guest count and get back to you with a custom quote!
                </p>
                <a
                  href="tel:9107092900"
                  className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 font-bold px-4 py-2 rounded-xl text-xs mt-2"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Donald Directly: 910-709-2900
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Target Event Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Estimated Guests</label>
                    <select
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="20-40">20 - 40 guests</option>
                      <option value="40-75">40 - 75 guests</option>
                      <option value="75-150">75 - 150 guests</option>
                      <option value="150+">150+ guests (Full Trailer Service)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Meats of Interest</label>
                  <div className="flex flex-wrap gap-1.5">
                    {meatOptions.map(meat => {
                      const selected = formData.meats.includes(meat);
                      return (
                        <button
                          key={meat}
                          type="button"
                          onClick={() => toggleMeat(meat)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                            selected
                              ? 'bg-amber-500 text-stone-950 font-bold'
                              : 'bg-[#181210] text-stone-400 border border-white/10 hover:border-amber-500/40'
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
                    className="w-full bg-[#140F0E] border border-[#3E2E26] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-orange-950/40 cursor-pointer"
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
