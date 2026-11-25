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

  { id: 'fashion', name: 'Fashion' },
  { id: 'mens-fashion', name: "Men's Fashion", parent: 'fashion' },
  { id: 'womens-fashion', name: "Women's Fashion", parent: 'fashion' },
  { id: 'shoes', name: 'Shoes', parent: 'fashion' },
  { id: 'bags-accessories', name: 'Bags and Accessories', parent: 'fashion' },
  { id: 'watches-jewellery', name: 'Watches and Jewellery', parent: 'fashion' },
  { id: 'smart-watches', name: 'Smart Watches', parent: 'watches-jewellery' },

  { id: 'beauty-personal-care', name: 'Beauty and Personal Care' },

  { id: 'home-kitchen', name: 'Home and Kitchen' },
  { id: 'furniture', name: 'Furniture', parent: 'home-kitchen' },
  { id: 'lighting', name: 'Lighting', parent: 'home-kitchen' },
  { id: 'drinkware', name: 'Drinkware', parent: 'home-kitchen' },

  { id: 'sports-outdoors', name: 'Sports and Outdoors' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'groceries', name: 'Groceries' },
  { id: 'baby-products', name: 'Baby Products' },
  { id: 'automotive-accessories', name: 'Automotive Accessories' }
];
