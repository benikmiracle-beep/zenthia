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

  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSignIn();
  });

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

  const utilityModal = document.getElementById('utility-modal');
  const utilityTitle = document.getElementById('utility-title');
  const utilityContent = document.getElementById('utility-content');
  const utilityIcon = document.getElementById('utility-icon');
  const shopPage = document.getElementById('shop-page');
  const shopPageTitle = document.getElementById('shop-page-title');
  const shopPageLabel = document.getElementById('shop-page-label');
  const shopPageCount = document.getElementById('shop-page-count');
  const shopPageItems = document.getElementById('shop-page-items');

  const currencies = {
    USD: { name: 'US Dollar', symbol: '$', rate: 1, locale: 'en-US' },
    EUR: { name: 'Euro', symbol: '€', rate: 0.92, locale: 'de-DE' },
    GBP: { name: 'British Pound', symbol: '£', rate: 0.79, locale: 'en-GB' },
    NGN: { name: 'Nigerian Naira', symbol: '₦', rate: 1550, locale: 'en-NG' },
    CAD: { name: 'Canadian Dollar', symbol: 'C$', rate: 1.36, locale: 'en-CA' }
  };

  let currentCurrency = localStorage.getItem('zenthia-currency') || 'USD';
  let favorites = JSON.parse(localStorage.getItem('zenthia-favorites') || '[]');
  let cart = JSON.parse(localStorage.getItem('zenthia-cart') || '[]');

  function formatPrice(usd) {
    const currency = currencies[currentCurrency];
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currentCurrency,
      maximumFractionDigits: currentCurrency === 'NGN' ? 0 : 2
    }).format(usd * currency.rate);
  }

  function updateCurrencyLabels() {
    const currency = currencies[currentCurrency];
    document.querySelectorAll('[data-utility="currency"]').forEach((button) => {
      button.innerHTML = `<img src="images/globe.svg" class="i" alt="">${currentCurrency} / ${currency.symbol}`;
    });

    document.querySelectorAll('.price-row strong, .price-row span, .seller-meta strong, .mini-seller p').forEach((element) => {
      if (!element.dataset.usd) {
        const value = parseFloat((element.textContent.match(/[\d,.]+/) || ['0'])[0].replace(/,/g, ''));
        element.dataset.usd = String(value);
      }
      element.textContent = formatPrice(Number(element.dataset.usd));
    });

    const freeDelivery = document.querySelector('.left span:last-child');
    if (freeDelivery) {
      if (!freeDelivery.dataset.usd) freeDelivery.dataset.usd = '60';
      freeDelivery.textContent = `Free delivery on orders over ${formatPrice(Number(freeDelivery.dataset.usd))}`;
    }
  }

  function setCurrency(code) {
    if (!currencies[code]) return;
    currentCurrency = code;
    localStorage.setItem('zenthia-currency', code);
    updateCurrencyLabels();
  }

  function getProduct(card) {
    const name = card.querySelector('h3')?.textContent.trim() || 'Zenthia product';
    const image = card.querySelector('.product-image-wrap img')?.getAttribute('src') || '';
    const priceText = card.querySelector('.price-row strong')?.textContent.trim() || '$0';
    const price = card.querySelector('.price-row strong');
    const usd = price?.dataset.usd || parseFloat((priceText.match(/[\d,.]+/) || ['0'])[0].replace(/,/g, ''));
    return { id: name, name, image, usd: Number(usd) };
  }

  function updateBadgeCounts() {
    const wishBadge = document.querySelector('.wish .badge');
    const cartCount = document.querySelector('.cart .n');
    if (wishBadge) wishBadge.textContent = favorites.length;
    if (cartCount) cartCount.textContent = cart.length;
  }

  function setupProductCards() {
    document.querySelectorAll('.product-card').forEach((card) => {
      const button = card.querySelector('.product-topline button');
      const product = getProduct(card);

      if (button) {
        button.classList.add('wishlist-button');
        button.setAttribute('aria-label', 'Add to wishlist');
        button.dataset.productId = product.id;
        if (favorites.some((item) => item.id === product.id)) button.classList.add('is-favorite');

        button.addEventListener('click', () => {
          const existing = favorites.findIndex((item) => item.id === product.id);
          if (existing >= 0) favorites.splice(existing, 1);
          else favorites.push(product);
          localStorage.setItem('zenthia-favorites', JSON.stringify(favorites));
          button.classList.toggle('is-favorite', existing < 0);
          updateBadgeCounts();
        });
      }

      const priceRow = card.querySelector('.price-row');
      if (priceRow && !priceRow.querySelector('.add-cart-button')) {
        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.className = 'add-cart-button';
        addButton.textContent = 'Add to cart';
        addButton.addEventListener('click', () => {
          if (!cart.some((item) => item.id === product.id)) {
            cart.push(product);
            localStorage.setItem('zenthia-cart', JSON.stringify(cart));
            addButton.textContent = 'Added';
            updateBadgeCounts();
          }
        });
        priceRow.appendChild(addButton);
      }
    });
  }

  function openShopPage(type) {
    if (!shopPage) return;
    const isCart = type === 'cart';
    const items = isCart ? cart : favorites;
    shopPageTitle.textContent = isCart ? 'Shopping Cart' : 'My Favorites';
    shopPageLabel.textContent = isCart ? 'Zenthia checkout' : 'Zenthia saved items';
    shopPageCount.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'}`;

    if (!items.length) {
      shopPageItems.innerHTML = `<div class="shop-page-empty"><img src="images/${isCart ? 'shopping-cart-navy.svg' : 'heart-saved.svg'}" alt=""><h2>${isCart ? 'Your cart is empty' : 'No favorites yet'}</h2><p>${isCart ? 'Add products from the store to begin.' : 'Tap the heart on any product to save it.'}</p></div>`;
    } else {
      shopPageItems.innerHTML = items.map((item, index) => `
        <article class="shop-page-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="shop-page-item-info"><h3>${item.name}</h3><strong>${formatPrice(item.usd)}</strong></div>
          ${isCart
            ? `<button type="button" class="shop-item-remove" data-cart-remove="${index}">Remove</button>`
            : `<button type="button" class="shop-item-cart" data-add-cart="${index}">Add to cart</button>`}
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
    track: { title: 'Track your package', icon: 'images/package-search.svg', content: '<p>Enter your Zenthia tracking number to check delivery progress.</p><form class="utility-form"><input type="text" placeholder="Tracking number" required><button type="submit">Track Package</button></form>' },
    sell: { title: 'Sell on Zenthia', icon: 'images/store.svg', content: '<p>Grow your business and reach customers across Zenthia.</p><button type="button" class="utility-primary">Start selling</button>' },
    currency: { title: 'Language & currency', icon: 'images/globe.svg', content: '<div class="utility-options">' + Object.entries(currencies).map(([code, currency]) => `<button type="button" data-currency="${code}">${currency.name} <strong>${code} (${currency.symbol})</strong></button>`).join('') + '</div>' },
    favorites: { title: 'My favorites', icon: 'images/heart-saved.svg', content: `<p>${favorites.length} saved ${favorites.length === 1 ? 'item' : 'items'}.</p><button type="button" class="utility-primary" data-open-shop="favorites">View favorites</button>` },
    cart: { title: 'Shopping cart', icon: 'images/shopping-cart-navy.svg', content: `<p>${cart.length ? `${cart.length} ${cart.length === 1 ? 'item' : 'items'} in your cart.` : 'Your cart is empty.'}</p><button type="button" class="utility-primary" data-open-shop="cart">View cart</button>` }
  };

  function openUtility(type) {
    const page = utilityPages[type];
    if (!page || !utilityModal) return;
    if (type === 'favorites') {
      page.content = `<p>${favorites.length} saved ${favorites.length === 1 ? 'item' : 'items'}.</p><button type="button" class="utility-primary" data-open-shop="favorites">View favorites</button>`;
    }
    if (type === 'cart') {
      page.content = `<p>${cart.length ? `${cart.length} ${cart.length === 1 ? 'item' : 'items'} in your cart.` : 'Your cart is empty.'}</p><button type="button" class="utility-primary" data-open-shop="cart">View cart</button>`;
    }
    utilityTitle.textContent = page.title;
    utilityIcon.innerHTML = `<img src="${page.icon}" alt="">`;
    utilityContent.innerHTML = page.content;
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

  utilityContent?.addEventListener('click', (event) => {
    const currencyButton = event.target.closest('[data-currency]');
    if (currencyButton) {
      setCurrency(currencyButton.dataset.currency);
      closeUtility();
      return;
    }

    const openShopButton = event.target.closest('[data-open-shop]');
    if (openShopButton) {
      closeUtility();
      openShopPage(openShopButton.dataset.openShop);
    }
  });

  shopPageItems?.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-cart-remove]');
    if (removeButton) {
      cart.splice(Number(removeButton.dataset.cartRemove), 1);
      localStorage.setItem('zenthia-cart', JSON.stringify(cart));
      updateBadgeCounts();
      openShopPage('cart');
      return;
    }

    const addButton = event.target.closest('[data-add-cart]');
    if (addButton) {
      const item = favorites[Number(addButton.dataset.addCart)];
      if (item && !cart.some((cartItem) => cartItem.id === item.id)) {
        cart.push(item);
        localStorage.setItem('zenthia-cart', JSON.stringify(cart));
        updateBadgeCounts();
        addButton.textContent = 'Added';
      }
    }
  });

  document.getElementById('shop-page-back')?.addEventListener('click', closeShopPage);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSignIn();
      closeCreateAccount();
      closeUtility();
      closeShopPage();
    }
  });

  updateCurrencyLabels();
  setupProductCards();
});
