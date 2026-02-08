"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ExpertQuote {
  source: string;
  quote: string;
  rating?: number;
  url?: string;
}

interface ConsensusReviewCardProps {
  productName: string;
  category: string;
  image: string;
  consensusScore: number;
  priceRange: string;
  sourcesCount: number;
  lastUpdated: string;
  verdict: "Must Buy" | "Recommended" | "Good Value" | "Mixed" | "Skip";
  pros: string[];
  cons: string[];
  expertQuotes: ExpertQuote[];
  productUrl?: string;
  trend?: "up" | "down" | "stable";
}

export function ConsensusReviewCard({
  productName,
  category,
  image,
  consensusScore,
  priceRange,
  sourcesCount,
  lastUpdated,
  verdict,
  pros,
  cons,
  expertQuotes,
  productUrl,
  trend
}: ConsensusReviewCardProps) {
  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "Must Buy": return "bg-green-100 text-green-800 border-green-200";
      case "Recommended": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Good Value": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Mixed": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Skip": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8.5) return "text-green-600";
    if (score >= 7) return "text-blue-600";
    if (score >= 5) return "text-yellow-600";
    return "text-red-600";
  };

  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 relative h-64 md:h-auto bg-gray-100">
          <Image
            src={image}
            alt={productName}
            fill
            className="object-contain p-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder-product.png';
            }}
          />
          <div className="absolute top-2 left-2">
            <Badge className={getVerdictColor(verdict)}>
              {verdict}
            </Badge>
          </div>
          {trend && (
            <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
              {getTrendIcon()}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">{category}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {productUrl ? (
                  <Link href={productUrl} className="hover:text-blue-600 transition-colors">
                    {productName}
                  </Link>
                ) : (
                  productName
                )}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {sourcesCount} Expert Reviews
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Updated {lastUpdated}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(consensusScore)}`}>
                {consensusScore.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Consensus Score</div>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(consensusScore / 2)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">{priceRange}</span>
            <span className="text-sm text-gray-500 ml-2">from multiple retailers</span>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">What Experts Love</h4>
              <ul className="space-y-1">
                {pros.slice(0, 3).map((pro, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Common Criticisms</h4>
              <ul className="space-y-1">
                {cons.slice(0, 3).map((con, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expert Quotes */}
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">What The Experts Say</h4>
            <div className="space-y-2">
              {expertQuotes.slice(0, 2).map((quote, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold">
                      {quote.source.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 italic">&ldquo;{quote.quote}&rdquo;</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium text-gray-900">{quote.source}</span>
                      {quote.rating && (
                        <Badge variant="secondary" className="text-xs">
                          {quote.rating}/10
                        </Badge>
                      )}
                      {quote.url && (
                        <a
                          href={quote.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          Read full review →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {productUrl && (
            <div className="mt-4 flex gap-3">
              <Link
                href={productUrl}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Full Consensus
              </Link>
              <a
                href={affiliateLinks?.amazon || `https://www.amazon.com/s?k=${encodeURIComponent(productName)}&tag=nsh069-20`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Check Price on Amazon
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}