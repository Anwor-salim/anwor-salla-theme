/**
 * Luxury Dior Perfume Showcase Module
 * Deep shadow-DOM piercing and automatic product enhancement for Salla Twilight
 */

export const DIOR_PERFUMES = [
  {
    id: 1,
    name: "عطر سوفاج ديور أو دو بارفان - 100 مل",
    nameEn: "Dior Sauvage Eau de Parfum",
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
    nameEn: "Dior Homme Intense",
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
    nameEn: "Miss Dior Eau de Parfum",
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
    nameEn: "Gris Dior Maison Christian Dior",
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
    nameEn: "Dior J'adore Eau de Parfum",
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
    nameEn: "Dior Oud Ispahan Privée",
    subtitle: "Oud Ispahan • لقاء الورد الدمشقي والعود الكمبودي",
    price: "1,350 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللابدانوم الإسباني، الزعفران الإيراني الفاخر",
    heartNotes: "الورد الدمشقي العريق، الباتشولي الإندونيسي",
    baseNotes: "العود الكمبودي الملكي، أخشاب الأرز، اللبان العماني"
  }
];

// Recursively traverse DOM and Shadow Roots
function findCardsAndRoots(root = document) {
  let list = [];
  
  // Custom or standard cards
  const cards = root.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card-entry, .s-product-card');
  cards.forEach(c => list.push(c));

  // Search inside shadow roots
  const all = root.querySelectorAll('*');
  all.forEach(el => {
    if (el.shadowRoot) {
      list = list.concat(findCardsAndRoots(el.shadowRoot));
    }
  });

  return list;
}

export function initPerfumeShowcase() {
  function applyDiorTransformation() {
    // 1. Find all card components (regular DOM + all Shadow DOMs)
    const cards = findCardsAndRoots(document);
    cards.forEach((card, index) => {
      const perfume = DIOR_PERFUMES[index % DIOR_PERFUMES.length];
      const targetRoot = card.shadowRoot || card;

      // Replace images inside target root
      const imgs = targetRoot.querySelectorAll('img');
      imgs.forEach(img => {
        if (!img.src.includes('unsplash') || img.src !== perfume.image) {
          img.src = perfume.image;
          if (img.dataset.src) img.dataset.src = perfume.image;
          img.srcset = '';
          img.alt = perfume.name;
          img.style.objectFit = 'contain';
          img.style.maxHeight = '270px';
          img.style.padding = '8px';
          img.style.background = '#faf7f2';
        }
      });

      // Replace titles inside target root
      const titles = targetRoot.querySelectorAll('.s-product-card-content-title a, h3 a, h4 a, .s-product-card-title a, a[title]');
      titles.forEach(t => {
        if (t.textContent !== perfume.name) {
          t.textContent = perfume.name;
          t.title = perfume.name;
        }
      });

      // Replace prices
      const prices = targetRoot.querySelectorAll('.s-product-card-sale-price h4, .s-product-card-price, .total-price, .s-product-card-price h4');
      prices.forEach(p => {
        p.textContent = perfume.price;
      });

      // Replace subtitle
      const sub = targetRoot.querySelector('.s-product-card-content-subtitle, .s-product-card-subtitle');
      if (sub) {
        sub.textContent = perfume.brand + ' • ' + perfume.subtitle;
      }

      // Track clicks to set perfume on single page
      if (!card.dataset.perfumeClickAttached) {
        card.dataset.perfumeClickAttached = 'true';
        card.addEventListener('click', () => {
          try {
            sessionStorage.setItem('selected_perfume', JSON.stringify(perfume));
          } catch(e) {}
        });
      }
    });

    // 2. Direct fallback: Replace any product image in document or shadowRoots that is still a fashion dress
    const allImages = [];
    function collectAllImages(root) {
      allImages.push(...Array.from(root.querySelectorAll('img')));
      root.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) collectAllImages(el.shadowRoot);
      });
    }
    collectAllImages(document);

    let dressCount = 0;
    allImages.forEach(img => {
      // If it looks like a demo product image (from salla cdn or avatar / dresses)
      const isProductImg = img.closest?.('.s-product-card') || 
                           img.closest?.('salla-product-card') ||
                           img.closest?.('custom-salla-product-card') ||
                           img.classList.contains('s-product-card-image') ||
                           img.src.includes('cdn.salla.sa/products/') ||
                           img.src.includes('cdn.salla.sa/stores/') ||
                           (img.alt && (img.alt.includes('فستان') || img.alt.includes('skirt') || img.alt.includes('منتج')));

      if (isProductImg && !img.src.includes('unsplash')) {
        const perfume = DIOR_PERFUMES[dressCount % DIOR_PERFUMES.length];
        dressCount++;
        img.src = perfume.image;
        if (img.dataset.src) img.dataset.src = perfume.image;
        img.srcset = '';
        img.alt = perfume.name;
        img.style.objectFit = 'contain';
        img.style.background = '#faf7f2';
      }
    });

    // 3. Single Product Page Details
    const singleProductTitle = document.querySelector('h1[data-testid="store-product-title"], .container--product-details h1');
    if (singleProductTitle) {
      let savedPerfume = null;
      try {
        const stored = sessionStorage.getItem('selected_perfume');
        if (stored) savedPerfume = JSON.parse(stored);
      } catch(e) {}
      const cur = savedPerfume || DIOR_PERFUMES[0];

      if (singleProductTitle.textContent !== cur.name) {
        singleProductTitle.textContent = cur.name;
      }
      const sliderImgs = document.querySelectorAll('.details-slider img, .image-slider img');
      sliderImgs.forEach(img => {
        if (img.src !== cur.image) {
          img.src = cur.image;
          if (img.dataset.src) img.dataset.src = cur.image;
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

  // Execute frequently to catch async rendered Web Components
  applyDiorTransformation();
  const intervals = [100, 300, 600, 1000, 1500, 2500, 4000, 6000];
  intervals.forEach(ms => setTimeout(applyDiorTransformation, ms));

  // Run on any DOM change
  const observer = new MutationObserver(() => {
    applyDiorTransformation();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also observe if there are iframes on same origin
  document.querySelectorAll('iframe').forEach(frame => {
    try {
      if (frame.contentDocument) {
        observer.observe(frame.contentDocument.body, { childList: true, subtree: true });
      }
    } catch(e) {}
  });
}
