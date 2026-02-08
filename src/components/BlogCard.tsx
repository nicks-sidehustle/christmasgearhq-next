import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/lib/content/production-articles";

interface BlogCardProps {
  article: Article;
  featured?: boolean;
  onPostClick?: (postId: string) => void;
}

export function BlogCard({ article, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-muted-foreground mb-6">{article.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="relative h-48">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline">{article.category}</Badge>
            <span className="text-xs text-muted-foreground">{article.readTime}</span>
          </div>
          <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}