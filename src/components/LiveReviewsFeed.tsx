"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, User, TrendingUp, AlertCircle } from "lucide-react";
import { RSS_FEEDS } from "@/lib/rss/feeds";

interface ReviewItem {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  description: string;
  image: string | null;
  categories: string[];
  source: string;
  sourceIcon: string;
}

interface LiveReviewsFeedProps {
  maxItems?: number;
  category?: string;
}

export function LiveReviewsFeed({ maxItems = 12, category }: LiveReviewsFeedProps) {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [hasError, setHasError] = useState(false);
  const [isMixedContent, setIsMixedContent] = useState(false);

  // Use centralized RSS feed configuration
  const feeds = RSS_FEEDS;

  useEffect(() => {
    fetchAllFeeds();
  }, []);

  const fetchAllFeeds = async () => {
    setLoading(true);
    setHasError(false);
    const startTime = Date.now();
    
    try {
      // Use the new bulk RSS endpoint for parallel processing
      const feedUrls = feeds.map(feed => feed.url);
      const itemsPerFeed = feeds.length > 15 ? 1 : feeds.length > 10 ? 2 : feeds.length > 5 ? 3 : 4;
      
      const response = await fetch('/api/rss/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedUrls,
          maxItemsPerFeed: itemsPerFeed,
          timeout: 8000 // 8 second timeout per feed
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Map items to include source information
      const allReviews: ReviewItem[] = data.items.map((item: any) => {
        const feedInfo = feeds.find(f => f.url === item.sourceUrl);
        return {
          ...item,
          source: feedInfo?.source || 'Unknown',
          sourceIcon: feedInfo?.icon || '📡'
        };
      });
      
      const processingTime = Date.now() - startTime;
      
      // Log performance metrics
      console.log('📊 RSS Feed Performance:', {
        totalTime: `${processingTime}ms`,
        feedsRequested: feeds.length,
        successfulFeeds: data.metadata.successfulFeeds,
        itemsReceived: data.items.length,
        cacheHitRate: `${(data.metadata.cacheHitRate * 100).toFixed(1)}%`,
        improvement: `${((40000 - processingTime) / 40000 * 100).toFixed(1)}% faster than sequential`
      });
      
      // Check if we got any results
      if (allReviews.length === 0) {
        setHasError(true);
      } else {
        // Set error only if we got very few results (less than 25% expected)
        const expectedMinimum = feeds.length * itemsPerFeed * 0.25;
        if (allReviews.length < expectedMinimum) {
          setHasError(true);
        }
      }
      
      // Filter by category if specified
      let filteredReviews = allReviews;
      let mixedContent = false;
      
      if (category) {
        filteredReviews = allReviews.filter(review => 
          matchesCategory(review.title, review.description, review.categories?.[0])
        );
        
        // Ensure minimum of 4 articles per category page
        const minArticles = 4;
        if (filteredReviews.length < minArticles && allReviews.length >= minArticles) {
          mixedContent = true;
          // Not enough category matches, use a mixed strategy:
          // 1. Keep all matching articles
          // 2. Add general smart home articles to fill the gap
          const generalArticles = allReviews.filter(review => {
            // Skip if already in filtered list
            if (filteredReviews.some(fr => fr.link === review.link)) return false;
            
            // Add general smart home articles (those with smart home keywords but not category-specific)
            const text = `${review.title} ${review.description}`.toLowerCase();
            const smartHomeKeywords = ['smart', 'alexa', 'google', 'homekit', 'matter', 'zigbee', 'automation', 'connected'];
            return smartHomeKeywords.some(keyword => text.includes(keyword));
          });
          
          // Add enough general articles to reach minimum
          const needed = minArticles - filteredReviews.length;
          filteredReviews = [...filteredReviews, ...generalArticles.slice(0, needed)];
          
          // If still not enough, just add the most recent articles
          if (filteredReviews.length < minArticles) {
            const remaining = allReviews.filter(review => 
              !filteredReviews.some(fr => fr.link === review.link)
            );
            const stillNeeded = minArticles - filteredReviews.length;
            filteredReviews = [...filteredReviews, ...remaining.slice(0, stillNeeded)];
          }
        }
      }
      
      // Sort by date and limit (items already sorted from bulk endpoint)
      setReviews(filteredReviews.slice(0, maxItems));
      setIsMixedContent(mixedContent);
      
    } catch (error) {
      console.error('Bulk RSS fetch failed, attempting fallback...', error);
      
      // Fallback: Try to fetch at least a few feeds individually
      try {
        const fallbackResults: ReviewItem[] = [];
        const priorityFeeds = feeds.filter(f => f.priority === 1).slice(0, 5); // Top 5 priority feeds
        
        console.log('🔄 Attempting fallback with priority feeds...');
        
        const fallbackPromises = priorityFeeds.map(async (feed) => {
          try {
            const response = await fetch(`/api/rss?url=${encodeURIComponent(feed.url)}`);
            if (response.ok) {
              const data = await response.json();
              return data.items.slice(0, 2).map((item: any) => ({
                ...item,
                source: feed.source,
                sourceIcon: feed.icon
              }));
            }
          } catch (feedError) {
            console.error(`Fallback failed for ${feed.source}:`, feedError);
            return [];
          }
          return [];
        });
        
        const fallbackResults_arrays = await Promise.all(fallbackPromises);
        fallbackResults.push(...fallbackResults_arrays.flat());
        
        if (fallbackResults.length > 0) {
          console.log(`✅ Fallback successful: Retrieved ${fallbackResults.length} items from ${priorityFeeds.length} feeds`);
          setReviews(fallbackResults.slice(0, maxItems));
          setHasError(false); // We got some results, so don't show error
        } else {
          setHasError(true);
          setReviews([]);
        }
      } catch (fallbackError) {
        console.error('Fallback mechanism also failed:', fallbackError);
        setHasError(true);
        setReviews([]);
      }
    } finally {
      setLoading(false);
    }
  };

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

  const extractKeywords = (title: string, description: string) => {
    const smartHomeKeywords = [
      'smart', 'alexa', 'google', 'homekit', 'matter', 'zigbee', 
      'security', 'camera', 'thermostat', 'lighting', 'robot', 'vacuum',
      'doorbell', 'lock', 'speaker', 'display', 'hub', 'sensor'
    ];
    
    const text = `${title} ${description}`.toLowerCase();
    return smartHomeKeywords.filter(keyword => text.includes(keyword));
  };

  const matchesCategory = (title: string, description: string, itemCategory?: string) => {
    const text = `${title} ${description}`.toLowerCase();
    
    // Global exclusions for streaming services and non-smart-home content
    const globalExclusions = [
      // Streaming services
      'netflix', 'hulu', 'disney+', 'disney plus', 'paramount+', 'paramount plus',
      'peacock', 'hbo max', 'prime video', 'apple tv+', 'apple tv plus',
      'youtube tv', 'sling tv', 'fubo', 'fubotv', 'dazn', 'espn+', 'espn plus',
      'discovery+', 'discovery plus', 'showtime', 'starz', 'crunchyroll',
      'streaming service', 'streaming platform', 'streaming subscription',
      'watch online', 'streaming deal', 'streaming price',
      // Gaming and non-home content
      'playstation', 'xbox', 'nintendo', 'steam deck', 'gaming console',
      'video game', 'pc game', 'mobile game',
      // Phones and tablets (unless it's about smart home control)
      'iphone review', 'android phone', 'smartphone review', 'tablet review',
      'ipad review', 'galaxy phone', 'pixel phone',
      // TV shows and movies
      'tv show', 'movie review', 'film review', 'season finale',
      'episode', 'trailer', 'box office'
    ];
    
    // Check global exclusions first (applies to all pages)
    if (globalExclusions.some(exclusion => text.includes(exclusion))) {
      return false;
    }
    
    // If no specific category, ensure it's smart home related
    if (!category) {
      const smartHomeRequired = [
        'smart', 'alexa', 'google home', 'google assistant', 'homekit', 
        'matter', 'zigbee', 'z-wave', 'automation', 'connected', 'iot',
        'nest', 'ring', 'philips hue', 'wyze', 'arlo', 'eufy',
        'smart home', 'home automation', 'smart device', 'connected home',
        'thermostat', 'smart lock', 'smart light', 'smart plug',
        'security camera', 'video doorbell', 'smart speaker', 'smart display',
        'robot vacuum', 'smart appliance', 'home hub'
      ];
      return smartHomeRequired.some(keyword => text.includes(keyword));
    }
    
    const categoryLower = category.toLowerCase();
    
    // Category-specific keywords and exclusions
    const categoryFilters: Record<string, { keywords: string[], exclude?: string[] }> = {
      'smart lighting': {
        keywords: ['smart light', 'smart bulb', 'smart lamp', 'led bulb', 'philips hue', 'lifx', 'smart switch', 'smart dimmer', 'color bulb', 'rgb bulb', 'ambient lighting', 'light strip', 'wyze bulb', 'sengled', 'kasa bulb'],
        exclude: ['traffic light', 'light sensor', 'spotlight camera', 'flashlight', 'bike light', 'headlight', 'car light']
      },
      'smart security': {
        keywords: ['security camera', 'smart camera', 'video doorbell', 'smart lock', 'doorbell camera', 'alarm system', 'motion sensor', 'surveillance', 'ring doorbell', 'arlo camera', 'wyze cam', 'eufy security', 'nest cam', 'blink camera'],
        exclude: ['camera phone', 'camera app', 'dslr camera', 'mirrorless camera', 'action camera', 'gopro', 'webcam']
      },
      'smart speakers': {
        keywords: ['smart speaker', 'echo dot', 'echo show', 'alexa speaker', 'google home', 'nest hub', 'nest audio', 'sonos', 'homepod', 'smart display', 'voice assistant'],
        exclude: ['vacuum', 'robot vacuum', 'bluetooth speaker', 'portable speaker', 'soundbar', 'headphones', 'earbuds', 'tv speaker']
      },
      'smart climate': {
        keywords: ['smart thermostat', 'nest thermostat', 'ecobee', 'honeywell thermostat', 'smart ac', 'air purifier', 'smart fan', 'humidifier', 'dehumidifier', 'hvac control'],
        exclude: ['camera', 'doorbell', 'speaker', 'weather app', 'weather station']
      },
      'smart pets': {
        keywords: ['pet camera', 'pet feeder', 'smart feeder', 'treat dispenser', 'furbo', 'petcube', 'pet tracker', 'smart collar', 'automatic feeder', 'pet fountain', 'smart litter'],
        exclude: ['pet hair vacuum', 'pet mode', 'pet food', 'pet toy', 'pet bed', 'pet carrier']
      }
    };
    
    const filter = categoryFilters[categoryLower];
    if (!filter) return true;
    
    // Check exclusions first
    if (filter.exclude && filter.exclude.some(word => text.includes(word))) {
      return false;
    }
    
    // Then check for keyword matches
    return filter.keywords.some(keyword => text.includes(keyword));
  };

  const getVerdictFromTitle = (title: string) => {
    const positive = ['best', 'great', 'excellent', 'amazing', 'love', 'perfect', 'recommend'];
    const negative = ['worst', 'avoid', 'disappointing', 'skip', 'problem', 'issue'];
    
    const titleLower = title.toLowerCase();
    
    if (positive.some(word => titleLower.includes(word))) {
      return { verdict: "Positive", color: "bg-green-100 text-green-800" };
    }
    if (negative.some(word => titleLower.includes(word))) {
      return { verdict: "Negative", color: "bg-red-100 text-red-800" };
    }
    if (titleLower.includes('review') || titleLower.includes('test')) {
      return { verdict: "Review", color: "bg-blue-100 text-blue-800" };
    }
    if (titleLower.includes('deal') || titleLower.includes('sale') || titleLower.includes('%')) {
      return { verdict: "Deal", color: "bg-yellow-100 text-yellow-800" };
    }
    return { verdict: "News", color: "bg-gray-100 text-gray-800" };
  };

  const filteredReviews = filter === "all" 
    ? reviews 
    : reviews.filter(r => r.source === filter);

  const sources = ["all", ...Array.from(new Set(reviews.map(r => r.source)))];

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <p className="text-center text-gray-500 mt-4">Aggregating expert reviews...</p>
      </div>
    );
  }

  if (hasError && reviews.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="text-4xl mb-4">🕵️‍♂️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">They're onto us!</h3>
        <p className="text-gray-600 mb-4">
          The expert sites caught us reading over their shoulders. 
          They'll let us back in soon... probably.
        </p>
        <button 
          onClick={fetchAllFeeds}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try the Secret Handshake Again 🤝
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h2 className="text-xl font-bold text-gray-900">Live Expert Reviews{category ? ` - ${category}` : ''}</h2>
            <Badge variant="secondary" className="ml-2">
              {reviews.length} Latest
            </Badge>
            {isMixedContent && category && (
              <Badge variant="outline" className="ml-2 text-xs">
                + Related
              </Badge>
            )}
          </div>
          <button 
            onClick={fetchAllFeeds}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Refresh Feed
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

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review, index) => {
          const verdict = getVerdictFromTitle(review.title);
          const keywords = extractKeywords(review.title, review.description);
          
          return (
            <article 
              key={`${review.source}-${index}`}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              {review.image && (
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={verdict.color}>
                      {verdict.verdict}
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                      <span className="text-lg">{review.sourceIcon}</span>
                      <span className="text-xs font-medium">{review.source}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <a 
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {review.title}
                  </a>
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {review.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  {review.creator && (
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {review.creator}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDate(review.pubDate)}
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
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Read Expert Review
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
          Aggregating live feeds from {feeds.length} expert sources including TechRadar, CNET, The Verge, Tom's Guide, and more. Click through for full reviews.
        </p>
      </div>
    </div>
  );
}