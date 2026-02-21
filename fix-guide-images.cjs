const fs = require('fs');
const path = require('path');

// Mapping of guide files to appropriate Unsplash photo IDs
const imageMapping = {
  'best-artificial-christmas-trees-2026.md': 'photo-1512389098783-66b81f86e199', // Beautiful Christmas tree
  'best-christmas-garland-2026.md': 'photo-1544273677-6e9e6b473b77', // Christmas garland
  'best-christmas-lights-2026.md': 'photo-1545558014-8692077e9b5c', // Christmas lights on house
  'best-christmas-ornaments-2026.md': 'photo-1512389142860-9c449e58a543', // Christmas ornaments on tree
  'best-christmas-stocking-stuffers-2026.md': 'photo-1544273677-6e9e6b473b77', // Christmas stockings
  'best-christmas-stockings-2026.md': 'photo-1544273677-6e9e6b473b77', // Christmas stockings
  'best-christmas-storage-solutions-2026.md': 'photo-1571781926291-c477ebfd024b', // Organized storage/boxes
  'best-christmas-tech-gifts-2026.md': 'photo-1513475382585-d06e58bcb0e0', // Wrapped tech gifts
  'best-christmas-tree-decorating-ideas-supplies-2026.md': 'photo-1512389098783-66b81f86e199', // Decorated Christmas tree
  'best-christmas-tree-stands-2026.md': 'photo-1544273677-34f19c6e1d82', // Christmas tree base/stand area
  'best-christmas-village-sets-2026.md': 'photo-1512428559087-560fa5ceab42', // Christmas village/miniatures
  'best-christmas-wrapping-supplies-2026.md': 'photo-1513475382585-d06e58bcb0e0', // Gift wrapping supplies
  'best-christmas-wreaths-2026.md': 'photo-1544273677-9ac1c4b39b90', // Christmas wreath
  'best-holiday-outdoor-lighting-displays-2026.md': 'photo-1545558014-8692077e9b5c', // Outdoor Christmas lights
  'best-outdoor-christmas-decorations-2026.md': 'photo-1545558014-8692077e9b5c', // Outdoor Christmas decorations
  'best-tech-gifts-christmas-2026.md': 'photo-1513475382585-d06e58bcb0e0', // Tech gifts wrapped
};

// Default Christmas image for any missing mappings
const defaultImage = 'photo-1512389098783-66b81f86e199'; // Beautiful Christmas tree

const guidesDir = path.join(__dirname, 'src/content/guides');

function updateGuideImages() {
  const files = fs.readdirSync(guidesDir);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const filePath = path.join(guidesDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Get the appropriate Unsplash photo ID
      const photoId = imageMapping[file] || defaultImage;
      const unsplashUrl = `https://images.unsplash.com/${photoId}?w=800&q=80`;
      
      // Replace the image line in frontmatter
      content = content.replace(
        /^image: .+$/m,
        `image: ${unsplashUrl}`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${file} with image: ${unsplashUrl}`);
    }
  });
}

console.log('🔄 Updating guide images with Unsplash URLs...');
updateGuideImages();
console.log('✅ All guide images updated!');