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
      'الفساتين': 'عطور رجالية فاخرة',
      'البلايز': 'عطور نسائية ملكية',
      'التنانير': 'العود والبخور',
      'الجاكيتات': 'مجموعات النيش',
      'تخفيضات': 'عروض ملكية'
    };
    document.querySelectorAll('.main-menu a, #mobile-menu a, nav a, .sub-menu a, header a').forEach(link => {
      const span = link.querySelector('span') || link;
      const text = (span.textContent || '').trim();
      if (catMap[text]) {
        span.textContent = catMap[text];
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
