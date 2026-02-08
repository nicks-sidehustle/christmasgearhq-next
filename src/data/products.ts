// ChristmasGearHQ Products
// Real products with verified Amazon ASINs and images
// Updated: 2026-02-08

export interface Product {
  slug: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  amazonLink: string;
  asin: string;
  overview: string;
  verdict: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  featured: boolean;
}

export const products: Product[] = [
  // TREE STANDS
  {
    slug: "krinner-tree-genie-xxl",
    title: "Krinner Christmas Tree Genie XXL - Green Tree Stand",
    category: "tree-stands",
    price: 135.99,
    rating: 4.6,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/61qnYkHyHOL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B000XRQUSQ?tag=nsh069-20",
    asin: "B000XRQUSQ",
    overview: "The Krinner Tree Genie XXL is the original single cable operation tree stand. One person can set up a tree using the foot pedal—no crawling under the tree required. German-engineered quality that lasts decades.",
    verdict: "The gold standard for tree stands. Worth every penny for the one-person setup alone.",
    pros: [
      "One-person setup with foot pedal",
      "Holds trees up to 12 feet",
      "Large water reservoir with level indicator",
      "German engineering—built to last"
    ],
    cons: [
      "Premium price point",
      "Heavy at 13 lbs"
    ],
    specs: {
      "Max Tree Height": "12 feet",
      "Trunk Diameter": "1-6 inches",
      "Water Capacity": "1.3 gallons",
      "Weight": "13 lbs"
    },
    featured: true
  },
  {
    slug: "goliath-welded-steel-live-tree-stand",
    title: "Goliath Welded Steel Christmas Tree Stand for Live Trees",
    category: "tree-stands",
    price: 73.99,
    rating: 4.8,
    reviewCount: 1700,
    image: "https://m.media-amazon.com/images/I/717dSgbMtKL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B01N8VQ730?tag=nsh069-20",
    asin: "B01N8VQ730",
    overview: "Heavy-duty welded steel construction for live Christmas trees 5-12 feet tall. Traditional bolt design is rock-solid once set up. Great value for the build quality.",
    verdict: "Best value for live trees. The welded steel construction is incredibly durable.",
    pros: [
      "Heavy-duty welded steel",
      "Handles trees up to 12 feet",
      "1.5-gallon water reservoir",
      "Excellent price for quality"
    ],
    cons: [
      "Requires two people for setup",
      "Traditional bolt-tightening method"
    ],
    specs: {
      "Max Tree Height": "12 feet",
      "Trunk Diameter": "Up to 6 inches",
      "Water Capacity": "1.5 gallons",
      "Material": "Welded steel"
    },
    featured: true
  },

  // LIGHTS
  {
    slug: "outdoor-multicolor-string-lights-50ft",
    title: "50Ft Outdoor Multicolor String Lights, LED Dimmable",
    category: "lights",
    price: 24.99,
    rating: 4.5,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71cHI4kJKOL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DY1GT2M5?tag=nsh069-20",
    asin: "B0DY1GT2M5",
    overview: "Dimmable multicolor LED string lights perfect for outdoor Christmas decorations. 50 feet of coverage with shatterproof bulbs and weatherproof construction.",
    verdict: "Great outdoor lights with dimming capability. The multicolor option adds festive variety.",
    pros: [
      "Dimmable brightness control",
      "Shatterproof LED bulbs",
      "Weatherproof for outdoor use",
      "50 feet of coverage"
    ],
    cons: [
      "Requires outdoor outlet",
      "Controller can be bulky"
    ],
    specs: {
      "Length": "50 feet",
      "Bulb Type": "LED",
      "Colors": "Multicolor",
      "Weather Rating": "Weatherproof"
    },
    featured: true
  },
  {
    slug: "christmas-tree-lights-100-led",
    title: "100 LED Christmas Lights 33ft with 8 Modes",
    category: "lights",
    price: 16.99,
    rating: 4.6,
    reviewCount: 4500,
    image: "https://m.media-amazon.com/images/I/81f6XNz4ZBL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CQK1KCHY?tag=nsh069-20",
    asin: "B0CQK1KCHY",
    overview: "Classic Christmas tree lights with 8 lighting modes including steady on and various twinkle patterns. Memory function remembers your last setting. Green wire blends with tree branches.",
    verdict: "Excellent budget lights with all the features you need. Great for indoor trees.",
    pros: [
      "8 lighting modes",
      "Memory function",
      "Green wire blends with trees",
      "Budget-friendly price"
    ],
    cons: [
      "33 feet may not cover large trees",
      "Plug-in only"
    ],
    specs: {
      "Length": "33 feet",
      "LED Count": "100",
      "Modes": "8 lighting modes",
      "Wire Color": "Green"
    },
    featured: true
  },

  // STORAGE
  {
    slug: "zober-ornament-storage-128",
    title: "ZOBER Large Christmas Ornament Storage Box - Stores 128",
    category: "storage",
    price: 29.99,
    rating: 4.6,
    reviewCount: 12000,
    image: "https://m.media-amazon.com/images/I/915XlluKPGL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B07RN12RSL?tag=nsh069-20",
    asin: "B07RN12RSL",
    overview: "Store up to 128 standard 3-inch ornaments in this durable fabric storage box. Adjustable dividers protect delicate decorations. Sturdy handles and reinforced construction.",
    verdict: "The go-to ornament storage for serious collectors. Adjustable dividers are key.",
    pros: [
      "Holds 128 ornaments",
      "Adjustable dividers",
      "Durable fabric construction",
      "Sturdy handles"
    ],
    cons: [
      "Only fits 3-inch ornaments",
      "Dividers can shift"
    ],
    specs: {
      "Capacity": "128 ornaments",
      "Ornament Size": "3 inches",
      "Material": "600D Oxford fabric",
      "Dimensions": "26 x 13 x 13 inches"
    },
    featured: true
  },
  {
    slug: "zober-ornament-storage-64",
    title: "Zober Christmas Ornament Storage Box - Stores 64",
    category: "storage",
    price: 19.99,
    rating: 4.5,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/815hr77CPZL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B016YUEHJ4?tag=nsh069-20",
    asin: "B016YUEHJ4",
    overview: "Compact ornament storage for smaller collections. Holds 64 ornaments with the same quality construction as the larger version. Perfect for apartments or starter collections.",
    verdict: "Great entry-level storage. Same quality, smaller size.",
    pros: [
      "Compact size",
      "Same quality as larger version",
      "Good for apartments",
      "Budget-friendly"
    ],
    cons: [
      "Limited to 64 ornaments",
      "Only fits 3-inch ornaments"
    ],
    specs: {
      "Capacity": "64 ornaments",
      "Ornament Size": "3 inches",
      "Material": "600D Oxford fabric"
    },
    featured: false
  },

  // OUTDOOR
  {
    slug: "inflatable-snowman-polar-bear-10ft",
    title: "10FT Inflatable Christmas Snowman with Polar Bear",
    category: "outdoor",
    price: 89.99,
    rating: 4.4,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71eGuMj0lcL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0B2JHFKQT?tag=nsh069-20",
    asin: "B0B2JHFKQT",
    overview: "Massive 10-foot inflatable featuring a snowman with polar bear. Self-inflating with built-in LED lights for nighttime display. Stakes and tethers included.",
    verdict: "A showstopper for any yard. Kids love it!",
    pros: [
      "Impressive 10-foot height",
      "Self-inflating with fan",
      "Built-in LED lights",
      "Stakes and tethers included"
    ],
    cons: [
      "Requires outdoor outlet",
      "Must deflate in bad weather"
    ],
    specs: {
      "Height": "10 feet",
      "Setup": "Self-inflating",
      "Lighting": "Built-in LED",
      "Power": "Plug-in"
    },
    featured: true
  },
  {
    slug: "joiedomi-christmas-inflatable-tree",
    title: "Joiedomi 7FT Christmas Inflatable Tree Outdoor",
    category: "outdoor",
    price: 49.99,
    rating: 4.5,
    reviewCount: 1500,
    image: "https://m.media-amazon.com/images/I/91yHAT0gwKL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B07JPZXHJQ?tag=nsh069-20",
    asin: "B07JPZXHJQ",
    overview: "Giant 7-foot inflatable Christmas tree perfect for front yards. Self-inflating design sets up in seconds. Built-in lights create a festive glow at night.",
    verdict: "Great size for most yards without being overwhelming. Easy setup.",
    pros: [
      "7-foot size—big but manageable",
      "Quick self-inflating setup",
      "Built-in lights",
      "Good value"
    ],
    cons: [
      "Needs electricity while running",
      "Not as impressive as 10ft+ options"
    ],
    specs: {
      "Height": "7 feet",
      "Setup": "Self-inflating",
      "Lighting": "Built-in LED",
      "Power": "Plug-in"
    },
    featured: false
  },

  // ORNAMENTS/WREATHS
  {
    slug: "pre-lit-christmas-wreath-48in",
    title: "Best Choice Products 48in Pre-Lit Fir Christmas Wreath",
    category: "ornaments",
    price: 89.99,
    rating: 4.5,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/91ClWLpPXzL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0CGCRGKLT?tag=nsh069-20",
    asin: "B0CGCRGKLT",
    overview: "Impressive 48-inch pre-lit Christmas wreath with warm white LED lights. Realistic fir branches with pine cones and berries. Battery or plug-in power options.",
    verdict: "Makes a statement on any door. The 48-inch size is impressive.",
    pros: [
      "Large 48-inch diameter",
      "Pre-lit with LEDs",
      "Realistic fir with pine cones",
      "Battery or plug-in options"
    ],
    cons: [
      "May be too large for some doors",
      "Heavy—needs sturdy hook"
    ],
    specs: {
      "Diameter": "48 inches",
      "Lights": "Warm white LED",
      "Power": "Battery or plug-in",
      "Decorations": "Pine cones, berries"
    },
    featured: true
  },
  {
    slug: "pre-lit-christmas-wreath-36in",
    title: "Best Choice Products 36in Pre-Lit Fir Christmas Wreath",
    category: "ornaments",
    price: 59.99,
    rating: 4.5,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/91DNY-YkoGL._AC_SL1500_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0DHSWHCQZ?tag=nsh069-20",
    asin: "B0DHSWHCQZ",
    overview: "Classic 36-inch pre-lit wreath—the perfect size for most front doors. Same quality as the 48-inch version in a more manageable size.",
    verdict: "The sweet spot for most homes. Great quality at a reasonable price.",
    pros: [
      "Perfect 36-inch size for most doors",
      "Pre-lit with LEDs",
      "Realistic fir branches",
      "More affordable than 48-inch"
    ],
    cons: [
      "Less impressive than larger sizes",
      "Limited decoration options"
    ],
    specs: {
      "Diameter": "36 inches",
      "Lights": "Warm white LED",
      "Power": "Battery or plug-in"
    },
    featured: false
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  const featured = products.filter((p) => p.featured);
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
