// src/pages/Product/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../constants/productData";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import ProductCard from "../../components/common/ProductCard";
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, RotateCcw, ArrowRight } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Find exact clicked product using id with strict matching
  const product = products.find((p) => String(p.id) === String(id));

  const [activeImage, setActiveImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (product) {
      setActiveImage(product.images?.[0] || product.image || "");
      setSelectedColor(product.colors?.[0] || "");
      setSelectedSize(product.sizes?.[0] || "");
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <MainLayout>
        <Container>
          <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-3 tracking-tight">Product Not Found</h2>
            <p className="text-sm text-neutral-600 mb-8 max-w-md">
              The product you are looking for does not exist or may have been removed from our catalog.
            </p>
            <Link to="/shop" className="bg-neutral-950 text-white px-8 py-3.5 text-xs uppercase font-extrabold rounded-[8px]">
              Return to Collection
            </Link>
          </div>
        </Container>
      </MainLayout>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  // Fully dynamic gallery images mapping without any slice limitations
  const imagesList = product.images && product.images.length > 0 
    ? product.images 
    : [product.image].filter(Boolean);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Valid active fashion categories filter (excluding legacy IDs >= 100)
  const validCategories = ["Dresses", "Tops & Bodysuits", "Kurtis & Ethnic", "Co-ord Sets", "Oversized Tees"];
  const cleanFashionProducts = products.filter(
    (p) => validCategories.includes(p.category) && Number(p.id) < 100
  );

  // 1. More From This Category (Same category, strictly excluding current product)
  const relevantProducts = cleanFashionProducts.filter(
    (p) => 
      p.category?.trim().toLowerCase() === product.category?.trim().toLowerCase() && 
      String(p.id) !== String(product.id)
  );

  // 2. Explore More Products (Other fashion categories products)
  const exploreMoreProducts = cleanFashionProducts.filter(
    (p) => p.category?.trim().toLowerCase() !== product.category?.trim().toLowerCase()
  );

  return (
    <MainLayout>
      <div className="bg-[#FDFBF7] min-h-screen text-neutral-950 pb-12">
        {/* Breadcrumb Bar */}
        <div className="border-b border-neutral-200/60 bg-[#F7F3ED] py-3">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.12em] text-neutral-500 font-medium">
              <Link to="/" className="hover:text-neutral-950 transition-colors">Home</Link>
              <span>/</span>
              <Link to={`/shop?category=${encodeURIComponent(product.category || "")}`} className="hover:text-neutral-950 transition-colors">
                {product.category || "Shop"}
              </Link>
              <span>/</span>
              <span className="text-neutral-950 font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
            </nav>
          </Container>
        </div>

        {/* Product Details Section */}
        <section className="py-8 lg:py-10">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Gallery (Fully Dynamic ALL Images) */}
              <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
                {imagesList.length > 1 && (
                  <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0">
                    {imagesList.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`w-16 h-20 sm:w-20 sm:h-24 rounded-[8px] overflow-hidden bg-neutral-100 border transition-all cursor-pointer ${
                          (activeImage === img || (!activeImage && idx === 0))
                            ? "border-neutral-950 ring-1 ring-neutral-950"
                            : "border-neutral-200/70 hover:border-neutral-400"
                        }`}
                      >
                        <img src={img} alt={`${product.name} thumb ${idx + 1}`} className="h-full w-full object-cover object-center" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="relative flex-1 aspect-[3/4] overflow-hidden rounded-[14px] bg-neutral-100 border border-neutral-200/60 shadow-sm">
                  <img
                    src={activeImage || imagesList[0]}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  {discountPercentage > 0 && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-bold rounded-[4px] shadow-sm">
                      {discountPercentage}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-5 flex flex-col space-y-5">
                <div className="space-y-2 border-b border-neutral-200/60 pb-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C5A880] font-extrabold">
                    {product.category || "Collection"}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-[-0.03em] leading-tight">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating || 5) ? "fill-current text-amber-500" : "text-neutral-300"}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-800">{product.rating || 4.8}</span>
                    <span className="text-xs text-neutral-400">({product.reviews || 48} reviews)</span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-2xl font-extrabold text-neutral-950">Rs. {product.price?.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through font-medium">
                        Rs. {product.originalPrice?.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {product.description}
                </p>

                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-neutral-700">
                      Color: <span className="text-neutral-950">{selectedColor}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((color, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold border transition-all cursor-pointer ${
                            selectedColor === color
                              ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                              : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="font-bold text-neutral-700 text-xs">
                      Select Size: <span className="text-neutral-950">{selectedSize}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      {product.sizes.map((sz, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`w-10 h-10 rounded-[8px] text-xs font-bold uppercase transition-all cursor-pointer border ${
                            selectedSize === sz
                              ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                              : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-neutral-300 rounded-[8px] bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-neutral-950">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-sm font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 bg-neutral-950 text-white hover:bg-neutral-800 py-3 px-5 text-xs uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag size={16} className="stroke-[2]" /> Add To Bag
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (isWishlisted) removeFromWishlist(product.id);
                        else addToWishlist(product);
                      }}
                      className="p-3 rounded-[8px] border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 transition-colors cursor-pointer shadow-xs"
                      aria-label="Wishlist toggle"
                    >
                      <Heart
                        size={18}
                        className={`stroke-[1.75] ${isWishlisted ? "fill-neutral-950 text-neutral-950" : "text-neutral-700"}`}
                      />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-neutral-200/60">
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <ShieldCheck size={16} className="text-[#C5A880] mb-0.5" />
                    <span className="text-[9px] uppercase font-bold text-neutral-900">Premium Quality</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <RotateCcw size={16} className="text-[#C5A880] mb-0.5" />
                    <span className="text-[9px] uppercase font-bold text-neutral-900">Easy Returns</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <Truck size={16} className="text-[#C5A880] mb-0.5" />
                    <span className="text-[9px] uppercase font-bold text-neutral-900">Express Delivery</span>
                  </div>
                </div>

                {product.specifications && (
                  <div className="border-t border-neutral-200/80 pt-3">
                    <h3 className="text-[11px] uppercase tracking-[0.1em] font-extrabold text-neutral-950 mb-2">Specifications & Details</h3>
                    <div className="bg-[#F7F3ED] rounded-[8px] p-3.5 border border-neutral-200/60 divide-y divide-neutral-200/80">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1.5 text-xs">
                          <span className="text-neutral-500 font-medium capitalize">{key}</span>
                          <span className="text-neutral-950 font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* 1. MORE FROM THIS CATEGORY */}
        {relevantProducts.length > 0 && (
          <section className="py-8 bg-[#F7F3ED] border-t border-neutral-200/60 mt-4">
            <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold block mb-0.5">
                    CURATED COLLECTION
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-neutral-950 tracking-tight">
                    More From {product.category}
                  </h2>
                </div>
                <Link
                  to={`/shop?category=${encodeURIComponent(product.category || "")}`}
                  className="text-[11px] uppercase tracking-[0.15em] font-semibold text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-1"
                >
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {relevantProducts.map((item) => (
                  <div key={item.id} className="h-full flex flex-col">
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 2. PROMOTIONAL BANNER */}
        <div className="py-8 bg-[#FDFBF7]">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-950 text-[#FDFBF7] rounded-[12px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-800 shadow-md">
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-extrabold block">
                  Limited Time Offer
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-light tracking-wide text-white">
                  Flat 50% Off On Season Styles
                </h3>
                <p className="text-xs text-neutral-400 font-light max-w-md">
                  Explore curated artisanal collections crafted with premium organic fabrics and timeless silhouettes.
                </p>
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#b0936d] text-neutral-950 px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold rounded-[8px] transition-all duration-300 shadow-sm shrink-0"
              >
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </div>

        {/* 3. EXPLORE MORE */}
        {exploreMoreProducts.length > 0 && (
          <section className="py-8 bg-[#F7F3ED] border-t border-neutral-200/60">
            <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold block mb-0.5">
                    CURATED DISCOVERY
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-neutral-950 tracking-tight">
                    Explore More
                  </h2>
                </div>
                <Link
                  to="/shop"
                  className="text-[11px] uppercase tracking-[0.15em] font-semibold text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-1"
                >
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {exploreMoreProducts.map((item) => (
                  <div key={item.id} className="h-full flex flex-col">
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

      </div>
    </MainLayout>
  );
};

ProductDetails.displayName = "ProductDetails";
export default ProductDetails;