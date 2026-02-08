"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { RSS_FEEDS } from "@/lib/rss/feeds";
import { ProcessedFeedItem } from "@/lib/rss/types";
import { isSmartHomeContent, getVerdictFromTitle, extractKeywords } from "@/lib/rss/filters";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, User, AlertCircle, RefreshCw } from "lucide-react";

// Lazy load the full feed for better performance
const FullLiveFeed = dynamic(() => import("./FullLiveFeed"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />
});

interface LiveContentSectionProps {
  maxItems?: number;
  showFullFeed?: boolean;
}

export function LiveContentSection({ maxItems = 6, showFullFeed = false }: LiveContentSectionProps) {
  const [items, setItems] = useState<ProcessedFeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const fetchFeeds = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    // Get high priority feeds for homepage
    const priorityFeeds = RSS_FEEDS
      .filter(feed => feed.priority <= 2)
      .slice(0, 8); // Limit to 8 feeds for performance
    
    try {
      // Parallel fetch all feeds
      const feedPromises = priorityFeeds.map(feed => 
        fetch(`/api/rss?url=${encodeURIComponent(feed.url)}`)
          .then(res => res.ok ? res.json() : null)
          .then(data => data ? {
            ...data,
            source: feed.source,
            sourceIcon: feed.icon
          } : null)
          .catch(() => null)
      );
      
      const results = await Promise.all(feedPromises);
      const allItems: ProcessedFeedItem[] = [];
      
      // Process results and take 2-3 items from each successful feed
      results.forEach((feed, index) => {
        if (feed && feed.items) {
          const itemsToTake = 2; // Take 2 items from each feed
          const feedItems = feed.items
            .slice(0, itemsToTake)
            .filter((item: any) => isSmartHomeContent(item.title, item.description))
            .map((item: any) => ({
              ...item,
              source: feed.source,
              sourceIcon: feed.sourceIcon
            }));
          allItems.push(...feedItems);
        }
      });
      
      // Sort by date and limit
      allItems.sort((a, b) => 
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );
      
      setItems(allItems.slice(0, maxItems));
    } catch (err) {
      setError("Failed to load content. Please try again.");
      console.error("Error fetching RSS feeds:", err);
    } finally {
      setLoading(false);
    }
  }, [maxItems]);

  useEffect(() => {
    fetchFeeds();
  }, [fetchFeeds]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.ceil((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffHours < 168) {
      return `${Math.floor(diffHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const filteredItems = filter === "all" 
    ? items 
    : items.filter(item => item.source === filter);

  const sources = ["all", ...Array.from(new Set(items.map(item => item.source)))];

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <p className="text-center text-gray-500 mt-4">Loading latest content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">{error}</p>
        <button 
          onClick={fetchFeeds}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (showFullFeed) {
    return <FullLiveFeed items={items} />;
  }

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {items.length} Latest
            </Badge>
          </div>
          <button 
            onClick={fetchFeeds}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
        
        {/* Source Filters */}
        <div className="flex gap-2 flex-wrap">
          {sources.map(source => (
            <button
              key={source}
              onClick={() => setFilter(source)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter === source
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {source === "all" ? "All Sources" : source}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const verdict = getVerdictFromTitle(item.title);
          const keywords = extractKeywords(item.title, item.description);
          
          return (
            <article 
              key={`${item.source}-${index}`}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              {item.image && (
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-product.svg';
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={verdict.color}>
                      {verdict.verdict}
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                      <span className="text-lg">{item.sourceIcon}</span>
                      <span className="text-xs font-medium">{item.source}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.title}
                  </a>
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  {item.creator && (
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {item.creator}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDate(item.pubDate)}
                  </span>
                </div>
                
                {/* Keywords */}
                {keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {keywords.slice(0, 3).map(keyword => (
                      <span 
                        key={keyword}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Action */}
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Read Full Article
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-sm text-blue-800">
          <AlertCircle className="inline w-4 h-4 mr-1" />
          Live feed from expert sources. Content shown is for informational purposes.
        </p>
      </div>
    </div>
  );
}