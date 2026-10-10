import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import { X, Trash2, Plus, Minus, Phone, MessageSquare, Check, ShoppingBag, Sparkles, CreditCard } from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function OrderDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQty,
    clearCart,
    cartTotal,
    cartItemCount,
    schedule,
    announcements
  } = usePitmaster();

  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const estimatedTax = cartTotal * 0.07; // NC 7% sales tax
  const grandTotal = cartTotal + estimatedTax;

  const generateOrderSummary = () => {
    let text = `Hi Donald! I'd like to place an order from Tisdale's Southern BBQ (${schedule.currentLocation.name}):\n\n`;
    cart.forEach(item => {
      text += `• ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
      if (item.extraDetails) text += `  (${item.extraDetails})\n`;
    });
    text += `\nEstimated Total: $${grandTotal.toFixed(2)}`;
    return text;
  };

  const handleCopyOrder = () => {
    const summary = generateOrderSummary();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSmsOrder = () => {
    const summary = encodeURIComponent(generateOrderSummary());
    window.open(`sms:9107092900?body=${summary}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#191412] border-l-2 border-[#3D2C24] w-full max-w-md h-full flex flex-col shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#241A16] border-b border-[#3B2B23] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-none bg-amber-500 text-stone-950 font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-white font-['Bebas_Neue'] tracking-wider leading-none">
                Your BBQ Plate / Order Tray
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} ready for pickup
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-none bg-[#2E201B] hover:bg-[#3D2B24] text-stone-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
              <div className="w-16 h-16 rounded-none bg-[#241B17] flex items-center justify-center mb-3 text-amber-500">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-white">Your tray is empty</h4>
              <p className="text-xs text-stone-400 mt-1 max-w-xs">
                Browse our hickory-smoked brisket, ribs, sides, or daily specials and add them to your plate!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-4 py-2 bg-amber-500 text-stone-950 font-bold rounded-none text-xs hover:bg-amber-400 transition"
              >
                Explore the Menu
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="bg-[#211916] border border-[#3C2E27] rounded-none p-3 flex items-center justify-between gap-3 shadow-sm"
              >
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                  {item.extraDetails && (
                    <p className="text-[11px] text-amber-300 italic">{item.extraDetails}</p>
                  )}
                  <p className="text-xs font-semibold text-amber-400 font-mono mt-0.5">
                    ${(item.price * item.quantity).toFixed(2)}{" "}
                    <span className="text-[10px] text-stone-500 font-sans">
                      (${item.price.toFixed(2)} each)
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex items-center bg-[#15100E] border border-[#3E3029] rounded-none p-0.5">
                    <button
                      onClick={() => updateCartQty(index, -1)}
                      className="p-1 text-stone-400 hover:text-white hover:bg-white/10 rounded-none transition cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-xs font-bold text-white min-w-[20px] text-center font-mono">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQty(index, 1)}
                      className="p-1 text-stone-400 hover:text-white hover:bg-white/10 rounded-none transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-rose-950/30 rounded-none transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Calculations and Action */}
        {cart.length > 0 && (
          <div className="bg-[#1E1714] border-t border-[#3B2C24] p-4 space-y-3">
            
            {/* Price breakdown */}
            <div className="space-y-1 text-xs text-stone-300">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-mono">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Est. NC Sales Tax (7%):</span>
                <span className="font-mono">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span>Estimated Total:</span>
                <span className="text-amber-400 font-mono text-lg">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Direct Trailer Call / Text Order Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href="tel:9107092900"
                className="w-full flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#E64A19] text-white font-black py-3 rounded-none text-sm transition shadow-lg shadow-orange-950/50 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Trailer to Place Order (910-709-2900)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSmsOrder}
                  className="flex items-center justify-center gap-1.5 bg-[#2B211D] hover:bg-[#392B26] border border-[#483730] text-amber-200 font-bold py-2 rounded-none text-xs transition cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text Order</span>
                </button>

                <button
                  onClick={handleCopyOrder}
                  className="flex items-center justify-center gap-1.5 bg-[#2B211D] hover:bg-[#392B26] border border-[#483730] text-stone-200 font-bold py-2 rounded-none text-xs transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <span>Copy Summary</span>
                  )}
                </button>
              </div>

              {/* Square Payment Integration Card */}
              <div className="bg-[#140F0E] border border-[#3A2D25] rounded-none p-3 space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-xs">
                    <SquareIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Square POS Accepted</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-none">
                    All Payment Methods
                  </span>
                </div>
                
                <p className="text-[11px] text-stone-300 leading-snug">
                  Pay at the trailer window with <strong>Square</strong>: Tap-to-Pay, Apple Pay, Google Pay, Cash App Pay, Chip & Swipe cards, or Cash!
                </p>

                {announcements.squareSiteUrl && (
                  <a
                    href={announcements.squareSiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#006AFF] hover:bg-[#0055D4] text-white font-bold py-2.5 rounded-none text-xs transition shadow cursor-pointer mt-1"
                  >
                    <SquareIcon className="w-3.5 h-3.5" />
                    <span>Pay Ahead via Square Online</span>
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
              <span>Square • Visa • MC • Amex • Apple Pay • Cash</span>
              <button
                onClick={clearCart}
                className="text-stone-400 hover:text-rose-400 underline cursor-pointer"
              >
                Clear Tray
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

function Utensils(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/>
      <path d="M15 2v19"/>
      <path d="M21 15v6"/>
      <path d="M21 2c0 2.5-1 4.5-3 5.5"/>
      <path d="M3 2v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2"/>
      <path d="M6 2v19"/>
    </svg>
  );
}
