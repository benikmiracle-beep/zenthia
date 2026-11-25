document.addEventListener('DOMContentLoaded', () => {
  const iconImages = {
    zap: 'zap-green.svg',
    truck: 'truck.svg',
    store: 'store.svg',
    globe: 'search-navy.svg',
    user: 'user-green.svg',
    'chevron-down': 'chevron-down-white.svg',
    heart: 'heart-slate.svg',
    'shopping-cart': 'shopping-cart-white.svg',
    'grid-2x2': 'layout-grid-green.svg',
    tv: 'tv.svg',
    shirt: 'shirt.svg',
    'shopping-basket': 'shopping-basket.svg',
    laptop: 'laptop.svg',
    armchair: 'armchair.svg',
    sparkles: 'sparkles.svg',
    flame: 'flame-yellow.svg',
    'chevron-left': 'chevron-left-white.svg',
    'chevron-right': 'chevron-right-white.svg',
    'badge-check': 'badge-check-blue.svg',
    wallet: 'wallet-purple.svg',
    'rotate-ccw': 'rotate-ccw-amber.svg',
    star: 'star-amber.svg'
  };

  document.querySelectorAll('i[data-lucide]').forEach((placeholder) => {
    const name = placeholder.dataset.lucide;
    const file = iconImages[name];
    if (!file) return;

    const image = document.createElement('img');
    image.src = `images/${file}`;
    image.alt = '';
    image.className = placeholder.className;
    image.setAttribute('aria-hidden', 'true');
    placeholder.replaceWith(image);
  });

  const heroSlides = [
    {
      image: 'images/zenthia-hero-5-welcome.png',
      alt: 'Zenthia welcome hero image'
    },
    {
      image: 'images/zenthia-hero-1-skincare.png',
      alt: 'Zenthia skincare hero image'
    },
    {
      image: 'images/zenthia-hero-2-kitchen.png',
      alt: 'Zenthia kitchen hero image'
    },
    {
      image: 'images/zenthia-hero-3-tech.png',
      alt: 'Zenthia tech hero image'
    },
    {
      image: 'images/zenthia-hero-4-home%20(1).png',
      alt: 'Zenthia home hero image'
    },
    {
      image: 'images/zenthia-hero-5-fashion.png',
      alt: 'Zenthia fashion hero image'
    }
  ];

  const heroImage = document.querySelector('.hero-inner-img');
  const heroSection = document.querySelector('.hero');
  const prevButton = document.querySelector('.arrow.prev');
  const nextButton = document.querySelector('.arrow.next');

  let activeSlide = 0;

  function renderHeroSlide(index) {
    const slide = heroSlides[index];

    if (!slide || !heroImage) return;

    const heroImageWrap = document.querySelector('.hero-img');
    if (heroImageWrap) {
      heroImageWrap.classList.add('is-changing');
      setTimeout(() => heroImageWrap.classList.remove('is-changing'), 220);
    }

    heroImage.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
    heroImage.style.opacity = '0.3';
    heroImage.style.transform = 'scale(1.04)';

    setTimeout(() => {
      heroImage.src = slide.image;
      heroImage.alt = slide.alt;
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'scale(1)';
    }, 180);

    if (heroSection) {
      heroSection.style.background = 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)';
    }
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      activeSlide = (activeSlide - 1 + heroSlides.length) % heroSlides.length;
      renderHeroSlide(activeSlide);
    });

    nextButton.addEventListener('click', () => {
      activeSlide = (activeSlide + 1) % heroSlides.length;
      renderHeroSlide(activeSlide);
    });
  }

  renderHeroSlide(activeSlide);

  setInterval(() => {
    activeSlide = (activeSlide + 1) % heroSlides.length;
    renderHeroSlide(activeSlide);
  }, 6000);

  const signInOpen = document.getElementById('sign-in-open');
  const signInModal = document.getElementById('sign-in-modal');
  const signInCloseButtons = document.querySelectorAll('[data-sign-in-close]');
  const signInForm = document.querySelector('.sign-in-form');

  function openSignIn() {
    if (!signInModal) return;
    signInModal.classList.add('is-open');
    signInModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sign-in-open');
    document.getElementById('sign-in-email')?.focus();
  }

  function closeSignIn() {
    if (!signInModal) return;
    signInModal.classList.remove('is-open');
    signInModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sign-in-open');
  }

  signInOpen?.addEventListener('click', openSignIn);
  signInCloseButtons.forEach((button) => button.addEventListener('click', closeSignIn));

  signInForm?.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  const createAccountOpen = document.getElementById('create-account-open');
  const createAccountModal = document.getElementById('create-account-modal');
  const createAccountCloseButtons = document.querySelectorAll('[data-create-close]');
  const backToSignIn = document.getElementById('back-to-sign-in');
  const createAccountForm = document.getElementById('create-account-form');

  function openCreateAccount() {
    if (!createAccountModal) return;
    closeSignIn();
    createAccountModal.classList.add('is-open');
    createAccountModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sign-in-open');
    document.getElementById('create-name')?.focus();
  }

  function closeCreateAccount() {
    if (!createAccountModal) return;
    createAccountModal.classList.remove('is-open');
    createAccountModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sign-in-open');
  }

  createAccountOpen?.addEventListener('click', openCreateAccount);
  createAccountCloseButtons.forEach((button) => button.addEventListener('click', closeCreateAccount));

  backToSignIn?.addEventListener('click', () => {
    closeCreateAccount();
    openSignIn();
  });

  createAccountForm?.addEventListener('submit', (event) => {
    event.preventDefault();
  });


  /* ---------- data ---------- */
  const PRODUCTS = window.ZENTHIA_PRODUCTS || [];
  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
  const byName = new Map(PRODUCTS.map((p) => [p.name, p]));

  const currencies = {
    USD: { name: 'US Dollar', symbol: '$', rate: 1, locale: 'en-US' },
    EUR: { name: 'Euro', symbol: '€', rate: 0.92, locale: 'de-DE' },
    GBP: { name: 'British Pound', symbol: '£', rate: 0.79, locale: 'en-GB' },
    NGN: { name: 'Nigerian Naira', symbol: '₦', rate: 1550, locale: 'en-NG' },
    CAD: { name: 'Canadian Dollar', symbol: 'C$', rate: 1.36, locale: 'en-CA' }
  };

  function readList(key) {
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; }
  }

  // Older versions saved whole product objects keyed by name. Convert them to ids.
  function resolveId(entry) {
    if (typeof entry === 'string') return byId.has(entry) ? entry : (byName.get(entry) || {}).id;
    if (!entry) return undefined;
    if (byId.has(entry.id)) return entry.id;
    return (byName.get(entry.name || entry.id) || {}).id;
  }

  let currentCurrency = currencies[localStorage.getItem('zenthia-currency')] ? localStorage.getItem('zenthia-currency') : 'USD';
  let favorites = [...new Set(readList('zenthia-favorites').map(resolveId).filter(Boolean))];
  let cart = [];
  readList('zenthia-cart').forEach((entry) => {
    const id = resolveId(entry);
    if (!id) return;
    const qty = Math.max(1, Number(entry.quantity) || 1);
    const line = cart.find((item) => item.id === id);
    if (line) line.quantity += qty; else cart.push({ id, quantity: qty });
  });

  function save() {
    localStorage.setItem('zenthia-favorites', JSON.stringify(favorites));
    localStorage.setItem('zenthia-cart', JSON.stringify(cart));
  }

  function formatPrice(usd) {
    const currency = currencies[currentCurrency];
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currentCurrency,
      maximumFractionDigits: currentCurrency === 'NGN' ? 0 : 2
    }).format(usd * currency.rate);
  }

  function esc(text) {
    return String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  const cartCount = () => cart.reduce((total, item) => total + item.quantity, 0);
  const plural = (n) => `${n} ${n === 1 ? 'item' : 'items'}`;

  /* ---------- cart + favorites actions ---------- */
  function addToCart(id) {
    if (!byId.has(id) || !inStock(byId.get(id))) return;
    const line = cart.find((item) => item.id === id);
    if (line) line.quantity += 1; else cart.push({ id, quantity: 1 });
    afterChange();
  }

  function changeQty(id, delta) {
    const line = cart.find((item) => item.id === id);
    if (!line) { if (delta > 0) addToCart(id); return; }
    line.quantity += delta;
    if (line.quantity <= 0) cart = cart.filter((item) => item.id !== id);
    afterChange();
  }

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    afterChange();
  }

  function toggleFavorite(id) {
    if (!byId.has(id)) return;
    favorites = favorites.includes(id) ? favorites.filter((fav) => fav !== id) : [...favorites, id];
    afterChange();
  }

  function afterChange() {
    save();
    syncUI();
    if (shopPage && shopPage.classList.contains('is-open')) openShopPage(shopPageType);
  }

  /* ---------- product markup (same classes as the original design) ---------- */
  function controlsHTML(qty) {
    return qty
      ? '<button type="button" class="cart-minus" aria-label="Decrease quantity">−</button><strong class="cart-quantity">' + qty + '</strong><button type="button" class="cart-plus" aria-label="Increase quantity">+</button>'
      : '<button type="button" class="add-cart-button">Add to cart</button>';
  }

  function flashCardHTML(p) {
    const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    return `<article class="product-card sale-card" data-id="${p.id}">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${esc(p.name)}" loading="lazy" decoding="async">
          ${off ? `<span class="tag-badge hot">-${off}%</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-topline"><span>${esc(p.label || (primaryCat(p) || {}).name || '')}</span><button type="button" class="wishlist-button" data-fav="${p.id}" aria-label="Add to wishlist"><img src="images/heart-slate.svg" alt="" class="i"></button></div>
          <h3><a href="${productHref(p.id)}">${esc(p.name)}</a></h3>
          <div class="rating"><img src="images/star-amber.svg" alt="" class="i" aria-hidden="true"> ${p.rating}</div>
          <div class="price-row"><strong>${formatPrice(p.price)}</strong>${p.oldPrice ? `<span>${formatPrice(p.oldPrice)}</span>` : ''}<div class="cart-controls" data-cart-id="${p.id}"></div></div>
        </div>
      </article>`;
  }

  function catalogCardHTML(p) {
    const stars = '★'.repeat(Math.max(0, Math.min(5, Math.round(p.rating))));
    return `<article class="catalog-card" data-id="${p.id}">
        <div class="catalog-image-wrap">
          <img src="${p.image}" alt="${esc(p.name)}" loading="lazy" decoding="async">
          ${p.badge ? `<span class="catalog-badge${p.badge === 'Sale' ? ' sale' : ''}">${esc(p.badge)}</span>` : ''}
          ${inStock(p) ? '' : '<span class="catalog-badge oos">Out of stock</span>'}
          <button type="button" class="catalog-wishlist" data-fav="${p.id}" aria-label="Add ${esc(p.name)} to favorites"><img src="images/heart-slate.svg" alt=""></button>
        </div>
        <div class="catalog-card-info">
          <h3><a href="${productHref(p.id)}">${esc(p.name)}</a></h3>
          <div class="catalog-rating"><span>${stars}</span><small>${p.rating}${p.reviews ? ` (${p.reviews})` : ''}</small></div>
          <div class="catalog-price"><strong>${formatPrice(p.price)}</strong>${p.oldPrice ? `<del>${formatPrice(p.oldPrice)}</del><span class="catalog-off">-${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>` : ''}</div>
          ${inStock(p) ? `<button type="button" class="catalog-add-cart" data-add="${p.id}">Add to Cart</button>` : '<button type="button" class="catalog-add-cart is-out" disabled>Out of stock</button>'}
        </div>
      </article>`;
  }

  function sellersHTML() {
    const top = PRODUCTS.filter((p) => p.topRank !== undefined).sort((a, b) => a.topRank - b.topRank);
    const lead = top.find((p) => p.topRank === 0);
    const rest = top.filter((p) => p.topRank > 0);
    const leadHTML = lead ? `<article class="seller-highlight">
        <div class="seller-copy">
          <span class="eyebrow">Best seller</span>
          <h3>${esc(lead.name)}</h3>
          <p>${esc(lead.blurb || '')}</p>
          <div class="seller-meta"><strong>${formatPrice(lead.price)}</strong><span>${lead.rating} rating</span></div>
          <a href="${productHref(lead.id)}" class="mini-cta">Shop now</a>
        </div>
        <img src="${lead.image}" alt="${esc(lead.name)}" loading="lazy" decoding="async">
      </article>` : '';
    const restHTML = rest.map((p) => `<a class="mini-seller" href="${productHref(p.id)}">
          <span class="rank">${String(p.topRank).padStart(2, '0')}</span>
          <img src="${p.image}" alt="${esc(p.name)}" loading="lazy" decoding="async">
          <div><h4>${esc(p.name)}</h4><p>${formatPrice(p.price)}</p></div>
        </a>`).join('');
    return leadHTML + `<div class="mini-sellers">${restHTML}</div>`;
  }

  /* ---------- categories ---------- */
  const CATS = window.ZENTHIA_CATEGORIES || [];
  const catById = new Map(CATS.map((c) => [c.id, c]));
  const roots = CATS.filter((c) => !c.parent);
  const childrenOf = (id) => CATS.filter((c) => c.parent === id);
  // old bookmarks used names like #/category/Fashion
  const legacyCats = { Electronics: 'electronics', Fashion: 'fashion', Supermarket: 'groceries', Computing: 'computers-accessories', 'Home & Office': 'home-kitchen', Beauty: 'beauty-personal-care' };
  const resolveCat = (key) => (catById.has(key) ? key : legacyCats[key]);
  const catHref = (id) => '#/category/' + id;

  function inCat(product, id) {
    return (product.categories || []).some((cid) => {
      let node = catById.get(cid);
      while (node) { if (node.id === id) return true; node = catById.get(node.parent); }
      return false;
    });
  }
  const countIn = (id) => PRODUCTS.filter((p) => inCat(p, id)).length;
  const primaryCat = (p) => catById.get((p.categories || [])[0]) || { id: 'all', name: 'All products' };
  const rootOf = (id) => { let node = catById.get(id); while (node && node.parent) node = catById.get(node.parent); return node; };
  const catNames = (p) => (p.categories || []).flatMap((id) => { const out = []; let node = catById.get(id); while (node) { out.push(node.name); node = catById.get(node.parent); } return out; }).join(' ');

  const categoryIcons = { electronics: 'tv.svg', fashion: 'shirt.svg', groceries: 'shopping-basket.svg', 'computers-accessories': 'laptop.svg', 'home-kitchen': 'armchair.svg', 'beauty-personal-care': 'sparkles.svg', 'sports-outdoors': 'dumbbell.svg' };
  const iconFor = (id) => categoryIcons[id] || 'layout-grid-green.svg';

  /* ---------- views: home, category, search, flash, all ---------- */
  const heroGrid = document.querySelector('.hero-grid');
  const flashSection = document.querySelector('.flash-sales');
  const topSection = document.querySelector('.top-sellers');
  const popularSection = document.getElementById('popular-categories');
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogFilters = document.getElementById('catalog-filters');
  const catalogSort = document.getElementById('catalog-sort');
  const catalogEyebrow = document.getElementById('catalog-eyebrow');
  const catalogTitle = document.getElementById('catalog-title');
  const catalogLink = document.getElementById('catalog-link');
  const catalogCount = document.getElementById('catalog-count');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const homePillsHTML = catalogFilters ? catalogFilters.innerHTML : '';

  const EMPTY_FILTERS = () => ({ cats: [], brands: [], min: null, max: null, rating: 0, stock: false });
  const BRANDS = [...new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const inStock = (p) => p.stock === undefined || p.stock > 0;

  let activePill = 'All';
  let route = { type: 'home', arg: '', f: EMPTY_FILTERS(), sort: '' };
  let lastBrowseHash = ''; // where "Back to results" goes from a product page

  const safeDecode = (text) => { try { return decodeURIComponent(text); } catch (e) { return text; } };
  const productHref = (id) => '#/product/' + id;
  const BROWSE_TYPES = ['search', 'all', 'flash', 'category'];
  const SORT_LABELS = { relevance: 'Relevance', featured: 'Featured', 'price-low': 'Price: Low to High', 'price-high': 'Price: High to Low', newest: 'Newest', popular: 'Popularity' };
  const sortKeysFor = (r) => (r.type === 'search' && r.arg ? ['relevance'] : ['featured']).concat(['price-low', 'price-high', 'newest', 'popular']);
  const defaultSort = (r) => sortKeysFor(r)[0];
  const activeSort = () => (sortKeysFor(route).includes(route.sort) ? route.sort : defaultSort(route));

  // The whole view lives in the address bar, so refresh, back and shared links keep the query, filters and sort.
  function routeHash(r) {
    let hash = '#/' + r.type;
    if (r.arg && (r.type === 'search' || r.type === 'category' || r.type === 'product')) hash += '/' + encodeURIComponent(r.arg);
    else if (r.type === 'search') hash += '/';
    const qs = new URLSearchParams();
    const f = r.f || EMPTY_FILTERS();
    f.cats.forEach((id) => qs.append('cat', id));
    f.brands.forEach((b) => qs.append('brand', b));
    if (f.min != null) qs.set('min', String(f.min));
    if (f.max != null) qs.set('max', String(f.max));
    if (f.rating) qs.set('rating', String(f.rating));
    if (f.stock) qs.set('stock', '1');
    if (r.sort && r.sort !== defaultSort(r)) qs.set('sort', r.sort);
    const query = qs.toString();
    return query ? hash + '?' + query : hash;
  }

  function parseFilters(params) {
    const f = EMPTY_FILTERS();
    f.cats = params.getAll('cat').filter((id) => catById.has(id));
    f.brands = params.getAll('brand').map((b) => BRANDS.find((known) => known.toLowerCase() === b.toLowerCase())).filter(Boolean);
    const num = (key) => { const v = parseFloat(params.get(key)); return Number.isFinite(v) && v >= 0 ? v : null; };
    f.min = num('min');
    f.max = num('max');
    if (f.min != null && f.max != null && f.min > f.max) [f.min, f.max] = [f.max, f.min];
    const rating = parseFloat(params.get('rating'));
    f.rating = rating > 0 && rating <= 5 ? rating : 0;
    f.stock = params.get('stock') === '1';
    return f;
  }

  function parseRoute() {
    const raw = location.hash.replace(/^#\/?/, '');
    const cut = raw.indexOf('?');
    const path = cut >= 0 ? raw.slice(0, cut) : raw;
    const params = new URLSearchParams(cut >= 0 ? raw.slice(cut + 1) : '');
    const f = parseFilters(params);
    const sort = params.get('sort') || '';
    if (!path) return { type: 'home', arg: '', f: EMPTY_FILTERS(), sort: '' };
    const parts = path.split('/').map(safeDecode);
    const type = parts[0];
    if (type === 'category') {
      const id = resolveCat(parts[1]);
      f.cats = [];
      return id ? { type, arg: id, f, sort } : { type: 'notfound', what: 'category', arg: parts[1] || '', f, sort: '' };
    }
    if (type === 'product') {
      return byId.has(parts[1]) ? { type, arg: parts[1], f: EMPTY_FILTERS(), sort: '' } : { type: 'notfound', what: 'product', arg: parts[1] || '', f: EMPTY_FILTERS(), sort: '' };
    }
    if (type === 'search' || type === 'flash' || type === 'all') {
      // older links used /in/<category> for the category pills
      const facetAt = type === 'search' ? 2 : 1;
      if (parts[facetAt] === 'in' && catById.has(parts[facetAt + 1]) && !f.cats.includes(parts[facetAt + 1])) f.cats.push(parts[facetAt + 1]);
      return { type, arg: type === 'search' ? (parts[1] || '') : '', f, sort };
    }
    return { type: 'home', arg: '', f: EMPTY_FILTERS(), sort: '' };
  }

  /* ---------- search engine ----------
     Matches name, brand, category, subcategory, tags and description. Every typed word must match somewhere,
     partial words work, case/accents/apostrophes are ignored, and each field has a weight for "Relevance". */
  const norm = (text) => String(text || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’`]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const tokenize = (query) => norm(query).split(' ').filter(Boolean);
  // "shoes" should find "shoe" and "men's" -> "mens" -> "men"
  const variants = (token) => (token.length > 3 && token.endsWith('s') ? [token, token.slice(0, -1)] : [token]);
  const WEIGHTS = { name: [0, 40, 70, 100], brand: [0, 30, 55, 80], sub: [0, 20, 40, 50], cat: [0, 15, 30, 35], tags: [0, 10, 20, 25], desc: [0, 5, 12, 15] };

  const INDEX = new Map(PRODUCTS.map((p) => {
    const own = (p.categories || []).map((id) => catById.get(id)).filter(Boolean);
    const ancestors = [];
    own.forEach((c) => { let node = catById.get(c.parent); while (node) { ancestors.push(node.name); node = catById.get(node.parent); } });
    return [p.id, {
      name: norm(p.name),
      brand: norm(p.brand),
      sub: norm(own.map((c) => c.name).join(' ')),
      cat: norm(ancestors.join(' ')),
      tags: norm([p.label, ...(p.tags || [])].join(' ')),
      desc: norm([p.description, p.blurb].join(' '))
    }];
  }));

  // 3 = starts the field, 2 = starts a word in it, 1 = inside a word (only for 4+ letters), 0 = no match
  function matchLevel(text, token) {
    if (!text) return 0;
    if (text.startsWith(token)) return 3;
    if (text.includes(' ' + token)) return 2;
    if (token.length >= 4 && text.includes(token)) return 1;
    return 0;
  }
  // best match of a typed word (or its singular) in a field; the shortened singular must start a word
  function bestLevel(text, token) {
    return Math.max(...variants(token).map((v) => { const level = matchLevel(text, v); return v === token || level >= 2 ? level : 0; }));
  }

  function scoreProduct(p, tokens, phrase) {
    const idx = INDEX.get(p.id);
    let total = 0;
    for (const token of tokens) {
      let best = 0;
      for (const field in WEIGHTS) {
        best = Math.max(best, WEIGHTS[field][bestLevel(idx[field], token)]);
      }
      if (!best) return 0;
      total += best;
    }
    if (idx.name === phrase) total += 200;
    else if (idx.name.includes(phrase)) total += 60;
    return total;
  }

  // best match first; ties fall back to the store's own "featured" order
  function searchProducts(query) {
    const tokens = tokenize(query);
    if (!tokens.length) return PRODUCTS.slice().sort((a, b) => (b.featured || 0) - (a.featured || 0));
    const phrase = tokens.join(' ');
    return PRODUCTS.map((p) => ({ p, score: scoreProduct(p, tokens, phrase) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || (b.p.featured || 0) - (a.p.featured || 0))
      .map((x) => x.p);
  }

  function textMatches(text, tokens) {
    const t = norm(text);
    let level = 3;
    for (const token of tokens) {
      const best = bestLevel(t, token);
      if (!best) return 0;
      level = Math.min(level, best);
    }
    return level;
  }

  function suggest(query) {
    const tokens = tokenize(query);
    if (!tokens.length) return null;
    const products = searchProducts(query);
    const cats = CATS.map((c) => ({ c, level: textMatches(c.name, tokens), n: countIn(c.id) }))
      .filter((x) => x.level && x.n)
      .sort((a, b) => b.level - a.level || b.n - a.n)
      .slice(0, 3);
    const brands = BRANDS.map((name) => ({ name, level: textMatches(name, tokens), n: PRODUCTS.filter((p) => p.brand === name).length }))
      .filter((x) => x.level)
      .sort((a, b) => b.level - a.level || b.n - a.n)
      .slice(0, 2);
    return { tokens, products, cats, brands };
  }

  function highlight(text, tokens) {
    const words = [...new Set(tokens.flatMap(variants))].filter(Boolean).sort((a, b) => b.length - a.length);
    if (!words.length) return esc(text);
    const re = new RegExp('(' + words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
    return String(text).split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join('');
  }

  function baseList() {
    if (route.type === 'category') return PRODUCTS.filter((p) => inCat(p, route.arg));
    if (route.type === 'search') return searchProducts(route.arg);
    if (route.type === 'flash') return PRODUCTS.filter((p) => p.flash);
    if (route.type === 'all') return PRODUCTS.slice();
    if (route.type === 'notfound' || route.type === 'product') return [];
    const list = PRODUCTS.filter((p) => p.catalog);
    return activePill === 'All' ? list : list.filter((p) => (p.tags || []).includes(activePill));
  }

  function sortList(list) {
    const mode = activeSort();
    const sorted = list.slice(); // sort is stable, so ties keep their relevance order
    if (mode === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (mode === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (mode === 'newest') sorted.sort((a, b) => (a.newest || 99) - (b.newest || 99));
    else if (mode === 'popular') sorted.sort((a, b) => (b.sold || 0) - (a.sold || 0) || (b.reviews || 0) - (a.reviews || 0) || (b.rating || 0) - (a.rating || 0));
    else if (mode === 'featured') sorted.sort((a, b) => (b.featured || 0) - (a.featured || 0));
    return sorted;
  }

  /* ---------- filters ---------- */
  // `skip` leaves one filter out, so each filter's counts show what picking it would give
  function applyFilters(list, f, skip) {
    return list.filter((p) => {
      if (skip !== 'cats' && f.cats.length && !f.cats.some((id) => inCat(p, id))) return false;
      if (skip !== 'brands' && f.brands.length && !f.brands.includes(p.brand)) return false;
      if (skip !== 'price') {
        if (f.min != null && p.price < f.min) return false;
        if (f.max != null && p.price > f.max) return false;
      }
      if (skip !== 'rating' && f.rating && (p.rating || 0) < f.rating) return false;
      if (skip !== 'stock' && f.stock && !inStock(p)) return false;
      return true;
    });
  }

  const filterCount = (f, includeCats) => (includeCats ? f.cats.length : 0) + f.brands.length + (f.min != null || f.max != null ? 1 : 0) + (f.rating ? 1 : 0) + (f.stock ? 1 : 0);
  const showsFilters = () => BROWSE_TYPES.includes(route.type);
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  const filterPanel = document.getElementById('filter-panel');
  const filterBackdrop = document.getElementById('filter-backdrop');
  const filterToggle = document.getElementById('filter-toggle');
  const filterToggleCount = document.getElementById('filter-toggle-count');
  const activeFilters = document.getElementById('active-filters');
  const catalogLayout = document.getElementById('catalog-layout');
  const catalogSection = document.getElementById('product-catalog');
  const productView = document.getElementById('product-view');

  if (filterPanel) {
    filterPanel.tabIndex = -1;
    filterPanel.innerHTML = `<div class="fp-head"><h3>Filters</h3><button type="button" class="fp-clear" data-fp-clear hidden>Clear all</button><button type="button" class="fp-close" data-fp-close aria-label="Close filters"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
      <div class="fp-body">
        <section class="f-sec" data-sec="cats"></section>
        <section class="f-sec" data-sec="brands"></section>
        <section class="f-sec" data-sec="price"></section>
        <section class="f-sec" data-sec="rating"></section>
        <section class="f-sec" data-sec="stock"></section>
      </div>
      <div class="fp-foot"><button type="button" class="fp-show" data-fp-close>Show results</button></div>`;
  }
  const sec = (name) => filterPanel.querySelector(`[data-sec="${name}"]`);

  const checkRow = (key, label, count, checked, depth) => `<label class="f-opt${count || checked ? '' : ' is-zero'}" style="--d:${depth || 0}"><input type="checkbox" data-f="${key}" data-fkey="${esc(key)}"${checked ? ' checked' : ''}${!count && !checked ? ' disabled' : ''}><span class="f-text">${esc(label)}</span><span class="f-count">${count}</span></label>`;

  const toDisplayPrice = (usd) => {
    if (usd == null) return '';
    const rate = currencies[currentCurrency].rate;
    return String(currentCurrency === 'NGN' ? Math.round(usd * rate) : +(usd * rate).toFixed(2));
  };
  const toUsd = (value) => {
    const n = parseFloat(value);
    if (!Number.isFinite(n) || n < 0) return null;
    return Math.round((n / currencies[currentCurrency].rate) * 1e4) / 1e4;
  };

  let keepPrice = false; // set while a price box is the one being edited, so it is not rebuilt under the cursor
  function renderFilters(base) {
    if (!filterPanel) return;
    const f = route.f;
    const focused = document.activeElement && filterPanel.contains(document.activeElement) ? document.activeElement : null;
    const focusKey = focused && focused.dataset.fkey;
    const typingPrice = focused && focused.matches('[data-price]');

    // category / subcategory (not on a category page, which has its own subcategory pills)
    const catSec = sec('cats');
    catSec.hidden = route.type === 'category';
    if (!catSec.hidden) {
      const pool = applyFilters(base, f, 'cats');
      let rows = '';
      const walk = (c, depth) => {
        const n = pool.filter((p) => inCat(p, c.id)).length;
        const on = f.cats.includes(c.id);
        if (n || on) rows += checkRow('cat:' + c.id, c.name, n, on, depth);
        childrenOf(c.id).forEach((k) => walk(k, depth + 1));
      };
      roots.forEach((r) => walk(r, 0));
      catSec.innerHTML = rows ? `<h4>Category</h4><div class="f-list">${rows}</div>` : '';
    }

    const brandSec = sec('brands');
    const brandPool = applyFilters(base, f, 'brands');
    const brandsHere = BRANDS.filter((b) => base.some((p) => p.brand === b) || f.brands.includes(b));
    brandSec.hidden = brandsHere.length < 1;
    brandSec.innerHTML = brandsHere.length ? `<h4>Brand</h4><div class="f-list">${brandsHere.map((b) => checkRow('brand:' + b, b, brandPool.filter((p) => p.brand === b).length, f.brands.includes(b))).join('')}</div>` : '';

    if (!typingPrice && !keepPrice) {
      const symbol = currencies[currentCurrency].symbol;
      sec('price').innerHTML = `<h4>Price <small>(${esc(currentCurrency)})</small></h4>
        <form class="f-price" novalidate>
          <label><span class="sr-only">Minimum price</span><i>${esc(symbol)}</i><input type="number" inputmode="decimal" min="0" step="any" placeholder="Min" data-price="min" data-fkey="price-min" value="${toDisplayPrice(f.min)}"></label>
          <span class="f-dash">–</span>
          <label><span class="sr-only">Maximum price</span><i>${esc(symbol)}</i><input type="number" inputmode="decimal" min="0" step="any" placeholder="Max" data-price="max" data-fkey="price-max" value="${toDisplayPrice(f.max)}"></label>
          <button type="submit" class="f-go" data-fkey="price-go">Go</button>
        </form>`;
    }

    const ratingPool = applyFilters(base, f, 'rating');
    const ratingRow = (value, label) => `<label class="f-opt"><input type="radio" name="f-rating" data-f="rating:${value}" data-fkey="rating-${value}"${(f.rating || 0) === value ? ' checked' : ''}><span class="f-text">${label}</span><span class="f-count">${value ? ratingPool.filter((p) => (p.rating || 0) >= value).length : ratingPool.length}</span></label>`;
    sec('rating').innerHTML = `<h4>Customer rating</h4><div class="f-list">${ratingRow(0, 'Any rating')}${ratingRow(4.5, '<span class="f-stars">★★★★★</span> 4.5 &amp; up')}${ratingRow(4, '<span class="f-stars">★★★★</span><span class="f-stars-off">★</span> 4 &amp; up')}${ratingRow(3, '<span class="f-stars">★★★</span><span class="f-stars-off">★★</span> 3 &amp; up')}</div>`;

    const stockPool = applyFilters(base, f, 'stock');
    sec('stock').innerHTML = `<h4>Availability</h4><div class="f-list">${checkRow('stock', 'In stock only', stockPool.filter(inStock).length, f.stock)}</div>`;

    filterPanel.querySelector('[data-fp-clear]').hidden = !filterCount(f, true);
    if (focusKey) {
      const again = filterPanel.querySelector(`[data-fkey="${CSS.escape(focusKey)}"]`);
      if (again && !again.disabled) again.focus({ preventScroll: true });
    }
  }

  function renderChips() {
    if (!activeFilters) return;
    const f = route.f;
    const chip = (key, label) => `<button type="button" class="chip" data-chip="${esc(key)}">${label}<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg><span class="sr-only"> remove filter</span></button>`;
    const chips = [];
    if (route.type === 'search' && route.arg) chips.push(chip('q', `Search: “${esc(route.arg)}”`));
    f.cats.forEach((id) => chips.push(chip('cat:' + id, esc(catById.get(id).name))));
    f.brands.forEach((b) => chips.push(chip('brand:' + b, esc(b))));
    if (f.min != null || f.max != null) {
      const label = f.min != null && f.max != null ? `${formatPrice(f.min)} – ${formatPrice(f.max)}` : f.min != null ? `${formatPrice(f.min)} and up` : `Up to ${formatPrice(f.max)}`;
      chips.push(chip('price', label));
    }
    if (f.rating) chips.push(chip('rating', `${f.rating}★ &amp; up`));
    if (f.stock) chips.push(chip('stock', 'In stock'));
    activeFilters.hidden = !chips.length;
    activeFilters.innerHTML = chips.join('') + (filterCount(f, true) > 1 || (filterCount(f, true) && route.type === 'search' && route.arg) ? '<button type="button" class="chip-clear" data-fp-clear>Clear all</button>' : '');
  }

  // Filters/sort update the address bar in place (no extra back-button steps) and redraw.
  function commit() {
    const hash = routeHash(route);
    if (location.hash !== hash) history.replaceState(null, '', hash);
    if (BROWSE_TYPES.includes(route.type)) lastBrowseHash = hash;
    renderCatalog();
  }

  function setFilter(patch) {
    route.f = Object.assign({}, route.f, patch);
    commit();
  }

  function applyPriceInputs(final) {
    const minEl = sec('price').querySelector('[data-price="min"]');
    const maxEl = sec('price').querySelector('[data-price="max"]');
    if (!minEl || !maxEl) return;
    let min = toUsd(minEl.value);
    let max = toUsd(maxEl.value);
    if (final && min != null && max != null && min > max) { // typed the wrong way round: swap, and show it
      [min, max] = [max, min];
      minEl.value = toDisplayPrice(min);
      maxEl.value = toDisplayPrice(max);
    }
    if (min === route.f.min && max === route.f.max) return;
    keepPrice = true;
    try { setFilter({ min, max }); } finally { keepPrice = false; }
  }

  let priceTimer;
  filterPanel?.addEventListener('input', (event) => {
    if (!event.target.matches('[data-price]')) return;
    clearTimeout(priceTimer);
    priceTimer = setTimeout(() => applyPriceInputs(false), 450);
  });
  filterPanel?.addEventListener('change', (event) => {
    const input = event.target;
    if (input.matches('[data-price]')) { clearTimeout(priceTimer); applyPriceInputs(false); return; }
    const key = input.dataset.f;
    if (!key) return;
    const f = route.f;
    const toggle = (list, value) => (list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
    if (key.startsWith('cat:')) setFilter({ cats: toggle(f.cats, key.slice(4)) });
    else if (key.startsWith('brand:')) setFilter({ brands: toggle(f.brands, key.slice(6)) });
    else if (key.startsWith('rating:')) setFilter({ rating: parseFloat(key.slice(7)) || 0 });
    else if (key === 'stock') setFilter({ stock: input.checked });
  });
  // leaving the price boxes altogether with min above max: swap them
  filterPanel?.addEventListener('focusout', (event) => {
    if (!event.target.matches('[data-price]')) return;
    if (event.relatedTarget && event.relatedTarget.closest('.f-price')) return;
    clearTimeout(priceTimer);
    applyPriceInputs(true);
  });
  filterPanel?.addEventListener('submit', (event) => {
    event.preventDefault();
    clearTimeout(priceTimer);
    applyPriceInputs(true);
  });

  function clearFilters() {
    clearTimeout(priceTimer);
    route.f = EMPTY_FILTERS();
    if (sec('price')) sec('price').innerHTML = '';
    commit();
  }

  function openFilters() {
    if (!filterPanel || !mobileQuery.matches) return;
    filterPanel.classList.add('is-open');
    filterBackdrop.hidden = false;
    document.body.classList.add('filters-open');
    filterToggle?.setAttribute('aria-expanded', 'true');
    filterPanel.focus({ preventScroll: true });
  }
  function closeFilters() {
    if (!filterPanel || !filterPanel.classList.contains('is-open')) return;
    filterPanel.classList.remove('is-open');
    filterBackdrop.hidden = true;
    document.body.classList.remove('filters-open');
    filterToggle?.setAttribute('aria-expanded', 'false');
    filterToggle?.focus({ preventScroll: true });
  }
  filterToggle?.addEventListener('click', openFilters);
  filterBackdrop?.addEventListener('click', closeFilters);
  mobileQuery.addEventListener?.('change', () => { if (!mobileQuery.matches) closeFilters(); });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-fp-close]')) { closeFilters(); return; }
    if (event.target.closest('[data-fp-clear]')) { clearFilters(); return; }
    const chip = event.target.closest('[data-chip]');
    if (!chip) return;
    const key = chip.dataset.chip;
    const f = route.f;
    if (key === 'q') { go(routeHash({ type: 'all', arg: '', f: Object.assign({}, f), sort: '' })); return; }
    if (key.startsWith('cat:')) setFilter({ cats: f.cats.filter((x) => x !== key.slice(4)) });
    else if (key.startsWith('brand:')) setFilter({ brands: f.brands.filter((x) => x !== key.slice(6)) });
    else if (key === 'price') { sec('price').innerHTML = ''; setFilter({ min: null, max: null }); }
    else if (key === 'rating') setFilter({ rating: 0 });
    else if (key === 'stock') setFilter({ stock: false });
  });

  // Category pages keep their subcategory pills; every other results page uses the filter panel.
  function pillsHTML() {
    if (route.type !== 'category') return '';
    const pill = (href, label, count, active) => `<a class="catalog-filter${active ? ' is-active' : ''}" href="${href}"${active ? ' aria-current="page"' : ''}>${esc(label)} <span class="filter-count">${count}</span></a>`;
    const cat = catById.get(route.arg);
    if (!cat) return '';
    let group = cat;
    let kids = childrenOf(cat.id).filter((k) => countIn(k.id) > 0);
    if (!kids.length && cat.parent) {
      group = catById.get(cat.parent);
      kids = childrenOf(group.id).filter((k) => countIn(k.id) > 0 || k.id === cat.id);
    }
    if (!kids.length) return '';
    return pill(catHref(group.id), 'All ' + group.name, countIn(group.id), cat.id === group.id) + kids.map((k) => pill(catHref(k.id), k.name, countIn(k.id), k.id === cat.id)).join('');
  }

  function syncSortOptions() {
    if (!catalogSort) return;
    const keys = sortKeysFor(route);
    if (catalogSort.dataset.keys !== keys.join()) {
      catalogSort.innerHTML = keys.map((k) => `<option value="${k}">${SORT_LABELS[k]}</option>`).join('');
      catalogSort.dataset.keys = keys.join();
    }
    catalogSort.value = activeSort();
  }

  function renderCatalog() {
    if (!catalogGrid) return;
    if (route.type === 'product') { renderProduct(); return; }
    const browsing = route.type !== 'home';
    const filtering = showsFilters();
    const base = baseList();
    const filtered = filtering ? applyFilters(base, route.f) : base;
    const list = sortList(filtered);
    const cat = route.type === 'category' ? catById.get(route.arg) : null;
    syncSortOptions();

    if (browsing) {
      let eyebrow = 'Zenthia';
      let title = 'All products';
      if (cat) {
        const trail = [];
        let node = catById.get(cat.parent);
        while (node) { trail.unshift(`<a href="${catHref(node.id)}">${esc(node.name)}</a>`); node = catById.get(node.parent); }
        eyebrow = trail.length ? trail.join(' / ') : 'Category';
        title = esc(cat.name);
      }
      if (route.type === 'notfound') { eyebrow = route.what === 'product' ? 'Product' : 'Category'; title = 'Not found'; }
      if (route.type === 'search') { eyebrow = 'Search results'; title = route.arg ? `“${esc(route.arg)}”` : 'All products'; }
      if (route.type === 'flash') { eyebrow = 'Deals ending soon'; title = 'Flash Sales'; }
      catalogEyebrow.innerHTML = eyebrow;
      catalogTitle.innerHTML = title;
      catalogLink.textContent = 'Back to home';
      catalogLink.setAttribute('href', '#');
      catalogCount.hidden = false;
      const total = list.length === base.length ? '' : ` of ${base.length}`;
      catalogCount.textContent = route.type === 'search' && route.arg
        ? `${list.length}${total} ${list.length === 1 ? 'result' : 'results'} for “${route.arg}”`
        : `${list.length}${total} ${list.length === 1 ? 'item' : 'items'}`;
      catalogCount.setAttribute('aria-live', 'polite');
      const pills = pillsHTML();
      catalogFilters.innerHTML = pills;
      catalogFilters.hidden = !pills;
    } else {
      catalogEyebrow.textContent = 'Explore the collection';
      catalogTitle.textContent = 'Discover our products';
      catalogLink.textContent = 'View all';
      catalogLink.setAttribute('href', '#/all');
      catalogCount.hidden = true;
      catalogFilters.innerHTML = homePillsHTML;
      catalogFilters.hidden = false;
      catalogFilters.querySelectorAll('.catalog-filter').forEach((pill) => pill.classList.toggle('is-active', pill.dataset.category === activePill));
    }

    // filter panel, chips and the mobile "Filters" button
    if (filterPanel) {
      filterPanel.hidden = !filtering;
      catalogLayout.classList.toggle('has-filters', filtering);
      if (filterToggle) filterToggle.hidden = !filtering;
      if (filtering) {
        renderFilters(base);
        filterPanel.querySelector('.fp-show').textContent = list.length ? `Show ${list.length} ${list.length === 1 ? 'result' : 'results'}` : 'No results';
        const n = filterCount(route.f, true);
        if (filterToggleCount) { filterToggleCount.hidden = !n; filterToggleCount.textContent = n; }
      } else closeFilters();
      if (filtering) renderChips(); else { activeFilters.hidden = true; activeFilters.innerHTML = ''; }
    }

    if (!list.length) {
      let message = 'No products here yet.';
      let extra = '';
      const filtersHide = filtering && base.length && filterCount(route.f, true);
      if (cat) {
        message = `No products in ${esc(cat.name)} yet.`;
        if (cat.parent) extra = `<a href="${catHref(cat.parent)}">Back to ${esc(catById.get(cat.parent).name)}</a>`;
      }
      if (route.type === 'notfound') message = route.what === 'product' ? 'We couldn’t find that product.' : 'We couldn’t find that category.';
      if (route.type === 'search') {
        message = `No products match “${esc(route.arg)}”`;
        const tops = roots.filter((r) => countIn(r.id) > 0).slice(0, 4).map((r) => `<a class="empty-chip" href="${catHref(r.id)}">${esc(r.name)}</a>`).join('');
        extra = `<p class="empty-tip">Check the spelling, try a shorter or more general word, or search by brand or category.</p><div class="empty-chips">${tops}</div>`;
      }
      if (filtersHide) {
        message = 'No products match your filters';
        extra = '<p class="empty-tip">Try removing a filter or widening the price range.</p><button type="button" class="empty-btn" data-fp-clear>Clear all filters</button>';
      }
      catalogGrid.innerHTML = `<div class="catalog-empty"><h3>${message}</h3>${extra}<a href="#/all">Browse all products</a></div>`;
    } else {
      catalogGrid.innerHTML = list.map(catalogCardHTML).join('');
    }
    syncUI();
  }

  /* ---------- product page ---------- */
  const starsFor = (rating) => '★'.repeat(Math.max(0, Math.min(5, Math.round(rating || 0)))) + '<span class="pv-star-off">' + '★'.repeat(5 - Math.max(0, Math.min(5, Math.round(rating || 0)))) + '</span>';

  function renderProduct() {
    const p = byId.get(route.arg);
    if (!p || !productView) return;
    const trail = [];
    let node = primaryCat(p).id !== 'all' ? catById.get(primaryCat(p).id) : null;
    while (node) { trail.unshift(`<a href="${catHref(node.id)}">${esc(node.name)}</a>`); node = catById.get(node.parent); }
    const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    const out = !inStock(p);
    const low = !out && p.stock !== undefined && p.stock <= 5;
    const cats = (p.categories || []).map((id) => catById.get(id)).filter(Boolean).map((c) => `<a href="${catHref(c.id)}">${esc(c.name)}</a>`).join(', ');
    const mine = new Set((p.categories || []).map((id) => (rootOf(id) || {}).id));
    const shared = (o) => (o.categories || []).filter((id) => (p.categories || []).includes(id)).length;
    const related = PRODUCTS.filter((o) => o.id !== p.id && (o.categories || []).some((id) => mine.has((rootOf(id) || {}).id)))
      .sort((a, b) => shared(b) - shared(a) || (b.featured || 0) - (a.featured || 0))
      .slice(0, 4);
    document.title = `${p.name} – Zenthia`;
    productView.innerHTML = `
      <nav class="pv-crumbs" aria-label="Breadcrumb">${lastBrowseHash ? `<a class="pv-back" href="${esc(lastBrowseHash)}">← Back to results</a>` : ''}<span><a href="#">Home</a>${trail.length ? ' / ' + trail.join(' / ') : ''} / <b>${esc(p.name)}</b></span></nav>
      <div class="pv-grid">
        <div class="pv-media"><img src="${p.image}" alt="${esc(p.name)}" decoding="async">${p.badge ? `<span class="catalog-badge${p.badge === 'Sale' ? ' sale' : ''}">${esc(p.badge)}</span>` : ''}</div>
        <div class="pv-info">
          ${p.brand ? `<a class="pv-brand" href="${routeHash({ type: 'search', arg: p.brand, f: EMPTY_FILTERS(), sort: '' })}">${esc(p.brand)}</a>` : ''}
          <h1>${esc(p.name)}</h1>
          <div class="pv-rating"><span class="pv-stars" aria-hidden="true">${starsFor(p.rating)}</span><span>${p.rating}${p.reviews ? ` · ${p.reviews} reviews` : ''}</span></div>
          <div class="pv-price"><strong>${formatPrice(p.price)}</strong>${p.oldPrice ? `<del>${formatPrice(p.oldPrice)}</del><span class="catalog-off">-${off}%</span>` : ''}</div>
          <div class="pv-stock ${out ? 'out' : low ? 'low' : 'in'}">${out ? 'Out of stock' : low ? `Only ${p.stock} left in stock` : 'In stock'}</div>
          ${p.description || p.blurb ? `<p class="pv-desc">${esc(p.description || p.blurb)}</p>` : ''}
          <dl class="pv-meta">${p.brand ? `<div><dt>Brand</dt><dd>${esc(p.brand)}</dd></div>` : ''}<div><dt>Category</dt><dd>${cats}</dd></div></dl>
          <div class="pv-actions">
            ${out ? '<button type="button" class="catalog-add-cart is-out" disabled>Out of stock</button>' : `<button type="button" class="catalog-add-cart pv-add" data-add="${p.id}">Add to Cart</button>`}
            <button type="button" class="pv-fav" data-fav="${p.id}" aria-label="Save ${esc(p.name)} to favorites"><img src="images/heart-slate.svg" alt=""><span>Save</span></button>
          </div>
        </div>
      </div>
      ${related.length ? `<h2 class="pv-related-title">You may also like</h2><div class="catalog-grid pv-related">${related.map(catalogCardHTML).join('')}</div>` : ''}`;
    syncUI();
  }

  function renderCategoryTiles() {
    const box = document.getElementById('category-tiles');
    if (!box) return;
    const cats = roots.map((c) => ({ c, count: countIn(c.id) })).filter((x) => x.count);
    box.innerHTML = cats.map(({ c, count }, i) => `<a class="category-tile" href="${catHref(c.id)}">
        <span class="ic ${['b', 'p', 'g', 'o'][i % 4]}"><img src="images/${iconFor(c.id)}" alt="" class="i"></span>
        <div><h3>${esc(c.name)}</h3><p>${plural(count)}</p></div>
      </a>`).join('');
  }

  function renderHomeSections() {
    renderCategoryTiles();
    const flashGrid = document.getElementById('flash-grid');
    const sellers = document.getElementById('seller-layout');
    if (flashGrid) flashGrid.innerHTML = PRODUCTS.filter((p) => p.flash).sort((a, b) => b.featured - a.featured).map(flashCardHTML).join('');
    if (sellers) sellers.innerHTML = sellersHTML();
  }

  /* ---------- category bar + "All Categories" menu ---------- */
  const navEl = document.querySelector('.nav');
  const navLinks = document.getElementById('nav-links');
  const catMenu = document.getElementById('cat-menu');

  function renderNav() {
    if (!navLinks) return;
    navLinks.innerHTML = '<button type="button" class="nav-all" id="nav-all" aria-expanded="false" aria-controls="cat-menu"><img src="images/layout-grid-green.svg" class="i" alt="" aria-hidden="true">All Categories</button>'
      + roots.filter((r) => countIn(r.id) > 0).map((r) => `<a href="${catHref(r.id)}" data-cat="${r.id}"><img src="images/${iconFor(r.id)}" class="i" alt="" aria-hidden="true">${esc(r.name)}</a>`).join('')
      + '<a href="#/flash" class="flash" data-route="flash"><img src="images/flame-yellow.svg" class="i" alt="" aria-hidden="true">Flash Sales</a>';
  }

  function menuTree(id, depth) {
    const node = catById.get(id);
    const n = countIn(id);
    let html = `<a class="${depth ? 'cat-sub d' + depth : 'cat-group-title'}${n ? '' : ' is-empty'}" href="${catHref(id)}" data-cat-link="${id}">${esc(node.name)}<span>${n || 'Soon'}</span></a>`;
    childrenOf(id).forEach((kid) => { html += menuTree(kid.id, depth + 1); });
    return html;
  }

  function renderMenu() {
    if (!catMenu) return;
    catMenu.innerHTML = `<div class="cat-menu-grid">${roots.map((r) => `<div class="cat-group">${menuTree(r.id, 0)}</div>`).join('')}</div>`;
  }

  function setMenu(open) {
    if (!catMenu) return;
    catMenu.hidden = !open;
    const button = document.getElementById('nav-all');
    if (button) button.setAttribute('aria-expanded', String(open));
    updateNavActive();
  }

  function updateNavActive() {
    const menuOpen = catMenu && !catMenu.hidden;
    const root = route.type === 'category' ? rootOf(route.arg) : null;
    document.querySelectorAll('.nav a[data-cat]').forEach((link) => link.classList.toggle('active', !!root && root.id === link.dataset.cat));
    document.querySelectorAll('.nav a.flash').forEach((link) => link.classList.toggle('active', route.type === 'flash'));
    document.getElementById('nav-all')?.classList.toggle('active', menuOpen || route.type === 'home' || route.type === 'all');
    document.querySelectorAll('[data-cat-link]').forEach((link) => link.classList.toggle('is-current', route.type === 'category' && link.dataset.catLink === route.arg));
  }

  navEl?.addEventListener('click', (event) => {
    if (event.target.closest('.nav-all')) { setMenu(catMenu.hidden); return; }
    if (event.target.closest('#cat-menu a')) setMenu(false);
  });
  document.addEventListener('click', (event) => {
    if (catMenu && !catMenu.hidden && !event.target.closest('.nav')) setMenu(false);
  });

  /* ---------- search box: suggestions, clear, Enter, icon ---------- */
  const searchClear = document.getElementById('search-clear');
  const suggestBox = document.getElementById('search-suggest');
  let suggestItems = [];
  let suggestActive = -1;

  const go = (hash) => { if (location.hash === hash) applyRoute(); else location.hash = hash; };
  const searchHash = (query) => (query ? routeHash({ type: 'search', arg: query, f: EMPTY_FILTERS(), sort: '' }) : '#/all');
  const cleanQuery = () => searchInput.value.replace(/\s+/g, ' ').trim();

  function closeSuggest() {
    if (!suggestBox) return;
    suggestBox.hidden = true;
    suggestBox.innerHTML = '';
    suggestItems = [];
    suggestActive = -1;
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.removeAttribute('aria-activedescendant');
  }

  function setActive(index) {
    suggestActive = index;
    suggestBox.querySelectorAll('.sg-item').forEach((el, i) => {
      el.classList.toggle('is-active', i === index);
      el.setAttribute('aria-selected', String(i === index));
    });
    const el = suggestBox.querySelector('.sg-item.is-active');
    if (el) { searchInput.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); }
    else searchInput.removeAttribute('aria-activedescendant');
  }

  function renderSuggest() {
    if (!suggestBox) return;
    const query = cleanQuery();
    const result = suggest(query);
    if (!result) { closeSuggest(); return; }
    const { tokens, products, cats, brands } = result;
    suggestItems = [];
    let n = 0;
    const row = (cls, href, inner) => { suggestItems.push(href); return `<a class="sg-item ${cls}" id="sg-${n}" role="option" aria-selected="false" href="${esc(href)}" data-sg="${n++}">${inner}</a>`; };
    let html = '';
    if (cats.length) html += '<div class="sg-group" role="presentation">Categories</div>' + cats.map(({ c, n: count }) => row('sg-cat', catHref(c.id), `<span class="sg-ic">${'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg>'}</span><span class="sg-main"><span class="sg-name">${highlight(c.name, tokens)}</span></span><span class="sg-side">${plural(count)}</span>`)).join('');
    if (brands.length) html += '<div class="sg-group" role="presentation">Brands</div>' + brands.map((b) => row('sg-brand', searchHash(b.name), `<span class="sg-ic"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg></span><span class="sg-main"><span class="sg-name">${highlight(b.name, tokens)}</span></span><span class="sg-side">${plural(b.n)}</span>`)).join('');
    if (products.length) html += '<div class="sg-group" role="presentation">Products</div>' + products.slice(0, 5).map((p) => row('sg-product', productHref(p.id), `<img class="sg-thumb" src="${p.image}" alt="" loading="lazy" decoding="async"><span class="sg-main"><span class="sg-name">${highlight(p.name, tokens)}</span><span class="sg-sub">${p.brand ? highlight(p.brand, tokens) + ' · ' : ''}${esc(primaryCat(p).name)}</span></span><span class="sg-side sg-price">${formatPrice(p.price)}</span>`)).join('');
    if (products.length) html += row('sg-all', searchHash(query), `<span class="sg-main">See all ${products.length} ${products.length === 1 ? 'result' : 'results'} for “${esc(query)}”</span><span class="sg-side">↵</span>`);
    if (!html) html = `<div class="sg-empty" role="presentation"><strong>No matches for “${esc(query)}”</strong><span>Check the spelling or try a shorter word.</span></div>`;
    suggestBox.innerHTML = html;
    suggestBox.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
    suggestActive = -1;
  }

  function syncClear() { if (searchClear) searchClear.hidden = !searchInput.value; }

  searchInput?.addEventListener('input', () => { syncClear(); renderSuggest(); });
  searchInput?.addEventListener('focus', () => { if (searchInput.value.trim()) renderSuggest(); });
  searchInput?.addEventListener('keydown', (event) => {
    const open = suggestBox && !suggestBox.hidden && suggestItems.length;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (!open) { if (event.key === 'ArrowDown' && searchInput.value.trim()) { renderSuggest(); event.preventDefault(); } return; }
      event.preventDefault();
      const last = suggestItems.length - 1;
      setActive(event.key === 'ArrowDown' ? (suggestActive >= last ? -1 : suggestActive + 1) : (suggestActive <= -1 ? last : suggestActive - 1));
    } else if (event.key === 'Enter') {
      if (open && suggestActive >= 0) {
        event.preventDefault();
        const href = suggestItems[suggestActive];
        closeSuggest();
        go(href);
      }
    } else if (event.key === 'Escape') {
      if (suggestBox && !suggestBox.hidden) { closeSuggest(); event.stopPropagation(); }
      else if (searchInput.value) { searchInput.value = ''; syncClear(); }
    }
  });

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    closeSuggest();
    const query = cleanQuery();
    searchInput.value = query;
    syncClear();
    go(searchHash(query));
    if (mobileQuery.matches) searchInput.blur(); // put the phone keyboard away
  });

  searchClear?.addEventListener('click', () => {
    searchInput.value = '';
    syncClear();
    closeSuggest();
    searchInput.focus();
  });

  // clicking a suggestion
  suggestBox?.addEventListener('mousedown', (event) => event.preventDefault()); // keep the caret in the box
  suggestBox?.addEventListener('click', (event) => {
    const item = event.target.closest('.sg-item');
    if (!item) return;
    event.preventDefault();
    const href = suggestItems[Number(item.dataset.sg)];
    closeSuggest();
    if (mobileQuery.matches) searchInput.blur();
    go(href);
  });
  suggestBox?.addEventListener('mousemove', (event) => {
    const item = event.target.closest('.sg-item');
    if (item && Number(item.dataset.sg) !== suggestActive) setActive(Number(item.dataset.sg));
  });
  searchForm?.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !searchForm.contains(event.relatedTarget)) closeSuggest();
  });
  document.addEventListener('pointerdown', (event) => { if (!event.target.closest('#search-form')) closeSuggest(); });

  function applyRoute() {
    route = parseRoute();
    const browsing = route.type !== 'home';
    const isProduct = route.type === 'product';
    [heroGrid, popularSection, flashSection, topSection].forEach((section) => { if (section) section.hidden = browsing; });
    if (catalogSection) catalogSection.hidden = isProduct;
    if (productView) { productView.hidden = !isProduct; if (!isProduct) productView.innerHTML = ''; }
    setMenu(false);
    closeSuggest();
    closeFilters();
    if (route.type === 'search') searchInput.value = route.arg;
    else if (!isProduct) searchInput.value = '';
    syncClear();
    if (BROWSE_TYPES.includes(route.type)) lastBrowseHash = location.hash || routeHash(route);
    else if (route.type === 'home') lastBrowseHash = '';
    if (filterPanel) { const price = sec('price'); if (price) price.innerHTML = ''; }
    document.title = route.type === 'search' && route.arg ? `“${route.arg}” – Search – Zenthia` : 'Zenthia – Online Store';
    renderCatalog();
    if (browsing) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', applyRoute);

  // home page tag pills are buttons; category pills are links
  catalogFilters?.addEventListener('click', (event) => {
    const pill = event.target.closest('button.catalog-filter');
    if (!pill) return;
    activePill = pill.dataset.category;
    renderCatalog();
  });

  catalogSort?.addEventListener('change', () => {
    route.sort = catalogSort.value;
    if (route.type !== 'home') commit(); else renderCatalog();
  });

  /* ---------- keep every card, badge and counter in sync ---------- */
  function updateBadgeCounts() {
    const wishBadge = document.querySelector('.wish .badge');
    const cartBadge = document.querySelector('.cart .n');
    if (wishBadge) wishBadge.textContent = favorites.length;
    if (cartBadge) cartBadge.textContent = cartCount();
  }

  function syncUI() {
    document.querySelectorAll('[data-fav]').forEach((button) => {
      const on = favorites.includes(button.dataset.fav);
      button.classList.toggle('is-favorite', on);
      const image = button.querySelector('img');
      if (image) image.setAttribute('src', on ? 'images/heart-saved.svg' : 'images/heart-slate.svg');
      if (button.classList.contains('wishlist-button')) button.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
    });

    document.querySelectorAll('.cart-controls[data-cart-id]').forEach((box) => {
      const line = cart.find((item) => item.id === box.dataset.cartId);
      box.innerHTML = controlsHTML(line ? line.quantity : 0);
    });

    document.querySelectorAll('.catalog-add-cart').forEach((button) => {
      const inCart = cart.some((item) => item.id === button.dataset.add);
      button.textContent = inCart ? 'Added ✓' : 'Add to Cart';
      button.classList.toggle('is-added', inCart);
    });

    updateBadgeCounts();
  }

  function updateCurrencyLabels() {
    const currency = currencies[currentCurrency];
    document.querySelectorAll('[data-utility="currency"]').forEach((button) => {
      button.innerHTML = `<img src="images/globe.svg" class="i" alt="">${currentCurrency} / ${currency.symbol}`;
    });
    const freeDelivery = document.querySelector('.topbar .left span:last-child');
    if (freeDelivery) freeDelivery.textContent = `Free delivery on orders over ${formatPrice(60)}`;
  }

  function setCurrency(code) {
    if (!currencies[code]) return;
    currentCurrency = code;
    localStorage.setItem('zenthia-currency', code);
    updateCurrencyLabels();
    renderHomeSections();
    renderCatalog();
    if (shopPage && shopPage.classList.contains('is-open')) openShopPage(shopPageType);
  }

  /* ---------- cart / favorites page (unchanged look; the cart redesign is a later phase) ---------- */
  const utilityModal = document.getElementById('utility-modal');
  const utilityTitle = document.getElementById('utility-title');
  const utilityContent = document.getElementById('utility-content');
  const utilityIcon = document.getElementById('utility-icon');
  const shopPage = document.getElementById('shop-page');
  const shopPageTitle = document.getElementById('shop-page-title');
  const shopPageLabel = document.getElementById('shop-page-label');
  const shopPageCount = document.getElementById('shop-page-count');
  const shopPageItems = document.getElementById('shop-page-items');
  let shopPageType = 'favorites';

  function openShopPage(type) {
    if (!shopPage) return;
    shopPageType = type;
    const isCart = type === 'cart';
    const items = isCart
      ? cart.map((line) => ({ product: byId.get(line.id), quantity: line.quantity })).filter((entry) => entry.product)
      : favorites.map((id) => ({ product: byId.get(id), quantity: 1 })).filter((entry) => entry.product);
    shopPageTitle.textContent = isCart ? 'Shopping Cart' : 'My Favorites';
    shopPageLabel.textContent = isCart ? 'Zenthia checkout' : 'Zenthia saved items';
    shopPageCount.textContent = plural(isCart ? cartCount() : items.length);

    if (!items.length) {
      shopPageItems.innerHTML = `<div class="shop-page-empty"><img src="images/${isCart ? 'shopping-cart-navy.svg' : 'heart-saved.svg'}" alt=""><h2>${isCart ? 'Your cart is empty' : 'No favorites yet'}</h2><p>${isCart ? 'Add products from the store to begin.' : 'Tap the heart on any product to save it.'}</p></div>`;
    } else {
      shopPageItems.innerHTML = items.map(({ product, quantity }) => `
        <article class="shop-page-item">
          <img src="${product.image}" alt="${esc(product.name)}">
          <div class="shop-page-item-info"><h3>${esc(product.name)}</h3><strong>${formatPrice(product.price * quantity)}</strong></div>
          ${isCart
            ? `<div class="shop-cart-controls"><button type="button" class="cart-minus" data-cart-minus="${product.id}" aria-label="Decrease quantity">−</button><strong class="cart-quantity">${quantity}</strong><button type="button" class="cart-plus" data-cart-plus="${product.id}" aria-label="Increase quantity">+</button></div><button type="button" class="shop-item-remove" data-cart-remove="${product.id}">Remove</button>`
            : `<button type="button" class="shop-item-cart" data-add-cart="${product.id}">${cart.some((line) => line.id === product.id) ? 'Added ✓' : 'Add to cart'}</button>`}
        </article>`).join('');
    }

    shopPage.classList.add('is-open');
    shopPage.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sign-in-open');
  }

  function closeShopPage() {
    if (!shopPage) return;
    shopPage.classList.remove('is-open');
    shopPage.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sign-in-open');
  }

  const utilityPages = {
    track: { title: 'Track your package', icon: 'images/package-search.svg', content: () => '<p>Enter your Zenthia tracking number to check delivery progress.</p><form class="utility-form"><input type="text" placeholder="Tracking number" required><button type="submit">Track Package</button></form>' },
    sell: { title: 'Sell on Zenthia', icon: 'images/store.svg', content: () => '<p>Grow your business and reach customers across Zenthia.</p><button type="button" class="utility-primary" data-soon="Seller sign-ups are not open yet. They will open together with customer accounts.">Start selling</button>' },
    currency: { title: 'Language & currency', icon: 'images/globe.svg', content: () => '<div class="utility-options">' + Object.entries(currencies).map(([code, currency]) => `<button type="button" data-currency="${code}">${currency.name} <strong>${code} (${currency.symbol})</strong></button>`).join('') + '</div>' },
    favorites: { title: 'My favorites', icon: 'images/heart-saved.svg', content: () => `<p>${favorites.length} saved ${favorites.length === 1 ? 'item' : 'items'}.</p><button type="button" class="utility-primary" data-open-shop="favorites">View favorites</button>` },
    cart: { title: 'Shopping cart', icon: 'images/shopping-cart-navy.svg', content: () => `<p>${cart.length ? `${plural(cartCount())} in your cart.` : 'Your cart is empty.'}</p><button type="button" class="utility-primary" data-open-shop="cart">View cart</button>` }
  };

  function openUtility(type) {
    const page = utilityPages[type];
    if (!page || !utilityModal) return;
    utilityTitle.textContent = page.title;
    utilityIcon.innerHTML = `<img src="${page.icon}" alt="">`;
    utilityContent.innerHTML = page.content();
    utilityModal.classList.add('is-open');
    utilityModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sign-in-open');
  }

  function closeUtility() {
    if (!utilityModal) return;
    utilityModal.classList.remove('is-open');
    utilityModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sign-in-open');
  }

  document.querySelectorAll('[data-utility]').forEach((button) => {
    button.addEventListener('click', () => openUtility(button.dataset.utility));
  });
  document.querySelectorAll('[data-utility-close]').forEach((button) => {
    button.addEventListener('click', closeUtility);
  });
  document.getElementById('shop-page-back')?.addEventListener('click', closeShopPage);

  /* ---------- one click handler for every product button ---------- */
  document.addEventListener('click', (event) => {
    const target = event.target;

    const currencyButton = target.closest('[data-currency]');
    if (currencyButton) { setCurrency(currencyButton.dataset.currency); closeUtility(); return; }

    const openShopButton = target.closest('[data-open-shop]');
    if (openShopButton) { closeUtility(); openShopPage(openShopButton.dataset.openShop); return; }

    const favButton = target.closest('[data-fav]');
    if (favButton) { toggleFavorite(favButton.dataset.fav); return; }

    const catalogAdd = target.closest('.catalog-add-cart');
    if (catalogAdd) { addToCart(catalogAdd.dataset.add); return; }

    const controls = target.closest('.cart-controls[data-cart-id]');
    if (controls) {
      const id = controls.dataset.cartId;
      if (target.closest('.add-cart-button')) addToCart(id);
      else if (target.closest('.cart-plus')) changeQty(id, 1);
      else if (target.closest('.cart-minus')) changeQty(id, -1);
      return;
    }

    const remove = target.closest('[data-cart-remove]');
    if (remove) { removeFromCart(remove.dataset.cartRemove); return; }
    const plus = target.closest('[data-cart-plus]');
    if (plus) { changeQty(plus.dataset.cartPlus, 1); return; }
    const minus = target.closest('[data-cart-minus]');
    if (minus) { changeQty(minus.dataset.cartMinus, -1); return; }
    const addFromFav = target.closest('[data-add-cart]');
    if (addFromFav) { addToCart(addFromFav.dataset.addCart); return; }

    const card = target.closest('.catalog-card[data-id], .product-card[data-id]');
    if (card && !target.closest('a, button, input, select, label')) location.hash = productHref(card.dataset.id);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSignIn();
      closeCreateAccount();
      closeUtility();
      closeShopPage();
      closeFilters();
      setMenu(false);
    }
  });

  /* ---------- broken product images fall back to a neutral placeholder ---------- */
  const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#eef2f7"/><path d="M130 170h140l10 130H120z" fill="#cbd5e1"/><path d="M165 170v-15a35 35 0 0 1 70 0v15" fill="none" stroke="#cbd5e1" stroke-width="14"/></svg>');
  document.addEventListener('error', (event) => {
    const img = event.target;
    if (img.tagName !== 'IMG' || img.dataset.fallback || !img.closest('.product-image-wrap, .catalog-image-wrap, .mini-seller, .seller-highlight, .shop-page-item, .pv-media, .sg-item')) return;
    img.dataset.fallback = '1';
    img.src = PLACEHOLDER;
  }, true);

  /* ---------- features that need accounts/orders say so instead of doing nothing ---------- */
  function notLive(message) {
    utilityContent.innerHTML = `<p>${message}</p>`;
  }
  utilityContent?.addEventListener('submit', (event) => {
    event.preventDefault();
    notLive('Order tracking will work once checkout and accounts are live. There are no orders to track yet.');
  });
  utilityContent?.addEventListener('click', (event) => {
    if (event.target.closest('[data-soon]')) notLive(event.target.closest('[data-soon]').dataset.soon);
  });

  /* ---------- start ---------- */
  updateCurrencyLabels();
  renderNav();
  renderMenu();
  renderHomeSections();
  applyRoute();
});
