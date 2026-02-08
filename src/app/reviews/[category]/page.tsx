import { SiteHeader } from "@/components/SiteHeader";
import { FeaturedProducts } from "@/components/homepage/FeaturedProducts";
import { categories } from "@/config/site";
import { getProductsByCategory } from "@/lib/content/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  
  if (!cat) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${cat.name} Reviews | ChristmasGearHQ`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <>
      <SiteHeader />
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/reviews" className="hover:text-gray-700">Reviews</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{cat.name}</span>
          </nav>

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{cat.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {cat.name}
              </h1>
              <p className="text-gray-600 mt-1">
                {cat.description}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {products.length} products
              </p>
            </div>
          </div>

          {/* Products */}
          {products.length > 0 ? (
            <FeaturedProducts products={products} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              No products in this category yet.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
