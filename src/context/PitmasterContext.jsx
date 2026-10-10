import React, { createContext, useContext, useState, useEffect } from 'react';
import { MAIN_MENU, TRUCK_SPECIALS, INITIAL_SCHEDULE, INITIAL_ANNOUNCEMENTS } from '../data/menuData';

const PitmasterContext = createContext(null);

const STORAGE_KEY_MENU = 'tisdales_bbq_menu_v1';
const STORAGE_KEY_SPECIALS = 'tisdales_bbq_specials_v1';
const STORAGE_KEY_SCHEDULE = 'tisdales_bbq_schedule_v1';
const STORAGE_KEY_ANNOUNCE = 'tisdales_bbq_announcements_v1';

export function PitmasterProvider({ children }) {
  // Load from localStorage or defaults
  const [menu, setMenu] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MENU);
      return saved ? JSON.parse(saved) : MAIN_MENU;
    } catch (e) {
      return MAIN_MENU;
    }
  });

  const [specials, setSpecials] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SPECIALS);
      return saved ? JSON.parse(saved) : TRUCK_SPECIALS;
    } catch (e) {
      return TRUCK_SPECIALS;
    }
  });

  const [schedule, setSchedule] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SCHEDULE);
      return saved ? JSON.parse(saved) : INITIAL_SCHEDULE;
    } catch (e) {
      return INITIAL_SCHEDULE;
    }
  });

  const [announcements, setAnnouncements] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANNOUNCE);
      return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
    } catch (e) {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  // Cart state for customer ordering/budgeting
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSpecialsModalOpen, setIsSpecialsModalOpen] = useState(false);
  const [isPitmasterMode, setIsPitmasterMode] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SPECIALS, JSON.stringify(specials));
  }, [specials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SCHEDULE, JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ANNOUNCE, JSON.stringify(announcements));
  }, [announcements]);

  // 1-Tap Toggle item stock status
  const toggleItemStock = (categoryKey, itemId) => {
    setMenu(prev => {
      const updatedCatItems = prev[categoryKey].items.map(item => {
        if (item.id === itemId) {
          return { ...item, inStock: !item.inStock };
        }
        return item;
      });
      return {
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items: updatedCatItems
        }
      };
    });
  };

  // Toggle special stock status
  const toggleSpecialStock = (specialId) => {
    setSpecials(prev => prev.map(s => {
      if (s.id === specialId) {
        return { ...s, inStock: !s.inStock };
      }
      return s;
    }));
  };

  // 1-Tap Toggle Fryer Grease Status
  const toggleFryerStatus = () => {
    setAnnouncements(prev => ({
      ...prev,
      fryerOpen: !prev.fryerOpen
    }));
  };

  // Update schedule
  const updateCurrentLocation = (newLoc) => {
    setSchedule(prev => ({
      ...prev,
      currentLocation: { ...prev.currentLocation, ...newLoc }
    }));
  };

  // Add / Edit Special
  const addSpecial = (newSpecial) => {
    setSpecials(prev => [newSpecial, ...prev]);
  };

  const removeSpecial = (id) => {
    setSpecials(prev => prev.filter(s => s.id !== id));
  };

  // Cart operations
  const addToCart = (item, extraDetails = '') => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.extraDetails === extraDetails);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, {
        id: item.id,
        name: item.name || item.title,
        price: item.numericPrice || item.singlePrice || 10.00,
        extraDetails,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateCartQty = (index, delta) => {
    setCart(prev => prev.map((item, i) => {
      if (i === index) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Reset to factory defaults
  const resetToDefaults = () => {
    if (window.confirm("Reset all menu items, schedule, and specials back to initial truck defaults?")) {
      setMenu(MAIN_MENU);
      setSpecials(TRUCK_SPECIALS);
      setSchedule(INITIAL_SCHEDULE);
      setAnnouncements(INITIAL_ANNOUNCEMENTS);
    }
  };

  return (
    <PitmasterContext.Provider value={{
      menu,
      specials,
      schedule,
      announcements,
      cart,
      isCartOpen,
      setIsCartOpen,
      isSpecialsModalOpen,
      setIsSpecialsModalOpen,
      isPitmasterMode,
      setIsPitmasterMode,
      toggleItemStock,
      toggleSpecialStock,
      toggleFryerStatus,
      updateCurrentLocation,
      setAnnouncements,
      addSpecial,
      removeSpecial,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      cartTotal,
      cartItemCount,
      resetToDefaults
    }}>
      {children}
    </PitmasterContext.Provider>
  );
}

export function usePitmaster() {
  const ctx = useContext(PitmasterContext);
  if (!ctx) throw new Error("usePitmaster must be used within PitmasterProvider");
  return ctx;
}
