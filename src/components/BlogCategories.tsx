"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, tags, sampleArticles } from "@/lib/content/production-articles";
import { NewsletterModal } from "./NewsletterModal";

interface BlogCategoriesProps {
  onCategorySelect: (category: string) => void;
}

// Get article count for each category
const getCategoryCount = (category: string) => {
  return sampleArticles.filter(article => article.category === category).length;
}

// Filter categories that actually have articles
const populatedCategories = categories.filter(category => getCategoryCount(category) > 0);

export function BlogCategories({ onCategorySelect }: BlogCategoriesProps) {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <button
            onClick={() => onCategorySelect('')}
            className="w-full text-left p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm flex justify-between items-center group font-medium"
          >
            <span>All Articles</span>
            <Badge variant="secondary" className="ml-2 group-hover:bg-accent-foreground/20">
              {sampleArticles.length}
            </Badge>
          </button>
          {populatedCategories.map((category) => {
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className="w-full text-left p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm flex justify-between items-center group"
              >
                <span>{category}</span>
                <Badge variant="secondary" className="ml-2 group-hover:bg-accent-foreground/20">
                  {count}
                </Badge>
              </button>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              'smart home', 'review', 'security', 'smart lighting', 'automation',
              'smart bulbs', 'thermostat', 'cameras', 'entertainment', 'voice control',
              'installation', 'beginners', 'Philips Hue', 'smart locks', 'guide'
            ].map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                onClick={() => {/* TODO: Implement tag filtering */}}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest smart home tips and reviews delivered to your inbox.
          </p>
          <button 
            onClick={() => setIsNewsletterModalOpen(true)}
            className="w-full bg-primary text-primary-foreground rounded-md py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </CardContent>
      </Card>
      
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </div>
  );
}