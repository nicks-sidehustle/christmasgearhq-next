// ChristmasGearHQ Products
// Real products with Amazon affiliate links
// TODO: Update images with real Amazon product images

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

// Use verified Krinner image and placeholders for others until we get real URLs
export const products: Product[] = [
  {
    slug: "krinner-tree-genie-xxl-christmas-tree-stand",
    title: "Krinner Tree Genie XXL Deluxe Christmas Tree Stand",
    category: "tree-stands",
    price: 145.99,
    rating: 4.6,
    reviewCount: 10933,
    image: "https://m.media-amazon.com/images/I/71RWqiEssPL._AC_SX679_.jpg",
    amazonLink: "https://www.amazon.com/dp/B000CCSXH8?tag=nsh069-20",
    asin: "B000CCSXH8",
    overview: "The Krinner Tree Genie XXL Deluxe is widely considered the best Christmas tree stand available. Its unique foot-pedal clamping mechanism lets you set up a tree single-handedly—no crawling under the tree to tighten bolts. Wirecutter's top pick for years. German-engineered quality.",
    verdict: "Worth every penny. The one-person setup alone justifies the premium price, and it'll last decades. Buy it once, never think about tree stands again.",
    pros: [
      "One-person setup with foot pedal—no helper needed",
      "Incredibly stable even with 12ft trees",
      "2.5-gallon reservoir with water level indicator",
      "Handles trunk diameters from 1 to 7 inches",
      "German engineering—built to last generations"
    ],
    cons: [
      "Premium price point ($145+)",
      "Narrow watering opening requires careful pouring",
      "Heavy (18 lbs) though that adds stability"
    ],
    specs: {
      "Max Tree Height": "12 feet",
      "Trunk Diameter Range": "1-7 inches",
      "Water Capacity": "2.5 gallons",
      "Stand Weight": "18 lbs",
      "Material": "Steel and heavy-duty plastic"
    },
    featured: true
  },
  {
    slug: "goliath-welded-steel-christmas-tree-stand",
    title: "Goliath Welded Steel Christmas Tree Stand",
    category: "tree-stands",
    price: 44.99,
    rating: 4.8,
    reviewCount: 2000,
    image: "https://placehold.co/600x600/2d5016/white?text=Tree+Stand",
    amazonLink: "https://www.amazon.com/s?k=goliath+christmas+tree+stand&tag=nsh069-20",
    asin: "B0B8N6JC7Q",
    overview: "The Goliath Welded Steel stand handles Christmas trees from 4 to 8 feet tall. Heavy-duty welded steel construction provides rock-solid stability at a budget-friendly price point.",
    verdict: "Best value for budget-conscious buyers. The welded steel construction is incredibly durable.",
    pros: [
      "Heavy-duty welded steel construction",
      "Budget-friendly price",
      "Fits most standard trees 4-8 feet"
    ],
    cons: [
      "Requires two people for setup",
      "Traditional bolt-tightening method",
      "Smaller water capacity"
    ],
    specs: {
      "Max Tree Height": "8 feet",
      "Trunk Diameter": "Up to 5 inches",
      "Material": "Welded steel"
    },
    featured: false
  },
  {
    slug: "twinkle-star-christmas-string-lights",
    title: "Twinkle Star 200 LED Christmas String Lights (66ft)",
    category: "lights",
    price: 15.99,
    rating: 4.4,
    reviewCount: 3700,
    image: "https://placehold.co/600x600/1e3a5f/white?text=String+Lights",
    amazonLink: "https://www.amazon.com/s?k=christmas+string+lights+66ft+led&tag=nsh069-20",
    asin: "B07FSLWPRB",
    overview: "These versatile LED string lights work for both indoor and outdoor use with 8 lighting modes. The warm white glow creates a classic Christmas ambiance, and the 66-foot length covers a large tree or outdoor area easily.",
    verdict: "Excellent budget lights that look way more expensive than they are. The multiple modes and weatherproof design make them versatile.",
    pros: [
      "8 lighting modes",
      "Waterproof for outdoor use",
      "66 feet covers large trees easily",
      "Memory function",
      "Low energy LED bulbs"
    ],
    cons: [
      "Plug-in only (no battery option)",
      "Green wire visible on white trees"
    ],
    specs: {
      "Length": "66 feet",
      "LED Count": "200",
      "Modes": "8 lighting modes",
      "Power": "Plug-in",
      "Indoor/Outdoor": "Both"
    },
    featured: true
  },
  {
    slug: "home-lighting-christmas-mini-lights",
    title: "Home Lighting 66ft Christmas Decorative Mini Lights",
    category: "lights",
    price: 16.99,
    rating: 4.6,
    reviewCount: 16300,
    image: "https://placehold.co/600x600/1e3a5f/white?text=Mini+Lights",
    amazonLink: "https://www.amazon.com/s?k=christmas+mini+lights+66ft&tag=nsh069-20",
    asin: "B0CKGWQ7JX",
    overview: "Green wire fairy lights perfect for wrapping around trees, bushes, and outdoor decorations. 200 LED bulbs in warm white with 8 modes. Highly rated with over 16,000 reviews.",
    verdict: "Best-seller for good reason. These lights look beautiful and have excellent longevity based on reviews.",
    pros: [
      "8 lighting modes",
      "Green wire blends with greenery",
      "16,000+ positive reviews",
      "UL certified"
    ],
    cons: [
      "Warm white only (no multicolor)",
      "Plug-in required"
    ],
    specs: {
      "Length": "66 feet",
      "LED Count": "200",
      "Modes": "8 lighting modes",
      "Wire Color": "Green"
    },
    featured: true
  },
  {
    slug: "santas-bags-christmas-tree-storage",
    title: "Santa's Bags Upright Christmas Tree Storage Bag",
    category: "storage",
    price: 49.99,
    rating: 4.4,
    reviewCount: 12000,
    image: "https://placehold.co/600x600/8B0000/white?text=Tree+Storage",
    amazonLink: "https://www.amazon.com/s?k=santa+bags+upright+tree+storage&tag=nsh069-20",
    asin: "B001FA1O2O",
    overview: "Store your artificial Christmas tree upright in this heavy-duty bag—no disassembly required. Rolling base and handles make it easy to move to storage.",
    verdict: "A game-changer if you have storage space for upright trees. Saves hours of assembly time each year.",
    pros: [
      "Store tree assembled—saves setup time",
      "Rolling wheels for easy transport",
      "Heavy-duty material",
      "Multiple size options"
    ],
    cons: [
      "Requires vertical storage space",
      "Premium price for a storage bag"
    ],
    specs: {
      "Fits Trees Up To": "9 feet",
      "Material": "Heavy-duty polyester",
      "Wheels": "Yes, rolling base"
    },
    featured: true
  },
  {
    slug: "ornament-storage-box-dividers",
    title: "Premium Ornament Storage Box with Adjustable Dividers",
    category: "storage",
    price: 24.99,
    rating: 4.6,
    reviewCount: 8500,
    image: "https://placehold.co/600x600/8B0000/white?text=Ornament+Box",
    amazonLink: "https://www.amazon.com/s?k=ornament+storage+box+dividers&tag=nsh069-20",
    asin: "B000QSTPOG",
    overview: "Sturdy ornament storage box with adjustable dividers to customize compartments for different sizes. Clear lid lets you see contents without opening.",
    verdict: "Essential for anyone with a serious ornament collection. The adjustable dividers adapt as your collection grows.",
    pros: [
      "Adjustable dividers",
      "Clear lid for identification",
      "Stackable design",
      "Protects delicate ornaments"
    ],
    cons: [
      "Dividers can shift during transport",
      "Doesn't fit extra-large ornaments"
    ],
    specs: {
      "Capacity": "64 quarts",
      "Material": "Durable plastic",
      "Dividers": "Adjustable"
    },
    featured: false
  },
  {
    slug: "gemmy-inflatable-santa-sleigh",
    title: "Gemmy 12ft Airblown Inflatable Santa with Sleigh",
    category: "outdoor",
    price: 149.99,
    rating: 4.3,
    reviewCount: 2800,
    image: "https://placehold.co/600x600/c41e3a/white?text=Santa+Inflatable",
    amazonLink: "https://www.amazon.com/s?k=gemmy+inflatable+santa+sleigh+12ft&tag=nsh069-20",
    asin: "B0B4YZNTC5",
    overview: "This massive 12-foot Santa and sleigh inflatable makes a statement in any yard. Self-inflating with internal lights for nighttime visibility.",
    verdict: "The showstopper for outdoor displays. Kids love it, neighbors will notice.",
    pros: [
      "Impressive 12-foot size",
      "Self-inflating",
      "Internal LED lights",
      "Stakes and tethers included"
    ],
    cons: [
      "Requires outdoor outlet",
      "Must deflate in bad weather",
      "Uses electricity while running"
    ],
    specs: {
      "Size": "12 feet long",
      "Setup": "Self-inflating",
      "Lighting": "Internal LED"
    },
    featured: true
  },
  {
    slug: "christmas-projector-lights-snow",
    title: "Christmas Projector Lights - Snow Falling LED",
    category: "outdoor",
    price: 32.99,
    rating: 4.4,
    reviewCount: 15000,
    image: "https://placehold.co/600x600/1e3a5f/white?text=Snow+Projector",
    amazonLink: "https://www.amazon.com/s?k=christmas+projector+snow+lights&tag=nsh069-20",
    asin: "B07YMTBNVN",
    overview: "Project a magical snowfall effect onto your house or trees without the mess of real snow. Waterproof design works in all weather with timer function.",
    verdict: "Maximum impact for minimal effort. The snow effect is surprisingly realistic.",
    pros: [
      "Covers large area (up to 40ft)",
      "Realistic snow-falling effect",
      "Waterproof",
      "Timer function"
    ],
    cons: [
      "Needs outdoor outlet",
      "Better at night"
    ],
    specs: {
      "Projection Distance": "Up to 40 feet",
      "Weather Rating": "IP65 Waterproof",
      "Timer": "6 hours on/18 off"
    },
    featured: false
  },
  {
    slug: "pre-lit-christmas-wreath-48-inch",
    title: "National Tree 48-Inch Pre-Lit Christmas Wreath",
    category: "ornaments",
    price: 89.99,
    rating: 4.5,
    reviewCount: 3500,
    image: "https://placehold.co/600x600/2d5016/white?text=Wreath+48in",
    amazonLink: "https://www.amazon.com/s?k=pre+lit+christmas+wreath+48+inch&tag=nsh069-20",
    asin: "B00HDZZ3UW",
    overview: "This substantial 48-inch wreath makes a grand statement on any front door. Pre-lit with warm white LEDs and decorated with pine cones and berries.",
    verdict: "If you want a wreath that impresses, this is it. Pre-lit convenience and quality construction.",
    pros: [
      "Impressive 48-inch diameter",
      "Pre-lit with 200 LEDs",
      "Realistic mixed greenery",
      "Battery or plug-in power"
    ],
    cons: [
      "May overwhelm smaller doors",
      "Premium price",
      "Heavy—needs sturdy hook"
    ],
    specs: {
      "Diameter": "48 inches",
      "Lights": "200 warm white LEDs",
      "Power": "Battery or plug-in"
    },
    featured: true
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
