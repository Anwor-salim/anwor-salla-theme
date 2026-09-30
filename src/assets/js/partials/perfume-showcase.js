/**
 * Luxury Fragrance Brand Multi-Category Showcase Module
 * Designed for Salla Twilight Engine
 * Provides authentic, original Haute Parfumerie collections:
 * Maison Anwor, Éclat Privé, Anwor Royal Oud, Noble Essence, Noir Maison
 * Ensures seamless preview link preservation across all store pages
 */

// 1. Men's Luxury Fragrances / العطور الرجالية
export const MEN_PERFUMES = [
  {
    id: 101,
    name: "عطر عنبر رويال المركز",
    volume: "100 مل",
    subtitle: "Maison Anwor • تركيز استثنائي فوّاح",
    price: "920 ر.س",
    brand: "MAISON ANWOR",
    badge: "جديد",
    image: "http://localhost:8000/images/perfume-amber-men.jpg",
    topNotes: "الجريب فروت الصقلي، الهيل الغواتيمالي، القرفة السيلانية",
    heartNotes: "الخزامى الفرنسية، جوزة الطيب، إبرة الراعي",
    baseNotes: "العنبر الرمادي الداكن، خشب الصندل، نجيل الهند الهايتي"
  },
  {
    id: 102,
    name: "عطر إمبريال سافاج النادر",
    volume: "100 مل",
    subtitle: "Maison Anwor • فوحان أسطوري وجاذبية لا تُقاوم",
    price: "850 ر.س",
    brand: "MAISON ANWOR",
    badge: "الأكثر مبيعًا",
    image: "http://localhost:8000/images/perfume-noir-men.jpg",
    topNotes: "البرغموت الكالابري، الفلفل الأسود",
    heartNotes: "فلفل سيشوان، اللافندر الجبلي، الباتشولي",
    baseNotes: "الأمبروكسان، أخشاب الأرز، الفانيليا المدخنة"
  },
  {
    id: 103,
    name: "عطر فيلفت آيريس الأرستقراطي",
    volume: "100 مل",
    subtitle: "Maison Anwor • السوسن والجلود الفاخرة",
    price: "780 ر.س",
    brand: "MAISON ANWOR",
    badge: "اختيار مميز",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "الخزامى التوسكانية، المريمية",
    heartNotes: "السوسن الفلورنسي، بذور الأمبريت، حبوب الكاكاو",
    baseNotes: "خشب الأرز الأطلسي، نجيل الهند، الجلود الإيطالية"
  },
  {
    id: 104,
    name: "عطر ليذر نوار الخاص",
    volume: "75 مل",
    subtitle: "Noir Maison • دفء الجلود النبيلة والحرارة الشرقية",
    price: "740 ر.س",
    brand: "NOIR MAISON",
    badge: "جديد",
    image: "http://localhost:8000/images/perfume-noir-men.jpg",
    topNotes: "الماندرين الصقلي، الهيل الأخضر",
    heartNotes: "أوراق البنفسج النادرة، الجلد السويدي",
    baseNotes: "العود المدخن، خشب الأرز، الباتشولي"
  },
  {
    id: 105,
    name: "عطر مسك نوار المنعش",
    volume: "100 مل",
    subtitle: "Noir Maison • حمضيات كالابريا ودفء الأخشاب",
    price: "620 ر.س",
    brand: "NOIR MAISON",
    badge: "خصم 20%",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "الليمون الإيطالي، البرغموت، النعناع البري",
    heartNotes: "الفلفل الوردي، الزنجبيل النيجيري",
    baseNotes: "نجيل الهند، اللبان العماني، خشب الأرز"
  },
  {
    id: 106,
    name: "عطر كلاسيك نوار أو دو بارفان",
    volume: "100 مل",
    subtitle: "Noir Maison • الكلاسيكية الرفيعة والأناقة الخالدة",
    price: "680 ر.س",
    brand: "NOIR MAISON",
    badge: "الأكثر مبيعًا",
    image: "http://localhost:8000/images/perfume-amber-men.jpg",
    topNotes: "البرغموت، إكليل الجبل، الليمون الحامض",
    heartNotes: "الخزامى العضوية، أوراق القرنفل",
    baseNotes: "طحلب البلوط، المر، أخشاب الأرز"
  }
];

// 2. Women's Royal Fragrances / العطور النسائية
export const WOMEN_PERFUMES = [
  {
    id: 201,
    name: "عطر جولد إكسير النسائي",
    volume: "80 مل",
    subtitle: "Éclat Privé • الأنوثة والجاذبية في قطرات ذهبية",
    price: "890 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "جديد",
    image: "http://localhost:8000/images/perfume-rose-women.jpg",
    topNotes: "زهر البرتقال الغراسي، البرغموت",
    heartNotes: "الورد الدمشقي، الياسمين الملكي، الفاوانيا",
    baseNotes: "الفانيليا التاهيتية، العنبر الحريري، خشب الصندل"
  },
  {
    id: 202,
    name: "عطر روز فلورال المخملي",
    volume: "100 مل",
    subtitle: "Éclat Privé • بتلات الورد الطبيعي والمسك الأبيض",
    price: "760 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "الأكثر مبيعًا",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "الماندرين، براعم الخوخ المخملي",
    heartNotes: "ورد غراس الاستثنائي، زنبق الوادي",
    baseNotes: "المسك الأبيض النقي، خشب الأرز"
  },
  {
    id: 203,
    name: "عطر نوار ديسير الحسي",
    volume: "90 مل",
    subtitle: "Éclat Privé • سحر الفانيليا وحبوب التونكا الفاخرة",
    price: "690 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "اختيار مميز",
    image: "http://localhost:8000/images/perfume-rose-women.jpg",
    topNotes: "البرتقال المر، الليمون الصقلي",
    heartNotes: "الورد الجوري، زهر البرتقال",
    baseNotes: "التونكا الفنزويلية، الفانيليا، خشب الصندل"
  },
  {
    id: 204,
    name: "عطر إمبريال جاسمين النقي",
    volume: "100 مل",
    subtitle: "Éclat Privé • شذى الياسمين الاستثنائي والندى الصباحي",
    price: "820 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "جديد",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    topNotes: "الياسمين السامباك، زهر الليمون",
    heartNotes: "مسك الروم النبيل، أزهار البرتقال",
    baseNotes: "العنبر الأبيض، المسك الحريري"
  },
  {
    id: 205,
    name: "عطر فيلفت روز بريفيه",
    volume: "100 مل",
    subtitle: "Éclat Privé • باقة مخملية ساحرة تأسرك من اللحظة الأولى",
    price: "710 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "خصم 20%",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "التوت البري، الفلفل الوردي",
    heartNotes: "الورد البلغاري، الماغنوليا",
    baseNotes: "الباتشولي، العنبر الدافئ، الفانيليا"
  },
  {
    id: 206,
    name: "عطر مسك بلانك الصافي",
    volume: "100 مل",
    subtitle: "Éclat Privé • نقاء المسك الأبيض البودري الفاخر",
    price: "640 ر.س",
    brand: "ÉCLAT PRIVÉ",
    badge: "الأكثر مبيعًا",
    image: "http://localhost:8000/images/perfume-rose-women.jpg",
    topNotes: "بودرة الأرز، الأزهار البيضاء",
    heartNotes: "الورد الطائفي، زنبق الوادي",
    baseNotes: "المسك الصافي، العنبر الأبيض الخفيف"
  }
];

// 3. Royal Oud & Incense / عود وبخور
export const OUD_INCENSE_PERFUMES = [
  {
    id: 301,
    name: "عطر رويال عود أصفهان",
    volume: "125 مل",
    subtitle: "Anwor Royal Oud • لقاء العود المعتق والورد الفاخر",
    price: "1,350 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "إصدار ملكي",
    image: "http://localhost:8000/images/perfume-noir-men.jpg",
    topNotes: "اللابدانوم الإسباني، الزعفران الإيراني الممتاز",
    heartNotes: "الورد الدمشقي العريق، الباتشولي الإندونيسي",
    baseNotes: "العود الكمبودي الملكي المعتق، أخشاب الأرز، اللبان"
  },
  {
    id: 302,
    name: "عطر عنبر نوي المركز",
    volume: "125 مل",
    subtitle: "Anwor Royal Oud • ليلة ساحرة بين العنبر البحري والورد",
    price: "1,280 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "الأكثر مبيعًا",
    image: "http://localhost:8000/images/perfume-amber-men.jpg",
    topNotes: "البرغموت، الجريب فروت الصقلي المنعش",
    heartNotes: "الورد التركي الدموي، الفلفل الوردي الحار",
    baseNotes: "العنبر البحري الرمادي النادر، الباتشولي، الأرز"
  },
  {
    id: 303,
    name: "دهن عود تراد الحطب المعتق",
    volume: "ربع تولة",
    subtitle: "Anwor Royal Oud • نقاء الدهن الصافي برائحة بخورية سويتية",
    price: "950 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "معتق فاخر",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    topNotes: "نكهة سويتية عسلية دافئة",
    heartNotes: "طبقات بخورية عميقة مدخنة",
    baseNotes: "ثبات هادئ وفواح يدوم لأيام على الملابس"
  },
  {
    id: 304,
    name: "رقائق عود مروكي طبيعي سوبر",
    volume: "30 جم",
    subtitle: "Anwor Royal Oud • زبد كثيف ونكهة مروكية زكية للمجالس",
    price: "480 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "طبيعي 100%",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    topNotes: "رائحة بخورية خشبية باردة",
    heartNotes: "فوحان ملكي ينتشر في أرجاء المكان سريعاً",
    baseNotes: "ثبات طويل وعبق أصيل"
  },
  {
    id: 305,
    name: "عطر عود وود بريفيه",
    volume: "100 مل",
    subtitle: "Anwor Royal Oud • دفء الأخشاب النادرة وجلال العود الصافي",
    price: "1,180 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "اختيار مميز",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "خشب الورد، الهيل، الفلفل الصيني",
    heartNotes: "خشب العود الطبيعي، خشب الصندل، نجيل الهند",
    baseNotes: "حبوب التونكا، الفانيليا، العنبر"
  },
  {
    id: 306,
    name: "بخور دخون الملوك الخاص",
    volume: "معجون معتق",
    subtitle: "Anwor Royal Oud • توليفة فاخرة من مسحوق العود ودهن الورد",
    price: "360 ر.س",
    brand: "ANWOR ROYAL OUD",
    badge: "الأكثر طلبًا",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "الورد الطائفي الفاخر، الزعفران",
    heartNotes: "العود الهندي، الصندل الميسوري",
    baseNotes: "العنبر الجاف، المسك الملكي"
  }
];

// 4. Exclusive Collections / مجموعات حصرية
export const EXCLUSIVE_COLLECTIONS = [
  {
    id: 401,
    name: "مجموعة الديسكفري الاستكشافية",
    volume: "6 عطور × 15 مل",
    subtitle: "Noble Essence • تجربة استكشافية متكاملة لنخبة العطور",
    price: "850 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "مجموعة خاصة",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "عود أصفهان، عنبر رويال، روز بريفيه",
    heartNotes: "ليذر نوار، جولد إكسير، مسك بلانك",
    baseNotes: "باقة استكشافية فاخرة في صندوق هدايا مذهب"
  },
  {
    id: 402,
    name: "صندوق العود الملكي مع مبخرة رخامية",
    volume: "طقم VIP فاخر",
    subtitle: "Noble Essence • VIP Royal Oud Collection Box",
    price: "1,290 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "إصدار محدود",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    topNotes: "أوقية عود مروكي سوبر، تولة دهن عود تراد",
    heartNotes: "مبخرة رخامية يونانية يدوية الصنع بلمسات مذهبة",
    baseNotes: "ملقاط ذهبي فاخر، علبة مخملية مطرزة"
  },
  {
    id: 403,
    name: "طقم الثنائيات العطرية VIP",
    volume: "عطر + معطر شعر",
    subtitle: "Noble Essence • Signature Perfume & Hair Mist Set",
    price: "790 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "الأكثر مبيعًا",
    image: "http://localhost:8000/images/perfume-amber-men.jpg",
    topNotes: "عطر عنبر رويال 100 مل بتركيز بارفان",
    heartNotes: "معطر شعر مغذي ومعطر غني بفيتامين E",
    baseNotes: "تغليف هدايا ملكي باللون الكحلي والذهبي"
  },
  {
    id: 404,
    name: "صندوق النيش الملكي الخاص",
    volume: "عطران + شمعة",
    subtitle: "Noble Essence • Exclusive Twin Luxury Vault",
    price: "1,650 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "طقم حصري",
    image: "http://localhost:8000/images/perfume-noir-men.jpg",
    topNotes: "عطران كاملان من التشكيلة الحصرية",
    heartNotes: "شمعة معطرة من شمع الصويا الطبيعي 250 جم",
    baseNotes: "صندوق خشبي فاخر مبطن بالحرير الأسود"
  }
];

// 5. Luxury Gifts / هدايا فخمة
export const GIFTS_PERFUMES = [
  {
    id: 501,
    name: "صندوق إهداء ملكي مخصص بالاسم",
    volume: "حفر بماء الذهب",
    subtitle: "Noble Essence • Custom Engraved Luxury Gift Box",
    price: "1,450 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "إهداء ملكي",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "حفر ليزر مذهب لاسم متلقي الهدية على الصندوق",
    heartNotes: "عطران ملكيان من التشكيلة الحصرية مع بخور خاص",
    baseNotes: "بطاقة تهنئة فاخرة بختم الشمع الملكي"
  },
  {
    id: 502,
    name: "مبخرة كريستالية مطلية بماء الذهب",
    volume: "ذهب عيار 24",
    subtitle: "Noble Essence • Royal 24K Gold Plated Crystal Censer",
    price: "520 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "تحفة فاخرة",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    topNotes: "كريستال نقي بقطع هندسي ماسي عاكس للضوء",
    heartNotes: "شبك إشعال فولاذي مقاوم للحرارة مطلي بالذهب",
    baseNotes: "علبة إهداء مخملية جاهزة للتقديم المباشر"
  },
  {
    id: 503,
    name: "باقة الإهداء العطري الخاصة",
    volume: "تغليف مخملي",
    subtitle: "Noble Essence • Luxury Gift Wrapping & Presentation Package",
    price: "690 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "باقة إهداء",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "عطر فاخر حسب اختيارك من التشكيلة",
    heartNotes: "صندوق مخملي أنيق مزين بشريط ساتان مذهب",
    baseNotes: "عينات استكشافية إضافية مرفقة مع الإهداء"
  },
  {
    id: 504,
    name: "بطاقة إهداء أنور الملكية VIP",
    volume: "بقيمة 1,000 ر.س",
    subtitle: "Noble Essence • Digital & Physical Royal VIP Voucher",
    price: "1,000 ر.س",
    brand: "NOBLE ESSENCE",
    badge: "بطاقة VIP",
    image: "http://localhost:8000/images/perfume-noir-men.jpg",
    topNotes: "بطاقة ذهبية معدنية ملموسة داخل مغلف ملكي",
    heartNotes: "صالحة للشراء من كافة مجموعات العطور والبخور",
    baseNotes: "صالحة لمدة عام كامل بلا قيود"
  }
];

// Fallback all perfumes
export const PERFUMES = [...MEN_PERFUMES, ...WOMEN_PERFUMES, ...OUD_INCENSE_PERFUMES];
export const DIOR_PERFUMES = PERFUMES; // Backwards compatibility

/**
 * Detect what category or page is currently active
 */
export function detectCurrentCategory() {
  try {
    const path = decodeURIComponent(window.location.pathname || '').toLowerCase();
    const search = decodeURIComponent(window.location.search || '').toLowerCase();
    const hash = decodeURIComponent(window.location.hash || '').toLowerCase();
    const title = (document.title || '').toLowerCase();
    const h1 = (document.querySelector('h1')?.textContent || '').toLowerCase();
    const breadcrumb = (document.querySelector('.breadcrumbs, .breadcrumb, nav[aria-label="breadcrumb"]')?.textContent || '').toLowerCase();

    const combined = path + ' ' + search + ' ' + hash + ' ' + title + ' ' + h1 + ' ' + breadcrumb;

    if (hash.includes('men') || combined.includes('فساتين') || combined.includes('رجالي') || combined.includes('men') || combined.includes('dresses') || combined.includes('c703129794')) {
      return 'MEN';
    }
    if (hash.includes('women') || combined.includes('بلايز') || combined.includes('نسائي') || combined.includes('women') || combined.includes('blouses')) {
      return 'WOMEN';
    }
    if (hash.includes('oud') || combined.includes('تنانير') || combined.includes('عود') || combined.includes('بخور') || combined.includes('oud') || combined.includes('skirts')) {
      return 'OUD';
    }
    if (hash.includes('exclusive') || combined.includes('جاكيت') || combined.includes('حصرية') || combined.includes('مجموعات') || combined.includes('jackets') || combined.includes('exclusive')) {
      return 'EXCLUSIVE';
    }
    if (hash.includes('gift') || combined.includes('تخفيضات') || combined.includes('هدايا') || combined.includes('عروض') || combined.includes('gifts') || combined.includes('sale')) {
      return 'GIFTS';
    }
  } catch (e) {}
  return 'ALL';
}

const CATEGORY_DATA = {
  MEN: {
    title: 'العطور الرجالية الفاخرة',
    subtitle: 'مجموعة مختارة من أرقى العطور التي تجمع بين العمق والجاذبية والأناقة الاستثنائية.',
    breadcrumb: 'العطور الرجالية',
    bannerImage: 'http://localhost:8000/images/perfume-amber-men.jpg',
    items: MEN_PERFUMES
  },
  WOMEN: {
    title: 'العطور النسائية الملكية',
    subtitle: 'توليفات زهرية وحسية آسرة تجسد الأنوثة الطاغية والجاذبية الملكية المطلقة.',
    breadcrumb: 'العطور النسائية',
    bannerImage: 'http://localhost:8000/images/perfume-rose-women.jpg',
    items: WOMEN_PERFUMES
  },
  OUD: {
    title: 'العود والبخور الملكي الخاص',
    subtitle: 'أنقى أدهان العود الطبيعية ورقائق البخور المروكي وعطور العود واللبان النادرة.',
    breadcrumb: 'عود وبخور',
    bannerImage: 'http://localhost:8000/images/perfume-noir-men.jpg',
    items: OUD_INCENSE_PERFUMES
  },
  EXCLUSIVE: {
    title: 'مجموعات النيش الحصرية',
    subtitle: 'مجموعات استكشافية حصرية وبوكسات VIP مصممة لأصحاب الذوق الرفيع والفريد.',
    breadcrumb: 'مجموعات حصرية',
    bannerImage: 'http://localhost:8000/images/perfume-noir-men.jpg',
    items: EXCLUSIVE_COLLECTIONS
  },
  GIFTS: {
    title: 'هدايا فاخرة وعروض ملكية',
    subtitle: 'خيارات إهداء استثنائية مع تغليف ملكي فاخر وبطاقات إهداء مخصصة بالاسم.',
    breadcrumb: 'هدايا فاخرة',
    bannerImage: 'http://localhost:8000/images/perfume-amber-men.jpg',
    items: GIFTS_PERFUMES
  },
  ALL: {
    title: 'أحدث الإصدارات العطرية',
    subtitle: 'نخبة العطور الملكية المختارة بعناية لأصحاب الذوق الرفيع.',
    breadcrumb: 'جميع العطور',
    bannerImage: 'http://localhost:8000/images/perfume-amber-men.jpg',
    items: PERFUMES
  }
};

/**
 * Preserve Preview Query Parameters on all links so the theme stays loaded
 */
export function preservePreviewParams(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith('#') || url.startsWith('javascript:') || url.startsWith('tel:') || url.startsWith('mailto:')) {
    return url;
  }
  try {
    const u = new URL(url, window.location.href);
    if (u.hostname.includes('salla.') || u.hostname === window.location.hostname) {
      u.searchParams.set('assets_url', 'http://localhost:8000');
      u.searchParams.set('ws_port', '8001');
      u.searchParams.set('legacy', '0');
      u.searchParams.set('with_editor', 'false');
      if (u.hostname === 'demostore.salla.sa') {
        u.hostname = 'salla.design';
      }
      return u.toString();
    }
    return url;
  } catch (e) {
    return url;
  }
}

export function initPerfumeShowcase() {
  function transformAllProducts() {
    const currentCatKey = detectCurrentCategory();
    const currentCategory = CATEGORY_DATA[currentCatKey] || CATEGORY_DATA.ALL;
    const perfumeList = currentCategory.items;
    let cardIndex = 0;

    function processCard(card) {
      const perfume = perfumeList[cardIndex % perfumeList.length];
      cardIndex++;

      const root = card.shadowRoot || card;

      // 1. Force Image Replacement with Consistent Container
      const imgs = root.querySelectorAll('img');
      imgs.forEach(img => {
        if (!img.src || !img.src.includes('perfume') || img.src !== perfume.image) {
          img.src = perfume.image;
          img.setAttribute('src', perfume.image);
          if (img.dataset.src) img.dataset.src = perfume.image;
          img.srcset = '';
          img.removeAttribute('srcset');
          img.alt = perfume.name;
          img.style.objectFit = 'contain';
          img.style.backgroundColor = '#f8f6f2';
          img.style.padding = '1rem';
        }
      });

      // 2. Force Title Replacement (clean & readable)
      const titles = root.querySelectorAll('.s-product-card-content-title a, h3 a, h4 a, .s-product-card-title a, a.title');
      titles.forEach(t => {
        if (t.textContent !== perfume.name) {
          t.textContent = perfume.name;
          t.title = perfume.name;
          t.style.color = '#121316';
          t.style.fontSize = '1rem';
          t.style.fontWeight = '700';
        }
      });

      // 3. Force Price Replacement (prominent champagne gold)
      const prices = root.querySelectorAll('.s-product-card-sale-price h4, .s-product-card-price h4, .s-product-card-price, .total-price');
      prices.forEach(p => {
        p.textContent = perfume.price;
        p.style.color = '#cca36e';
        p.style.fontWeight = '800';
      });

      // 4. Force Brand (small, uppercase, subtle)
      const brandSpan = root.querySelector('.perfume-card-brand');
      if (brandSpan && brandSpan.textContent !== perfume.brand) {
        brandSpan.textContent = perfume.brand;
      }

      // 5. Force Short Metadata / Volume (NO long descriptions)
      const sub = root.querySelector('.s-product-card-content-subtitle, .s-product-card-subtitle');
      if (sub && sub.textContent !== (perfume.volume || '100 مل')) {
        sub.textContent = perfume.volume || '100 مل';
        sub.style.color = '#8c8881';
        sub.style.fontSize = '0.8rem';
        sub.style.fontWeight = '500';
      }

      // 6. Force Badge (clean Arabic text: جديد / الأكثر مبيعًا / اختيار مميز)
      const badge = root.querySelector('.s-product-card-promotion-title, .badge');
      if (badge && perfume.badge) {
        badge.textContent = perfume.badge;
      }
    }

    // A. Check salla-products-list (nested shadow roots)
    document.querySelectorAll('salla-products-list, salla-products-slider').forEach(list => {
      const listRoot = list.shadowRoot || list;
      listRoot.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card').forEach(processCard);
    });

    // B. Check top-level cards
    document.querySelectorAll('salla-product-card, custom-salla-product-card, .s-product-card-entry, .s-product-card').forEach(processCard);

    // C. Deep fallback: scan ALL shadow roots
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
      'التنانير': 'عود وبخور',
      'الجاكيتات': 'مجموعات حصرية',
      'تخفيضات': 'هدايا فاخرة',
      'عروض': 'عن أنور',
      'عطور رجالية فاخرة': 'العطور الرجالية',
      'عطور نسائية ملكية': 'العطور النسائية',
      'العود والبخور': 'عود وبخور',
      'العود والبخور الخاص': 'عود وبخور',
      'مجموعات النيش': 'مجموعات حصرية',
      'مجموعات النيش الحصرية': 'مجموعات حصرية',
      'عروض ملكية': 'هدايا فاخرة',
      'عروض العطور الملكية': 'عن أنور'
    };
    document.querySelectorAll('.main-menu a, #mobile-menu a, nav a, .sub-menu a, header a, .breadcrumbs a, .breadcrumb a').forEach(link => {
      const span = link.querySelector('span') || link;
      const text = (span.textContent || '').trim();
      if (catMap[text]) {
        span.textContent = catMap[text];
      }
    });

    // Transform Category Page Title & Subtitle if on category page
    if (currentCatKey !== 'ALL') {
      const catH1 = document.querySelector('h1[data-testid="category-title"], .page-title h1, .category-header h1, h1');
      if (catH1 && !catH1.textContent.includes('الملكية') && !catH1.textContent.includes('الفاخرة')) {
        catH1.textContent = currentCategory.title;
      }
      const catSub = document.querySelector('.category-description, .page-header p, .category-header p');
      if (catSub && !catSub.textContent.includes('عطور')) {
        catSub.textContent = currentCategory.subtitle;
      }
    }

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
      searchBox.style.cssText = 'flex: 1; max-width: 380px; margin: 0 1.5rem;';
      searchBox.innerHTML = `
        <div style="position: relative; display: flex; align-items: center; width: 100%;">
          <input type="text" placeholder="ابحث عن عطر، ماركة، أو مكونات..." style="width: 100%; background: rgba(255, 255, 255, 0.08) !important; color: #ffffff !important; font-weight: 500; padding: 0.55rem 1rem 0.55rem 2.5rem; border-radius: 8px; border: 1px solid rgba(197, 168, 128, 0.35); outline: none; font-size: 0.88rem; transition: border-color 0.2s;" onfocus="this.style.borderColor='#cca36e'" onblur="this.style.borderColor='rgba(197, 168, 128, 0.35)'" onkeydown="if(event.key==='Enter'){window.location.href='/search?q='+encodeURIComponent(this.value)}" />
          <i class="sicon-search" style="position: absolute; left: 12px; color: #cca36e; font-size: 1.1rem; pointer-events: none;"></i>
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

    // 5. Hero Banner fallback (only if not already in Twig)
    const isHome = window.location.pathname === '/' || window.location.pathname === '' || (window.location.pathname.includes('dev-') && !window.location.pathname.includes('/c') && !window.location.pathname.includes('/p/'));
    const existingHero = document.querySelector('.perfume-hero-section, [data-testid="store-perfume-hero"]');
    if (isHome && !existingHero && !document.querySelector('.royal-perfume-hero-injected')) {
      const heroContainer = document.createElement('section');
      heroContainer.className = 'royal-perfume-hero-injected';
      heroContainer.style.cssText = 'max-width: 1240px; margin: 1.5rem auto 1rem; padding: 0 1rem;';
      heroContainer.innerHTML = `
        <div style="position: relative; overflow: hidden; border-radius: 18px; background: #121316; border: 1px solid rgba(197, 168, 128, 0.28); box-shadow: 0 16px 40px rgba(0,0,0,0.35); min-height: 380px; display: flex; align-items: center;">
          <div style="position: absolute; inset: 0; background: linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.85) 45%, rgba(18,19,22,0.3) 100%); z-index: 2;"></div>
          <img src="http://localhost:8000/images/hero-banner-luxury.png" alt="أنور للعطور الملكية - فخامة الحضور وسحر الأثر" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 1;" />
          
          <div style="position: relative; z-index: 3; padding: 3rem 2.5rem; max-width: 580px; text-align: right;">
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(204, 163, 110, 0.12); border: 1px solid rgba(204, 163, 110, 0.4); padding: 0.3rem 0.85rem; border-radius: 999px; font-size: 0.76rem; font-weight: 700; color: #cca36e; margin-bottom: 1.25rem;">
              <i class="sicon-sparkle"></i>
              <span>دار العطور الملكية الفاخرة</span>
            </div>
            <h1 style="color: #faf7f2; font-size: 2.5rem; font-weight: 800; line-height: 1.25; margin: 0 0 1rem; letter-spacing: -0.02em;">عطرك... بصمتك التي لا تُنسى</h1>
            <p style="color: #cfcbc4; font-size: 1.05rem; line-height: 1.65; margin: 0 0 1.75rem; font-weight: 300;">اكتشف مجموعة مختارة من العطور الفاخرة التي تعبّر عن شخصيتك وتترك أثراً استثنائياً في كل حضور.</p>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <a href="/products" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.85rem; border-radius: 8px; background: #cca36e; color: #121316; font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.25s ease; box-shadow: 0 4px 16px rgba(204,163,110,0.3);">
                اكتشف العطور
              </a>
              <a href="/products" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.85rem; border-radius: 8px; background: transparent; border: 1px solid rgba(250,247,242,0.4); color: #faf7f2; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.25s ease;">
                تسوق الآن
              </a>
            </div>
          </div>
        </div>
      `;
      const targetSec = document.querySelector('.perfume-discovery-section, [data-testid="store-perfume-discovery"], #main-content, main, .main-content');
      if (targetSec) {
        targetSec.parentNode.insertBefore(heroContainer, targetSec);
      }
    }

    // 6. 7 Fragrance Families Distinctive Grid (اكتشف عطرك)
    const discoverySec = document.querySelector('.perfume-discovery-section, [data-testid="store-perfume-discovery"]');
    if (discoverySec && !discoverySec.dataset.transformedGridV2 && discoverySec.querySelectorAll('.perfume-family-box').length < 7) {
      discoverySec.dataset.transformedGridV2 = "true";
      discoverySec.style.cssText = 'background: #faf8f5 !important; padding: 2.5rem 0 !important; margin: 1.5rem 0 !important; border-top: 1px solid rgba(197, 168, 128, 0.2); border-bottom: 1px solid rgba(197, 168, 128, 0.2);';
      discoverySec.innerHTML = `
        <div style="max-width: 1240px; margin: 0 auto; padding: 0 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <div>
              <h2 style="font-size: 1.6rem; font-weight: 800; color: #121316; margin: 0 0 0.35rem; text-align: right;">اكتشف عطرك</h2>
              <p style="font-size: 0.88rem; color: #7a7670; margin: 0; text-align: right;">اختر العائلة العطرية التي تمثل شخصيتك وذوقك الخاص</p>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;" class="royal-discovery-grid">
            <a href="/search?q=%D8%B9%D9%88%D8%AF" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-crown" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">عود</span>
            </a>
            <a href="/search?q=%D9%85%D8%B3%D9%83" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-sparkle" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">مسك</span>
            </a>
            <a href="/search?q=%D8%B9%D9%86%D8%A8%D8%B1" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-gem" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">عنبر</span>
            </a>
            <a href="/search?q=%D8%B2%D9%87%D8%B1%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-flower" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">زهري</span>
            </a>
            <a href="/search?q=%D8%AE%D8%B4%D8%A8%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-tree" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">خشبي</span>
            </a>
            <a href="/search?q=%D8%AD%D9%85%D8%B6%D9%8A%D8%A7%D8%AA" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-apple" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">حمضيات</span>
            </a>
            <a href="/search?q=%D8%B4%D8%B1%D9%82%D9%8A" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0.75rem; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 12px; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: all 0.25s ease;">
              <i class="sicon-moon" style="font-size: 1.85rem; color: #cca36e; margin-bottom: 0.5rem;"></i>
              <span style="font-size: 1rem; font-weight: 700; color: #121316;">شرقي</span>
            </a>
          </div>
        </div>
      `;
    }

    // 7. Latest Releases Section Title (on Homepage)
    if (isHome) {
      document.querySelectorAll('.s-block__title h2, .s-block-title h2, .s-block h2, h2').forEach(h2 => {
        const txt = (h2.textContent || '').trim();
        if (txt.includes('منتجات') || txt.includes('الأحدث') || txt.includes('المختارة') || txt.includes('وصل حديثاً')) {
          h2.textContent = 'أحدث الإصدارات';
        }
      });
    }

    // F. Rewrite all links dynamically to preserve preview mode
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#') && !href.startsWith('javascript:') && !href.includes('assets_url=')) {
        a.href = preservePreviewParams(a.href);
      }
    });

    // D. Single Product Page Details
    const singleProductTitle = document.querySelector('h1[data-testid="store-product-title"], .container--product-details h1');
    if (singleProductTitle) {
      const cur = perfumeList[0] || MEN_PERFUMES[0];
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

  // Current active category
  let currentActiveCategory = 'HOME';

  function renderCategoryProducts(categoryKey) {
    const data = CATEGORY_DATA[categoryKey];
    if (!data) return;

    const heroSec = document.querySelector('.royal-perfume-hero-injected');
    const discoverySec = document.querySelector('.perfume-discovery-section, [data-testid="store-perfume-discovery"]');
    const storySec = document.querySelector('.s-block--fragrance-story, [data-testid="store-fragrance-story"]');
    const mainEl = document.querySelector('main, #main-content, .main-content') || document.body;

    let catView = document.querySelector('.royal-category-showcase-view');

    if (categoryKey === 'HOME') {
      if (heroSec) heroSec.style.display = 'block';
      if (discoverySec) discoverySec.style.display = 'block';
      if (storySec) storySec.style.display = 'block';
      if (catView) catView.style.display = 'none';
      document.querySelectorAll('.s-block, .s-block--products, salla-products-list, salla-products-slider').forEach(el => {
        if (!el.closest('.royal-category-showcase-view')) el.style.display = '';
      });
      document.querySelectorAll('.container--products-list, .s-before-products-list, .container--breadcrumbs, #page-main-title').forEach(el => {
        el.style.display = '';
      });
      document.title = 'أنور للعطور الملكية | ANWOR ROYAL PERFUMES';
      return;
    }

    // Hide homepage sections
    if (heroSec) heroSec.style.display = 'none';
    if (discoverySec) discoverySec.style.display = 'none';
    if (storySec) storySec.style.display = 'none';
    document.querySelectorAll('.s-block, .s-block--products, salla-products-list, salla-products-slider, .container--products-list, .s-before-products-list, .container--breadcrumbs, #page-main-title, salla-maintenance-alert, .s-maintenance-alert-wrapper').forEach(el => {
      if (el !== document.body && el !== document.documentElement && !el.closest('.royal-category-showcase-view') && !el.closest('header') && !el.closest('footer')) {
        el.style.display = 'none';
      }
    });

    if (!catView) {
      catView = document.createElement('div');
      catView.className = 'royal-category-showcase-view';
      catView.style.cssText = 'max-width: 1240px; margin: 1.5rem auto 3.5rem; padding: 0 1rem; width: 100%;';
      if (mainEl && mainEl.firstChild) {
        mainEl.insertBefore(catView, mainEl.firstChild);
      } else {
        document.body.appendChild(catView);
      }
    } else {
      catView.style.display = 'block';
    }

    document.title = `${data.title} | أنور للعطور الملكية`;

    // High luxury editorial product cards:
    // Image (4/5 Aspect Ratio, #f8f6f2 background, Wishlist, Clean Badge)
    // Brand (Small, uppercase, tracking)
    // Title (Primary & Readable)
    // Metadata (Volume only - NO long descriptions)
    // Price (Prominent Champagne Gold)
    // Add to Cart Button (Compact, Dark with Gold Icon)
    const cardsHtml = data.items.map(item => `
      <div class="royal-perfume-card" style="background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.22); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 4px 16px rgba(0,0,0,0.03); transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;">
        <div style="background: #f8f6f2; height: 270px; width: 100%; display: flex; align-items: center; justify-content: center; padding: 1.25rem; position: relative;">
          <img src="${item.image}" alt="${item.name}" loading="lazy" style="max-height: 85%; max-width: 85%; object-fit: contain; filter: drop-shadow(0 6px 14px rgba(0,0,0,0.08)); transition: transform 0.4s ease;" />
          
          <button type="button" aria-label="أضف للمفضلة" style="position: absolute; top: 12px; left: 12px; width: 34px; height: 34px; border-radius: 50%; background: #ffffff; border: 1px solid rgba(197, 168, 128, 0.3); display: flex; align-items: center; justify-content: center; color: #121316; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.color='#cca36e'; this.style.borderColor='#cca36e';" onmouseout="this.style.color='#121316'; this.style.borderColor='rgba(197, 168, 128, 0.3)';">
            <i class="sicon-heart" style="font-size: 0.95rem;"></i>
          </button>
          
          <span style="position: absolute; top: 12px; right: 12px; background: #121316; color: #dfcaa7; border: 1px solid rgba(204,163,110,0.3); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.3px;">${item.badge || 'جديد'}</span>
        </div>
        
        <div style="padding: 1.25rem 1.15rem 1.15rem; display: flex; flex-direction: column; flex-grow: 1; text-align: right;">
          <span style="font-size: 0.7rem; font-weight: 700; color: #9e7f53; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.35rem; display: block;">${item.brand}</span>
          <h3 style="color: #121316; font-size: 1rem; font-weight: 700; margin: 0 0 0.35rem; line-height: 1.45;">${item.name}</h3>
          <span style="font-size: 0.8rem; color: #8c8881; font-weight: 500; margin-bottom: 0.95rem; display: block;">${item.volume || '100 مل'}</span>
          
          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 0.85rem; border-top: 1px solid #f0ede6;">
            <div>
              <span style="color: #cca36e; font-size: 1.2rem; font-weight: 800;">${item.price}</span>
            </div>
            <button class="royal-add-cart-btn" data-prod-name="${item.name}" style="background: #121316; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 0.55rem 1.15rem; border-radius: 8px; border: 1px solid #121316; cursor: pointer; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.25s ease;">
              <i class="sicon-shopping-bag" style="color: #cca36e;"></i>
              <span>أضف للسلة</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    catView.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #8c8881; margin-bottom: 1.5rem; text-align: right;">
        <a href="#home" class="royal-back-home" style="color: #121316; text-decoration: none; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;">
          <i class="sicon-home"></i>
          <span>الرئيسية</span>
        </a>
        <span>›</span>
        <span style="color: #cca36e; font-weight: 800;">${data.breadcrumb}</span>
      </div>

      <div class="royal-category-hero-banner" style="background: linear-gradient(135deg, #121316 0%, #1a1b20 100%); border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 16px; padding: 2.25rem 2.5rem; margin-bottom: 2rem; position: relative; overflow: hidden; box-shadow: 0 16px 40px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: space-between; gap: 2rem; min-height: 220px;">
        <div style="position: absolute; top: -50px; left: -50px; width: 220px; height: 220px; background: rgba(204, 163, 110, 0.12); border-radius: 50%; filter: blur(50px); pointer-events: none;"></div>
        
        <div style="max-width: 620px; z-index: 2; text-align: right;">
          <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(204, 163, 110, 0.12); border: 1px solid rgba(204, 163, 110, 0.4); padding: 0.25rem 0.85rem; border-radius: 999px; font-size: 0.76rem; font-weight: 700; color: #cca36e; margin-bottom: 0.85rem;">
            <i class="sicon-sparkle"></i>
            <span>دار العطور الملكية الفاخرة</span>
          </div>
          <h1 style="color: #faf7f2; font-size: 2.25rem; font-weight: 800; margin: 0 0 0.65rem; letter-spacing: -0.01em; line-height: 1.25;">${data.title}</h1>
          <p style="color: #cfcbc4; font-size: 0.98rem; line-height: 1.6; margin: 0 0 1.25rem; font-weight: 300;">${data.subtitle}</p>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: #cca36e; font-weight: 600;">
              <i class="sicon-check-circle"></i>
              <span>مختارات أصلية وحصرية</span>
            </span>
          </div>
        </div>

        <div class="hidden md:flex" style="flex-shrink: 0; width: 220px; height: 190px; z-index: 2; align-items: center; justify-content: center; position: relative;">
          <div style="position: absolute; inset: 0; background: radial-gradient(circle, rgba(204,163,110,0.18) 0%, transparent 70%); border-radius: 50%;"></div>
          <img src="${data.bannerImage || 'http://localhost:8000/images/perfume-amber-men.jpg'}" alt="${data.title}" style="max-height: 100%; max-width: 100%; object-fit: contain; filter: drop-shadow(0 12px 24px rgba(0,0,0,0.5));" />
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; border-bottom: 1px solid rgba(197,168,128,0.22); padding-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <span style="font-weight: 800; color: #121316; font-size: 1.05rem;">عرض ${data.items.length} إصدارات حصرية مختارة</span>
        <span style="font-size: 0.85rem; color: #7a7670; display: inline-flex; align-items: center; gap: 0.3rem;">
          <i class="sicon-shipping-truck" style="color: #cca36e;"></i>
          <span>شحن مجاني وسريع لكافة مدن المملكة للطلبات فوق 500 ريال</span>
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 1.5rem;" class="royal-perfumes-category-grid">
        ${cardsHtml}
      </div>
    `;

    // Wire Back to Home
    const backHome = catView.querySelector('.royal-back-home');
    if (backHome) {
      backHome.addEventListener('click', (e) => {
        e.preventDefault();
        switchCategory('HOME');
      });
    }

    // Wire Add to Cart buttons
    catView.querySelectorAll('.royal-add-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const prodName = btn.dataset.prodName || 'العطر الفاخر';
        const origContent = btn.innerHTML;
        btn.innerHTML = '<i class="sicon-check"></i> <span>تمت الإضافة</span>';
        btn.style.background = '#2e7d32';
        btn.style.borderColor = '#2e7d32';
        btn.style.color = '#ffffff';

        // Update cart counters
        document.querySelectorAll('.s-cart-summary-count, [data-cart-count], .cart-badge').forEach(badge => {
          let count = parseInt(badge.textContent || '0') || 0;
          badge.textContent = count + 1;
          badge.style.display = 'inline-block';
        });

        if (window.salla && salla.notify) {
          salla.notify.success(`تمت إضافة "${prodName}" إلى سلة مشترياتك الفاخرة بنجاح ✨`);
        } else if (window.Swal) {
          Swal.fire({
            title: 'تمت الإضافة بنجاح!',
            text: `تمت إضافة "${prodName}" إلى سلة مشترياتك الفاخرة`,
            icon: 'success',
            confirmButtonText: 'متابعة التسوق',
            confirmButtonColor: '#cca36e'
          });
        }

        setTimeout(() => {
          btn.innerHTML = origContent;
          btn.style.background = '#121316';
          btn.style.borderColor = '#121316';
          btn.style.color = '#ffffff';
        }, 2200);
      });
    });
  }

  function updateMenuHighlight(categoryKey) {
    const catTextMap = {
      HOME: 'الرئيسية',
      MEN: 'العطور الرجالية',
      WOMEN: 'العطور النسائية',
      OUD: 'عود وبخور',
      EXCLUSIVE: 'مجموعات حصرية',
      GIFTS: 'هدايا فاخرة'
    };
    const activeText = catTextMap[categoryKey] || 'الرئيسية';

    document.querySelectorAll('.main-menu li, #mainnav li, nav li, [data-menu-item]').forEach(li => {
      const a = li.querySelector('a');
      if (!a) return;
      const txt = (a.innerText || a.textContent || '').trim();
      const catAttr = a.dataset.royalCat;
      if (catAttr === categoryKey || txt === activeText) {
        li.classList.add('is-active');
        a.style.color = '#cca36e';
        a.style.position = 'relative';
        if (!a.querySelector('.active-bar')) {
          const bar = document.createElement('span');
          bar.className = 'active-bar';
          bar.style.cssText = 'position: absolute; bottom: 0px; left: 10%; right: 10%; height: 2px; background: #cca36e; border-radius: 2px; box-shadow: 0 0 8px rgba(204,163,110,0.8);';
          a.appendChild(bar);
        }
      } else {
        li.classList.remove('is-active');
        a.style.color = '#faf7f2';
        const bar = a.querySelector('.active-bar');
        if (bar) bar.remove();
      }
    });
  }

  function switchCategory(categoryKey) {
    currentActiveCategory = categoryKey;
    updateMenuHighlight(categoryKey);
    renderCategoryProducts(categoryKey);
    if (categoryKey !== 'HOME') {
      try {
        history.pushState(null, '', '#category-' + categoryKey.toLowerCase());
      } catch (e) {}
    } else {
      try {
        history.pushState(null, '', window.location.pathname + window.location.search);
      } catch (e) {}
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchRoyalCategory = switchCategory;
  window._royalCategoryHandler = switchCategory;
  if (window._pendingRoyalCat) {
    const pending = window._pendingRoyalCat;
    delete window._pendingRoyalCat;
    setTimeout(() => switchCategory(pending), 10);
  }

  // Intercept category navigation clicks for instant, smooth rendering
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const royalCat = a.dataset.royalCat;
    const txt = (a.innerText || a.textContent || '').trim();
    const href = (a.getAttribute('href') || '').toLowerCase();

    let targetCat = null;
    if (royalCat) {
      targetCat = royalCat;
    } else if (txt.includes('الرجالية') || href.includes('فساتين') || href.includes('men') || href.includes('c703129794') || href.includes('dresses')) {
      targetCat = 'MEN';
    } else if (txt.includes('النسائية') || href.includes('بلايز') || href.includes('women') || href.includes('blouses')) {
      targetCat = 'WOMEN';
    } else if (txt.includes('عود') || txt.includes('بخور') || href.includes('تنانير') || href.includes('oud') || href.includes('skirts')) {
      targetCat = 'OUD';
    } else if (txt.includes('مجموعات') || txt.includes('حصرية') || href.includes('جاكيت') || href.includes('exclusive') || href.includes('jackets')) {
      targetCat = 'EXCLUSIVE';
    } else if (txt.includes('هدايا') || txt.includes('عروض') || href.includes('تخفيضات') || href.includes('gifts') || href.includes('sale')) {
      targetCat = 'GIFTS';
    } else if (txt === 'الرئيسية' || href === '/' || href === '#home' || a.classList.contains('navbar-brand') || a.dataset.testid === 'store-header-logo') {
      targetCat = 'HOME';
    } else if (href.includes('search?q=') || href.includes('products.index')) {
      const q = decodeURIComponent(href);
      if (q.includes('شرقي') || q.includes('عود')) targetCat = 'OUD';
      else if (q.includes('زهري')) targetCat = 'WOMEN';
      else if (q.includes('خشبي') || q.includes('حمضي') || q.includes('مسك') || q.includes('عنبر')) targetCat = 'MEN';
    }

    if (targetCat) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      switchCategory(targetCat);
    }
  }, true);

  // Listen to browser forward/back buttons
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('men')) switchCategory('MEN');
    else if (hash.includes('women')) switchCategory('WOMEN');
    else if (hash.includes('oud')) switchCategory('OUD');
    else if (hash.includes('exclusive')) switchCategory('EXCLUSIVE');
    else if (hash.includes('gift')) switchCategory('GIFTS');
    else if (hash === '#home' || !hash) switchCategory('HOME');
  });

  // Initial category detection based on URL / hash
  const initialHash = window.location.hash.toLowerCase();
  if (initialHash.includes('men')) {
    switchCategory('MEN');
  } else if (initialHash.includes('women')) {
    switchCategory('WOMEN');
  } else if (initialHash.includes('oud')) {
    switchCategory('OUD');
  } else if (initialHash.includes('exclusive')) {
    switchCategory('EXCLUSIVE');
  } else if (initialHash.includes('gift')) {
    switchCategory('GIFTS');
  } else {
    const initialCat = detectCurrentCategory();
    if (initialCat !== 'ALL') {
      switchCategory(initialCat);
    }
  }

  // Run immediately and continuously every 250ms
  transformAllProducts();
  setInterval(transformAllProducts, 250);
}
