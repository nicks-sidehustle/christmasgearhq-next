const { guides } = require('./src/data/guides.ts');

console.log('Analyzing guides for missing images:\n');

guides.forEach((guide, index) => {
  const hasImage = guide.image && guide.image.trim() !== '';
  const hasPlaceholder = guide.image && guide.image.includes('placeholder');
  
  console.log(`${index + 1}. ${guide.title}`);
  console.log(`   Slug: ${guide.slug}`);
  console.log(`   Image: ${hasImage ? guide.image.substring(0, 50) + '...' : 'MISSING'}`);
  console.log(`   Status: ${!hasImage ? 'NEEDS THUMBNAIL' : hasPlaceholder ? 'HAS PLACEHOLDER' : 'HAS REAL IMAGE'}`);
  console.log('');
});

const needsThumbnail = guides.filter(g => !g.image || g.image.trim() === '' || g.image.includes('placeholder'));
console.log(`\nSummary: ${needsThumbnail.length} guides need thumbnails:`);
needsThumbnail.forEach(g => console.log(`- ${g.slug}`));