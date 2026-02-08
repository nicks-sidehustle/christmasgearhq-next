import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllGuides } from "@/data/guides";

import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Buying Guides | ${siteConfig.name}`,
  description: "Expert buying guides to help you find the best Christmas decorations and holiday gear.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <SiteHeader />
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Buying Guides
            </h1>
          </div>
          <p className="text-gray-600 mb-8">
            In-depth guides to help you make the best purchasing decisions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {guide.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {guide.readTime}
                      </span>
                    </div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-gray-500 flex-1">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-4">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
