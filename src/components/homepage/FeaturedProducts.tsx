"use client";

import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const shortTitle = product.title.length > 60 
    ? product.title.substring(0, 60) + '...' 
    : product.title;

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all">
      {/* Image */}
      <div className="relative h-40 bg-gray-50 flex items-center justify-center">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain p-4"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`text-gray-400 text-sm ${product.image ? 'hidden' : ''}`}>
          No Image
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded capitalize">
          {product.category.replace(/-/g, ' ')}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mt-2 mb-1 line-clamp-2 text-sm">
          {shortTitle}
        </h3>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-400">({product.reviewCount})</span>
          </div>
          <span className="font-semibold text-green-600">${product.price.toFixed(2)}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <Link
            href={`/reviews/${product.category}/${product.slug}`}
            className="flex-1 text-center text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition-colors"
          >
            View Details
          </Link>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="sponsored noopener"
            className="flex items-center justify-center gap-1 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
