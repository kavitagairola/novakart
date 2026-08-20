// src/features/home/NewArrivals.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

// Local image imports from existing project assets
import product1 from "../../assets/images/fashion/products/kurtis/product-01-01.jpg";
import product1Hover from "../../assets/images/fashion/products/kurtis/product-01-02.jpg";
import product2 from "../../assets/images/fashion/products/kurtis/product-03-01.jpg";
import product2Hover from "../../assets/images/fashion/products/kurtis/product-03-02.jpg";
import product3 from "../../assets/images/fashion/products/coords/product-01-01.jpg";
import product3Hover from "../../assets/images/fashion/products/coords/product-01-02.jpg";
import product4 from "../../assets/images/fashion/products/tops/product-06-01.jpg";
import product4Hover from "../../assets/images/fashion/products/tops/product-06-02.jpg";
import editorialFeatureImg from "../../assets/images/fashion/hero/hero-01.jpg";

const newArrivalsProducts = [
  {
    id: 201,
    name: "Hand-Block Floral Cambric Kurti",
    category: "Ethnic",
    price: 1699,
    originalPrice: 2399,
    rating: 4.8,
    badge: "New",
    image: product1,
    secondaryImage: product1Hover,
  },
  {
    id: 202,
    name: "Angrakha A-Line Cotton Tunic",
    category: "Ethnic",
    price: 1899,
    originalPrice: 2599,
    rating: 4.7,
    badge: "New",
    image: product2,
    secondaryImage: product2Hover,
  },
  {
    id: 203,
    name: "Linen Relaxed Shirt & Trouser Co-ord",
    category: "Dresses",
    price: 3299,
    originalPrice: 4499,
    rating: 4.9,
    badge: "Exclusive",
    image: product3,
    secondaryImage: product3Hover,
  },
  {
    id: 204,
    name: "High-Waisted Pleated Linen Trousers",
    category: "Bottomwear",
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    badge: "",
    image: product4,
    secondaryImage: product4Hover,
  },
];

const filterCategories = ["All", "Dresses", "Ethnic", "Tops", "Bottomwear"];

function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Filter products based on active tab
  const filteredProducts = activeFilter === "All" 
    ? newArrivalsProducts 
    : newArrivalsProducts.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === "Tops" && item.category.includes("Skirts")));

  return (
    <section className="py-12 lg:py-14 bg-[#FDFBF7] border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Area: Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.15em] text-amber-800 font-bold mb-1.5 bg-amber-100/60 px-2.5 py-0.5 rounded-full">
              JUST DROPPED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em]">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-1 max-w-md">
              Fresh seasonal silhouettes tailored for the contemporary wardrobe.
            </p>
          </div>

          {/* Filter Tabs & View All */}
          <div className="flex flex-wrap items-center gap-4 justify-between lg:justify-end">
            <div className="flex items-center gap-1 bg-neutral-100/80 p-1 rounded-[8px] border border-neutral-200/60 overflow-x-auto">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] font-bold rounded-[6px] transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeFilter === category
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <Link
              to="/shop?category=new-arrivals"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-bold text-neutral-950 pb-1 border-b-2 border-neutral-950 hover:text-amber-800 hover:border-amber-800 transition-all duration-300"
            >
              View All <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Large Featured Editorial Card (5 Columns) */}
          <div className="lg:col-span-5 relative rounded-[16px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full bg-neutral-900 group shadow-sm flex flex-col justify-end p-6 sm:p-8">
            <img
              src={editorialFeatureImg}
              alt="The New Edit Editorial"
              className="absolute inset-0 h-full w-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Dark Subtle Editorial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-[4px]">
                THE NEW EDIT
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Elevated essentials for the new season.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-sm">
                Discover masterfully draped fabrics and refined structural lines engineered for effortless day-to-night styling.
              </p>
              <div className="pt-2">
                <Link
                  to="/shop?category=new-arrivals"
                  className="inline-flex items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200 px-5 py-3 text-[11px] uppercase tracking-[0.12em] font-bold rounded-[8px] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Shop the Edit <ArrowRight size={14} className="stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Product Cards Grid (7 Columns - 3 or 4 items) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredProducts.slice(0, 3).map((product) => {
              const isWishlisted = isInWishlist(product.id);
              const discountPercentage = product.originalPrice 
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
                : 0;

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
                        src={product.secondaryImage}
                        alt={`${product.name} detail`}
                        className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transform scale-103 group-hover:opacity-100 transition-all duration-400 ease-out"
                      />
                    </Link>

                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-neutral-950 text-white text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 font-bold rounded-[3px] shadow-sm">
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

                    <div className="absolute inset-x-0 bottom-0 p-2.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-neutral-950/60 to-transparent">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full bg-white text-neutral-950 hover:bg-neutral-950 hover:text-white py-2 px-2.5 text-[10px] uppercase tracking-[0.1em] font-bold rounded-[6px] transition-all duration-300 shadow-md flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag size={13} className="stroke-[1.5]" /> Quick Add
                      </button>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="space-y-0.5 flex flex-col flex-1 px-1">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-neutral-500 font-medium">
                      {product.category}
                    </span>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="font-bold text-xs sm:text-sm text-neutral-950 group-hover:text-amber-800 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 pt-1 mt-auto">
                      <span className="text-xs sm:text-sm font-extrabold text-neutral-950">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-neutral-400 line-through font-medium">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      {discountPercentage > 0 && (
                        <span className="text-[9px] text-emerald-700 font-bold">
                          {discountPercentage}% off
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
}

NewArrivals.displayName = "NewArrivals";
export default NewArrivals;