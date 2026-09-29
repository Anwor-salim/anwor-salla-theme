/**
 * Luxury Dior Perfume Showcase Module
 * Seamlessly upgrades demo catalog items into authentic Dior luxury perfumes
 * with high-definition imagery, olfactory notes, and luxury pricing.
 */

export const DIOR_PERFUMES = [
  {
    id: 1,
    name: "عطر سوفاج ديور أو دو بارفان - 100 مل",
    nameEn: "Dior Sauvage Eau de Parfum",
    subtitle: "Dior Sauvage • الفخامة والرجولة الأيقونية",
    price: "580 ر.س",
    regularPrice: "680 ر.س",
    badge: "الأكثر مبيعاً",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت الكالابري، الفلفل الأسود الحار",
    heartNotes: "اللافندر الفرنسي، فلفل سيشوان، إبرة الراعي، نجيل الهند",
    baseNotes: "الأمبروكسان النقي، أخشاب الأرز الأطلسية، الفانيليا البابوية الفاخرة"
  },
  {
    id: 2,
    name: "عطر ديور هوم إنتنس - 100 مل",
    nameEn: "Dior Homme Intense Eau de Parfum",
    subtitle: "Dior Homme Intense • الأناقة الشرقية والغموض الساحر",
    price: "620 ر.س",
    regularPrice: "720 ر.س",
    badge: "إصدار ملكي",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللافندر التوسكاني الفاخر",
    heartNotes: "السوسن الإيطالي النادر، حبوب الكاكاو، الأمبريت الإكوادوري",
    baseNotes: "أخشاب الأرز الفرجينية، نجيل الهند، العنبر الدافئ"
  },
  {
    id: 3,
    name: "عطر مس ديور أو دو بارفان - 100 مل",
    nameEn: "Miss Dior Eau de Parfum",
    subtitle: "Miss Dior • باقة زهرية ملكية حسية",
    price: "650 ر.س",
    regularPrice: "750 ر.س",
    badge: "العطر الأنثوي الأول",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "زنبق الوادي، الفاوانيا الحريرية، السوسن المنعش",
    heartNotes: "ورد سنتيفوليا (ورد غراس النادر)، الخوخ المخملي، المشمش",
    baseNotes: "الفانيليا البابوية، خشب الصندل السريلانكي، المسك الأبيض"
  },
  {
    id: 4,
    name: "عطر جريس ديور - مجموعة الميزون الخاصة 125 مل",
    nameEn: "Gris Dior Maison Christian Dior Privée",
    subtitle: "La Collection Privée Christian Dior • توقيع الدار الفريد",
    price: "1,250 ر.س",
    regularPrice: "1,450 ر.س",
    badge: "مجموعة الميزون الخاصة",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت الإيطالي، الجريب فروت الصقلي",
    heartNotes: "الورد التركي النادر، الياسمين الغراسي الملكي",
    baseNotes: "الباتشولي الإندونيسي، طحلب البلوط، خشب الصندل، العنبر الرمادي"
  },
  {
    id: 5,
    name: "عطر جادور ديور الملكي - 100 مل",
    nameEn: "Dior J'adore Eau de Parfum",
    subtitle: "J'adore Dior • الأنوثة الذهبية المطلقة في زجاجة أسطورية",
    price: "630 ر.س",
    regularPrice: "730 ر.س",
    badge: "أيقونة ذهبية",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "الإيلنغ من جزر القمر، الكمثرى، الخربز المنعش، الماغنوليا",
    heartNotes: "الياسمين السامباك، الورد الجوري، الأوركيد، زنبق الوادي، البرقوق",
    baseNotes: "خشب الأرز الأطلسي، المسك الفاخر، الفانيليا، التوت العليق"
  },
  {
    id: 6,
    name: "عطر عود أصفهان ديور - لا كوليكسيون بريفيه 125 مل",
    nameEn: "Dior Oud Ispahan Privée",
    subtitle: "Oud Ispahan • لقاء الورد الدمشقي والعود الكمبودي المعتق",
    price: "1,350 ر.س",
    regularPrice: "1,550 ر.س",
    badge: "عود ملكي فاخر",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللابدانوم الإسباني، الزعفران الإيراني الفاخر",
    heartNotes: "الورد الدمشقي العريق، الباتشولي الإندونيسي المعتق",
    baseNotes: "العود الكمبودي الملكي، أخشاب الأرز، اللبان العماني، المسك"
  }
];

export function initPerfumeShowcase() {
  const isPreview = window.location.href.includes('draft-') || 
                    window.location.href.includes('assets_url') || 
                    window.location.search.includes('legacy=') ||
                    document.body.innerText.includes('فستان') ||
                    document.body.innerText.includes('skirt');

  // Upgrade product cards on the page
  function upgradeCards() {
    const cards = document.querySelectorAll('.s-product-card-entry, salla-product-card, .s-product-card');
    cards.forEach((card, index) => {
      const perfume = DIOR_PERFUMES[index % DIOR_PERFUMES.length];
      if (!card.dataset.perfumeUpgraded) {
        card.dataset.perfumeUpgraded = 'true';
        card.dataset.perfumeId = perfume.id;

        // Image
        const imgs = card.querySelectorAll('img');
        imgs.forEach(img => {
          img.src = perfume.image;
          if (img.dataset.src) img.dataset.src = perfume.image;
          img.srcset = '';
          img.alt = perfume.name;
          img.style.objectFit = 'contain';
          img.style.padding = '8px';
        });

        // Title
        const titleLinks = card.querySelectorAll('.s-product-card-content-title a, h3 a, h4 a, .s-product-card-title a');
        titleLinks.forEach(link => {
          link.textContent = perfume.name;
        });

        // Subtitle / Brand
        const subtitle = card.querySelector('.s-product-card-content-subtitle, .s-product-card-subtitle');
        if (subtitle) {
          subtitle.textContent = perfume.brand + ' • ' + perfume.subtitle;
        }

        // Price
        const priceEls = card.querySelectorAll('.s-product-card-sale-price, .s-product-card-price, .total-price');
        if (priceEls.length > 0) {
          priceEls[0].textContent = perfume.price;
        }

        // On card click, remember perfume selection for single page
        card.addEventListener('click', () => {
          try {
            sessionStorage.setItem('selected_perfume', JSON.stringify(perfume));
          } catch(e) {}
        });
      }
    });

    // Upgrade single product page if on a product page
    const singleProductTitle = document.querySelector('h1[data-testid="store-product-title"], .container--product-details h1');
    if (singleProductTitle) {
      let savedPerfume = null;
      try {
        const stored = sessionStorage.getItem('selected_perfume');
        if (stored) savedPerfume = JSON.parse(stored);
      } catch(e) {}

      const currentPerfume = savedPerfume || DIOR_PERFUMES[0];

      // Update Title
      if (!singleProductTitle.dataset.perfumeUpgraded) {
        singleProductTitle.dataset.perfumeUpgraded = 'true';
        singleProductTitle.textContent = currentPerfume.name;
      }

      // Update Subtitle
      const subTitle = document.querySelector('.product-entry__sub-title');
      if (subTitle && !subTitle.dataset.perfumeUpgraded) {
        subTitle.dataset.perfumeUpgraded = 'true';
        subTitle.textContent = currentPerfume.subtitle;
      }

      // Update Images in slider
      const sliderImgs = document.querySelectorAll('.details-slider img, .image-slider img');
      sliderImgs.forEach(img => {
        img.src = currentPerfume.image;
        if (img.dataset.src) img.dataset.src = currentPerfume.image;
        img.srcset = '';
        img.style.objectFit = 'contain';
      });

      // Update Price
      const singlePrices = document.querySelectorAll('[data-testid="store-product-price"] p, .total-price');
      singlePrices.forEach(p => {
        if (!p.dataset.perfumeUpgraded) {
          p.dataset.perfumeUpgraded = 'true';
          p.textContent = currentPerfume.price;
        }
      });

      // Update Fragrance Notes
      const noteTiers = document.querySelectorAll('.fragrance-notes-card .notes-tier .tier-content');
      if (noteTiers.length >= 3) {
        noteTiers[0].textContent = currentPerfume.topNotes;
        noteTiers[1].textContent = currentPerfume.heartNotes;
        noteTiers[2].textContent = currentPerfume.baseNotes;
      }
    }
  }

  // Run immediately and periodically for async loaded components
  upgradeCards();
  setTimeout(upgradeCards, 300);
  setTimeout(upgradeCards, 800);
  setTimeout(upgradeCards, 1500);
  setTimeout(upgradeCards, 3000);

  // Observer for dynamic product injection
  const observer = new MutationObserver(() => {
    upgradeCards();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
