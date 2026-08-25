// src/features/home/FeaturedProducts.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";
import { products } from "../../constants/productData";
import ProductCard from "../../components/common/ProductCard";

function FeaturedProducts() {
  // Exactly 5 unique products covering all main categories including the added Oversized Tee (ID 40)
  const targetIds = [1, 13, 20, 19, 40];
  const featuredList = targetIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

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

        {/* Product Grid - Exactly 5 unique mixed category cards filling all columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

FeaturedProducts.displayName = "FeaturedProducts";
export default FeaturedProducts;