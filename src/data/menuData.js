// Tisdale's Southern BBQ Official Menu & Specials Data
// Extracted directly from truck TV screen, chalkboards, window displays, and trailer signs

export const INITIAL_SCHEDULE = {
  currentLocation: {
    name: "Stop Button Bar & Arcade",
    address: "Legion Road, Fayetteville, NC",
    hours: "1:30 PM - 6:30 PM",
    date: "Today's Pop-Up",
    notes: "Food trailer parked out front. Order at the window or call ahead!",
    mapQuery: "Stop+Button+Arcade+Legion+Rd+Fayetteville+NC"
  },
  upcomingLocations: [
    { day: "Wednesday", location: "North View Lanes Bowling Alley", address: "Ramsey St, Fayetteville, NC", hours: "5:00 PM - Till Closing" },
    { day: "Thursday", location: "Static Line Brewing Co.", address: "Sanford, NC", hours: "4:30 PM - 8:30 PM" },
    { day: "Friday", location: "Dunn Downtown Block Party", address: "Downtown Dunn, NC", hours: "11:00 AM - 7:00 PM" },
    { day: "Sat & Sun", location: "Smoker Maintenance & Catering Pop-ups", address: "Check Facebook for surprise stops", hours: "Call for Catering" }
  ]
};

export const INITIAL_ANNOUNCEMENTS = {
  fryerOpen: true, // "We turn the grease off 30 minutes before closing"
  fryerCutoffText: "Grease Cutoff: Fryer turns off 30 mins before closing. Fried items are cooked to order!",
  topMarquee: "🔥 Fresh Smoked Brisket & Ribs on the trailer today! Try Donald's famous Honey Bun Cake slices ($3.75).",
  specialAlert: "Today's Smoker & Fryer Special: Fried Pork Chop Dinners & 12pc XL Shrimp Catch!",
  squareAccepted: true,
  squareSiteUrl: "", // Donald can paste his Square Online / Square checkout link if desired
  paymentNotice: "Square POS at Trailer: Tap to Pay, Apple Pay, Google Pay, Cash App, Chip Cards & Cash Accepted"
};

// "Specials in a couple different spots"
export const TRUCK_SPECIALS = [
  {
    id: "spec-porkchop-dinner",
    title: "Fried Pork Chop Dinner",
    subtitle: "Cooked to Order with 2 Sides & Roll",
    price: "$16.00 (1pc) / $23.00 (2pc)",
    singlePrice: 16.00,
    doublePrice: 23.00,
    badge: "Trailer Favorite",
    spot: ["hero-card", "chalkboard", "window"],
    description: "Golden crispy Southern fried pork chops seasoned with Donald's special rub, fried fresh to order. Served with choice of two 8oz sides and warm dinner roll.",
    source: "Window Whiteboard & Trailer Signs",
    category: "Specials",
    inStock: true,
    isFryerItem: true
  },
  {
    id: "spec-brisket-combo-side",
    title: "Brisket Sandwich + Any Side",
    subtitle: "Daily Window Value Deal",
    price: "$15.00",
    singlePrice: 15.00,
    badge: "Window Special",
    spot: ["window", "sandwiches", "marquee"],
    description: "5oz of low & slow hickory-smoked tender beef brisket piled on a bun with your choice of any homestyle 8oz side (Mac & Cheese, Fries, Potato Salad, Collards, etc.).",
    source: "Window Whiteboard",
    category: "Specials",
    inStock: true
  },
  {
    id: "spec-bbq-combo-side",
    title: "BBQ Sandwich + Any Side",
    subtitle: "Daily Window Value Deal",
    price: "$12.00",
    singlePrice: 12.00,
    badge: "Window Special",
    spot: ["window", "sandwiches"],
    description: "Donald's classic Carolina-style smoked pulled pork sandwich paired with your choice of any homestyle 8oz side.",
    source: "Window Whiteboard",
    category: "Specials",
    inStock: true
  },
  {
    id: "spec-kids-fries-dog",
    title: "Kids Fries & Hot Dog Meal",
    subtitle: "Kid Friendly Classic",
    price: "$8.00",
    singlePrice: 8.00,
    badge: "Kids Deal",
    spot: ["window", "chalkboard"],
    description: "Hot dog loaded your way (or plain) served with a generous box of seasoned fries.",
    source: "Window Whiteboard",
    category: "Specials",
    inStock: true
  },
  {
    id: "spec-catfish-dinner",
    title: "6pc Catfish Nuggets Dinner",
    subtitle: "Cornmeal Crusted Southern Catfish",
    price: "$18.00",
    singlePrice: 18.00,
    variants: [
      { name: "6pc Meat Only", price: "$8.00" },
      { name: "6pc w/ Fries or Any Side", price: "$13.00" },
      { name: "6pc Dinner (2 Sides & Roll)", price: "$18.00" },
      { name: "6pc Catfish + 12pc XL Shrimp (Meat Only)", price: "$19.00" }
    ],
    badge: "Seafood Special",
    spot: ["chalkboard", "trailer-paper", "dinners"],
    description: "Crispy farm-raised catfish nuggets tossed in seasoned cornmeal batter and fried hot to order. Sub fries for any side!",
    source: "Chalkboard & Sign",
    category: "Specials",
    inStock: true,
    isFryerItem: true
  },
  {
    id: "spec-xl-shrimps",
    title: "12pc XL Shrimp Plate",
    subtitle: "Jumbo Fried Golden Shrimp",
    price: "$16.00 w/ Side",
    singlePrice: 16.00,
    variants: [
      { name: "12pc XL Shrimps Meat Only", price: "$11.50" },
      { name: "12pc XL Shrimps w/ Fries or Any Side", price: "$16.00" }
    ],
    badge: "Seafood Catch",
    spot: ["chalkboard", "trailer-paper"],
    description: "12 jumbo fried shrimp seasoned to perfection. Enjoy meat only or make it a meal with seasoned fries or mac & cheese.",
    source: "Trailer Paper Sign",
    category: "Specials",
    inStock: true,
    isFryerItem: true
  },
  {
    id: "spec-whiting-combo",
    title: "2pc Whiting Fish + 12 Shrimp Combo",
    subtitle: "Ultimate Seafood Platter",
    price: "$27.00",
    singlePrice: 27.00,
    variants: [
      { name: "2pc Whiting Sandwich", price: "$8.00" },
      { name: "2pc Whiting w/ Fries or Any Side", price: "$13.00" },
      { name: "2pc Whiting Dinner (2 Sides & Roll)", price: "$18.00" },
      { name: "2pc Whiting + 12 Shrimp Combo", price: "$27.00" }
    ],
    badge: "Pitmaster Feast",
    spot: ["chalkboard"],
    description: "Generous pieces of tender whiting fillets fried crisp and served with 12 jumbo seasoned shrimps. A Friday favorite!",
    source: "A-Frame Chalkboard",
    category: "Specials",
    inStock: true,
    isFryerItem: true
  },
  {
    id: "spec-brisket-rib-combo",
    title: "Brisket & Rib (3 Bones) Combo Plate",
    subtitle: "Double Pitmaster Smoke Combo",
    price: "$27.00",
    singlePrice: 27.00,
    badge: "Smoker Combo",
    spot: ["chalkboard", "dinners"],
    description: "Tender 3-bone smoked ribs alongside melt-in-your-mouth beef brisket. Served with 2 sides and a warm dinner roll.",
    source: "A-Frame Chalkboard",
    category: "Specials",
    inStock: true
  },
  {
    id: "spec-pork-brisket-combo",
    title: "Pulled Pork & Brisket Combo Plate",
    subtitle: "The Carolina Classic Duo",
    price: "$29.00",
    singlePrice: 29.00,
    badge: "Crowd Pleaser",
    spot: ["chalkboard", "dinners"],
    description: "Half-pound combination of Donald's slow-smoked pulled pork and beef brisket with 2 sides and a dinner roll.",
    source: "A-Frame Chalkboard",
    category: "Specials",
    inStock: true
  }
];

export const MAIN_MENU = {
  dinners: {
    categoryName: "Dinners & Plates",
    tagline: "All Dinner plates served with 2 sides & a warm dinner roll",
    note: "Meats are wood-smoked daily. Chicken & ribs fall-off-the-bone tender!",
    items: [
      {
        id: "din-ribs",
        name: "BBQ Pork Ribs Plate (3 Bones)",
        price: "$16.00",
        numericPrice: 16.00,
        description: "3 large bones of pit-smoked pork ribs glazed with our signature sweet & tangy sauce. Includes 2 sides & roll.",
        badge: "Most Popular",
        inStock: true
      },
      {
        id: "din-leg-quarter",
        name: "BBQ Chicken Leg Quarter Plate",
        price: "$12.00",
        numericPrice: 12.00,
        description: "Juicy, smoky, dry-rubbed chicken leg quarter smoked low and slow till tender. Includes 2 sides & roll.",
        badge: "Value Favorite",
        inStock: true
      },
      {
        id: "din-turkey-small",
        name: "Smoked Turkey Leg Plate (Small)",
        price: "$14.00",
        numericPrice: 14.00,
        description: "Wood-smoked turkey leg packed with deep hickory flavor. Includes 2 sides & roll.",
        badge: "Smoked Daily",
        inStock: true
      },
      {
        id: "din-turkey-large",
        name: "Large Turkey Leg Plate (XL)",
        price: "$23.00",
        numericPrice: 23.00,
        description: "Massive carnival-sized smoked turkey leg that turns heads. Juicy all the way to the bone with 2 sides & roll.",
        badge: "Giant Portion",
        inStock: true
      },
      {
        id: "din-brisket",
        name: "1/2 LB Beef Brisket Plate",
        price: "$18.00",
        numericPrice: 18.00,
        description: "Half-pound of rich, bark-crusted Texas/Carolina style beef brisket sliced fresh. Includes 2 sides & roll.",
        badge: "Pitmaster Signature",
        inStock: true
      },
      {
        id: "din-pulled-pork",
        name: "BBQ Pulled Pork Plate (1/2 LB)",
        price: "$16.00",
        numericPrice: 16.00,
        description: "Generous half-pound pile of slow-smoked pulled pork with traditional Carolina seasoning. Includes 2 sides & roll.",
        badge: "Carolina Staple",
        inStock: true
      },
      {
        id: "din-3-meats-combo",
        name: "Choose Any 3 Meats Combo w/ 2 Sides",
        price: "$38.00",
        numericPrice: 38.00,
        description: "Ultimate meat lover's feast! Pick any 3 meats of your choice with 2 homestyle sides & roll. (Wings, turkey legs & sandwiches not included).",
        badge: "Feast Platter",
        inStock: true
      },
      {
        id: "din-big-family",
        name: "Tisdale's Big Family Dinner",
        price: "$80.00",
        numericPrice: 80.00,
        description: "Feeds 4-6 hungry folks! Includes 1 lb Brisket, 1 lb Pulled Pork, 1/2 Slab of Ribs, (4) 8oz Sides of your choice, 4 Canned Drinks, and 4 Warm Dinner Rolls.",
        badge: "Feeds 4-6",
        inStock: true
      }
    ]
  },
  sandwiches: {
    categoryName: "Sandwiches & Handhelds",
    tagline: "Served hot on toasted buns with custom toppings",
    note: "Hotdog toppings: Ketchup, mustard, onions, slaw, sauerkraut, chili, jalapeños. Cheeseburgers: Lettuce, tomato, onions, pickles, ketchup, mayo, mustard.",
    items: [
      {
        id: "sand-brisket",
        name: "Beef Brisket Sandwich (5 oz)",
        price: "$11.00",
        numericPrice: 11.00,
        description: "5oz of prime hickory smoked brisket sliced thick on a fresh bakery bun.",
        badge: "Best Seller",
        inStock: true
      },
      {
        id: "sand-pulled-pork",
        name: "BBQ Pulled Pork Sandwich (5 oz)",
        price: "$9.00",
        numericPrice: 9.00,
        extraOption: "With Slaw: $10.00",
        description: "Tender pulled pork piled high. Top it with Donald's homemade coleslaw for the authentic Carolina crunch (+$1.00).",
        badge: "Southern Classic",
        inStock: true
      },
      {
        id: "sand-rib",
        name: "BBQ Rib Sandwich (3 Bones)",
        price: "$9.00",
        numericPrice: 9.00,
        description: "Old-school Southern bone-in rib sandwich slathered in sauce between soft bread.",
        badge: "Old School",
        inStock: true
      },
      {
        id: "sand-leg-quarter",
        name: "Leg Quarter Sandwich",
        price: "$8.00",
        numericPrice: 8.00,
        description: "Tender pulled smoked chicken leg quarter meat on a toasted bun.",
        inStock: true
      },
      {
        id: "sand-cheeseburger",
        name: "Tisdale Cheeseburger",
        price: "$7.50",
        numericPrice: 7.50,
        extraOption: "With Seasoned Fries: $9.00",
        description: "Juicy beef patty grilled to order with melted American cheese, crisp lettuce, tomato, pickles, and sauces.",
        inStock: true
      },
      {
        id: "sand-hotdog",
        name: "Hotdog w/ Homemade Chilli",
        price: "$3.50",
        numericPrice: 3.50,
        extraOption: "2 for $5.50",
        description: "All-meat frank topped with Donald's scratch-made Southern meat chili and choice of slaw, onions, mustard.",
        inStock: true
      },
      {
        id: "sand-sausage-dog",
        name: "Sausage Dog w/ Homemade Chilli",
        price: "$4.00",
        numericPrice: 4.00,
        extraOption: "2 for $7.50",
        description: "Smoked sausage link in a warm bun smothered with homemade chili.",
        inStock: true
      },
      {
        id: "sand-brisket-sliders",
        name: "BBQ Brisket Sliders",
        price: "(1) $4.00 / (2) $7.00",
        numericPrice: 7.00,
        description: "Mini slider buns stuffed with chopped smoked brisket.",
        inStock: true
      },
      {
        id: "sand-pork-sliders",
        name: "Pulled Pork Sliders",
        price: "(1) $3.50 / (2) $6.00",
        numericPrice: 6.00,
        description: "Mini slider buns filled with succulent Carolina pulled pork.",
        inStock: true
      },
      {
        id: "sand-pork-chop",
        name: "Fried Pork Chop Sandwich (Cooked to Order)",
        price: "$7.50",
        numericPrice: 7.50,
        extraOption: "2pc: $14.00",
        description: "Crispy golden fried pork chop served fresh right out of the fryer.",
        badge: "Cooked to Order",
        inStock: true,
        isFryerItem: true
      }
    ]
  },
  meatsOnly: {
    categoryName: "Meats by the Pound & Slab",
    tagline: "Take home pure pit-smoked meats for your table or family",
    note: "Smoked low and slow over hickory wood",
    items: [
      {
        id: "meat-ribs-slab",
        name: "Full Slab BBQ Pork Ribs",
        price: "$31.00",
        numericPrice: 31.00,
        extraOption: "1/2 Slab (6 bones): $17.00",
        description: "A full rack of tender, seasoned smoked ribs with Donald's barbecue glaze.",
        badge: "Whole Rack",
        inStock: true
      },
      {
        id: "meat-brisket-lb",
        name: "Beef Brisket (1 LB)",
        price: "$25.00",
        numericPrice: 25.00,
        extraOption: "1/2 LB: $14.00",
        description: "One full pound of pit-smoked sliced beef brisket.",
        badge: "Butcher Cut",
        inStock: true
      },
      {
        id: "meat-pork-lb",
        name: "BBQ Pulled Pork (1 LB)",
        price: "$18.00",
        numericPrice: 18.00,
        extraOption: "1/2 LB: $10.00",
        description: "One full pound of tender shredded Carolina pulled pork.",
        badge: "Party Favorite",
        inStock: true
      },
      {
        id: "meat-turkey-xl",
        name: "XL Smoked Turkey Leg",
        price: "$16.00",
        numericPrice: 16.00,
        extraOption: "Small Turkey Leg: $9.00",
        description: "Smoked jumbo turkey drumstick, seasoned and slow-cooked to perfection.",
        badge: "Jumbo Drumstick",
        inStock: true
      }
    ]
  },
  sides: {
    categoryName: "Homestyle Sides (8 oz)",
    tagline: "Generous 8oz cups made with Donald's family recipes",
    note: "All sides $5.00 unless upgraded",
    items: [
      {
        id: "side-potato-salad",
        name: "Homemade Potato Salad",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Grandma's recipe with diced potatoes, boiled eggs, mustard, mayo, and relish.",
        badge: "Family Recipe",
        inStock: true
      },
      {
        id: "side-mac-cheese",
        name: "Southern Baked Mac & Cheese",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Creamy, rich baked macaroni loaded with real melted cheddar cheeses.",
        badge: "Customer #1 Pick",
        inStock: true
      },
      {
        id: "side-baked-beans",
        name: "Sweet & Savory Baked Beans",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Slow-simmered brown sugar beans infused with BBQ seasonings.",
        inStock: true
      },
      {
        id: "side-coleslaw",
        name: "Carolina Coleslaw",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Crisp shredded cabbage with our balanced sweet & tangy dressing.",
        inStock: true
      },
      {
        id: "side-collards",
        name: "Country Collard Greens (No Meat)",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Slow-braised tender collard greens simmered in seasoned potlikker (No Meat).",
        badge: "Vegetarian Friendly",
        inStock: true
      },
      {
        id: "side-seasoned-fries",
        name: "Hot Seasoned French Fries",
        price: "$5.00",
        numericPrice: 5.00,
        description: "Crispy crinkle or straight cut fries tossed in Tisdale's secret fry seasoning.",
        inStock: true,
        isFryerItem: true
      },
      {
        id: "side-cheese-fries",
        name: "Melted Cheese Fries",
        price: "$6.75",
        numericPrice: 6.75,
        description: "Seasoned fries smothered in hot creamy melted cheddar cheese.",
        inStock: true,
        isFryerItem: true
      },
      {
        id: "side-chilli-cheese-fries",
        name: "Chilli Cheese Fries",
        price: "$9.00",
        numericPrice: 9.00,
        description: "Large basket of seasoned fries loaded with homemade beef chili and melted cheddar cheese.",
        badge: "Loaded Basket",
        inStock: true,
        isFryerItem: true
      }
    ]
  },
  dessertsAndDrinks: {
    categoryName: "Homemade Desserts & Ice-Cold Drinks",
    tagline: "Sweet finish and thirst quenchers",
    items: [
      {
        id: "des-honey-bun",
        name: "Homemade Honey Bun Cake",
        price: "$3.75 / slice",
        numericPrice: 3.75,
        extraOption: "Whole Cake: $30.00",
        description: "Donald's legendary warm cinnamon swirl cake with rich vanilla honey glaze. Slices pre-packaged fresh in clamshells!",
        badge: "Must Try Dessert ⭐",
        inStock: true
      },
      {
        id: "drk-can-soda",
        name: "Canned Sodas (12 oz)",
        price: "$1.75",
        numericPrice: 1.75,
        description: "Pepsi, Coke, Diet Coke, Mt. Dew, Sprite, Ginger Ale, Brisk Tea, Lemonade.",
        inStock: true
      },
      {
        id: "drk-gatorade",
        name: "Gatorade (20 oz)",
        price: "$2.75",
        numericPrice: 2.75,
        description: "Assorted cold flavors to keep you hydrated.",
        inStock: true
      },
      {
        id: "drk-water",
        name: "Bottled Spring Water",
        price: "$1.75",
        numericPrice: 1.75,
        description: "Ice-cold bottled water.",
        inStock: true
      }
    ]
  }
};
