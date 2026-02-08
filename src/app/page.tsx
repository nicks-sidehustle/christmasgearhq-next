import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/homepage/HeroSection";
import { FeaturedProducts } from "@/components/homepage/FeaturedProducts";
import { CategoryBrowse } from "@/components/homepage/CategoryBrowse";
import { GuidesSection } from "@/components/homepage/GuidesSection";
import { NewsletterSection } from "@/components/homepage/NewsletterSection";
import { getFeaturedProducts, getProductsByCategory } from "@/lib/content/products";
import { getFeaturedGuides } from "@/data/guides";
import { categories, siteConfig } from "@/config/site";
import { Suspense } from "react";

export default async function HomePage() {
  const featuredProducts = getFeaturedProducts(6);
  const featuredGuides = getFeaturedGuides();
  
  // Map categories with counts
  const categoryData = categories.map(cat => ({
    name: cat.name,
    count: getProductsByCategory(cat.slug).length,
    icon: cat.icon,
    href: `/reviews/${cat.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      
      {/* Subtle Disclaimer */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 max-w-3xl text-center">
          <p className="text-xs text-gray-400">
            We aggregate expert reviews — we don&apos;t test products ourselves.{" "}
            <span className="text-gray-500">But we&apos;re pretty good at finding the best stuff.</span>
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Buying Guides Section */}
      <GuidesSection guides={featuredGuides} />

      {/* Featured Products */}
      <section className="py-10 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Top Rated Products
            </h2>
            <p className="text-sm text-gray-500">
              Highest-rated holiday gear across all categories
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <FeaturedProducts products={featuredProducts} />
          </Suspense>
        </div>
      </section>

      {/* Categories Section */}
      <CategoryBrowse categories={categoryData} />

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
// redeploy trigger
