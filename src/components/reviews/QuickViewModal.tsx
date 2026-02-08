"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ExternalLink, Check, X, TrendingDown } from "lucide-react";

interface Product {
  id: string;
  slug: string;
  productName: string;
  category: string;
  image: string;
  consensusScore: number;
  verdict: string;
  priceRange: string;
  currentPrice?: number;
  lowestPrice?: number;
  pros: string[];
  cons: string[];
  sourcesCount: number;
  lastUpdated: string;
  description?: string;
  expertQuotes?: Array<{
    source: string;
    quote: string;
    score?: number;
  }>;
  trend?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCompare: (id: string) => void;
}

export function QuickViewModal({ product, isOpen, onClose, onAddToCompare }: QuickViewModalProps) {
  const [imageError, setImageError] = useState(false);
  
  if (!product) return null;

  const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');
  const productUrl = `/reviews/${categorySlug}/${product.slug}`;
  const amazonLink = product.affiliateLinks?.amazon || `https://www.amazon.com/s?k=${encodeURIComponent(product.productName)}&tag=nsh069-20`;
  
  const isDeal = product.trend === 'down' || 
    (product.lowestPrice && product.currentPrice && product.currentPrice <= product.lowestPrice);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.productName} Quick View</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Image and Actions */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={imageError ? '/images/placeholder-product.svg' : product.image}
                alt={product.productName}
                fill
                className="object-contain p-4"
                onError={() => setImageError(true)}
              />
              {isDeal && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  Price Drop
                </Badge>
              )}
            </div>

            {/* Price and CTAs */}
            <div className="space-y-3">
              <div>
                {product.currentPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.currentPrice}
                    </span>
                    {product.lowestPrice && product.currentPrice < product.lowestPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.lowestPrice}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">{product.priceRange}</span>
                )}
                {isDeal && (
                  <p className="text-sm text-red-600 mt-1">
                    🔥 Lowest price in 30 days
                  </p>
                )}
              </div>

              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Check Price on Amazon
                </Button>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    onAddToCompare(product.id);
                    onClose();
                  }}
                >
                  Add to Compare
                </Button>
                <a href={productUrl} className="block">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Full Review
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge className={
                  product.verdict === "Must Buy" ? "bg-green-100 text-green-800" :
                  product.verdict === "Recommended" ? "bg-blue-100 text-blue-800" :
                  "bg-gray-100 text-gray-800"
                }>
                  {product.verdict}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">{product.consensusScore}/10</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.productName}</h2>
              <p className="text-sm text-gray-600">
                Based on {product.sourcesCount} expert reviews • Updated {product.lastUpdated}
              </p>
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}

            {/* Pros and Cons */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-600" />
                  Pros
                </h3>
                <ul className="space-y-1">
                  {product.pros.slice(0, 4).map((pro, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                  <X className="w-4 h-4 text-red-600" />
                  Cons
                </h3>
                <ul className="space-y-1">
                  {product.cons.slice(0, 4).map((con, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-red-600 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expert Quotes */}
            {product.expertQuotes && product.expertQuotes.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What Experts Say</h3>
                <div className="space-y-2">
                  {product.expertQuotes.slice(0, 2).map((quote, index) => (
                    <blockquote key={index} className="border-l-2 border-gray-300 pl-3">
                      <p className="text-sm text-gray-600 italic">"{quote.quote}"</p>
                      <cite className="text-xs text-gray-500 not-italic">
                        — {quote.source}
                        {quote.score && ` (${quote.score}/10)`}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {/* Affiliate Disclosure */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                This summary aggregates expert opinions. Prices shown include our affiliate commission 
                from Amazon (tag: nsh069-20) which helps support the site.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}