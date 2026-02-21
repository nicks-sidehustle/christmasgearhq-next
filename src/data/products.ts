// ChristmasGearHQ Products
// ALL ASINs browser-verified working on 2026-02-08
// Each product tested via Amazon browser navigation

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
  // TREE STANDS - VERIFIED 2026-02-08
  {
    slug: "krinner-tree-genie-xxl",
    title: "Krinner Christmas Tree Genie XXL - Green Tree Stand",
    category: "tree-stands",
    price: 135.99,
    rating: 4.6,
    reviewCount: 10933,
    image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B000XRQUSQ?tag=nsh069-20",
    asin: "B000XRQUSQ",
    overview: "The Krinner Tree Genie XXL is the original single cable operation tree stand. One person can set up a tree using the foot pedal—no crawling under the tree required. German-engineered quality.",
    verdict: "The gold standard for tree stands. Worth every penny for the one-person setup.",
    pros: [
      "One-person setup with foot pedal",
      "Holds trees up to 12 feet",
      "1.3-gallon reservoir with level indicator",
      "#1 Best Seller in Christmas Tree Stands"
    ],
    cons: [
      "Premium price (~$136)",
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
    slug: "goliath-welded-steel-tree-stand",
    title: "Goliath Welded Steel Christmas Tree Stand for Live Trees",
    category: "tree-stands",
    price: 73.99,
    rating: 4.8,
    reviewCount: 1795,
    image: "https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B01N8VQ730?tag=nsh069-20",
    asin: "B01N8VQ730",
    overview: "Heavy-duty welded steel construction for live Christmas trees 5-12 feet tall. Amazon's Choice with excellent reviews. Great value.",
    verdict: "Best value for live trees. Rock-solid once set up.",
    pros: [
      "Heavy-duty welded steel",
      "Amazon's Choice",
      "1.5-gallon water reservoir",
      "Half the price of Krinner"
    ],
    cons: [
      "Requires two people for setup",
      "Traditional bolt method"
    ],
    specs: {
      "Max Tree Height": "12 feet",
      "Trunk Diameter": "Up to 6 inches",
      "Water Capacity": "1.5 gallons",
      "Material": "Welded steel"
    },
    featured: true
  },

  // LIGHTS - VERIFIED 2026-02-08
  {
    slug: "100-led-christmas-lights-33ft",
    title: "100 LED Christmas Lights 33ft with 8 Modes",
    category: "lights",
    price: 11.99,
    rating: 5.0,
    reviewCount: 45,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B0FR5B12L9?tag=nsh069-20",
    asin: "B0FR5B12L9",
    overview: "Classic Christmas tree lights with 8 modes and memory function. Green wire blends with trees. Amazon's Choice at an incredible price.",
    verdict: "Best budget Christmas lights. Hard to beat for $12.",
    pros: [
      "8 lighting modes",
      "Memory function",
      "Green wire blends with trees",
      "Amazon's Choice",
      "Under $12"
    ],
    cons: [
      "33 feet may need 2 sets for large trees",
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
  {
    slug: "50ft-outdoor-multicolor-string-lights",
    title: "50Ft Outdoor Multicolor String Lights LED Dimmable",
    category: "lights",
    price: 30.39,
    rating: 4.9,
    reviewCount: 123,
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B0CDLX4KMQ?tag=nsh069-20",
    asin: "B0CDLX4KMQ",
    overview: "Dimmable LED string lights with 25 shatterproof ST38 bulbs. Waterproof for outdoor use. Amazon's Choice.",
    verdict: "Perfect outdoor Christmas lights. Dimmable and weatherproof.",
    pros: [
      "Dimmable brightness",
      "Shatterproof bulbs",
      "Waterproof",
      "50 feet coverage",
      "Amazon's Choice"
    ],
    cons: [
      "Requires outdoor outlet",
      "Multicolor only"
    ],
    specs: {
      "Length": "50 feet",
      "Bulb Count": "25 ST38",
      "Features": "Dimmable",
      "Weather Rating": "Waterproof"
    },
    featured: true
  },

  // ORNAMENTS - VERIFIED 2026-02-08
  {
    slug: "emerald-green-christmas-balls-24pc",
    title: "Emerald Green 2.5\" Christmas Balls Shatterproof Ornaments - 24pcs",
    category: "ornaments",
    price: 13.97,
    rating: 4.2,
    reviewCount: 13081,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B07CJ2RWFQ?tag=nsh069-20",
    asin: "B07CJ2RWFQ",
    overview: "Shatterproof Christmas ball ornaments in rich emerald green. Perfect for families with kids or pets. Set of 24 covers a full tree.",
    verdict: "#1 Best Seller in Christmas Ball Ornaments. Can't go wrong.",
    pros: [
      "#1 Best Seller in Christmas Ball Ornaments",
      "Shatterproof - safe for kids and pets",
      "13,000+ reviews",
      "24-piece set covers full tree",
      "Under $14"
    ],
    cons: [
      "Green only (other colors available separately)",
      "2.5\" size only"
    ],
    specs: {
      "Quantity": "24 pieces",
      "Size": "2.5 inches",
      "Material": "Shatterproof plastic",
      "Color": "Emerald Green"
    },
    featured: true
  },
  {
    slug: "gingerbread-man-ornaments-12pc",
    title: "Gingerbread Man Ornaments for Christmas Tree - 12pcs Assorted",
    category: "ornaments",
    price: 7.99,
    rating: 4.4,
    reviewCount: 5997,
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B08HYRFP6W?tag=nsh069-20",
    asin: "B08HYRFP6W",
    overview: "Adorable 3-inch gingerbread man figurine ornaments. Assorted designs including candy, chef, and sports themes. Kids love these.",
    verdict: "#1 Best Seller in Figurine Ornaments. Adorable and affordable.",
    pros: [
      "#1 Best Seller in Christmas Figurine Ornaments",
      "12 assorted designs",
      "Kids love them",
      "Under $8"
    ],
    cons: [
      "Lightweight - hang carefully",
      "3 inches may be small for large trees"
    ],
    specs: {
      "Quantity": "12 pieces",
      "Size": "3 inches",
      "Styles": "Assorted gingerbread designs"
    },
    featured: true
  },

  // OUTDOOR - VERIFIED 2026-02-08
  {
    slug: "zpisf-gingerbread-man-inflatable-6ft",
    title: "ZPISF 6 FT Christmas Inflatable Gingerbread Man in Hot Cocoa Mug",
    category: "outdoor",
    price: 44.99,
    rating: 4.5,
    reviewCount: 862,
    image: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B0BDR4NJP2?tag=nsh069-20",
    asin: "B0BDR4NJP2",
    overview: "Adorable 6-foot inflatable gingerbread man sitting in a hot cocoa mug. Built-in LED lights for nighttime display. Self-inflating with stakes included.",
    verdict: "Unique yard decoration that stands out from typical Santas and snowmen.",
    pros: [
      "Unique gingerbread/hot cocoa design",
      "Built-in LED lights",
      "Self-inflating",
      "Stakes and tethers included"
    ],
    cons: [
      "Needs outdoor outlet",
      "Must deflate for storage"
    ],
    specs: {
      "Height": "6 feet",
      "Lighting": "Built-in LEDs",
      "Power": "Electric (plug-in)",
      "Includes": "Stakes, tethers"
    },
    featured: true
  },
  {
    slug: "funfanso-snowman-inflatable-7ft",
    title: "FunFanso 7 FT Christmas Inflatables Snowman with Magic Hat LED",
    category: "outdoor",
    price: 39.99,
    rating: 4.6,
    reviewCount: 1744,
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B093SZ8NM9?tag=nsh069-20",
    asin: "B093SZ8NM9",
    overview: "Classic 7-foot snowman with magic hat, bright LED lights, and weatherproof construction. A holiday favorite that kids and neighbors will love.",
    verdict: "Best value giant inflatable. 1,700+ reviews can't be wrong.",
    pros: [
      "7 feet tall - impressive size",
      "Bright LED lights",
      "Weatherproof",
      "1,700+ reviews",
      "Under $40"
    ],
    cons: [
      "Requires flat yard space",
      "Fan runs continuously"
    ],
    specs: {
      "Height": "7 feet",
      "Lighting": "Bright LEDs",
      "Material": "Weatherproof nylon",
      "Power": "Electric fan (included)"
    },
    featured: true
  },

  // STORAGE - VERIFIED 2026-02-08
  {
    slug: "zober-ornament-storage-128",
    title: "ZOBER Large Christmas Ornament Storage Box - 128 Ornaments",
    category: "storage",
    price: 29.99,
    rating: 4.6,
    reviewCount: 25630,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B07RN12RSL?tag=nsh069-20",
    asin: "B07RN12RSL",
    overview: "Store up to 128 standard 3-inch ornaments. Adjustable dividers, durable fabric. #1 Best Seller in Holiday Ornament Storage.",
    verdict: "The best ornament storage for serious collectors.",
    pros: [
      "Holds 128 ornaments",
      "Adjustable dividers",
      "#1 Best Seller",
      "25,000+ reviews"
    ],
    cons: [
      "Only fits 3-inch ornaments",
      "Dividers can shift"
    ],
    specs: {
      "Capacity": "128 ornaments",
      "Ornament Size": "3 inches",
      "Material": "600D Oxford fabric"
    },
    featured: true
  },
  {
    slug: "zober-ornament-storage-64",
    title: "Zober Christmas Ornament Storage Box - 64 Ornaments",
    category: "storage",
    price: 29.99,
    rating: 4.7,
    reviewCount: 6695,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    amazonLink: "https://www.amazon.com/dp/B016YUEHJ4?tag=nsh069-20",
    asin: "B016YUEHJ4",
    overview: "Same quality as the larger ZOBER, sized for smaller collections. Amazon's Choice for ornament storage.",
    verdict: "Best for apartments or starter collections.",
    pros: [
      "Compact size",
      "Amazon's Choice",
      "Same quality construction"
    ],
    cons: [
      "Limited to 64 ornaments",
      "Only 3-inch ornaments"
    ],
    specs: {
      "Capacity": "64 ornaments",
      "Ornament Size": "3 inches",
      "Material": "Non-woven fabric"
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
