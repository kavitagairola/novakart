// src/features/home/FlashSale.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Clock } from "lucide-react";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

// Local image imports matching your assets structure
import product1 from "../../assets/images/products/product-01.jpg";
import product1Hover from "../../assets/images/products/product-01-hover.jpg";
import product2 from "../../assets/images/products/product-02.jpg";
import product2Hover from "../../assets/images/products/product-02-hover.jpg";
import product3 from "../../assets/images/products/product-03.jpg";
import product3Hover from "../../assets/images/products/product-03-hover.jpg";
import product4 from "../../assets/images/products/product-04.jpg";
import product4Hover from "../../assets/images/products/product-04-hover.jpg";

const flashSaleProducts = [
  {
    id: 101,
    name: "Tailored Wool Blazer",
    category: "Outerwear",
    price: 2499,
    originalPrice: 4999,
    discountBadge: "50% OFF",
    image: product1,
    hoverImage: product1Hover,
  },
  {
    id: 102,
    name: "Champagne Satin Midi Dress",
    category: "Dresses",
    price: 1999,
    originalPrice: 3999,
    discountBadge: "50% OFF",
    image: product2,
    hoverImage: product2Hover,
  },
  {
    id: 103,
    name: "Ivory Chanderi Silk Kurti",
    category: "Ethnic",
    price: 1299,
    originalPrice: 2599,
    discountBadge: "50% OFF",
    image: product3,
    hoverImage: product3Hover,
  },
  {
    id: 104,
    name: "Pleated Espresso Trousers",
    category: "Bottomwear",
    price: 1599,
    originalPrice: 3199,
    discountBadge: "50% OFF",
    image: product4,
    hoverImage: product4Hover,
  },
];

function FlashSale() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 lg:py-14 bg-[#F7F3ED] border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header & Countdown Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-amber-800 font-bold mb-1.5 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              <Clock size={12} className="animate-pulse text-amber-800" /> LIMITED TIME OFFER
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em]">
              Flash Sale
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-1 max-w-md">
              Exclusive seasonal designs at exceptional value. Grab them before time runs out.
            </p>
          </div>

          {/* Premium Compact Countdown Timer */}
          <div className="flex items-center gap-2.5 bg-neutral-950 text-white px-4 py-2.5 rounded-[10px] shadow-sm w-fit">
            <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-medium hidden sm:inline">Ends in:</span>
            <div className="flex items-center gap-1.5 text-center font-bold tracking-tight">
              <div className="flex flex-col">
                <span className="text-base text-amber-200">{String(timeLeft.days).padStart(2, "0")}</span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-normal">Days</span>
              </div>
              <span className="text-neutral-500 pb-1.5">:</span>
              <div className="flex flex-col">
                <span className="text-base text-amber-200">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-normal">Hours</span>
              </div>
              <span className="text-neutral-500 pb-1.5">:</span>
              <div className="flex flex-col">
                <span className="text-base text-amber-200">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-normal">Mins</span>
              </div>
              <span className="text-neutral-500 pb-1.5">:</span>
              <div className="flex flex-col">
                <span className="text-base text-amber-200">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-normal">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Product Cards Horizontal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {flashSaleProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);

            return (
              <div key={product.id} className="group flex flex-col bg-[#FDFBF7] p-2.5 rounded-[12px] border border-neutral-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-[10px] mb-3">
                  <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-400 ease-out group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} detail`}
                      className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transform scale-103 group-hover:opacity-100 transition-all duration-400 ease-out"
                    />
                  </Link>

                  {/* Discount Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 font-bold rounded-[3px] shadow-sm">
                    {product.discountBadge}
                  </span>

                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isWishlisted) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-white text-neutral-800 backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Wishlist toggle"
                  >
                    <Heart
                      size={16}
                      className={`stroke-[1.5] transition-colors ${
                        isWishlisted ? "fill-neutral-950 text-neutral-950" : "text-neutral-700 hover:text-neutral-950"
                      }`}
                    />
                  </button>

                  {/* Quick Add Button on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-neutral-950/60 to-transparent">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full bg-white text-neutral-950 hover:bg-neutral-950 hover:text-white py-2.5 px-3 text-[11px] uppercase tracking-[0.1em] font-bold rounded-[6px] transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag size={14} className="stroke-[1.5]" /> Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-0.5 flex flex-col flex-1 px-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-neutral-500 font-medium">
                    {product.category}
                  </span>

                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-bold text-sm text-neutral-950 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2.5 pt-1 mt-auto">
                    <span className="text-sm font-extrabold text-red-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-neutral-400 line-through font-medium">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

FlashSale.displayName = "FlashSale";
export default FlashSale;