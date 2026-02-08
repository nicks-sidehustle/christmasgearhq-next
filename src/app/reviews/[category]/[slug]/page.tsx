import { SiteHeader } from "@/components/SiteHeader";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/content/products";
import { categories } from "@/config/site";
import { notFound } from "next/navigation";
import Link from "next/link";
// Using regular img tags for external Amazon images
import { ChevronRight, Star, ExternalLink, Check, X } from "lucide-react";
import { FeaturedProducts } from "@/components/homepage/FeaturedProducts";

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} Review | ChristmasGearHQ`,
    description: product.overview,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== category) {
    notFound();
  }

  const cat = categories.find((c) => c.slug === category);
  const relatedProducts = getRelatedProducts(product, 3);

  return (
    <>
      <SiteHeader />
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/reviews" className="hover:text-gray-700">Reviews</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/reviews/${category}`} className="hover:text-gray-700 capitalize">
              {category.replace(/-/g, ' ')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 line-clamp-1">{product.title.substring(0, 30)}...</span>
          </nav>

          {/* Product Header */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image */}
              <div className="relative h-64 md:h-80 bg-gray-50 rounded-xl flex items-center justify-center">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain p-6"
                  />
                ) : (
                  <div className="text-gray-400">No Image</div>
                )}
              </div>

              {/* Info */}
              <div>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full capitalize">
                  {category.replace(/-/g, ' ')}
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-3 mb-4">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">{product.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{product.reviewCount} reviews</span>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-green-600 mb-6">
                  ${product.price.toFixed(2)}
                </div>

                {/* CTA */}
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="sponsored noopener"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{product.overview}</p>
          </section>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Pros */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" /> Pros
              </h3>
              <ul className="space-y-2">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                <X className="w-5 h-5" /> Cons
              </h3>
              <ul className="space-y-2">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specs */}
          {Object.keys(product.specs).length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-white' : ''}>
                        <td className="px-4 py-3 font-medium text-gray-900">{key}</td>
                        <td className="px-4 py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Verdict */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Verdict</h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">{product.verdict}</p>
            </div>
          </section>

          {/* Buy CTA */}
          <div className="bg-gray-900 rounded-xl p-6 text-center mb-12">
            <p className="text-gray-400 mb-2">Ready to make your holidays magical?</p>
            <a
              href={product.amazonLink}
              target="_blank"
              rel="sponsored noopener"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Check Price on Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
              <FeaturedProducts products={relatedProducts} />
            </section>
          )}
        </div>
      </main>
    </>
  );
}
