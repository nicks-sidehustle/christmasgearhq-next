// ChristmasGearHQ - Holiday decorating and gift gear reviews
export const siteConfig = {
  name: "ChristmasGearHQ",
  tagline: "Your Guide to the Best Holiday Gear",
  description: "Find the best Christmas decorations, tree stands, lights, and holiday storage. Expert reviews to make your holiday season magical.",
  url: "https://christmasgearhq.com",
  
  // Branding - festive red and green
  colors: {
    primary: "red",
    accent: "green",
  },
  
  // SEO
  keywords: ["Christmas decorations", "tree stands", "Christmas lights", "holiday storage", "ornament organizers", "outdoor Christmas decor", "artificial Christmas trees"],
  
  // Social
  twitter: "@christmasgearhq",
  
  // Affiliate
  amazonTag: "nsh069-20",
  
  // Analytics
  gaId: "",
  
  // Newsletter
  brevoListId: "3",
};

export const categories = [
  { 
    id: "tree-stands", 
    name: "Tree Stands & Skirts", 
    slug: "tree-stands",
    description: "Sturdy tree stands and decorative tree skirts for every size tree",
    icon: "🎄",
    count: 0 
  },
  { 
    id: "lights", 
    name: "Christmas Lights", 
    slug: "lights",
    description: "Indoor and outdoor lights, from classic strings to smart LED displays",
    icon: "✨",
    count: 0 
  },
  { 
    id: "ornaments", 
    name: "Ornaments & Decor", 
    slug: "ornaments",
    description: "Tree ornaments, stockings, wreaths, and indoor decorations",
    icon: "🎅",
    count: 0 
  },
  { 
    id: "outdoor", 
    name: "Outdoor Decor", 
    slug: "outdoor",
    description: "Yard inflatables, projectors, and outdoor light displays",
    icon: "🦌",
    count: 0 
  },
  { 
    id: "storage", 
    name: "Holiday Storage", 
    slug: "storage",
    description: "Ornament boxes, tree bags, and light reels to keep everything safe",
    icon: "📦",
    count: 0 
  },
];

export type Category = typeof categories[number];
