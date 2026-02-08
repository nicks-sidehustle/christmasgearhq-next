import { SiteHeader } from "@/components/SiteHeader";
import { guides, getGuideBySlug, getGuideContent } from "@/data/guides";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} | ChristmasGearHQ`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const content = getGuideContent(slug);

  if (!guide || !content) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="py-10">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides" className="hover:text-gray-700">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 line-clamp-1">{guide.title.substring(0, 40)}...</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {guide.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-4">
              {guide.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {guide.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Updated {guide.updatedDate}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {guide.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-80 bg-gray-100 rounded-xl mb-8 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-full object-contain p-8"
            />
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-a:text-blue-600 prose-img:rounded-lg prose-img:mx-auto prose-table:text-sm prose-th:bg-gray-100 prose-th:p-2 prose-td:p-2 prose-table:border prose-th:border prose-td:border">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <span className="block my-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src || ''}
                      alt={alt || ''}
                      className="max-w-full h-auto mx-auto rounded-lg max-h-64 object-contain"
                      loading="lazy"
                    />
                  </span>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-200 text-sm">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="bg-gray-100 border border-gray-200 px-4 py-2 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-200 px-4 py-2">
                    {children}
                  </td>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'sponsored noopener' : undefined}
                    className="text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              <strong>Affiliate Disclosure:</strong> This guide contains affiliate links. When you buy through our links, we may earn a commission at no extra cost to you. This helps us keep creating helpful content.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
            >
              ← Back to All Guides
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
