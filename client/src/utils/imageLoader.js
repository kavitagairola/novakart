/**
 * Maison Aura - Centralized Fashion Image Mapping System
 */

export const getProductImageUrl = (category, filename) => {
  if (!filename) return '';
  if (filename.startsWith('http') || filename.startsWith('data:') || filename.startsWith('/')) {
    return filename;
  }

  const categoryMap = {
    'Dresses': 'dresses',
    'Tops & Bodysuits': 'tops',
    'Kurtis & Ethnic': 'kurtis',
    'Co-ord Sets': 'coords',
    'Oversized Tees': 'tees',
    'Party Wear': 'partywear',
    'Skirts & Bottoms': 'bottoms'
  };

  const folderSlug = categoryMap[category] || 'dresses';
  return `/src/assets/images/fashion/products/${folderSlug}/${filename}`;
};

export const categoryImages = {
  "Dresses": "/src/assets/images/fashion/categories/dresses.jpg",
  "Tops & Bodysuits": "/src/assets/images/fashion/categories/tops.jpg",
  "Kurtis & Ethnic": "/src/assets/images/fashion/categories/kurtis.jpg",
  "Co-ord Sets": "/src/assets/images/fashion/categories/coords.jpg",
  "Bottomwear": "/src/assets/images/fashion/categories/bottoms.jpg",
  "New Arrivals": "/src/assets/images/fashion/hero/hero-banner.jpg"
};

export default getProductImageUrl;