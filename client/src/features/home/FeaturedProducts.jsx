// src/features/home/FeaturedProducts.jsx
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function FeaturedProducts() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const featuredProducts = [
    {
      id: 13,
      name: "Hand-Block Floral Cambric Kurti",
      category: "Kurtis & Ethnic",
      price: 1699,
      originalPrice: 2399,
      rating: 4.8,
      badge: "Bestseller",
      image: "/src/assets/images/fashion/products/kurtis/product-01-01.jpg",
      secondaryImage: "/src/assets/images/fashion/products/kurtis/product-01-02.jpg",
    },
    {
      id: 15,
      name: "Angrakha A-Line Cotton Tunic",
      category: "Kurtis & Ethnic",
      price: 1899,
      originalPrice: 2599,
      rating: 4.7,
      badge: "New",
      image: "/src/assets/images/fashion/products/kurtis/product-03-01.jpg",
      secondaryImage: "/src/assets/images/fashion/products/kurtis/product-03-02.jpg",
    },
    {
      id: 19,
      name: "Linen Relaxed Shirt & Trouser Co-ord",
      category: "Co-ord Sets",
      price: 3299,
      originalPrice: 4499,
      rating: 4.9,
      badge: "Exclusive",
      image: "/src/assets/images/fashion/products/coords/product-01-01.jpg",
      secondaryImage: "/src/assets/images/fashion/products/coords/product-01-02.jpg",
    },
    {
      id: 37,
      name: "High-Waisted Pleated Linen Trousers",
      category: "Skirts & Bottoms",
      price: 2499,
      originalPrice: 3299,
      rating: 4.8,
      badge: "",
      image: "/src/assets/images/fashion/products/tops/product-06-01.jpg",
      secondaryImage: "/src/assets/images/fashion/products/tops/product-06-02.jpg",
    }
  ];

  return (
    <section className="py-12 lg:py-14 bg-[#FDFBF7] border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-1.5 font-light">
              Our Curation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light tracking-wide text-neutral-950">
              Featured Products
            </h2>
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-6">
            <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-xs leading-relaxed hidden sm:block">
              Exquisite modern staples and artisanal statements crafted for the season.
            </p>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-neutral-950 pb-0.5 border-b border-neutral-950 hover:text-amber-800 hover:border-amber-800 transition-all duration-300"
            >
              View All <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            const discountPercentage = product.originalPrice ? Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            ) : 0;

            return (
              <div key={product.id} className="group flex flex-col bg-[#FDFBF7] p-2.5 rounded-[12px] border border-neutral-200/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-[10px] mb-3">
                  <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out group-hover:opacity-0"
                    />
                    <img
                      src={product.secondaryImage}
                      alt={`${product.name} detail`}
                      className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transform scale-104 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                  </Link>

                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/90 text-white text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 font-light backdrop-blur-sm rounded-[3px]">
                      {product.badge}
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isWishlisted) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/80 hover:bg-white text-neutral-800 backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Wishlist toggle"
                  >
                    <Heart
                      size={16}
                      className={`stroke-[1.5] transition-colors ${
                        isWishlisted ? "fill-neutral-950 text-neutral-950" : "text-neutral-700"
                      }`}
                    />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 p-2.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-neutral-950/50 to-transparent">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full bg-white text-neutral-950 hover:bg-neutral-950 hover:text-white py-2.5 px-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag size={13} className="stroke-[1.5]" /> Quick Add
                    </button>
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-0.5 flex flex-col flex-1 px-1">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-light">
                    <span>{product.category}</span>
                    <span className="text-amber-800 font-normal">★ {product.rating}</span>
                  </div>

                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-serif font-light text-sm text-neutral-950 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 pt-1 mt-auto">
                    <span className="text-sm font-semibold text-neutral-950">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through font-light">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {discountPercentage > 0 && (
                      <span className="text-[10px] text-emerald-700 font-light">
                        ({discountPercentage}% off)
                      </span>
                    )}
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

FeaturedProducts.displayName = "FeaturedProducts";
export default FeaturedProducts;