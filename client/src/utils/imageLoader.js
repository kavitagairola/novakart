import dressesImage from "../assets/images/fashion/categories/dresses.jpg";
import topsImage from "../assets/images/fashion/categories/tops.jpg";
import kurtisImage from "../assets/images/fashion/categories/kurtis.jpg";
import coordsImage from "../assets/images/fashion/categories/coords.jpg";
import bottomsImage from "../assets/images/fashion/categories/bottoms.jpg";
import heroBanner from "../assets/images/fashion/hero/hero-banner.jpg";

const productImages = import.meta.glob(
  "../assets/images/fashion/products/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const getProductImageUrl = (category, filename) => {
  if (!filename) return "";

  const categoryMap = {
    "Dresses": "dresses",
    "Tops & Bodysuits": "tops",
    "Kurtis & Ethnic": "kurtis",
    "Co-ord Sets": "coords",
    "Oversized Tees": "tees",
    "Party Wear": "partywear",
    "Skirts & Bottoms": "bottoms",
  };

  const folderSlug = categoryMap[category] || "dresses";

  const path = `../assets/images/fashion/products/${folderSlug}/${filename}`;

  return productImages[path] || "";
};

export const categoryImages = {
  Dresses: dressesImage,
  "Tops & Bodysuits": topsImage,
  "Kurtis & Ethnic": kurtisImage,
  "Co-ord Sets": coordsImage,
  Bottomwear: bottomsImage,
  "New Arrivals": heroBanner,
};

export default getProductImageUrl;