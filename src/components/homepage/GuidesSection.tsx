"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";
import { Guide } from "@/lib/guides";

interface GuidesSectionProps {
  guides: Guide[];
}

export function GuidesSection({ guides }: GuidesSectionProps) {
  if (!guides.length) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Buying Guides</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Expert Buying Guides
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              In-depth comparisons to help you choose the right gear
            </p>
          </div>
          <Link 
            href="/guides" 
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            All Guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src={guide.image || 'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=800&q=80'}
                    alt={guide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 flex-1">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-3">
                    Read Guide
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View All Guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
