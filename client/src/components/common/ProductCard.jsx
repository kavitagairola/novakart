// src/components/common/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Ensure image is correctly picked from image property or first available image
  const cardImage = product.image || (product.images && product.images[0]) || "";

  return (
    <div className="group relative flex flex-col bg-white rounded-[12px] border border-neutral-200/60 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 h-full">
      {/* Image Container with Link */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          src={cardImage}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge / Discount */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 bg-neutral-950 text-white text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 font-bold rounded-[4px] z-10 shadow-sm">
            {product.badge}
          </span>
        )}
        {!product.badge && discountPercentage > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 font-bold rounded-[4px] z-10 shadow-sm">
            {discountPercentage}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isWishlisted) removeFromWishlist(product.id);
            else addToWishlist(product);
          }}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/80 backdrop-blur-xs text-neutral-800 hover:bg-white transition-colors z-10 shadow-xs cursor-pointer"
          aria-label="Wishlist toggle"
        >
          <Heart
            size={15}
            className={`stroke-[1.75] ${isWishlisted ? "fill-neutral-950 text-neutral-950" : "text-neutral-700"}`}
          />
        </button>
      </Link>

      {/* Content Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#C5A880] font-bold block mb-1 truncate">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-950 line-clamp-1 hover:text-[#C5A880] transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-extrabold text-neutral-950">
              Rs. {product.price?.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-neutral-400 line-through font-medium">
                Rs. {product.originalPrice?.toLocaleString()}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="p-2 rounded-[8px] bg-neutral-950 text-white hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} className="stroke-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.displayName = "ProductCard";
export default ProductCard;