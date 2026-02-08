"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Star, Check, Minus } from "lucide-react";

interface Product {
  id: string;
  productName: string;
  image: string;
  consensusScore: number;
  verdict: string;
  priceRange: string;
  currentPrice?: number;
  pros: string[];
  cons: string[];
  sourcesCount: number;
  specs?: Record<string, string>;
}

interface ComparisonToolProps {
  products: Product[];
  onRemove: (id: string) => void;
  onClose: () => void;
}

export function ComparisonTool({ products, onRemove, onClose }: ComparisonToolProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (products.length === 0) return null;

  const handlePrevious = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => Math.min(products.length - 3, prev + 1));
  };

  // Get visible products (show 3 at a time on desktop, 2 on tablet, 1 on mobile)
  const visibleProducts = products.slice(activeIndex, activeIndex + 3);

  // Collect all unique pros and cons for comparison
  const allPros = Array.from(new Set(products.flatMap(p => p.pros)));
  const allCons = Array.from(new Set(products.flatMap(p => p.cons)));
  const allSpecs = Array.from(new Set(products.flatMap(p => Object.keys(p.specs || {}))));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">Compare Products</h3>
          <Badge variant="secondary">{products.length} selected</Badge>
        </div>
        <div className="flex items-center gap-2">
          {products.length > 3 && (
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                disabled={activeIndex >= products.length - 3}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Comparison Content */}
      <div className="max-h-[600px] overflow-y-auto">
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleProducts.map((product) => (
              <div key={product.id} className="space-y-4">
                {/* Product Card Header */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <button
                    onClick={() => onRemove(product.id)}
                    className="float-right p-1 hover:bg-gray-200 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="relative h-32 mb-3">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.productName}</h4>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={
                      product.verdict === "Must Buy" ? "bg-green-100 text-green-800" :
                      product.verdict === "Recommended" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {product.verdict}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{product.consensusScore}/10</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {product.currentPrice ? `$${product.currentPrice}` : product.priceRange}
                  </div>
                  <a
                    href={product.affiliateLinks?.amazon || `https://www.amazon.com/s?k=${encodeURIComponent(product.productName)}&tag=nsh069-20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2"
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="sm">
                      Check Price
                    </Button>
                  </a>
                </div>

                {/* Pros Comparison */}
                <div>
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Pros</h5>
                  <div className="space-y-1">
                    {allPros.slice(0, 3).map(pro => (
                      <div key={pro} className="flex items-start gap-2 text-xs">
                        {product.pros.includes(pro) ? (
                          <Check className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-3 h-3 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={product.pros.includes(pro) ? "text-gray-700" : "text-gray-400"}>
                          {pro}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons Comparison */}
                <div>
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Cons</h5>
                  <div className="space-y-1">
                    {allCons.slice(0, 3).map(con => (
                      <div key={con} className="flex items-start gap-2 text-xs">
                        {product.cons.includes(con) ? (
                          <X className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-3 h-3 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={product.cons.includes(con) ? "text-gray-700" : "text-gray-400"}>
                          {con}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Comparison */}
                {allSpecs.length > 0 && (
                  <div>
                    <h5 className="font-medium text-sm text-gray-700 mb-2">Specs</h5>
                    <div className="space-y-1">
                      {allSpecs.slice(0, 4).map(spec => (
                        <div key={spec} className="flex justify-between text-xs">
                          <span className="text-gray-600">{spec}:</span>
                          <span className="font-medium text-gray-900">
                            {product.specs?.[spec] || '-'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div className="text-xs text-gray-500 text-center pt-2 border-t">
                  Based on {product.sourcesCount} expert reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Compare up to 4 products side-by-side
          </p>
          <Button onClick={onClose} variant="outline">
            Close Comparison
          </Button>
        </div>
      </div>
    </div>
  );
}