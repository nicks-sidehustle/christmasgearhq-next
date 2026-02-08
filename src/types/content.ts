/**
 * Auto-generated TypeScript definitions for content
 * Generated on: 2025-08-27T20:10:18.104Z
 * DO NOT EDIT - This file is auto-generated from markdown content
 */

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  tags: string[];
  affiliateLinkCount?: number;
  lastValidated?: string;
}

// Helper types
export type ArticleSlug = string;
export type ArticleId = string;
export type ArticleTag = string;

// Validation constants
export const MINIMUM_AFFILIATE_LINKS = 10;
export const AFFILIATE_TAG = 'nsh069-20';

// Available categories
export const ARTICLE_CATEGORIES = [
] as const;

// Type guards
export function isValidCategory(category: string): category is ArticleCategory {
  return ARTICLE_CATEGORIES.includes(category as any);
}

export function hasMinimumAffiliateLinks(article: Article): boolean {
  return (article.affiliateLinkCount || 0) >= MINIMUM_AFFILIATE_LINKS;
}
