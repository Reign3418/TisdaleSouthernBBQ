import React, { createContext, useContext, useState, useEffect } from 'react';
import { MAIN_MENU, TRUCK_SPECIALS, INITIAL_SCHEDULE, INITIAL_ANNOUNCEMENTS } from '../data/menuData';

const PitmasterContext = createContext(null);

const STORAGE_KEY_MENU = 'tisdales_bbq_menu_v1';
const STORAGE_KEY_SPECIALS = 'tisdales_bbq_specials_v1';
const STORAGE_KEY_SCHEDULE = 'tisdales_bbq_schedule_v1';
const STORAGE_KEY_ANNOUNCE = 'tisdales_bbq_announcements_v1';
const STORAGE_KEY_THEME = 'tisdales_bbq_theme_v1';
const STORAGE_KEY_PITFX = 'tisdales_bbq_pitfx_v1';
const STORAGE_KEY_TV_THEME = 'tisdales_bbq_tv_theme_v1';

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

  // Design Concept Switcher: 'smokehouse' | 'carolinagold' | 'chalkboard'
  const [themeVersion, setThemeVersion] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      return saved || 'smokehouse';
    } catch (e) {
      return 'smokehouse';
    }
  });

  // Mobile Device & Viewport Detection
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cart state for customer ordering/budgeting
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSpecialsModalOpen, setIsSpecialsModalOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#specials' || window.location.search.includes('specials=1');
    }
    return false;
  });
  const [isPitmasterMode, setIsPitmasterMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#admin' || window.location.search.includes('admin=1');
    }
    return false;
  });
  const [isGpsWhitePageOpen, setIsGpsWhitePageOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#gps-options' || window.location.search.includes('gps=1');
    }
    return false;
  });
  const [isTvMenuOpen, setIsTvMenuOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#tv-menu' || window.location.hash === '#tv-display' || window.location.search.includes('tv=1');
    }
    return false;
  });
  const [isTvWhitePageOpen, setIsTvWhitePageOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#tv-whitepaper' || window.location.hash === '#tv-options' || window.location.search.includes('tv_brief=1');
    }
    return false;
  });
  const [isTrailerSimOpen, setIsTrailerSimOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#trailer-sim' || window.location.hash === '#trailer-demo' || window.location.search.includes('trailer=1');
    }
    return false;
  });

  // Listen for NFC tag taps that change the URL hash while the page is already open
  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash;
      if (h === '#admin') setIsPitmasterMode(true);
      if (h === '#specials') setIsSpecialsModalOpen(true);
      if (h === '#tv-menu' || h === '#tv-display') setIsTvMenuOpen(true);
      if (h === '#trailer-sim' || h === '#trailer-demo') setIsTrailerSimOpen(true);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [tvBoardTheme, setTvBoardTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TV_THEME);
      return saved || 'classicOrange';
    } catch (e) {
      return 'classicOrange';
    }
  });
  const [lastSyncPulse, setLastSyncPulse] = useState(null);
  const [lanSyncInfo, setLanSyncInfo] = useState({ active: false, lanIp: '192.168.8.100', port: 3000 });
  const lastLanVersionRef = React.useRef(0);
  const isApplyingRemoteRef = React.useRef(false);
  const [isPitFxActive, setIsPitFxActive] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PITFX);
      return saved !== null ? JSON.parse(saved) : true;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#gps-options') {
        setIsGpsWhitePageOpen(true);
      }
      if (window.location.hash === '#admin') {
        setIsPitmasterMode(true);
      }
      if (window.location.hash === '#tv-menu' || window.location.hash === '#tv-display') {
        setIsTvMenuOpen(true);
      }
      if (window.location.hash === '#tv-whitepaper' || window.location.hash === '#tv-options') {
        setIsTvWhitePageOpen(true);
      }
      if (window.location.hash === '#trailer-sim' || window.location.hash === '#trailer-demo') {
        setIsTrailerSimOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Real-time Cross-Window / Dual-Monitor Sync (Dell E5550 Laptop <-> GAEMS HDMI Monitor)
  useEffect(() => {
    const handleStorageSync = (e) => {
      try {
        if (e.key === STORAGE_KEY_MENU && e.newValue) {
          setMenu(JSON.parse(e.newValue));
          setLastSyncPulse(Date.now());
        } else if (e.key === STORAGE_KEY_SPECIALS && e.newValue) {
          setSpecials(JSON.parse(e.newValue));
          setLastSyncPulse(Date.now());
        } else if (e.key === STORAGE_KEY_SCHEDULE && e.newValue) {
          setSchedule(JSON.parse(e.newValue));
          setLastSyncPulse(Date.now());
        } else if (e.key === STORAGE_KEY_ANNOUNCE && e.newValue) {
          setAnnouncements(JSON.parse(e.newValue));
          setLastSyncPulse(Date.now());
        } else if (e.key === STORAGE_KEY_THEME && e.newValue) {
          setThemeVersion(e.newValue);
        } else if (e.key === STORAGE_KEY_TV_THEME && e.newValue) {
          setTvBoardTheme(e.newValue);
          setLastSyncPulse(Date.now());
        }
      } catch (err) {
        // Ignore malformed storage payloads
      }
    };
    window.addEventListener('storage', handleStorageSync);
    return () => window.removeEventListener('storage', handleStorageSync);
  }, []);

  // Local Wi-Fi Router Relay Sync (Donald's Real Cell Phone <-> Closed-Lid Dell E5550 <-> HDMI TV)
  useEffect(() => {
    if (typeof window === 'undefined' || window.location.hostname.includes('github.io')) {
      return;
    }

    let isMounted = true;
    const pollLanRelay = async () => {
      try {
        const res = await fetch('/__pit_sync', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted || !data.ok) return;

        setLanSyncInfo({ active: true, lanIp: data.lanIp || '192.168.8.100', port: data.port || 3000 });

        const remote = data.state;
        if (remote && remote.updatedAt > lastLanVersionRef.current) {
          isApplyingRemoteRef.current = true;
          lastLanVersionRef.current = remote.updatedAt;
          if (remote.menu) setMenu(remote.menu);
          if (remote.specials) setSpecials(remote.specials);
          if (remote.schedule) setSchedule(remote.schedule);
          if (remote.announcements) setAnnouncements(remote.announcements);
          if (remote.tvBoardTheme) setTvBoardTheme(remote.tvBoardTheme);
          setLastSyncPulse(Date.now());
          setTimeout(() => {
            isApplyingRemoteRef.current = false;
          }, 120);
        }
      } catch (e) {
        // Offline static mode fallback
      }
    };

    pollLanRelay();
    const timer = setInterval(pollLanRelay, 800);
    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  // Push local changes to the Dell E5550 Wi-Fi Relay when active
  useEffect(() => {
    if (!lanSyncInfo.active || isApplyingRemoteRef.current) return;
    const now = Date.now();
    lastLanVersionRef.current = now;
    fetch('/__pit_sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        menu,
        specials,
        schedule,
        announcements,
        tvBoardTheme
      })
    }).catch(() => {});
  }, [menu, specials, schedule, announcements, tvBoardTheme, lanSyncInfo.active]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TV_THEME, tvBoardTheme);
    setLastSyncPulse(Date.now());
  }, [tvBoardTheme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PITFX, JSON.stringify(isPitFxActive));
  }, [isPitFxActive]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_THEME, themeVersion);
  }, [themeVersion]);

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

  // 1-Tap Toggle item stock status (Available vs Sold Out)
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

  // Toggle item visibility (Visible vs Hidden completely from customers)
  const toggleItemHidden = (categoryKey, itemId) => {
    setMenu(prev => {
      const updatedCatItems = prev[categoryKey].items.map(item => {
        if (item.id === itemId) {
          return { ...item, hidden: !item.hidden };
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

  // Add new menu item
  const addMenuItem = (categoryKey, newItem) => {
    const itemWithId = {
      ...newItem,
      id: newItem.id || `item_${Date.now()}`,
      inStock: true,
      hidden: false
    };
    setMenu(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: [itemWithId, ...prev[categoryKey].items]
      }
    }));
  };

  // Edit existing menu item
  const editMenuItem = (categoryKey, itemId, updatedFields) => {
    setMenu(prev => {
      const updatedCatItems = prev[categoryKey].items.map(item => {
        if (item.id === itemId) {
          return { ...item, ...updatedFields };
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

  // Remove menu item completely
  const removeMenuItem = (categoryKey, itemId) => {
    setMenu(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: prev[categoryKey].items.filter(item => item.id !== itemId)
      }
    }));
  };

  // Toggle special stock status (Available vs Sold Out)
  const toggleSpecialStock = (specialId) => {
    setSpecials(prev => prev.map(s => {
      if (s.id === specialId) {
        return { ...s, inStock: !s.inStock };
      }
      return s;
    }));
  };

  // Toggle special visibility (Visible vs Hidden completely from customers)
  const toggleSpecialHidden = (specialId) => {
    setSpecials(prev => prev.map(s => {
      if (s.id === specialId) {
        return { ...s, hidden: !s.hidden };
      }
      return s;
    }));
  };

  // Add Special
  const addSpecial = (newSpecial) => {
    const specialWithId = {
      ...newSpecial,
      id: newSpecial.id || `spec_${Date.now()}`,
      inStock: true,
      hidden: false,
      category: 'Specials'
    };
    setSpecials(prev => [specialWithId, ...prev]);
  };

  // Edit Special
  const editSpecial = (specialId, updatedFields) => {
    setSpecials(prev => prev.map(s => {
      if (s.id === specialId) {
        return { ...s, ...updatedFields };
      }
      return s;
    }));
  };

  // Remove Special
  const removeSpecial = (id) => {
    setSpecials(prev => prev.filter(s => s.id !== id));
  };

  // 1-Tap Toggle Fryer Grease Status
  const toggleFryerStatus = () => {
    setAnnouncements(prev => ({
      ...prev,
      fryerOpen: !prev.fryerOpen
    }));
  };

  // 1-Tap Trigger Pig Flash & Price Fade Tier ($0, -$2, -$4, -$5)
  const triggerPriceFade = (fadeDollars) => {
    setAnnouncements(prev => ({
      ...prev,
      priceFadeAmount: fadeDollars,
      pigFlashTimestamp: Date.now()
    }));
  };

  // Update schedule
  const updateCurrentLocation = (newLoc) => {
    setSchedule(prev => ({
      ...prev,
      currentLocation: { ...prev.currentLocation, ...newLoc }
    }));
  };

  // Cart operations
  const addToCart = (item, extraDetails = '', overridePrice = null) => {
    const resolvedPrice = overridePrice !== null
      ? overridePrice
      : (item.numericPrice || item.singlePrice || parseFloat(String(item.price || '').replace(/[^0-9.]/g, '')) || 10.00);
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.extraDetails === extraDetails);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, {
        id: item.id,
        name: item.name || item.title,
        price: resolvedPrice,
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
      toggleItemHidden,
      addMenuItem,
      editMenuItem,
      removeMenuItem,
      toggleSpecialStock,
      toggleSpecialHidden,
      addSpecial,
      editSpecial,
      removeSpecial,
      toggleFryerStatus,
      triggerPriceFade,
      updateCurrentLocation,
      setAnnouncements,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      cartTotal,
      cartItemCount,
      themeVersion,
      setThemeVersion,
      isMobile,
      isGpsWhitePageOpen,
      setIsGpsWhitePageOpen,
      isTvMenuOpen,
      setIsTvMenuOpen,
      isTvWhitePageOpen,
      setIsTvWhitePageOpen,
      isTrailerSimOpen,
      setIsTrailerSimOpen,
      tvBoardTheme,
      setTvBoardTheme,
      lastSyncPulse,
      lanSyncInfo,
      isPitFxActive,
      setIsPitFxActive,
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
