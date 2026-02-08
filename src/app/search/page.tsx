"use client";

import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { FeaturedProducts } from "@/components/homepage/FeaturedProducts";
import { products } from "@/data/products";
import { guides } from "@/data/guides";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const matchingProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.overview.toLowerCase().includes(query.toLowerCase())
  );

  const matchingGuides = guides.filter(
    (g) =>
      g.title.toLowerCase().includes(query.toLowerCase()) ||
      g.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <Search className="w-6 h-6 text-gray-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Search Results
          </h1>
        </div>
        <p className="text-gray-600 mb-8">
          {query ? (
            <>
              Showing results for "<span className="font-medium">{query}</span>"
            </>
          ) : (
            "Enter a search term to find products and guides"
          )}
        </p>

        {query && (
          <>
            {/* Products */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Products ({matchingProducts.length})
              </h2>
              {matchingProducts.length > 0 ? (
                <FeaturedProducts products={matchingProducts} />
              ) : (
                <p className="text-gray-500">No products found.</p>
              )}
            </section>

            {/* Guides */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Guides ({matchingGuides.length})
              </h2>
              {matchingGuides.length > 0 ? (
                <div className="grid gap-4">
                  {matchingGuides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {guide.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 mt-2">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {guide.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No guides found.</p>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </>
  );
}
