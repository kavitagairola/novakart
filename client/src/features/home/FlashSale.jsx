// src/features/home/FlashSale.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Clock } from "lucide-react";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { products } from "../../constants/productData";

function FlashSale() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const flashSaleList = products.filter(
    (p) => p.badge === "Sale" || (p.originalPrice && p.originalPrice > p.price)
  ).slice(0, 4);

  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 14, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 lg:py-14 bg-[#F7F3ED] border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-amber-800 font-bold mb-1.5 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              <Clock size={12} className="animate-pulse text-amber-800" /> LIMITED TIME OFFER
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em]">
              Flash Sale
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {flashSaleList.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            const displayImage = product.images?.[0] || product.image;

            return (
              <div key={product.id} className="group flex flex-col bg-[#FDFBF7] p-2.5 rounded-[12px] border border-neutral-200/50 shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-[10px] mb-3">
                  <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img src={displayImage} alt={product.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                  </Link>
                  <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 font-bold rounded-[3px]">
                    SALE
                  </span>
                </div>
                <div className="space-y-0.5 px-1">
                  <span className="text-[10px] uppercase text-neutral-500">{product.category}</span>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-bold text-sm text-neutral-950 line-clamp-1">{product.name}</h3>
                  </Link>
                  <span className="text-sm font-extrabold text-red-600">Rs. {product.price?.toLocaleString()}</span>
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