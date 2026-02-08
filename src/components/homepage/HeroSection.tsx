"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { siteConfig, categories } from '@/config/site';
import { products } from '@/data/products';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          {siteConfig.description}
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tree stands, lights, decorations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-base rounded-full border-gray-200 shadow-sm"
            />
          </div>
        </form>

        {/* Quick Stats */}
        <div className="flex justify-center gap-8 text-sm text-gray-500">
          <div>
            <span className="font-semibold text-gray-900">{products.length}+</span> Products
          </div>
          <div>
            <span className="font-semibold text-gray-900">{categories.length}</span> Categories
          </div>
          <div>
            <span className="font-semibold text-gray-900">Expert</span> Reviews
          </div>
        </div>
      </div>
    </section>
  );
}
