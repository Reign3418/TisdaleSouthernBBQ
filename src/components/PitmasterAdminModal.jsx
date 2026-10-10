import React, { useState } from 'react';
import { usePitmaster } from '../context/PitmasterContext';
import {
  X,
  ChefHat,
  Flame,
  AlertTriangle,
  MapPin,
  Check,
  RefreshCw,
  Power,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Filter,
  DollarSign,
  Layers,
  Sparkles
} from 'lucide-react';
import SquareIcon from './icons/SquareIcon';

export default function PitmasterAdminModal() {
  const {
    isPitmasterMode,
    setIsPitmasterMode,
    menu,
    specials,
    schedule,
    announcements,
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
    updateCurrentLocation,
    setAnnouncements,
    resetToDefaults
  } = usePitmaster();

  // Navigation tab inside admin
  const [activeTab, setActiveTab] = useState('menuEditor'); // 'menuEditor' | 'rush86' | 'location' | 'marquee'

  // Location form state
  const [locationName, setLocationName] = useState(schedule.currentLocation.name);
  const [locationAddress, setLocationAddress] = useState(schedule.currentLocation.address);
  const [locationHours, setLocationHours] = useState(schedule.currentLocation.hours);
  const [marqueeText, setMarqueeText] = useState(announcements.topMarquee);
  const [squareUrl, setSquareUrl] = useState(announcements.squareSiteUrl || '');
  const [saveMessage, setSaveMessage] = useState('');

  // Menu editor filters & search
  const [editorCategory, setEditorCategory] = useState('all'); // 'all' | 'specials' | 'dinners' | 'sandwiches' | 'meatsOnly' | 'sides' | 'dessertsAndDrinks'
  const [editorStatusFilter, setEditorStatusFilter] = useState('all'); // 'all' | 'inStock' | 'soldOut' | 'hidden'
  const [searchQuery, setSearchQuery] = useState('');

  // Item Add / Edit Modal Form State
  const [isItemFormOpen, setIsItemFormOpen] = useState(false);
  const [editingItemTarget, setEditingItemTarget] = useState(null); // null if adding new, or { categoryKey, item, isSpecial }

  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('dinners');
  const [formPrice, setFormPrice] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formBadge, setFormBadge] = useState('');
  const [formExtraOption, setFormExtraOption] = useState('');
  const [formIsFryer, setFormIsFryer] = useState(false);

  if (!isPitmasterMode) return null;

  const showNotification = (msg) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(''), 2500);
  };

  const presets = [
    { name: "Stop Button Bar & Arcade", address: "Legion Road, Fayetteville, NC", hours: "1:30 PM - 6:30 PM" },
    { name: "North View Lanes Bowling Alley", address: "Ramsey St, Fayetteville, NC", hours: "5:00 PM - Till Closing" },
    { name: "Static Line Brewing Co.", address: "Sanford, NC", hours: "4:30 PM - 8:30 PM" },
    { name: "Dunn Downtown Block Party", address: "Downtown Dunn, NC", hours: "11:00 AM - 7:00 PM" },
    { name: "Closed for Smoker Maintenance", address: "Fayetteville, NC", hours: "Closed" }
  ];

  const applyPreset = (preset) => {
    setLocationName(preset.name);
    setLocationAddress(preset.address);
    setLocationHours(preset.hours);
    updateCurrentLocation({
      name: preset.name,
      address: preset.address,
      hours: preset.hours
    });
    showNotification(`Applied preset: ${preset.name}`);
  };

  const handleSaveLocation = (e) => {
    e.preventDefault();
    updateCurrentLocation({
      name: locationName,
      address: locationAddress,
      hours: locationHours
    });
    showNotification('Location updated on live site!');
  };

  const handleSaveMarquee = () => {
    setAnnouncements(prev => ({ ...prev, topMarquee: marqueeText }));
    showNotification('Marquee banner updated on live site!');
  };

  const handleSaveSquare = (e) => {
    e.preventDefault();
    setAnnouncements(prev => ({ ...prev, squareSiteUrl: squareUrl }));
    showNotification('Square settings updated on live site!');
  };

  // Open Form to Add New Item
  const handleOpenAddForm = () => {
    setEditingItemTarget(null);
    setFormName('');
    setFormCategory(editorCategory !== 'all' ? editorCategory : 'dinners');
    setFormPrice('$');
    setFormDescription('');
    setFormBadge('');
    setFormExtraOption('');
    setFormIsFryer(false);
    setIsItemFormOpen(true);
  };

  // Open Form to Edit Existing Item
  const handleOpenEditForm = (categoryKey, item, isSpecial = false) => {
    setEditingItemTarget({ categoryKey, item, isSpecial });
    setFormName(item.name || item.title || '');
    setFormCategory(isSpecial ? 'specials' : categoryKey);
    setFormPrice(item.price || '');
    setFormDescription(item.description || '');
    setFormBadge(item.badge || '');
    setFormExtraOption(item.extraOption || '');
    setFormIsFryer(Boolean(item.isFryerItem));
    setIsItemFormOpen(true);
  };

  // Save Add or Edit Item
  const handleSaveItemForm = (e) => {
    e.preventDefault();
    if (!formName.trim()) {
      alert("Please enter an item name.");
      return;
    }

    const numericPriceVal = parseFloat(formPrice.replace(/[^0-9.]/g, '')) || 0;

    if (editingItemTarget) {
      // Editing existing
      const { categoryKey, item, isSpecial } = editingItemTarget;
      if (isSpecial) {
        editSpecial(item.id, {
          title: formName,
          price: formPrice,
          singlePrice: numericPriceVal,
          description: formDescription,
          badge: formBadge,
          extraOption: formExtraOption,
          isFryerItem: formIsFryer
        });
        showNotification(`Updated special "${formName}"`);
      } else {
        editMenuItem(categoryKey, item.id, {
          name: formName,
          price: formPrice,
          numericPrice: numericPriceVal,
          description: formDescription,
          badge: formBadge,
          extraOption: formExtraOption,
          isFryerItem: formIsFryer
        });
        showNotification(`Updated "${formName}"`);
      }
    } else {
      // Adding new
      if (formCategory === 'specials') {
        addSpecial({
          title: formName,
          price: formPrice,
          singlePrice: numericPriceVal,
          description: formDescription,
          badge: formBadge || "Pitmaster Special",
          extraOption: formExtraOption,
          isFryerItem: formIsFryer,
          source: "Window Special"
        });
        showNotification(`Added new special "${formName}"`);
      } else {
        addMenuItem(formCategory, {
          name: formName,
          price: formPrice,
          numericPrice: numericPriceVal,
          description: formDescription,
          badge: formBadge,
          extraOption: formExtraOption,
          isFryerItem: formIsFryer
        });
        showNotification(`Added "${formName}" to menu`);
      }
    }

    setIsItemFormOpen(false);
  };

  // Handle Remove Item
  const handleRemove = (categoryKey, itemId, name, isSpecial = false) => {
    if (window.confirm(`Are you sure you want to completely delete "${name}" from the menu?`)) {
      if (isSpecial) {
        removeSpecial(itemId);
      } else {
        removeMenuItem(categoryKey, itemId);
      }
      showNotification(`Deleted "${name}"`);
    }
  };

  // Compile list of items for the editor
  const getAllEditorItems = () => {
    let items = [];

    // 1. Specials
    if (editorCategory === 'all' || editorCategory === 'specials') {
      specials.forEach(s => {
        items.push({
          id: s.id,
          name: s.title,
          price: s.price,
          description: s.description,
          badge: s.badge,
          extraOption: s.extraOption,
          isFryerItem: s.isFryerItem,
          inStock: s.inStock !== false,
          hidden: Boolean(s.hidden),
          categoryKey: 'specials',
          categoryLabel: 'Daily Special & Catch',
          isSpecial: true,
          rawItem: s
        });
      });
    }

    // 2. Regular menu categories
    Object.entries(menu).forEach(([catKey, catData]) => {
      if (editorCategory === 'all' || editorCategory === catKey) {
        catData.items.forEach(item => {
          items.push({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            badge: item.badge,
            extraOption: item.extraOption,
            isFryerItem: item.isFryerItem,
            inStock: item.inStock !== false,
            hidden: Boolean(item.hidden),
            categoryKey: catKey,
            categoryLabel: catData.categoryName,
            isSpecial: false,
            rawItem: item
          });
        });
      }
    });

    // Apply Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        (i.description && i.description.toLowerCase().includes(q)) ||
        (i.badge && i.badge.toLowerCase().includes(q))
      );
    }

    // Apply Status Filter
    if (editorStatusFilter === 'inStock') {
      items = items.filter(i => i.inStock && !i.hidden);
    } else if (editorStatusFilter === 'soldOut') {
      items = items.filter(i => !i.inStock && !i.hidden);
    } else if (editorStatusFilter === 'hidden') {
      items = items.filter(i => i.hidden);
    }

    return items;
  };

  const editorItems = getAllEditorItems();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="bg-[#181311] border-2 border-amber-500 rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-[#241A15] border-b border-[#3D2C24] p-3 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500 text-stone-950 font-black">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-600/40">
                  Pitmaster Pocket Admin
                </span>
                <span className="text-xs text-stone-400 hidden sm:inline">
                  Donald’s Live Food Trailer Control Center
                </span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase font-['Bebas_Neue'] tracking-wider leading-none mt-0.5">
                Edit Menu, 86 Items & Trailer Controls
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsPitmasterMode(false)}
            className="p-2 rounded-xl bg-[#2E201B] hover:bg-[#3D2B24] text-stone-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#1C1512] border-b border-[#35261F] px-4 py-2 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('menuEditor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'menuEditor'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-white bg-[#281D18]'
            }`}
          >
            <Pencil className="w-3.5 h-3.5" />
            <span>📋 Menu & Price Editor (Add / Edit / Hide)</span>
          </button>

          <button
            onClick={() => setActiveTab('rush86')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'rush86'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-white bg-[#281D18]'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
            <span>⚡ Fast 86 Rush (Sold Out Toggles)</span>
          </button>

          <button
            onClick={() => setActiveTab('location')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'location'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-white bg-[#281D18]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>📍 Today's Location</span>
          </button>

          <button
            onClick={() => setActiveTab('marquee')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'marquee'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-white bg-[#281D18]'
            }`}
          >
            <SquareIcon className="w-3.5 h-3.5" />
            <span>📢 Top Banner & Square</span>
          </button>
        </div>

        {/* Feedback message banner */}
        {saveMessage && (
          <div className="bg-emerald-600 text-white text-xs sm:text-sm font-bold py-2 px-4 flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* Scrollable Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

          {/* TAB 1: FULL MENU & PRICE EDITOR (ADD / EDIT / REMOVE / HIDE / SOLD OUT) */}
          {activeTab === 'menuEditor' && (
            <div className="space-y-4">
              
              {/* Top Action Bar */}
              <div className="bg-[#201714] border border-[#3A2A22] rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search menu items or specials..."
                    className="w-full bg-[#140F0D] border border-[#3E2D25] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                  <span className="text-stone-400 font-bold text-[11px] shrink-0">Filter:</span>
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'inStock', label: '🟢 In Stock' },
                    { key: 'soldOut', label: '🔴 Sold Out' },
                    { key: 'hidden', label: '🚫 Hidden' }
                  ].map(sf => (
                    <button
                      key={sf.key}
                      onClick={() => setEditorStatusFilter(sf.key)}
                      className={`px-2.5 py-1.5 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                        editorStatusFilter === sf.key
                          ? 'bg-amber-600 text-white'
                          : 'bg-[#150F0D] text-stone-400 hover:text-white border border-[#362720]'
                      }`}
                    >
                      {sf.label}
                    </button>
                  ))}
                </div>

                {/* Big Add Item Button */}
                <button
                  onClick={handleOpenAddForm}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer shadow-md shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Item / Special</span>
                </button>

              </div>

              {/* Category Pills Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {[
                  { key: 'all', label: 'All Categories' },
                  { key: 'specials', label: '★ Daily Specials' },
                  { key: 'dinners', label: 'Dinner Plates' },
                  { key: 'sandwiches', label: 'Sandwiches' },
                  { key: 'meatsOnly', label: 'Meats Only' },
                  { key: 'sides', label: 'Sides' },
                  { key: 'dessertsAndDrinks', label: 'Desserts & Drinks' }
                ].map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => setEditorCategory(cat.key)}
                    className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer whitespace-nowrap border ${
                      editorCategory === cat.key
                        ? 'bg-amber-500 text-stone-950 border-amber-500'
                        : 'bg-[#201714] text-stone-300 hover:text-white border-[#3A2A22]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Item Count Notice */}
              <div className="flex items-center justify-between text-xs text-stone-400 px-1">
                <span>Showing {editorItems.length} menu items</span>
                <span className="italic">Click "Edit" to change prices or names. Toggle "Hide" to remove from site without deleting!</span>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {editorItems.map(item => {
                  const isSpecial = item.isSpecial;
                  const catKey = item.categoryKey;

                  return (
                    <div
                      key={item.id}
                      className={`p-3.5 sm:p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition ${
                        item.hidden
                          ? 'bg-[#18141C] border-purple-900/60 opacity-80'
                          : !item.inStock
                          ? 'bg-[#211413] border-rose-900/60'
                          : 'bg-[#1E1714] border-[#382B24] hover:border-amber-500/40'
                      }`}
                    >
                      {/* Left Info */}
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                            {item.categoryLabel}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-600/30">
                              {item.badge}
                            </span>
                          )}
                          {item.hidden && (
                            <span className="text-[10px] font-black uppercase bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-600/50 flex items-center gap-1">
                              <EyeOff className="w-3 h-3" /> HIDDEN FROM CUSTOMERS
                            </span>
                          )}
                          {!item.hidden && !item.inStock && (
                            <span className="text-[10px] font-black uppercase bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-600/50">
                              🔴 SOLD OUT
                            </span>
                          )}
                          {!item.hidden && item.inStock && (
                            <span className="text-[10px] font-black uppercase bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-600/50">
                              🟢 IN STOCK
                            </span>
                          )}
                        </div>

                        <div className="flex items-baseline gap-2">
                          <h4 className="text-base font-bold text-white">
                            {item.name}
                          </h4>
                          <span className="text-sm font-black text-amber-400 font-mono">
                            {item.price}
                          </span>
                        </div>

                        {item.description && (
                          <p className="text-xs text-stone-400 line-clamp-1 max-w-2xl">
                            {item.description}
                          </p>
                        )}
                        {item.extraOption && (
                          <p className="text-[11px] text-amber-300/80 font-mono">
                            Options: {item.extraOption}
                          </p>
                        )}
                      </div>

                      {/* Right Controls: Status Toggles + Edit + Delete */}
                      <div className="flex items-center flex-wrap gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-800">
                        
                        {/* 1. Toggle Sold Out vs In Stock */}
                        <button
                          onClick={() => {
                            if (isSpecial) {
                              toggleSpecialStock(item.id);
                            } else {
                              toggleItemStock(catKey, item.id);
                            }
                            showNotification(`Toggled stock for "${item.name}"`);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border ${
                            item.inStock
                              ? 'bg-[#152317] hover:bg-emerald-900/60 text-emerald-300 border-emerald-700/60'
                              : 'bg-[#291313] hover:bg-rose-900/60 text-rose-300 border-rose-700/60'
                          }`}
                          title="Click to toggle between In Stock and Sold Out"
                        >
                          <Power className="w-3 h-3" />
                          <span>{item.inStock ? 'Mark Sold Out' : 'Mark In Stock'}</span>
                        </button>

                        {/* 2. Toggle Visible vs Hidden */}
                        <button
                          onClick={() => {
                            if (isSpecial) {
                              toggleSpecialHidden(item.id);
                            } else {
                              toggleItemHidden(catKey, item.id);
                            }
                            showNotification(item.hidden ? `Made "${item.name}" visible` : `Hid "${item.name}" from menu`);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 border ${
                            item.hidden
                              ? 'bg-purple-950 hover:bg-purple-900 text-purple-200 border-purple-600'
                              : 'bg-[#1D1714] hover:bg-stone-800 text-stone-300 border-stone-700'
                          }`}
                          title="Toggle whether this item is completely hidden from customers"
                        >
                          {item.hidden ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                          <span>{item.hidden ? 'Show on Menu' : 'Hide from Menu'}</span>
                        </button>

                        {/* 3. Edit Item Button */}
                        <button
                          onClick={() => handleOpenEditForm(catKey, item.rawItem, isSpecial)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition cursor-pointer flex items-center gap-1 shadow-sm"
                          title="Edit name, price, description"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>

                        {/* 4. Delete Item Button */}
                        <button
                          onClick={() => handleRemove(catKey, item.id, item.name, isSpecial)}
                          className="p-1.5 rounded-lg bg-[#2B1B18] hover:bg-rose-700 text-rose-300 hover:text-white transition cursor-pointer border border-rose-900/50"
                          title="Delete this item completely"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                      </div>

                    </div>
                  );
                })}

                {editorItems.length === 0 && (
                  <div className="bg-[#1C1613] p-8 rounded-2xl border border-stone-800 text-center space-y-2">
                    <p className="text-sm font-bold text-stone-300">No items match your search or filter.</p>
                    <p className="text-xs text-stone-500">Try selecting "All Categories" or click "+ Add New Item / Special" to create one.</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: FAST 86 RUSH MODE (QUICK 1-TAP SOLD OUT TOGGLES) */}
          {activeTab === 'rush86' && (
            <div className="space-y-6">
              
              {/* Cutoff switch */}
              <div className="p-5 rounded-2xl bg-[#221815] border-2 border-amber-600/50 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-400" />
                      Kitchen & Fryer Cutoff Switch
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      Grease Status:{" "}
                      {announcements.fryerOpen ? (
                        <span className="text-emerald-400">HOT & FRYING (OPEN)</span>
                      ) : (
                        <span className="text-rose-400">OFF (30-MIN CUTOFF ACTIVE)</span>
                      )}
                    </h4>
                    <p className="text-xs text-stone-300 mt-1 max-w-xl">
                      Tap to immediately notify customers that the fryer grease is turned off for the evening. Fried wings, pork chops, fries, and seafood will show as unavailable.
                    </p>
                  </div>

                  <button
                    onClick={toggleFryerStatus}
                    className={`px-5 py-3 rounded-xl font-black text-sm tracking-wider uppercase transition shadow-xl cursor-pointer flex items-center gap-2 shrink-0 ${
                      announcements.fryerOpen
                        ? 'bg-rose-600 hover:bg-rose-500 text-white'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
                    }`}
                  >
                    <Power className="w-5 h-5" />
                    <span>{announcements.fryerOpen ? "Turn Grease OFF" : "Turn Grease ON"}</span>
                  </button>
                </div>
              </div>

              {/* 1-Tap 86 Grid */}
              <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22] space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Tap Any Item to Flip Between IN STOCK and SOLD OUT:
                  </h4>
                  <p className="text-xs text-stone-400">
                    Big touch buttons for quick changes when you're busy at the window.
                  </p>
                </div>

                {/* Specials */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-white/10 pb-1">
                    ★ Daily Specials & Cooked-To-Order Seafood
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {specials.filter(s => !s.hidden).map(s => (
                      <button
                        key={s.id}
                        onClick={() => toggleSpecialStock(s.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between gap-2 transition cursor-pointer ${
                          s.inStock
                            ? 'bg-[#291F1A] border-emerald-500/50 hover:border-emerald-400'
                            : 'bg-rose-950/40 border-rose-600 text-stone-400'
                        }`}
                      >
                        <div className="truncate">
                          <div className="text-xs font-bold text-white truncate">{s.title}</div>
                          <div className="text-[10px] text-stone-400">{s.price}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase shrink-0 ${
                          s.inStock ? 'bg-emerald-500 text-stone-950' : 'bg-rose-600 text-white'
                        }`}>
                          {s.inStock ? 'IN STOCK' : 'SOLD OUT'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Regular Menu */}
                {Object.entries(menu).map(([catKey, catData]) => (
                  <div key={catKey}>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 border-b border-white/10 pb-1">
                      {catData.categoryName}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {catData.items.filter(item => !item.hidden).map(item => (
                        <button
                          key={item.id}
                          onClick={() => toggleItemStock(catKey, item.id)}
                          className={`p-3 rounded-xl border text-left flex items-center justify-between gap-2 transition cursor-pointer ${
                            item.inStock
                              ? 'bg-[#291F1A] border-emerald-500/50 hover:border-emerald-400'
                              : 'bg-rose-950/40 border-rose-600 text-stone-400'
                          }`}
                        >
                          <div className="truncate">
                            <div className="text-xs font-bold text-white truncate">{item.name}</div>
                            <div className="text-[10px] text-stone-400">{item.price}</div>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase shrink-0 ${
                            item.inStock ? 'bg-emerald-500 text-stone-950' : 'bg-rose-600 text-white'
                          }`}>
                            {item.inStock ? 'IN STOCK' : 'SOLD OUT'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: LOCATION & SCHEDULE */}
          {activeTab === 'location' && (
            <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22] space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Where are we parked today?
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  1-Tap Location Presets
                </h4>
                <p className="text-xs text-stone-300">
                  Tap any regular food truck stop to update the live location and hours on the website instantly:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => applyPreset(p)}
                    className="bg-[#2D211B] hover:bg-amber-500 hover:text-stone-950 text-amber-200 border border-amber-600/30 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    📍 {p.name}
                  </button>
                ))}
              </div>

              {/* Custom Location Form */}
              <form onSubmit={handleSaveLocation} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Location Name</label>
                  <input
                    type="text"
                    value={locationName}
                    onChange={e => setLocationName(e.target.value)}
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Address / Town</label>
                  <input
                    type="text"
                    value={locationAddress}
                    onChange={e => setLocationAddress(e.target.value)}
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-400 uppercase mb-1">Today's Hours</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={locationHours}
                      onChange={e => setLocationHours(e.target.value)}
                      className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-lg text-xs transition cursor-pointer shrink-0"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: MARQUEE & SQUARE */}
          {activeTab === 'marquee' && (
            <div className="space-y-6">
              
              {/* Marquee Banner */}
              <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22]">
                <div className="mb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Top Screen Banner Message
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Announce Today's Hot Special or Meat Drop
                  </h4>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={marqueeText}
                    onChange={e => setMarqueeText(e.target.value)}
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    placeholder="e.g., Fresh smoked turkey legs coming off the smoker at 2:00 PM!"
                  />
                  <button
                    onClick={handleSaveMarquee}
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-lg text-xs transition cursor-pointer shrink-0"
                  >
                    Update Banner
                  </button>
                </div>
              </div>

              {/* Square POS Link */}
              <div className="p-5 rounded-2xl bg-[#201714] border border-[#3A2A22]">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <SquareIcon className="w-4 h-4 text-emerald-400" />
                      Square POS & Payment Settings
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      Square Accepted at Trailer
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                    Active on Site
                  </span>
                </div>
                
                <p className="text-xs text-stone-300 mb-3">
                  The live site tells customers that Donald's trailer takes <strong>Square</strong> (Tap to Pay, Apple Pay, Google Pay, Cash App, Visa/MC/Amex/Discover chip cards, and Cash).
                </p>

                <form onSubmit={handleSaveSquare} className="space-y-2">
                  <label className="block text-[11px] font-bold text-stone-400 uppercase">
                    Optional: Square Online Store Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={squareUrl}
                      onChange={e => setSquareUrl(e.target.value)}
                      className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                      placeholder="https://tisdalesouthernbbq.square.site (or leave blank to show pay-at-window)"
                    />
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-lg text-xs transition cursor-pointer shrink-0"
                    >
                      Save Square Link
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#14100E] border-t border-[#352822] flex items-center justify-between">
          <button
            onClick={resetToDefaults}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-rose-400 transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All to Initial Defaults</span>
          </button>

          <button
            onClick={() => setIsPitmasterMode(false)}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-lg"
          >
            Done (Back to Live Site)
          </button>
        </div>

      </div>

      {/* POPUP MODAL: ADD / EDIT MENU ITEM */}
      {isItemFormOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/90">
          <div 
            className="bg-[#201714] border-2 border-amber-500 rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#3E2E25] pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Pencil className="w-5 h-5 text-amber-400" />
                <span>{editingItemTarget ? 'Edit Menu Item' : 'Add New Menu Item'}</span>
              </h3>
              <button
                onClick={() => setIsItemFormOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveItemForm} className="space-y-3.5">
              
              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                  Menu Category
                </label>
                <select
                  value={formCategory}
                  onChange={e => setFormCategory(e.target.value)}
                  disabled={Boolean(editingItemTarget && editingItemTarget.isSpecial)}
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="dinners">Dinners & Plates (w/ 2 Sides)</option>
                  <option value="sandwiches">Sandwiches & Handhelds</option>
                  <option value="meatsOnly">Meats by the Pound & Slab</option>
                  <option value="sides">Homestyle Sides (8oz)</option>
                  <option value="dessertsAndDrinks">Desserts & Cold Drinks</option>
                  <option value="specials">★ Daily Window Specials & Catches</option>
                </select>
              </div>

              {/* Item Name */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                  Item Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="e.g., Peach Cobbler Warm Slice or Smoked Beef Ribs"
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Price & Badge */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                    Price *
                  </label>
                  <input
                    type="text"
                    required
                    value={formPrice}
                    onChange={e => setFormPrice(e.target.value)}
                    placeholder="e.g. $16.00 or $3.75"
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                    Badge / Tag (Optional)
                  </label>
                  <input
                    type="text"
                    value={formBadge}
                    onChange={e => setFormBadge(e.target.value)}
                    placeholder="e.g. Fresh Daily, Pitmaster Special"
                    className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                  Description
                </label>
                <textarea
                  rows="2"
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  placeholder="Tell customers what makes this item special..."
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Extra Options */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                  Variants / Sizing (Optional)
                </label>
                <input
                  type="text"
                  value={formExtraOption}
                  onChange={e => setFormExtraOption(e.target.value)}
                  placeholder="e.g. 1pc $16.00 / 2pc $23.00 or Regular $5 / Large $8"
                  className="w-full bg-[#15100E] border border-[#44332A] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Fryer Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="fryerCheckbox"
                  checked={formIsFryer}
                  onChange={e => setFormIsFryer(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-[#15100E] border-[#44332A]"
                />
                <label htmlFor="fryerCheckbox" className="text-xs text-stone-300 cursor-pointer">
                  Is this a deep fryer item? (Will disable automatically if grease is turned off)
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#3E2E25]">
                <button
                  type="button"
                  onClick={() => setIsItemFormOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer shadow-lg"
                >
                  {editingItemTarget ? 'Save Changes' : 'Publish to Live Menu'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
