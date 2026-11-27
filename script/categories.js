/*
  Zenthia category tree. A product can sit in one or more categories
  (see `categories` in products.js). A parent category automatically
  includes everything in its subcategories.
  id = used in the address bar (#/category/<id>), never change it once live.
*/
window.ZENTHIA_CATEGORIES = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'phones-tablets', name: 'Phones and Tablets', parent: 'electronics' },
  { id: 'computers-accessories', name: 'Computers and Accessories', parent: 'electronics' },
  { id: 'audio', name: 'Audio', parent: 'electronics' },
  { id: 'smart-home', name: 'Smart Home', parent: 'electronics' },

  { id: 'fashion', name: 'Fashion' },
  { id: 'mens-fashion', name: "Men's Fashion", parent: 'fashion' },
  { id: 'womens-fashion', name: "Women's Fashion", parent: 'fashion' },
  { id: 'shoes', name: 'Shoes', parent: 'fashion' },
  { id: 'bags-accessories', name: 'Bags and Accessories', parent: 'fashion' },
  { id: 'watches-jewellery', name: 'Watches and Jewellery', parent: 'fashion' },
  { id: 'smart-watches', name: 'Smart Watches', parent: 'watches-jewellery' },

  { id: 'beauty-personal-care', name: 'Beauty and Personal Care' },
  { id: 'skincare', name: 'Skincare', parent: 'beauty-personal-care' },
  { id: 'makeup', name: 'Makeup', parent: 'beauty-personal-care' },
  { id: 'fragrance', name: 'Fragrance', parent: 'beauty-personal-care' },
  { id: 'hair-grooming', name: 'Hair and Grooming', parent: 'beauty-personal-care' },

  { id: 'home-kitchen', name: 'Home and Kitchen' },
  { id: 'furniture', name: 'Furniture', parent: 'home-kitchen' },
  { id: 'lighting', name: 'Lighting', parent: 'home-kitchen' },
  { id: 'drinkware', name: 'Drinkware', parent: 'home-kitchen' },
  { id: 'kitchen-appliances', name: 'Kitchen Appliances', parent: 'home-kitchen' },
  { id: 'cookware', name: 'Cookware', parent: 'home-kitchen' },
  { id: 'home-decor', name: 'Home Decor', parent: 'home-kitchen' },

  { id: 'sports-outdoors', name: 'Sports and Outdoors' },
  { id: 'fitness-equipment', name: 'Fitness Equipment', parent: 'sports-outdoors' },
  { id: 'outdoor-camping', name: 'Outdoor and Camping', parent: 'sports-outdoors' },
  { id: 'team-sports', name: 'Team and Racket Sports', parent: 'sports-outdoors' },

  { id: 'gaming', name: 'Gaming' },
  { id: 'consoles-controllers', name: 'Consoles and Controllers', parent: 'gaming' },
  { id: 'gaming-peripherals', name: 'Gaming Peripherals', parent: 'gaming' },

  { id: 'groceries', name: 'Groceries' },
  { id: 'pantry-staples', name: 'Pantry Staples', parent: 'groceries' },
  { id: 'beverages', name: 'Beverages', parent: 'groceries' },
  { id: 'snacks', name: 'Snacks and Sweets', parent: 'groceries' },

  { id: 'baby-products', name: 'Baby Products' },
  { id: 'baby-feeding', name: 'Feeding', parent: 'baby-products' },
  { id: 'baby-gear', name: 'Baby Gear and Care', parent: 'baby-products' },
  { id: 'baby-toys', name: 'Baby Toys', parent: 'baby-products' },

  { id: 'automotive-accessories', name: 'Automotive Accessories' },
  { id: 'car-electronics', name: 'Car Electronics', parent: 'automotive-accessories' },
  { id: 'car-care', name: 'Car Care', parent: 'automotive-accessories' },
  { id: 'interior-accessories', name: 'Interior Accessories', parent: 'automotive-accessories' }
];
