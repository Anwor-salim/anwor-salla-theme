/**
 * Luxury Perfume Boutique Multi-Category Showcase Module
 * Designed for Salla Twilight Engine
 * Provides category-specific Dior & Royal Fragrance collections
 * Ensures seamless preview link preservation across all store pages
 */

// 1. Men's Luxury Fragrances / العطور الرجالية
export const MEN_PERFUMES = [
  {
    id: 101,
    name: "عطر ديور سوفاج إكسير المركز - 60 مل",
    subtitle: "Dior Sauvage Elixir • تركيز استثنائي فوّاح",
    price: "980 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "جوزة الطيب، القرفة السيلانية، حب الهيل، الجريب فروت",
    heartNotes: "اللافندر الفرنسي العضوي، الباتشولي النقي",
    baseNotes: "العنبر الداكن، خشب الصندل، نجيل الهند الهايتي، اللبان"
  },
  {
    id: 102,
    name: "عطر ديور هوم إنتنس الأسطوري - 100 مل",
    subtitle: "Dior Homme Intense • السوسن الأرستقراطي الفاخر",
    price: "720 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللافندر التوسكاني الفاخر",
    heartNotes: "السوسن الإيطالي النادر، حبوب الكاكاو، بذور الأمبريت",
    baseNotes: "أخشاب الأرز الفرجينية، نجيل الهند، العنبر الدافئ"
  },
  {
    id: 103,
    name: "عطر سوفاج ديور أو دو بارفان - 100 مل",
    subtitle: "Sauvage Eau de Parfum • الرجولة الأيقونية الأكثر طلباً",
    price: "650 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت الكالابري، الفلفل الحار",
    heartNotes: "فلفل سيشوان، اللافندر، اليانسون النجمي، جوزة الطيب",
    baseNotes: "الأمبروكسان المركز، الفانيليا البابوية العذبة"
  },
  {
    id: 104,
    name: "عطر ديور فهرنهايت بارفان الملكي - 75 مل",
    subtitle: "Fahrenheit Le Parfum • الجلود والحرارة والجاذبية",
    price: "690 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "الجلود الإيطالية، العرقسوس، الماندرين الصقلي",
    heartNotes: "أوراق البنفسج النادرة، الروم، الكزبرة، الكمون",
    baseNotes: "فانيليا بوربون المطلقة، أخشاب الأرز"
  },
  {
    id: 105,
    name: "عطر ديور هوم سبورت المنعش - 125 مل",
    subtitle: "Dior Homme Sport • انتعاش الحمضيات والأخشاب الدافئة",
    price: "560 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "الليمون الصقلي، البرغموت، الألدهيدات المنعشة",
    heartNotes: "الفلفل الوردي، راتنج الإيليمي المهدئ",
    baseNotes: "خشب الأرز، اللبان العماني، العنبر"
  },
  {
    id: 106,
    name: "عطر ديور أو سوفاج بارفان كلاسيك - 100 مل",
    subtitle: "Eau Sauvage Parfum • أناقة كلاسيكية فرنسية رفيعة",
    price: "640 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "الليمون الحامض، البرغموت، إكليل الجبل",
    heartNotes: "الخزامى، نجيل الهند الهايتي، البيتيتغرين",
    baseNotes: "المر الفاخر، طحلب البلوط، أخشاب الأرز"
  }
];

// 2. Women's Royal Fragrances / العطور النسائية
export const WOMEN_PERFUMES = [
  {
    id: 201,
    name: "عطر جادور لور ديور إكسير الذهب - 50 مل",
    subtitle: "J'adore l'Or Dior • الأنوثة المطلقة في قطرات ذهبية",
    price: "890 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "زهر البرتقال الغراسي، الياسمين الغرانديفلوروم",
    heartNotes: "ورد سنتيفوليا المايوي النادر، أزهار الخوخ",
    baseNotes: "الفانيليا التاهيتية، العنبر الحريري، خشب الأرز"
  },
  {
    id: 202,
    name: "عطر مس ديور بارفان الجديد - 80 مل",
    subtitle: "Miss Dior Parfum • باقة من الورد والأخشاب المخملية",
    price: "750 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "الماندرين، الفراولة البرية، المشمش اللذيذ",
    heartNotes: "ورد غراس الاستثنائي، الياسمين المشرق، الفاوانيا",
    baseNotes: "الباتشولي، العنبر الجاف، خشب الأرز، الطحلب"
  },
  {
    id: 203,
    name: "عطر بويزن جيرل ديور أو دو بارفان - 100 مل",
    subtitle: "Poison Girl • إغراء الفانيليا والتونكا الحلوة",
    price: "620 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرتقال المر الصقلي، الليمون المنعش",
    heartNotes: "ورد دمشقي نادر، زهر البرتقال الحسي",
    baseNotes: "حبوب التونكا الفنزويلية، الفانيليا، اللوز، خشب الصندل"
  },
  {
    id: 204,
    name: "عطر روز كابوكي ديور كوليكسيون بريفيه - 125 مل",
    subtitle: "Rose Kabuki Dior Privée • نقاء بتلات الورد والمسك",
    price: "1,250 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    topNotes: "الورد الدمشقي المنعش، الندى الصباحي",
    heartNotes: "براعم الورد الطازجة، الفاوانيا الزهرية",
    baseNotes: "المسك الأبيض البودري الفاخر، العنبر الخفيف"
  },
  {
    id: 205,
    name: "عطر هيبنوتيك بويزن ديور الملكي - 100 مل",
    subtitle: "Hypnotic Poison • سحر اللوز المر والياسمين السامباك",
    price: "630 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "المشمش، البرقوق، جوز الهند الإكزوتيك",
    heartNotes: "الياسمين السامباك، مسك الروم، زنبق الوادي، الورد",
    baseNotes: "اللوز المر، الفانيليا، خشب الصندل، الجاكاراندا"
  },
  {
    id: 206,
    name: "عطر جادور إنفينيسيم ديور - 100 مل",
    subtitle: "J'adore Infinissime • فيض لامتناهٍ من أنقى الأزهار",
    price: "670 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرتقال الأحمر، البرغموت، الفلفل الوردي",
    heartNotes: "مسك الروم الغراسي، الياسمين، زنبق الوادي، الإيلنغ",
    baseNotes: "خشب الصندل الكريمي الدافئ"
  }
];

// 3. Royal Oud & Incense / عود وبخور
export const OUD_INCENSE_PERFUMES = [
  {
    id: 301,
    name: "عطر عود أصفهان ديور لا كوليكسيون بريفيه - 125 مل",
    subtitle: "Oud Ispahan • لقاء الورد الدمشقي العريق والعود الملكي",
    price: "1,450 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "اللابدانوم الإسباني، الزعفران الإيراني الممتاز",
    heartNotes: "الورد الدمشقي العريق، الباتشولي الإندونيسي",
    baseNotes: "العود الكمبودي الملكي المعتق، أخشاب الأرز، اللبان"
  },
  {
    id: 302,
    name: "عطر عنبر نوي ديور لا كوليكسيون بريفيه - 125 مل",
    subtitle: "Ambre Nuit • ليلة ساحرة بين العنبر البحري والورد",
    price: "1,450 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "البرغموت، الجريب فروت الصقلي المنعش",
    heartNotes: "الورد التركي الدموي، الفلفل الوردي الحار",
    baseNotes: "العنبر البحري الرمادي النادر، الباتشولي، الأرز"
  },
  {
    id: 303,
    name: "دهن عود تراد الحطب المعتق الفاخر - ربع تولة",
    subtitle: "نقاء الدهن الطبيعي الصافي برائحة سويتية بخورية",
    price: "950 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    topNotes: "نكهة سويتية عسلية دافئة",
    heartNotes: "طبقات بخورية عميقة مدخنة",
    baseNotes: "ثبات هادئ وفواح يدوم لأيام على الملابس"
  },
  {
    id: 304,
    name: "رقائق عود مروكي طبيعي سوبر مرتفع - أوقية فاخرة (30 جم)",
    subtitle: "زبد كثيف ونكهة مروكية زكية مناسبة للضيافة والمناسبات",
    price: "480 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    topNotes: "رائحة بخورية خشبية باردة",
    heartNotes: "فوحان ملكي ينتشر في أرجاء المكان سريعاً",
    baseNotes: "ثبات طويل وعبق أصيل"
  },
  {
    id: 305,
    name: "عطر عود روز وود ديور بريفيه - 125 مل",
    subtitle: "Oud Rosewood • دفء الأخشاب الشرقية وجلال العود",
    price: "1,450 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "سفرجل، توت العليق",
    heartNotes: "أخشاب الورد الثمينة، خشب الصندل",
    baseNotes: "العود الطبيعي، الجلود الفاخرة"
  },
  {
    id: 306,
    name: "بخور دخون العود الملكي الخاص (معجون عود معتق)",
    subtitle: "توليفة سرية من مسحوق العود، دهن الورد الطائفي، والعنبر",
    price: "360 ر.س",
    brand: "أنور للعطور الملكية",
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
    name: "مجموعة ميني ديور بريفيه ديسكفري (8 عطور × 10 مل)",
    subtitle: "La Collection Privée Discovery Coffret",
    price: "1,850 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "عود أصفهان، جريس ديور، عنبر نوي",
    heartNotes: "ساكورا، روز كابوكي، فانيلا ديوراما",
    baseNotes: "توليفة ملكية استكشافية متكاملة"
  },
  {
    id: 402,
    name: "صندوق العود الملكي مع مبخرة رخامية مذهبة عيار 24",
    subtitle: "VIP Royal Oud Collection Box",
    price: "1,290 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    topNotes: "أوقية عود مروكي سوبر، تولة دهن عود تراد",
    heartNotes: "مبخرة رخامية يونانية يدوية الصنع بلمسات مذهبة",
    baseNotes: "ملقاط ذهبي فاخر، علبة مخملية مطرزة"
  },
  {
    id: 403,
    name: "طقم الثنائيات العطرية VIP (عطر ساواج + معطر شعر فاخر)",
    subtitle: "Dior Sauvage Parfum & Hair Mist Set",
    price: "880 ر.س",
    brand: "DIOR PARIS",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "عطر ساواج 100 مل بتركيز بارفان",
    heartNotes: "معطر شعر مغذي ومعطر برائحة ساواج الأيقونية",
    baseNotes: "تغليف هدايا ملكي باللون الكحلي والذهبي"
  },
  {
    id: 404,
    name: "صندوق نيش بريفيه الملكي (عطران كاملان 125 مل + شمعة معطرة)",
    subtitle: "Dior Privée Exclusive Twin Luxury Vault",
    price: "2,850 ر.س",
    brand: "DIOR PRIVÉE",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "جريس ديور 125 مل + عنبر نوي 125 مل",
    heartNotes: "شمعة ديور المعطرة الفاخرة 250 جم",
    baseNotes: "صندوق خشبي فاخر مبطن بالحرير الأسود"
  }
];

// 5. Luxury Gifts / هدايا فخمة
export const GIFTS_PERFUMES = [
  {
    id: 501,
    name: "صندوق إهداء ملكي فاخر مخصص بالاسم (عطران + بخور)",
    subtitle: "Custom Engraved Luxury Gift Box",
    price: "1,600 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "حفر ليزر مذهب لاسم متلقي الهدية على الصندوق",
    heartNotes: "اختيار أي عطرين من مجموعة ديور بريفيه أو ساواج",
    baseNotes: "توليفة بخور ملكية مع بطاقة تهنئة فاخرة بختم الشمع"
  },
  {
    id: 502,
    name: "مبخرة كريستالية هندسية مطلية بماء الذهب عيار 24",
    subtitle: "Royal 24K Gold Plated Crystal Censer",
    price: "550 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    topNotes: "كريستال نقي بقطع هندسي ماسي عاكس للضوء",
    heartNotes: "شبك إشعال فولاذي مقاوم للحرارة مطلي بالذهب",
    baseNotes: "علبة إهداء فاخرة جاهزة للتقديم المباشر"
  },
  {
    id: 503,
    name: "باقة الإهداء العطري الخاصة (Gift Ribbon & Velvet Box)",
    subtitle: "Luxury Gift Wrapping & Presentation Package",
    price: "790 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "عطر مس ديور أو ساواج حسب اختيارك",
    heartNotes: "صندوق مخملي أنيق مزين بشريط ساتان مذهب",
    baseNotes: "عينات مجانية إضافية مرفقة مع الإهداء"
  },
  {
    id: 504,
    name: "بطاقة إهداء أنور للعطور الملكية VIP (بقيمة 1,000 ر.س)",
    subtitle: "Digital & Physical Royal VIP Voucher",
    price: "1,000 ر.س",
    brand: "أنور للعطور الملكية",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "بطاقة ذهبية معدنية ملموسة داخل مغلف ملكي",
    heartNotes: "صالحة للشراء من كافة مجموعات العطور والبخور",
    baseNotes: "صالحة لمدة عام كامل بلا قيود"
  }
];

// Fallback all perfumes
export const DIOR_PERFUMES = [...MEN_PERFUMES, ...WOMEN_PERFUMES, ...OUD_INCENSE_PERFUMES];

/**
 * Detect what category or page is currently active
 */
function detectCurrentCategory() {
  const path = decodeURIComponent(window.location.pathname || '').toLowerCase();
  const search = decodeURIComponent(window.location.search || '').toLowerCase();
  const title = (document.title || '').toLowerCase();
  const h1 = (document.querySelector('h1')?.textContent || '').toLowerCase();
  const breadcrumb = (document.querySelector('.breadcrumbs, .breadcrumb, nav[aria-label="breadcrumb"]')?.textContent || '').toLowerCase();

  const combined = path + ' ' + search + ' ' + title + ' ' + h1 + ' ' + breadcrumb;

  if (combined.includes('فساتين') || combined.includes('رجالي') || combined.includes('men') || combined.includes('dresses')) {
    return 'MEN';
  }
  if (combined.includes('بلايز') || combined.includes('نسائي') || combined.includes('women') || combined.includes('blouses')) {
    return 'WOMEN';
  }
  if (combined.includes('تنانير') || combined.includes('عود') || combined.includes('بخور') || combined.includes('oud') || combined.includes('skirts')) {
    return 'OUD';
  }
  if (combined.includes('جاكيت') || combined.includes('حصرية') || combined.includes('مجموعات') || combined.includes('jackets') || combined.includes('exclusive')) {
    return 'EXCLUSIVE';
  }
  if (combined.includes('تخفيضات') || combined.includes('هدايا') || combined.includes('عروض') || combined.includes('gifts') || combined.includes('sale')) {
    return 'GIFTS';
  }
  return 'ALL';
}

const CATEGORY_DATA = {
  MEN: {
    title: 'العطور الرجالية الفاخرة',
    subtitle: 'تشكيلة استثنائية من أرقى عطور ديور والعطور الفرنسية الرجالية ذات الفوحان والثبات الأسطوري.',
    breadcrumb: 'العطور الرجالية',
    items: MEN_PERFUMES
  },
  WOMEN: {
    title: 'العطور النسائية الملكية',
    subtitle: 'توليفات زهرية وحسية آسرة تجسد الأنوثة الطاغية والجاذبية الملكية المطلقة.',
    breadcrumb: 'العطور النسائية',
    items: WOMEN_PERFUMES
  },
  OUD: {
    title: 'العود والبخور الملكي الخاص',
    subtitle: 'أنقى أدهان العود الطبيعية ورقائق البخور المروكي وعطور العود واللبان النادرة.',
    breadcrumb: 'عود وبخور',
    items: OUD_INCENSE_PERFUMES
  },
  EXCLUSIVE: {
    title: 'مجموعات النيش الحصرية',
    subtitle: 'مجموعات استكشافية حصرية وبوكسات VIP مصممة لأصحاب الذوق الرفيع والفريد.',
    breadcrumb: 'مجموعات حصرية',
    items: EXCLUSIVE_COLLECTIONS
  },
  GIFTS: {
    title: 'هدايا فخمة وعروض ملكية',
    subtitle: 'خيارات إهداء استثنائية مع تغليف ملكي فاخر وبطاقات إهداء مخصصة بالاسم.',
    breadcrumb: 'هدايا فخمة',
    items: GIFTS_PERFUMES
  },
  ALL: {
    title: 'أحدث الإصدارات العطرية',
    subtitle: 'نخبة العطور الملكية المختارة بعناية لأصحاب الذوق الرفيع.',
    breadcrumb: 'جميع العطور',
    items: DIOR_PERFUMES
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
      // If hostname is demostore.salla.sa, rewrite to salla.design to keep assets connected
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
          img.style.backgroundColor = '#191b22';
          img.style.padding = '8px';
        }
      });

      // 2. Force Title Replacement
      const titles = root.querySelectorAll('.s-product-card-content-title a, h3 a, h4 a, .s-product-card-title a, a.title');
      titles.forEach(t => {
        if (t.textContent !== perfume.name) {
          t.textContent = perfume.name;
          t.title = perfume.name;
          t.style.color = '#ffffff';
        }
      });

      // 3. Force Price Replacement
      const prices = root.querySelectorAll('.s-product-card-sale-price h4, .s-product-card-price h4, .s-product-card-price, .total-price');
      prices.forEach(p => {
        p.textContent = perfume.price;
        p.style.color = '#cca36e';
      });

      // 4. Force Subtitle
      const sub = root.querySelector('.s-product-card-content-subtitle, .s-product-card-subtitle');
      if (sub && !sub.textContent.includes(perfume.brand)) {
        sub.textContent = perfume.brand + ' • ' + perfume.subtitle;
        sub.style.color = '#a09d97';
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

    // 5. Hero Banner (Homepage Only)
    const isHome = window.location.pathname === '/' || window.location.pathname === '' || (window.location.pathname.includes('dev-') && !window.location.pathname.includes('/c') && !window.location.pathname.includes('/p/'));
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

    // 6. 4 Fragrance Family Cards Grid (Homepage Only)
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

  // Intercept any click on internal links to route cleanly preserving preview params
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || !a.href) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return;
    }

    // Always preserve preview query parameters
    const targetUrl = preservePreviewParams(a.href);
    if (targetUrl !== a.href) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = targetUrl;
    }
  }, true);

  // Auto-redirect if page currently missing assets_url in preview mode
  if (!window.location.search.includes('assets_url=') && window.location.hostname.includes('salla.')) {
    const currentUrl = preservePreviewParams(window.location.href);
    if (currentUrl !== window.location.href) {
      window.location.replace(currentUrl);
    }
  }

  // Run immediately and continuously every 250ms
  transformAllProducts();
  setInterval(transformAllProducts, 250);
}
