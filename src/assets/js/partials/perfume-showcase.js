/**
 * Luxury Dior Perfume Showcase Module
 * Continuous polling and shadow-root piercing for Salla Twilight Web Components
 */

export const DIOR_PERFUMES = [
  {
    id: 1,
    name: "عطر سوفاج ديور أو دو بارفان - 100 مل",
    subtitle: "Dior Sauvage • الفخامة والرجولة الأيقونية",
    price: "580 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت الكالابري، الفلفل الأسود الحار",
    heartNotes: "اللافندر الفرنسي، فلفل سيشوان، إبرة الراعي",
    baseNotes: "الأمبروكسان النقي، أخشاب الأرز، الفانيليا البابوية"
  },
  {
    id: 2,
    name: "عطر ديور هوم إنتنس - 100 مل",
    subtitle: "Dior Homme Intense • الأناقة والغموض الساحر",
    price: "620 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللافندر التوسكاني الفاخر",
    heartNotes: "السوسن الإيطالي النادر، حبوب الكاكاو، الأمبريت",
    baseNotes: "أخشاب الأرز الفرجينية، نجيل الهند، العنبر الدافئ"
  },
  {
    id: 3,
    name: "عطر مس ديور أو دو بارفان - 100 مل",
    subtitle: "Miss Dior • باقة زهرية ملكية حسية",
    price: "650 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "زنبق الوادي، الفاوانيا الحريرية، السوسن المنعش",
    heartNotes: "ورد سنتيفوليا (ورد غراس النادر)، الخوخ المخملي",
    baseNotes: "الفانيليا البابوية، خشب الصندل، المسك الأبيض"
  },
  {
    id: 4,
    name: "عطر جريس ديور - كوليكسيون بريفيه 125 مل",
    subtitle: "La Collection Privée Christian Dior",
    price: "1,250 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت الإيطالي، الجريب فروت الصقلي",
    heartNotes: "الورد التركي النادر، الياسمين الغراسي الملكي",
    baseNotes: "الباتشولي الإندونيسي، طحلب البلوط، خشب الصندل"
  },
  {
    id: 5,
    name: "عطر جادور ديور الملكي - 100 مل",
    subtitle: "J'adore Dior • الأنوثة الذهبية المطلقة",
    price: "630 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "الإيلنغ، الكمثرى، الخربز، الماغنوليا",
    heartNotes: "الياسمين السامباك، الورد الجوري، الأوركيد",
    baseNotes: "خشب الأرز، المسك الفاخر، الفانيليا"
  },
  {
    id: 6,
    name: "عطر عود أصفهان ديور - لا كوليكسيون بريفيه 125 مل",
    subtitle: "Oud Ispahan • لقاء الورد الدمشقي والعود الكمبودي",
    price: "1,350 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللابدانوم الإسباني، الزعفران الإيراني الفاخر",
    heartNotes: "الورد الدمشقي العريق، الباتشولي الإندونيسي",
    baseNotes: "العود الكمبودي الملكي، أخشاب الأرز، اللبان العماني"
  }
];

export function initPerfumeShowcase() {
  function transformAllProducts() {
    let cardIndex = 0;

    function processCard(card) {
      const perfume = DIOR_PERFUMES[cardIndex % DIOR_PERFUMES.length];
      cardIndex++;

      const root = card.shadowRoot || card;

      // 1. Force Image Replacement
      const imgs = root.querySelectorAll('img');
      imgs.forEach(img => {
        if (!img.src || !img.src.includes('unsplash') || img.src !== perfume.image) {
          img.src = perfume.image;
          img.setAttribute('src', perfume.image);
          if (img.dataset.src) img.dataset.src = perfume.image;
          img.srcset = '';
          img.removeAttribute('srcset');
          img.alt = perfume.name;
          img.style.objectFit = 'contain';
          img.style.backgroundColor = '#faf7f2';
          img.style.padding = '8px';
        }
      });

      // 2. Force Title Replacement
      const titles = root.querySelectorAll('.s-product-card-content-title a, h3 a, h4 a, .s-product-card-title a, a.title');
      titles.forEach(t => {
        if (t.textContent !== perfume.name) {
          t.textContent = perfume.name;
          t.title = perfume.name;
        }
      });

      // 3. Force Price Replacement
      const prices = root.querySelectorAll('.s-product-card-sale-price h4, .s-product-card-price h4, .s-product-card-price, .total-price');
      prices.forEach(p => {
        p.textContent = perfume.price;
      });

      // 4. Force Subtitle
      const sub = root.querySelector('.s-product-card-content-subtitle, .s-product-card-subtitle');
      if (sub && !sub.textContent.includes('DIOR')) {
        sub.textContent = perfume.brand + ' • ' + perfume.subtitle;
      }
    }

    // A. Check salla-products-list (nested shadow roots)
    document.querySelectorAll('salla-products-list, salla-products-slider').forEach(list => {
      const listRoot = list.shadowRoot || list;
      listRoot.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card').forEach(processCard);
    });

    // B. Check top-level cards
    document.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card-entry, .s-product-card').forEach(processCard);

    // C. Deep fallback: scan ALL shadow roots for any remaining dress images
    function scanRoots(node) {
      if (node.shadowRoot) {
        node.shadowRoot.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card').forEach(processCard);
        scanRoots(node.shadowRoot);
      }
      node.querySelectorAll?.('*').forEach(child => {
        if (child.shadowRoot) scanRoots(child);
      });
    }
    scanRoots(document);

    // E. Transform header and navigation menu categories
    const catMap = {
      'الفساتين': 'العطور الرجالية',
      'البلايز': 'العطور النسائية',
      'التنانير': 'مجموعات حصرية',
      'الجاكيتات': 'عود وبخور',
      'تخفيضات': 'هدايا فخمة',
      'عروض': 'عن أنور',
      'عطور رجالية فاخرة': 'العطور الرجالية',
      'عطور نسائية ملكية': 'العطور النسائية',
      'العود والبخور': 'عود وبخور',
      'العود والبخور الخاص': 'عود وبخور',
      'مجموعات النيش': 'مجموعات حصرية',
      'مجموعات النيش الحصرية': 'مجموعات حصرية',
      'عروض ملكية': 'هدايا فخمة',
      'عروض العطور الملكية': 'عن أنور'
    };
    document.querySelectorAll('.main-menu a, #mobile-menu a, nav a, .sub-menu a, header a').forEach(link => {
      const span = link.querySelector('span') || link;
      const text = (span.textContent || '').trim();
      if (catMap[text]) {
        span.textContent = catMap[text];
      }
    });

    // 1. Top Announcement Ribbon
    let ribbon = document.querySelector('.perfume-top-ribbon');
    if (!ribbon) {
      ribbon = document.createElement('div');
      ribbon.className = 'perfume-top-ribbon';
      ribbon.style.cssText = 'background: #cca36e !important; color: #121316 !important; font-weight: 700 !important; font-size: 0.8rem !important; padding: 0.5rem 1rem !important; text-align: center !important; z-index: 9999; width: 100%;';
      ribbon.innerHTML = '<span>عروض حصرية: احصل على خصم 20% على العطور الملكية لفترة محدودة | شحن مجاني للطلبات فوق 500 ريال</span>';
      document.body.prepend(ribbon);
    } else {
      const ribbonSpan = ribbon.querySelector('span');
      if (ribbonSpan && !ribbonSpan.textContent.includes('خصم 20%')) {
        ribbonSpan.textContent = 'عروض حصرية: احصل على خصم 20% على العطور الملكية لفترة محدودة | شحن مجاني للطلبات فوق 500 ريال';
      }
    }

    // 2. Royal Calligraphy Logo
    document.querySelectorAll('.navbar-brand, a[data-testid="store-header-logo"]').forEach(brand => {
      brand.style.background = 'transparent';
      const img = brand.querySelector('img');
      if (img && img.dataset.royalLogo !== 'true') {
        img.dataset.royalLogo = 'true';
        img.src = 'http://localhost:8000/images/anwor-royal-logo.png';
        img.srcset = '';
        img.style.maxHeight = '48px';
        img.style.width = 'auto';
        img.style.objectFit = 'contain';
        img.style.backgroundColor = 'transparent';
        if (img.parentElement) img.parentElement.style.backgroundColor = 'transparent';
      }
    });

    // 3. Center Search Input in Header
    const navBarInner = document.querySelector('#mainnav .inner .container > div, .store-header .container');
    if (navBarInner && !document.querySelector('.royal-header-search')) {
      const searchBox = document.createElement('div');
      searchBox.className = 'royal-header-search flex-1 max-w-md mx-6 hidden md:block';
      searchBox.style.cssText = 'flex: 1; max-width: 420px; margin: 0 1.5rem;';
      searchBox.innerHTML = `
        <div style="position: relative; display: flex; align-items: center; width: 100%;">
          <input type="text" placeholder="ابحث عن عطر، ماركة، or مكونات..." style="width: 100%; background: #cbb592 !important; color: #121316 !important; font-weight: 600; padding: 0.55rem 1rem 0.55rem 2.5rem; border-radius: 8px; border: 1px solid #cca36e; outline: none; font-size: 0.9rem;" onkeydown="if(event.key==='Enter'){window.location.href='/search?q='+encodeURIComponent(this.value)}" />
          <i class="sicon-search" style="position: absolute; left: 12px; color: #121316; font-size: 1.15rem; pointer-events: none;"></i>
        </div>
      `;
      const brand = navBarInner.querySelector('.navbar-brand, a[data-testid="store-header-logo"]');
      if (brand && brand.nextSibling) {
        navBarInner.insertBefore(searchBox, brand.nextSibling);
      } else {
        navBarInner.appendChild(searchBox);
      }
    }

    // 4. Main Menu 'الرئيسية' link
    const menuUl = document.querySelector('.main-menu ul, #mainnav ul, nav ul');
    if (menuUl && !menuUl.querySelector('.nav-home-link')) {
      const homeLi = document.createElement('li');
      homeLi.className = 'nav-home-link is-active';
      homeLi.innerHTML = '<a href="/" style="color: #cca36e !important; font-weight: 700; position: relative; padding: 0.65rem 1rem; display: inline-block;">الرئيسية<span style="position: absolute; bottom: 2px; left: 15%; right: 15%; height: 2px; background: #cca36e; border-radius: 2px;"></span></a>';
      menuUl.prepend(homeLi);
    }

    // 5. Hero Banner (Pixel Perfect with no duplicate text)
    const isHome = window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname.includes('dev-') || !window.location.pathname.includes('/');
    if (isHome && !document.querySelector('.royal-perfume-hero-injected')) {
      const heroContainer = document.createElement('section');
      heroContainer.className = 'royal-perfume-hero-injected';
      heroContainer.style.cssText = 'max-width: 1240px; margin: 1.5rem auto 1rem; padding: 0 1rem;';
      heroContainer.innerHTML = `
        <a href="/products" style="display: block; position: relative; overflow: hidden; border-radius: 16px; background: #141518; border: 1px solid rgba(197, 168, 128, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.3); text-decoration: none; transition: transform 0.3s ease;">
          <img src="http://localhost:8000/images/hero-banner-luxury.png" alt="أنور للعطور الملكية - فخامة الحضور وسحر الأثر" style="width: 100%; height: auto; display: block; border-radius: 16px;" />
        </a>
      `;
      const targetSec = document.querySelector('.perfume-discovery-section, [data-testid="store-perfume-discovery"], #main-content, main, .main-content');
      if (targetSec) {
        targetSec.parentNode.insertBefore(heroContainer, targetSec);
      }
    }

    // 6. 4 Fragrance Family Cards Grid
    const discoverySec = document.querySelector('.perfume-discovery-section, [data-testid="store-perfume-discovery"]');
    if (discoverySec && !discoverySec.dataset.transformedGrid) {
      discoverySec.dataset.transformedGrid = "true";
      discoverySec.style.cssText = 'background: #faf7f2 !important; padding: 2rem 0 !important; margin: 1rem 0 !important; border-top: 1px solid rgba(197, 168, 128, 0.2); border-bottom: 1px solid rgba(197, 168, 128, 0.2);';
      discoverySec.innerHTML = `
        <div style="max-width: 1240px; margin: 0 auto; padding: 0 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1.25rem; text-align: right;">العائلات العطرية</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;" class="royal-discovery-grid">
            <a href="/search?q=%D8%B4%D8%B1%D9%82%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 1rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.35); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-sparkle" style="font-size: 2rem; color: #121316; margin-bottom: 0.6rem;"></i>
              <span style="font-size: 1.05rem; font-weight: 700; color: #121316;">الشرقية</span>
            </a>
            <a href="/search?q=%D8%B2%D9%87%D8%B1%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 1rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.35); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-flower" style="font-size: 2rem; color: #121316; margin-bottom: 0.6rem;"></i>
              <span style="font-size: 1.05rem; font-weight: 700; color: #121316;">الزهرية</span>
            </a>
            <a href="/search?q=%D8%AE%D8%B4%D8%A8%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 1rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.35); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-tree" style="font-size: 2rem; color: #121316; margin-bottom: 0.6rem;"></i>
              <span style="font-size: 1.05rem; font-weight: 700; color: #121316;">الخشبية</span>
            </a>
            <a href="/search?q=%D8%B9%D9%88%D8%AF" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 1rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.35); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-crown" style="font-size: 2rem; color: #121316; margin-bottom: 0.6rem;"></i>
              <span style="font-size: 1.05rem; font-weight: 700; color: #121316;">العود الملكي</span>
            </a>
          </div>
        </div>
      `;
    }

    // 7. Latest Releases Section Title
    document.querySelectorAll('.s-block__title h2, .s-block-title h2, .s-block h2, h2').forEach(h2 => {
      const txt = (h2.textContent || '').trim();
      if (txt.includes('منتجات') || txt.includes('الأحدث') || txt.includes('المختارة') || txt.includes('وصل حديثاً')) {
        h2.textContent = 'أحدث الإصدارات';
      }
    });

    // F. Fix any relative products.index links on the page
    document.querySelectorAll('a[href*="products.index"]').forEach(link => {
      const href = link.getAttribute('href') || '';
      const keyword = href.split('keyword=')[1] || '';
      link.setAttribute('href', `/search?q=${keyword}`);
    });

    // D. Single Product Page Details
    const singleProductTitle = document.querySelector('h1[data-testid="store-product-title"], .container--product-details h1');
    if (singleProductTitle) {
      const cur = DIOR_PERFUMES[0];
      if (singleProductTitle.textContent !== cur.name) {
        singleProductTitle.textContent = cur.name;
      }
      document.querySelectorAll('.details-slider img, .image-slider img').forEach(img => {
        if (img.src !== cur.image) {
          img.src = cur.image;
          img.srcset = '';
          img.style.objectFit = 'contain';
        }
      });
      const noteTiers = document.querySelectorAll('.fragrance-notes-card .notes-tier .tier-content');
      if (noteTiers.length >= 3) {
        noteTiers[0].textContent = cur.topNotes;
        noteTiers[1].textContent = cur.heartNotes;
        noteTiers[2].textContent = cur.baseNotes;
      }
    }
  }

  // Intercept any click on products.index to route cleanly to /search?q=
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href') && a.getAttribute('href').includes('products.index')) {
      e.preventDefault();
      e.stopPropagation();
      const href = a.getAttribute('href');
      const keyword = href.split('keyword=')[1] || '';
      window.location.href = `/search?q=${keyword}`;
    }
  }, true);

  // If already stuck on a 410 products.index URL, redirect to search
  if (window.location.href.includes('products.index')) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('keyword') || params.get('q') || '';
    window.location.replace('/search?q=' + encodeURIComponent(q));
  }

  // Run immediately and continuously every 250ms
  transformAllProducts();
  setInterval(transformAllProducts, 250);
}
