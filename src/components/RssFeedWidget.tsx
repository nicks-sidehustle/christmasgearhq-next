"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, RefreshCw, TrendingUp } from "lucide-react";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface RssFeedWidgetProps {
  feedUrl: string;
  title?: string;
  maxItems?: number;
  compact?: boolean;
}

export function RssFeedWidget({ 
  feedUrl, 
  title = "Latest News",
  maxItems = 5,
  compact = false 
}: RssFeedWidgetProps) {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeed();
  }, [feedUrl]);

  const fetchFeed = async () => {
    try {
      const response = await fetch(`/api/rss?url=${encodeURIComponent(feedUrl)}`);
      if (response.ok) {
        const data = await response.json();
        setItems(data.items.slice(0, maxItems));
      }
    } catch (error) {
      console.error('Feed machine broke! Have you tried turning it off and on again? 🔌', error);
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
    } else {
      const days = Math.floor(diffHours / 24);
      return `${days}d ago`;
    }
  };

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <div className="animate-pulse space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md font-bold text-gray-900 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
            {title}
          </h3>
          <button 
            onClick={fetchFeed}
            className="text-gray-400 hover:text-gray-600"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm">
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 flex items-start gap-2"
              >
                <span className="text-gray-400 flex-shrink-0">{index + 1}.</span>
                <span className="line-clamp-2">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link 
          href="/news" 
          className="text-xs text-blue-600 hover:underline mt-3 inline-block"
        >
          View all news →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <button 
          onClick={fetchFeed}
          className="text-gray-400 hover:text-gray-600"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <article key={index} className="border-b border-gray-100 pb-3 last:border-0">
            <h4 className="font-semibold text-gray-900 mb-1">
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 flex items-start justify-between"
              >
                <span className="line-clamp-2">{item.title}</span>
                <ExternalLink className="w-3 h-3 flex-shrink-0 ml-2 mt-1" />
              </a>
            </h4>
            <p className="text-xs text-gray-500">{formatDate(item.pubDate)}</p>
          </article>
        ))}
      </div>
      <Link 
        href="/news" 
        className="text-sm text-blue-600 hover:underline mt-4 inline-block font-semibold"
      >
        Browse all news →
      </Link>
    </div>
  );
}