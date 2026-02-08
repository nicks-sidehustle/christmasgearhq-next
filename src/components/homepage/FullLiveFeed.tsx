import { ProcessedFeedItem } from "@/lib/rss/types";

interface FullLiveFeedProps {
  items: ProcessedFeedItem[];
}

export default function FullLiveFeed({ items }: FullLiveFeedProps) {
  // This is a placeholder for the full feed view
  // Implementation would be similar to LiveContentSection but with more items
  return (
    <div>
      <p className="text-gray-600">Full feed view with {items.length} items</p>
    </div>
  );
}