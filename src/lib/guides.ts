import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const guidesDirectory = path.join(process.cwd(), 'src/content/guides');

export interface Guide {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  featured: boolean;
  image: string;
  content: string;       // raw markdown
  htmlContent: string;   // rendered HTML
}

function parseDate(dateStr: string): Date {
  // Handle "2026-02-08" format
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  
  const files = fs.readdirSync(guidesDirectory).filter(f => f.endsWith('.md'));
  
  const guides = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(guidesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      excerpt: data.excerpt || '',
      category: data.category || 'Uncategorized',
      publishDate: data.publishDate || '',
      updatedDate: data.updatedDate || data.publishDate || '',
      readTime: data.readTime || '',
      featured: data.featured || false,
      image: data.image || '',
      content,
      htmlContent: marked(content) as string,
    };
  });
  
  // Sort by date, newest first
  guides.sort((a, b) => parseDate(b.publishDate).getTime() - parseDate(a.publishDate).getTime());
  
  return guides;
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(guidesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Uncategorized',
    publishDate: data.publishDate || '',
    updatedDate: data.updatedDate || data.publishDate || '',
    readTime: data.readTime || '',
    featured: data.featured || false,
    image: data.image || '',
    content,
    htmlContent: marked(content) as string,
  };
}

export function getFeaturedGuides(limit?: number): Guide[] {
  const allGuides = getAllGuides();
  const featured = allGuides.filter(guide => guide.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getGuidesByCategory(category: string): Guide[] {
  const allGuides = getAllGuides();
  return allGuides.filter(guide => guide.category.toLowerCase() === category.toLowerCase());
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}