"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Category {
  name: string;
  count: number;
  icon: string;
  href: string;
}

interface CategoryBrowseProps {
  categories: Category[];
}

export function CategoryBrowse({ categories }: CategoryBrowseProps) {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            Browse by Category
          </h2>
          <p className="text-sm text-gray-500">
            Find the perfect gear for your desk setup
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{category.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} products
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
