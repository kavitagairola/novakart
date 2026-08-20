import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, ChevronDown, ShieldCheck, Truck, RotateCcw, Lock, Star, ArrowRight } from "lucide-react";
import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { featuredProducts } from "../../data/featuredProducts";

// Fallback product data if ID doesn't match directly
const fallbackProduct = {
  id: 101,
  name: "Structured Oversized Wool Blazer",
  category: "Outerwear",
  price: 2499,
  originalPrice: 4999,
  rating: 4.8,
  reviewsCount: 124,
  description: "Crafted from premium mid-weight wool blend, this structured oversized blazer offers a sharp, modern silhouette designed for seamless day-to-night layering.",
  images: [
    "/src/assets/images/products/product-01.jpg",
    "/src/assets/images/products/product-01-hover.jpg",
    "/src/assets/images/fashion/hero/hero-01.jpg",
    "/src/assets/images/fashion/hero/hero-02.jpg"
  ],
  colors: [
    { name: "Camel", hex: "#C19A6B" },
    { name: "Espresso", hex: "#3B2F2F" },
    { name: "Black", hex: "#0B0B0C" }
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  material: "65% Wool, 35% Recycled Polyester. Dry clean only.",
  shipping: "Standard delivery within 3-5 business days. Free returns within 14 days."
};

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Find product from featured or fallback
  const product = featuredProducts.find((p) => String(p.id) === String(id)) || {
    ...fallbackProduct,
    id: id ? Number(id) : fallbackProduct.id,
    images: [fallbackProduct.images[0], fallbackProduct.images[1], fallbackProduct.images[2]]
  };

  const isWishlisted = isInWishlist(product.id);

  // States
  const [activeImage, setActiveImage] = useState(product.images ? product.images[0] : fallbackProduct.images[0]);
  const [selectedColor, setSelectedColor] = useState(fallbackProduct.colors[0].name);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 50;

  return (
    <MainLayout>
      <div className="bg-[#FDFBF7] min-h-screen text-neutral-950 pb-16">
        
        {/* 1. Compact Breadcrumb */}
        <div className="border-b border-neutral-200/60 bg-[#F7F3ED] py-3">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.12em] text-neutral-500 font-medium">
              <Link to="/" className="hover:text-neutral-950 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-neutral-950 transition-colors">{product.category || "Collection"}</Link>
              <span>/</span>
              <span className="text-neutral-950 font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
            </nav>
          </Container>
        </div>

        {/* 2. Main Product Area (2-Column Layout) */}
        <section className="py-8 lg:py-12">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Image Gallery (6 Columns) */}
              <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
                
                {/* Thumbnails (Vertical on desktop) */}
                <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0">
                  {(product.images || fallbackProduct.images).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-20 sm:w-20 sm:h-24 rounded-[8px] overflow-hidden bg-neutral-100 border transition-all cursor-pointer ${
                        activeImage === img ? "border-neutral-950 ring-1 ring-neutral-950" : "border-neutral-200/70 hover:border-neutral-400"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover object-center" />
                    </button>
                  ))}
                </div>

                {/* Main Active Image */}
                <div className="relative flex-1 aspect-[3/4] overflow-hidden rounded-[14px] bg-neutral-100 border border-neutral-200/60 shadow-sm">
                  <img
                    src={activeImage || product.image}
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

              {/* Right Column: Product Information (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                
                {/* Header Info */}
                <div className="space-y-2 border-b border-neutral-200/60 pb-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C5A880] font-extrabold">
                    {product.category || "Outerwear"}
                  </span>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-[-0.03em] leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating & Review */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-800">{product.rating || 4.8}</span>
                    <span className="text-xs text-neutral-400">({product.reviewsCount || 98} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-2xl font-extrabold text-neutral-950">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through font-medium">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {product.description || fallbackProduct.description}
                </p>

                {/* Color Selection */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-neutral-700">Color: <span className="text-neutral-950">{selectedColor}</span></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {fallbackProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                          selectedColor === c.name ? "border-neutral-950 scale-110 shadow-xs" : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-700">Select Size: <span className="text-neutral-950">{selectedSize}</span></span>
                    <button className="text-[11px] text-[#C5A880] underline font-bold cursor-pointer hover:text-neutral-950">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    {fallbackProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-11 h-11 rounded-[8px] text-xs font-bold uppercase transition-all cursor-pointer border ${
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

                {/* Quantity & Actions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-neutral-300 rounded-[8px] bg-white overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3.5 py-2.5 text-sm font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 text-xs font-bold text-neutral-950">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3.5 py-2.5 text-sm font-bold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Bag Button */}
                    <button
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 bg-neutral-950 text-white hover:bg-neutral-800 py-3.5 px-6 text-xs uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag size={16} className="stroke-[2]" /> Add To Bag
                    </button>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => {
                        if (isWishlisted) removeFromWishlist(product.id);
                        else addToWishlist(product);
                      }}
                      className="p-3.5 rounded-[8px] border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 transition-colors cursor-pointer shadow-xs"
                      aria-label="Wishlist toggle"
                    >
                      <Heart
                        size={18}
                        className={`stroke-[1.75] ${isWishlisted ? "fill-neutral-950 text-neutral-950" : "text-neutral-700"}`}
                      />
                    </button>
                  </div>
                </div>

                {/* 3. Product Highlights (3 Compact Feature Blocks) */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-200/60">
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <ShieldCheck size={18} className="text-[#C5A880] mb-1" />
                    <span className="text-[10px] uppercase font-bold text-neutral-900">Premium Fabric</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <RotateCcw size={18} className="text-[#C5A880] mb-1" />
                    <span className="text-[10px] uppercase font-bold text-neutral-900">Easy Returns</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-[8px] bg-[#F7F3ED] border border-neutral-200/40">
                    <Lock size={18} className="text-[#C5A880] mb-1" />
                    <span className="text-[10px] uppercase font-bold text-neutral-900">Secure Pay</span>
                  </div>
                </div>

                {/* 4. Product Details Accordion */}
                <div className="divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
                  
                  {/* Description */}
                  <div>
                    <button
                      onClick={() => toggleAccordion("description")}
                      className="w-full py-3 flex items-center justify-between text-xs uppercase tracking-[0.1em] font-extrabold text-neutral-950 cursor-pointer"
                    >
                      <span>Description</span>
                      <ChevronDown size={15} className={`transform transition-transform ${openAccordion === "description" ? "rotate-180" : ""}`} />
                    </button>
                    {openAccordion === "description" && (
                      <p className="pb-3 text-xs text-neutral-600 leading-relaxed">
                        {product.description || fallbackProduct.description}
                      </p>
                    )}
                  </div>

                  {/* Material & Care */}
                  <div>
                    <button
                      onClick={() => toggleAccordion("material")}
                      className="w-full py-3 flex items-center justify-between text-xs uppercase tracking-[0.1em] font-extrabold text-neutral-950 cursor-pointer"
                    >
                      <span>Material & Care</span>
                      <ChevronDown size={15} className={`transform transition-transform ${openAccordion === "material" ? "rotate-180" : ""}`} />
                    </button>
                    {openAccordion === "material" && (
                      <p className="pb-3 text-xs text-neutral-600 leading-relaxed">
                        {fallbackProduct.material}
                      </p>
                    )}
                  </div>

                  {/* Shipping & Returns */}
                  <div>
                    <button
                      onClick={() => toggleAccordion("shipping")}
                      className="w-full py-3 flex items-center justify-between text-xs uppercase tracking-[0.1em] font-extrabold text-neutral-950 cursor-pointer"
                    >
                      <span>Shipping & Returns</span>
                      <ChevronDown size={15} className={`transform transition-transform ${openAccordion === "shipping" ? "rotate-180" : ""}`} />
                    </button>
                    {openAccordion === "shipping" && (
                      <p className="pb-3 text-xs text-neutral-600 leading-relaxed">
                        {fallbackProduct.shipping}
                      </p>
                    )}
                  </div>

                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* 5. Complete The Look Section */}
        <section className="py-10 bg-[#F7F3ED] border-t border-neutral-200/60 mt-6">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold block mb-1">
                STYLING PAIRINGS
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight">
                Complete The Look
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredProducts.slice(0, 4).map((item) => (
                <div key={item.id} className="group flex flex-col bg-[#FDFBF7] p-2.5 rounded-[12px] border border-neutral-200/60 shadow-xs">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-[10px] mb-2.5">
                    <Link to={`/product/${item.id}`} className="block h-full w-full">
                      <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </Link>
                  </div>
                  <div className="space-y-0.5 px-1">
                    <span className="text-[10px] uppercase text-neutral-500">{item.category}</span>
                    <Link to={`/product/${item.id}`} className="block">
                      <h4 className="text-xs font-bold text-neutral-950 line-clamp-1 group-hover:text-[#C5A880] transition-colors">{item.name}</h4>
                    </Link>
                    <span className="text-xs font-extrabold text-neutral-950">₹{item.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Recently Viewed Horizontal Row */}
        <section className="py-8 bg-[#FDFBF7] border-t border-neutral-200/60">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-500 mb-4">
              Recently Viewed
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {featuredProducts.slice(1, 5).map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="flex items-center gap-3 p-2 bg-[#F7F3ED] rounded-[10px] border border-neutral-200/50 hover:border-neutral-400 transition-all">
                  <div className="w-12 h-14 rounded-[6px] overflow-hidden bg-neutral-100 shrink-0">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-neutral-950 truncate">{item.name}</h5>
                    <span className="text-[11px] font-extrabold text-[#C5A880]">₹{item.price.toLocaleString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

      </div>
    </MainLayout>
  );
}

ProductDetails.displayName = "ProductDetails";
export default ProductDetails;