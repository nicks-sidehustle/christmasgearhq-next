// ChristmasGearHQ Products
// Real products with Amazon affiliate links

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
  {
    slug: "krinner-tree-genie-xxl-christmas-tree-stand",
    title: "Krinner Tree Genie XXL Christmas Tree Stand",
    category: "tree-stands",
    price: 79.99,
    rating: 4.7,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/81s2FhLsURL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B00BSRT9TS?tag=nsh069-20",
    asin: "B00BSRT9TS",
    overview: "The Krinner Tree Genie XXL is widely considered the best Christmas tree stand available. Its unique foot-pedal clamping mechanism lets you set up a tree single-handedly—no crawling under the tree to tighten bolts. Wirecutter's top pick for years.",
    verdict: "Worth every penny. The one-person setup alone justifies the premium price, and it'll last decades. Buy it once, never think about tree stands again.",
    pros: [
      "One-person setup with foot pedal—no helper needed",
      "Incredibly stable (maxed out force testing equipment)",
      "2.5-gallon reservoir with water level gauge",
      "Handles trunk diameters from 1 to 7 inches",
      "Attractive design that looks good without a tree skirt"
    ],
    cons: [
      "Premium price point",
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
    slug: "cinco-c-148e-express-christmas-tree-stand",
    title: "Cinco C-148E Express Christmas Tree Stand",
    category: "tree-stands",
    price: 44.99,
    rating: 4.5,
    reviewCount: 3200,
    image: "https://m.media-amazon.com/images/I/71jqK6g2lnL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0006HO0NC?tag=nsh069-20",
    asin: "B0006HO0NC",
    overview: "The Cinco Express offers excellent stability and a massive 3-gallon water reservoir at a more accessible price point. Uses a cable-tightening system that's easier than traditional bolts but requires a helper for setup.",
    verdict: "Best value for those who have a helper for setup. The huge water capacity means less frequent refilling, and it's rock-solid once installed.",
    pros: [
      "Huge 3-gallon water reservoir",
      "Very stable once set up",
      "More affordable than premium options",
      "Handles up to 10-foot trees"
    ],
    cons: [
      "Requires two people for setup",
      "Takes more effort to level the tree",
      "Plastic construction feels less premium"
    ],
    specs: {
      "Max Tree Height": "10 feet",
      "Trunk Diameter": "Up to 6 inches",
      "Water Capacity": "3 gallons",
      "Material": "Heavy-duty plastic"
    },
    featured: true
  },
  {
    slug: "twinkle-star-200-led-christmas-string-lights",
    title: "Twinkle Star 200 LED Christmas String Lights (66ft)",
    category: "lights",
    price: 16.99,
    rating: 4.6,
    reviewCount: 45000,
    image: "https://m.media-amazon.com/images/I/81OqfPY7F3L._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B07FSLWPRB?tag=nsh069-20",
    asin: "B07FSLWPRB",
    overview: "These versatile LED string lights work for both indoor and outdoor use with 8 lighting modes. The warm white glow creates a classic Christmas ambiance, and the 66-foot length covers a large tree or outdoor area easily.",
    verdict: "Excellent budget lights that look way more expensive than they are. The multiple modes and weatherproof design make them versatile for any Christmas setup.",
    pros: [
      "8 lighting modes including steady and various twinkle patterns",
      "Waterproof for outdoor use",
      "66 feet covers large trees easily",
      "Memory function remembers last mode",
      "Low energy LED bulbs"
    ],
    cons: [
      "Plug-in only (no battery option)",
      "Green wire may be visible on white trees"
    ],
    specs: {
      "Length": "66 feet",
      "LED Count": "200",
      "Modes": "8 lighting modes",
      "Power": "Plug-in (29V)",
      "Indoor/Outdoor": "Both"
    },
    featured: true
  },
  {
    slug: "santas-bags-christmas-tree-storage-bag",
    title: "Santa's Bags Upright Christmas Tree Storage Bag",
    category: "storage",
    price: 39.99,
    rating: 4.4,
    reviewCount: 12000,
    image: "https://m.media-amazon.com/images/I/71EF5c2sYQL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B001FA1O2O?tag=nsh069-20",
    asin: "B001FA1O2O",
    overview: "Store your artificial Christmas tree upright in this heavy-duty bag—no disassembly required. The rolling base and handles make it easy to move to storage, and the zipper closure keeps dust and pests out all year.",
    verdict: "A game-changer if you have storage space for upright trees. Saves hours of assembly time each year and protects your tree investment.",
    pros: [
      "Store tree assembled—saves setup time",
      "Rolling wheels for easy transport",
      "Heavy-duty material protects from dust and pests",
      "Multiple size options available"
    ],
    cons: [
      "Requires vertical storage space",
      "Premium price for a storage bag",
      "May not fit in standard closets"
    ],
    specs: {
      "Fits Trees Up To": "9 feet",
      "Material": "Heavy-duty polyester",
      "Closure": "Full zipper",
      "Wheels": "Yes, rolling base"
    },
    featured: true
  },
  {
    slug: "sterilite-64-qt-ornament-storage-box",
    title: "Sterilite 64-Qt Ornament Storage Box with Dividers",
    category: "storage",
    price: 24.99,
    rating: 4.6,
    reviewCount: 8500,
    image: "https://m.media-amazon.com/images/I/71EcO5qWAuL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B000QSTPOG?tag=nsh069-20",
    asin: "B000QSTPOG",
    overview: "This sturdy ornament storage box keeps your decorations organized and protected year-round. Adjustable dividers let you customize compartments for different ornament sizes, and the clear lid lets you see contents without opening.",
    verdict: "Essential for anyone with a serious ornament collection. The adjustable dividers mean you can adapt it as your collection grows.",
    pros: [
      "Adjustable dividers for custom sizing",
      "Clear lid for easy content identification",
      "Stackable design saves space",
      "Protects delicate ornaments"
    ],
    cons: [
      "Dividers can shift during transport",
      "Doesn't fit extra-large ornaments"
    ],
    specs: {
      "Capacity": "64 quarts",
      "Dimensions": "23 x 16 x 6.25 inches",
      "Material": "Durable plastic",
      "Dividers": "Adjustable"
    },
    featured: false
  },
  {
    slug: "gemmy-airblown-inflatable-santa-sleigh-reindeer",
    title: "Gemmy 12ft Airblown Inflatable Santa with Sleigh and Reindeer",
    category: "outdoor",
    price: 149.99,
    rating: 4.3,
    reviewCount: 2800,
    image: "https://m.media-amazon.com/images/I/71FjySNJToL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B0B4YZNTC5?tag=nsh069-20",
    asin: "B0B4YZNTC5",
    overview: "This massive 12-foot Santa and sleigh inflatable makes a statement in any yard. Self-inflating with internal lights for nighttime visibility. Stakes and tethers included for secure setup even in windy conditions.",
    verdict: "The showstopper for outdoor displays. Kids love it, neighbors will notice. Just make sure you have the yard space for 12 feet of Christmas cheer.",
    pros: [
      "Impressive 12-foot size",
      "Self-inflating with built-in fan",
      "Internal LED lights for nighttime glow",
      "Stakes and tethers included"
    ],
    cons: [
      "Requires outdoor outlet",
      "Must deflate/store in bad weather",
      "Uses electricity while running"
    ],
    specs: {
      "Size": "12 feet long",
      "Setup": "Self-inflating",
      "Lighting": "Internal LED",
      "Power": "Plug-in"
    },
    featured: true
  },
  {
    slug: "christmas-projector-lights-outdoor",
    title: "Christmas Projector Lights Outdoor - Snow Falling LED",
    category: "outdoor",
    price: 32.99,
    rating: 4.4,
    reviewCount: 15000,
    image: "https://m.media-amazon.com/images/I/71kfG7t0xSL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B07YMTBNVN?tag=nsh069-20",
    asin: "B07YMTBNVN",
    overview: "Project a magical snowfall effect onto your house or trees without the mess of real snow. Waterproof design works in all weather, with adjustable speed and timer function. Covers up to 40 feet of projection distance.",
    verdict: "Maximum impact for minimal effort. Stick it in the ground, plug it in, and your whole house looks festive. The snow effect is surprisingly realistic.",
    pros: [
      "Covers large area (up to 40ft projection)",
      "Realistic snow-falling effect",
      "Waterproof for outdoor use",
      "Timer function and adjustable speed",
      "Very easy setup"
    ],
    cons: [
      "Needs outdoor outlet",
      "Effect is better at night",
      "Bulb replacement can be tricky"
    ],
    specs: {
      "Projection Distance": "Up to 40 feet",
      "Power": "Plug-in",
      "Weather Rating": "IP65 Waterproof",
      "Timer": "Yes, 6 hours on/18 off"
    },
    featured: false
  },
  {
    slug: "national-tree-company-48-inch-wreath",
    title: "National Tree Company 48-Inch Pre-Lit Christmas Wreath",
    category: "ornaments",
    price: 89.99,
    rating: 4.5,
    reviewCount: 3500,
    image: "https://m.media-amazon.com/images/I/91TQ-hNjORL._AC_SX569_.jpg",
    amazonLink: "https://www.amazon.com/dp/B00HDZZ3UW?tag=nsh069-20",
    asin: "B00HDZZ3UW",
    overview: "This substantial 48-inch wreath makes a grand statement on any front door or above a fireplace. Pre-lit with warm white LEDs and decorated with pine cones and berries for a classic look.",
    verdict: "If you want a wreath that impresses, this is it. The pre-lit convenience and quality construction justify the premium price.",
    pros: [
      "Impressive 48-inch diameter",
      "Pre-lit with 200 warm white LEDs",
      "Realistic mixed greenery with pine cones",
      "Battery or plug-in power options"
    ],
    cons: [
      "Large size may overwhelm smaller doors",
      "Premium price point",
      "Heavy—needs sturdy hook"
    ],
    specs: {
      "Diameter": "48 inches",
      "Lights": "200 warm white LEDs",
      "Power": "Battery or plug-in",
      "Decorations": "Pine cones, berries"
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
