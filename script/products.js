/*
  Zenthia product catalogue — the ONE place products live.
  To add a product, add an object here. Homepage, categories, search,
  cart and wishlist all read from this list.

  Fields
    id        unique, stable, lowercase-with-dashes (never change it once used: carts save it)
    name      display name
    categories  list of category ids from categories.js (first = main one)
    label     small caption on flash cards (optional)
    tags      homepage catalogue pills: 'Best Sellers', 'Electronics', 'Home', 'Accessories'
    price     current price in USD
    oldPrice  previous price in USD (optional, shows strike-through)
    rating    0-5, reviews = number of reviews (optional)
    image     path or link
    badge     'Sale' | 'New' (optional)
    flash     true = shows in Flash Sales
    topRank   0 = Top Sellers highlight, 1-3 = ranked list
    catalog   true = shows in the homepage "Discover our products" grid
    brand     brand name (searchable + filterable)
    description  short text shown on the product page and searched
    stock     units available; 0 = out of stock (Availability filter)
    sold      units sold, drives the "Popularity" sort
    featured  higher = earlier in "Featured" sort
    newest    lower = newer ("Newest" sort)
*/
window.ZENTHIA_PRODUCTS = [
  /* Flash sales */
  { id: 'classic-leather-loafers', brand: 'Zenthia', stock: 18, sold: 420, description: 'Handsewn-look leather loafers with a cushioned insole and flexible rubber sole. A smart slip-on shoe for office days and dinners out.', name: 'Classic Leather Loafers', categories: ['shoes', 'mens-fashion'], label: 'Fashion', tags: [], price: 89, oldPrice: 139, rating: 4.8, image: 'images/products/leather-loafers.jpg', flash: true, featured: 16, newest: 10 },
  { id: 'street-runner-sneakers', brand: 'Zenthia', stock: 40, sold: 610, description: 'Breathable mesh street sneakers with a lightweight foam sole, built for long city walks and everyday running.', name: 'Street Runner Sneakers', categories: ['shoes'], label: 'Footwear', tags: [], price: 74, oldPrice: 102, rating: 4.9, image: 'images/products/street-sneakers.jpg', flash: true, featured: 15, newest: 11 },
  { id: 'nova-wireless-headset', brand: 'Nova', stock: 12, sold: 530, description: 'Over-ear wireless headphones with active noise cancelling, deep bass and up to 30 hours of battery life.', name: 'Nova Wireless Headset', categories: ['audio'], label: 'Audio', tags: [], price: 119, oldPrice: 205, rating: 4.7, image: 'images/products/headphones.jpg', flash: true, featured: 14, newest: 12 },
  { id: 'pulse-smart-watch', brand: 'Pulse', stock: 25, sold: 480, description: 'Smart watch with heart-rate and sleep tracking, GPS, water resistance and a bright AMOLED display.', name: 'Pulse Smart Watch', categories: ['smart-watches', 'electronics'], label: 'Wearables', tags: [], price: 128, oldPrice: 185, rating: 4.8, image: 'images/products/smart-watch.jpg', flash: true, featured: 13, newest: 13 },

  /* Top sellers */
  { id: 'velora-tote-bag', brand: 'Velora', stock: 30, sold: 700, description: 'Premium vegan leather tote bag with a roomy interior, laptop sleeve and minimal silhouette.', name: 'Velora Tote Bag', categories: ['bags-accessories'], tags: [], price: 96, rating: 4.9, image: 'images/products/tote-bag.jpg', topRank: 0, featured: 12, newest: 14,
    blurb: 'Premium vegan leather, roomy interior, and a minimal silhouette that moves from work to weekend.' },
  { id: 'hydra-bottle', brand: 'Hydra', stock: 80, sold: 820, description: 'Reusable water bottle that keeps drinks cold for 24 hours and hot for 12. Leak-proof lid.', name: 'Hydra Bottle', categories: ['drinkware'], tags: [], price: 29, rating: 4.8, image: 'images/products/hydra-bottle.jpg', topRank: 1, featured: 11, newest: 15 },
  { id: 'noura-lamp', brand: 'Noura', stock: 0, sold: 390, description: 'Warm-glow table lamp with a dimmable LED bulb and a soft fabric shade for bedrooms and living rooms.', name: 'Noura Lamp', categories: ['lighting'], tags: [], price: 64, rating: 4.8, image: 'images/products/lamp.jpg', topRank: 2, featured: 10, newest: 16 },
  { id: 'aster-chair', brand: 'Aster', stock: 6, sold: 260, description: 'Comfortable upholstered armchair with solid wood legs and a curved backrest for living rooms and reading corners.', name: 'Aster Chair', categories: ['furniture'], tags: [], price: 172, rating: 4.7, image: 'images/products/accent-chair.jpg', topRank: 3, featured: 9, newest: 17 },

  /* Homepage catalogue */
  { id: 'halo-modern-desk-lamp', brand: 'Halo', stock: 34, sold: 640, description: 'Modern LED desk lamp with adjustable arm, three colour temperatures and a USB charging port for your workspace.', name: 'Halo Modern Desk Lamp', categories: ['lighting'], tags: ['Best Sellers', 'Accessories'], price: 48, oldPrice: 76, rating: 4.8, reviews: 124, image: 'images/products/desk-lamp.jpg', badge: 'Sale', catalog: true, featured: 8, newest: 4 },
  { id: 'arc-sculpted-accent-chair', brand: 'Arc', stock: 4, sold: 310, description: 'Sculpted accent chair with a curved boucle seat and slim metal legs. A statement piece for any room.', name: 'Arc Sculpted Accent Chair', categories: ['furniture'], tags: ['Home'], price: 162, rating: 4.7, reviews: 89, image: 'images/products/accent-chair.jpg', badge: 'New', catalog: true, featured: 7, newest: 2 },
  { id: 'drift-premium-street-shoes', brand: 'Drift', stock: 22, sold: 720, description: 'Premium leather street shoes with a cushioned sole and clean minimalist styling. Comfortable from morning to night.', name: 'Drift Premium Street Shoes', categories: ['shoes'], tags: ['Accessories', 'Best Sellers'], price: 68, oldPrice: 118, rating: 4.9, reviews: 203, image: 'images/products/leather-loafers.jpg', badge: 'Sale', catalog: true, featured: 6, newest: 7 },
  { id: 'echo-portable-mini-speaker', brand: 'Echo', stock: 3, sold: 450, description: 'Pocket-sized portable Bluetooth speaker with powerful sound, waterproof body and 12 hours of playtime.', name: 'Echo Portable Mini Speaker', categories: ['audio'], tags: ['Electronics', 'Best Sellers'], price: 58, oldPrice: 92, rating: 4.6, reviews: 76, image: 'images/products/mini-speaker.jpg', badge: 'New', catalog: true, featured: 5, newest: 1 },
  { id: 'hydra-insulated-steel-bottle', brand: 'Hydra', stock: 55, sold: 900, description: 'Double-wall insulated stainless steel bottle for the gym, hikes and the office. Keeps water ice cold all day.', name: 'Hydra Insulated Steel Bottle', categories: ['drinkware', 'sports-outdoors'], tags: ['Home', 'Accessories'], price: 29, oldPrice: 42, rating: 4.8, reviews: 156, image: 'images/products/hydra-bottle.jpg', badge: 'Sale', catalog: true, featured: 4, newest: 8 },
  { id: 'glow-everyday-ritual-kit', brand: 'Glow', stock: 0, sold: 540, description: 'Everyday skincare and cosmetic ritual kit with cleanser, moisturiser and travel-size essentials for glowing skin.', name: 'Glow Everyday Ritual Kit', categories: ['beauty-personal-care'], tags: ['Accessories'], price: 36, oldPrice: 58, rating: 4.7, reviews: 98, image: 'images/products/cosmetic-kit.jpg', catalog: true, featured: 3, newest: 5 },
  { id: 'volt-lightweight-move-sneaker', brand: 'Volt', stock: 28, sold: 880, description: 'Lightweight training sneaker with responsive cushioning and breathable knit upper for gym sessions and runs.', name: 'Volt Lightweight Move Sneaker', categories: ['shoes', 'sports-outdoors'], tags: ['Accessories', 'Best Sellers'], price: 79, oldPrice: 115, rating: 4.9, reviews: 241, image: 'images/products/street-sneakers.jpg', badge: 'Sale', catalog: true, featured: 2, newest: 6 },
  { id: 'carry-all-compact-travel-pouch', brand: 'Carry All', stock: 60, sold: 230, description: 'Compact travel pouch to organise cables, chargers, toiletries and small accessories inside your bag.', name: 'Carry All Compact Travel Pouch', categories: ['bags-accessories'], tags: ['Accessories', 'Electronics'], price: 24, oldPrice: 39, rating: 4.5, reviews: 64, image: 'images/products/travel-pouch.jpg', catalog: true, featured: 1, newest: 3 }
];

  /* ---------- expanded catalogue data ---------- */
  (function buildExpandedCatalogue() {
    const catalogueTemplates = [
      { category: 'phones-tablets', subcategory: 'Phones', brands: ['Aural', 'Nova', 'Pixelon'], names: ['Pro 5G Smartphone', 'Compact 5G Phone', 'Unlimited Data Smartphone', 'Android Performance Phone', 'Smartphone Mini', 'Camera Pro Mobile', 'Edge OLED Phone', 'Essential 5G Phone', 'Power Battery Phone'], keywords: 'smartphone' },
      { category: 'computers-accessories', subcategory: 'Computers', brands: ['Lumina', 'Vertex', 'CoreTech'], names: ['Ultrabook Laptop', 'Performance Notebook', 'Student Laptop', 'Creator Workstation', 'Portable 14-inch PC', 'Gaming Laptop', 'Business Notebook', 'Slim Chromebook', 'Desktop PC'], keywords: 'laptop computer' },
      { category: 'audio', subcategory: 'Headphones', brands: ['Echo', 'Nova', 'Sonic'], names: ['Studio Headphones', 'Noise-Canceling Earbuds', 'Wireless Gaming Headset', 'Portable Bluetooth Speaker', 'Over-Ear Wireless Headphones', 'True Wireless Earbuds', 'Desktop Speaker Set', 'Soundbar', 'Party Bluetooth Speaker'], keywords: 'headphones speaker audio' },
      { category: 'mens-fashion', subcategory: 'Menswear', brands: ['North & Loom', 'Mason', 'Zenthia'], names: ['Oxford Dress Shirt', 'Relaxed Linen Shirt', 'Classic Chino Trousers', 'Tailored Blazer', 'Essential Cotton Hoodie', 'Premium Crewneck Sweater', 'Modern Utility Jacket', 'Slim-Fit Denim Jeans', 'Everyday Polo Shirt'], keywords: 'mens fashion clothing' },
      { category: 'womens-fashion', subcategory: 'Womenswear', brands: ['Velora', 'Asteria', 'Zenthia'], names: ['Wrap Midi Dress', 'Silk-Blend Blouse', 'High-Waist Wide Leg Trousers', 'Classic Trench Coat', 'Everyday Knit Cardigan', 'Cotton Day Dress', 'Tailored Suit Jacket', 'Soft Pleated Skirt', 'Premium Ribbed Top'], keywords: 'womens fashion clothing' },
      { category: 'shoes', subcategory: 'Footwear', brands: ['Drift', 'Volt', 'Stride'], names: ['Retro Court Sneakers', 'Trail Running Shoes', 'Leather Chelsea Boots', 'Lightweight Walking Shoes', 'Canvas Low-Tops', 'Waterproof Hiking Boots', 'Training Cross-Trainers', 'Classic Derby Shoes', 'Comfort Slip-On Shoes'], keywords: 'shoes footwear sneakers' },
      { category: 'bags-accessories', subcategory: 'Bags', brands: ['Velora', 'Carry All', 'Roam'], names: ['Canvas Backpack', 'Leather Crossbody Bag', 'Cabin Carry-On', 'Roller Travel Bag', 'Work Laptop Backpack', 'Mini Shoulder Bag', 'Weekender Duffel', 'Slim Card Wallet', 'Organiser Travel Pouch'], keywords: 'bag backpack luggage' },
      { category: 'watches-jewellery', subcategory: 'Jewellery', brands: ['Luma', 'Aurelia', 'Crown'], names: ['Minimal Steel Watch', 'Classic Leather Watch', 'Sterling Silver Necklace', 'Gold-Tone Bracelet', 'Diamond Accent Earrings', 'Sapphire Pendant', 'Automatic Dress Watch', 'Stackable Silver Ring', 'Chronograph Watch'], keywords: 'watch jewelry' },
      { category: 'beauty-personal-care', subcategory: 'Skincare', brands: ['Glow', 'Natura', 'Serene'], names: ['Vitamin C Face Serum', 'Hydrating Face Cream', 'Gentle Gel Cleanser', 'SPF 50 Sunscreen', 'Clay Detox Mask', 'Revitalising Eye Cream', 'Rose Body Lotion', 'Lip Care Balm', 'Daily Beauty Set'], keywords: 'cosmetics skincare beauty' },
      { category: 'furniture', subcategory: 'Furniture', brands: ['Aster', 'Arc', 'Haven'], names: ['Modular Bookshelf', 'Extendable Dining Table', 'Upholstered Bed Frame', 'Oak Coffee Table', 'Ergonomic Office Chair', 'Storage Sideboard', 'Compact Writing Desk', 'Lounge Armchair', 'Solid Wood Bench'], keywords: 'furniture chair table' },
      { category: 'lighting', subcategory: 'Lighting', brands: ['Halo', 'Noura', 'Lumio'], names: ['Floor Reading Lamp', 'Globe Table Lamp', 'Pendant Ceiling Light', 'LED Task Lamp', 'Rechargeable Bedside Lamp', 'Adjustable Wall Sconce', 'Smart RGB Light Bar', 'Fabric Shade Floor Lamp', 'Minimal Desk Light'], keywords: 'lamp lighting' },
      { category: 'drinkware', subcategory: 'Drinkware', brands: ['Hydra', 'Thermo', 'Cask'], names: ['Vacuum Travel Mug', 'Glass Water Bottle', 'Insulated Coffee Carafe', 'Reusable Water Cup', 'Ceramic Mug Set', 'Collapsible Sports Bottle', 'Stainless Steel Tumbler', 'Juice Infuser Bottle', 'Tea and Coffee Flask'], keywords: 'bottle cup mug drinkware' },
      { category: 'sports-outdoors', subcategory: 'Sporting Goods', brands: ['Volt', 'Peak', 'Terra'], names: ['Yoga Exercise Mat', 'Adjustable Dumbbell Set', 'Camping Tent', 'Hiking Daypack', 'Resistance Bands Kit', 'Cycling Helmet', 'Insulated Hiking Flask', 'Foldable Camping Chair', 'Digital Jump Rope'], keywords: 'sports outdoor fitness' },
      { category: 'gaming', subcategory: 'Gaming', brands: ['Arcade', 'Pulse', 'Nexus'], names: ['Wireless Gaming Controller', 'Mechanical Keyboard', 'Gaming Mouse', 'RGB Headset', 'Gaming Monitor', 'Controller Charging Dock', 'VR Headset', 'Gaming Chair', 'Portable Console'], keywords: 'gaming gaming controller' },
      { category: 'groceries', subcategory: 'Pantry', brands: ['Harvest', 'Daily Table', 'Green Fork'], names: ['Organic Coffee Beans', 'Whole-Grain Breakfast Oats', 'Extra Virgin Olive Oil', 'Natural Peanut Butter', 'Premium Green Tea', 'Dark Chocolate Box', 'Wildflower Honey', 'Mixed Nuts Selection', 'Brown Basmati Rice'], keywords: 'grocery food pantry' },
      { category: 'baby-products', subcategory: 'Baby Essentials', brands: ['Little Sprout', 'Cuddle', 'Milo'], names: ['Soft Cotton Bodysuit Set', 'Baby Carrier', 'Wooden Activity Toy', 'Insulated Food Jar', 'Convertible Baby Seat', 'Waterproof Changing Mat', 'Muslin Swaddle Pack', 'Silicone Feeding Set', 'Baby Monitor'], keywords: 'baby infant child' },
      { category: 'automotive-accessories', subcategory: 'Vehicle Accessories', brands: ['RoadMate', 'Apex', 'Driveline'], names: ['Dash Camera', 'Portable Tyre Inflator', 'Leather Steering Cover', 'Magnetic Phone Mount', 'Car Seat Organiser', 'Emergency Road Kit', 'LED Interior Light Kit', 'All-Weather Floor Mats', 'Jump Starter Pack'], keywords: 'car automotive accessories' }
    ];

    const all = [];
    const categoryImages = {
      'phones-tablets': 'images/products/smart-watch.jpg',
      'computers-accessories': 'images/products/desk-lamp.jpg',
      audio: 'images/products/headphones.jpg',
      'mens-fashion': 'images/products/leather-loafers.jpg',
      'womens-fashion': 'images/products/cosmetic-kit.jpg',
      shoes: 'images/products/street-sneakers.jpg',
      'bags-accessories': 'images/products/tote-bag.jpg',
      'watches-jewellery': 'images/products/smart-watch.jpg',
      'beauty-personal-care': 'images/products/cosmetic-kit.jpg',
      furniture: 'images/products/accent-chair.jpg',
      lighting: 'images/products/desk-lamp.jpg',
      drinkware: 'images/products/hydra-bottle.jpg',
      'sports-outdoors': 'images/products/street-sneakers.jpg',
      gaming: 'images/products/mini-speaker.jpg',
      groceries: 'images/products/hydra-bottle.jpg',
      'baby-products': 'images/products/cosmetic-kit.jpg',
      'automotive-accessories': 'images/products/travel-pouch.jpg'
    };
    let serial = 0;
    for (const template of catalogueTemplates) {
      template.names.forEach((name, index) => {
        serial += 1;
        const brand = template.brands[index % template.brands.length];
        const slugName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const stock = (serial * 7) % 29 === 0 ? 0 : 4 + ((serial * 13) % 78);
        const price = 18 + ((serial * 47) % 332);
        const discounted = serial % 3 === 0;
        const reviews = 35 + ((serial * 89) % 760);
        const lock = serial * 101;
        all.push({
          id: `${slugName}-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${serial}`,
          name: `${brand} ${name}`,
          brand,
          subcategory: template.subcategory,
          categories: [template.category],
          label: template.subcategory,
          tags: serial % 4 === 0 ? ['Best Sellers'] : serial % 5 === 0 ? ['Electronics'] : [],
          description: `A dependable ${name.toLowerCase()} from ${brand}, designed for everyday use with quality materials, practical features and Zenthia delivery support.`,
          price,
          ...(discounted ? { oldPrice: Math.round(price * 1.32) } : {}),
          stock,
          sold: 80 + ((serial * 67) % 1100),
          rating: Number((4.2 + (serial % 8) * 0.1).toFixed(1)),
          reviews,
          seller: { name: `${brand} Official Store`, rating: 4.7 + (serial % 3) * 0.1, verified: true },
          availability: stock > 0 ? 'In stock' : 'Out of stock',
          colors: template.category.includes('fashion') || ['shoes', 'bags-accessories', 'furniture', 'baby-products'].includes(template.category) ? ['Black', 'Navy', 'Grey'] : ['Classic', 'Silver'],
          sizes: ['shoes', 'mens-fashion', 'womens-fashion', 'bags-accessories'].includes(template.category) ? (template.category === 'shoes' ? ['38', '39', '40', '41', '42', '43'] : ['S', 'M', 'L', 'XL']) : [],
          image: categoryImages[template.category] || 'images/products/travel-pouch.jpg',
          images: [categoryImages[template.category] || 'images/products/travel-pouch.jpg'],
          badge: discounted ? 'Sale' : (serial % 7 === 0 ? 'New' : undefined),
          catalog: true,
          featured: 200 - serial,
          newest: (serial % 20) + 1
        });
      });
    }

    window.ZENTHIA_EXPANDED_CATALOGUE = all;
  })();

/* 153 generated products are appended to the existing catalogue. */
window.ZENTHIA_PRODUCTS = window.ZENTHIA_PRODUCTS.concat(window.ZENTHIA_EXPANDED_CATALOGUE || []);

/* Backfill fields for the original curated products so every listing has the same complete shape. */
const subcategoryNames = {
  'phones-tablets': 'Phones', 'computers-accessories': 'Computers', audio: 'Audio',
  'mens-fashion': 'Menswear', 'womens-fashion': 'Womenswear', shoes: 'Footwear',
  'bags-accessories': 'Bags', 'watches-jewellery': 'Watches and Jewellery',
  'smart-watches': 'Smart Watches', 'beauty-personal-care': 'Personal Care',
  furniture: 'Furniture', lighting: 'Lighting', drinkware: 'Drinkware',
  'sports-outdoors': 'Sporting Goods', gaming: 'Gaming', groceries: 'Pantry',
  'baby-products': 'Baby Essentials', 'automotive-accessories': 'Vehicle Accessories'
};
window.ZENTHIA_PRODUCTS.forEach((product, index) => {
  const category = (product.categories || [])[0];
  product.subcategory = product.subcategory || subcategoryNames[category] || 'General';
  product.reviews = product.reviews || 45 + ((index * 73) % 520);
  product.seller = product.seller || { name: `${product.brand || 'Zenthia'} Official Store`, rating: 4.8, verified: true };
  product.availability = product.availability || (product.stock > 0 ? 'In stock' : 'Out of stock');
  product.images = product.images || (product.image ? [product.image] : []);
  product.colors = product.colors || ['Classic', 'Black', 'Navy'];
  product.sizes = product.sizes || (['shoes', 'mens-fashion', 'womens-fashion'].includes(category)
    ? (category === 'shoes' ? ['38', '39', '40', '41', '42', '43'] : ['S', 'M', 'L', 'XL'])
    : []);
});
