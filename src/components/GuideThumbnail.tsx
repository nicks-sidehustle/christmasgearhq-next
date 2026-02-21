import React from 'react';

interface GuideThumbnailProps {
  title: string;
  slug: string;
  category: string;
  className?: string;
}

// Simple hash function for consistent color generation
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Christmas-themed color palette
const christmasColors = [
  ['#B91C1C', '#DC2626'], // Deep red to red
  ['#059669', '#10B981'], // Green to emerald
  ['#D97706', '#F59E0B'], // Amber to yellow (gold)
  ['#7C2D12', '#DC2626'], // Brown to red
  ['#166534', '#22C55E'], // Dark green to green
  ['#92400E', '#F59E0B'], // Orange to amber
  ['#881337', '#E11D48'], // Rose to pink
  ['#065F46', '#059669'], // Teal to green
  ['#78350F', '#D97706'], // Yellow to orange
  ['#4C1D95', '#7C3AED'], // Purple to violet (rare accent)
];

export function GuideThumbnail({ title, slug, category, className = '' }: GuideThumbnailProps) {
  const hash = hashString(slug);
  const colorIndex = hash % christmasColors.length;
  const [color1, color2] = christmasColors[colorIndex];
  
  // Generate unique pattern based on hash
  const patternSeed = hash % 4;
  const angle = 45 + (hash % 8) * 45; // Rotate gradient direction
  
  // Create subtle pattern overlay
  const getPatternOverlay = () => {
    switch (patternSeed) {
      case 0:
        return 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)';
      case 1:
        return 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%)';
      case 2:
        return 'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255,255,255,0.02) 15px, rgba(255,255,255,0.02) 30px)';
      default:
        return 'radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 0%, transparent 60%)';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
      }}
    >
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: getPatternOverlay() }}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 text-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            {/* Subtle icon/pattern */}
            <div className="w-8 h-8 mx-auto mb-2 opacity-30">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-sm leading-tight opacity-90 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Category label */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium text-center">
          {category}
        </div>
      </div>
    </div>
  );
}