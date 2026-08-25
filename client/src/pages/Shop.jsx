// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import ProductGrid from "../features/shop/ProductGrid";
import FilterSidebar from "../features/shop/FilterSidebar";
import ShopToolbar from "../features/shop/ShopToolbar";
import { SlidersHorizontal, X } from "lucide-react";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";

  // 1. Single Source of Truth for Selected Category State
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 50000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // 2. Sync URL parameter changes to local state (Direction A: Home / URL → Shop)
  useEffect(() => {
    const currentUrlCategory = searchParams.get("category") || "";
    if (currentUrlCategory !== selectedCategory) {
      setSelectedCategory(currentUrlCategory);
    }
  }, [searchParams]);

  // 3. Handle Category Change from FilterSidebar or UI (Direction B: FilterSidebar → URL & State)
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange([0, 50000]);
    setSelectedRating(null);
    setSearchTerm("");
    setSortBy("featured");
    setSearchParams({});
  };

  return (
    <MainLayout>
      <div className="bg-[#FDFBF7] min-h-screen">
        {/* Collection Header & Editorial Banner */}
        <div className="bg-[#F7F3ED] border-b border-neutral-200/60 py-12 lg:py-16">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] block mb-2 font-extrabold">
              NovaKart Atelier
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-neutral-950 capitalize tracking-wide mb-3">
              {selectedCategory ? selectedCategory : "The Complete Collection"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-light leading-relaxed">
              Explore timeless silhouettes and handcrafted artisanal pieces designed with precision and organic elegance.
            </p>
          </Container>
        </div>

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          {/* Shop Toolbar (Sort & Mobile Filter Trigger) */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                Explore Curated Items
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-white border border-neutral-300 text-xs uppercase tracking-[0.1em] font-bold text-neutral-900 shadow-xs cursor-pointer"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>

              <ShopToolbar sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>

          {/* Main Layout Grid (Sidebar + ProductGrid Pipeline) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block lg:col-span-1 sticky top-24">
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                clearAllFilters={clearAllFilters}
              />
            </div>

            {/* Product Grid (Delegating filtering & sorting to existing pipeline) */}
            <div className="lg:col-span-3">
              <ProductGrid
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                sortBy={sortBy}
                selectedPriceRange={selectedPriceRange}
                selectedRating={selectedRating}
              />
            </div>
          </div>

        </Container>

        {/* Mobile Filter Drawer / Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden bg-neutral-950/50 backdrop-blur-xs flex justify-end">
            <div className="w-full max-w-xs bg-[#FDFBF7] h-full overflow-y-auto p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-neutral-950">
                    Filters & Categories
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-700 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <FilterSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={(cat) => {
                    handleCategoryChange(cat);
                    setShowFilters(false);
                  }}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                  clearAllFilters={clearAllFilters}
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 mt-6">
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-neutral-950 text-white py-3 rounded-[8px] text-xs uppercase tracking-[0.15em] font-bold cursor-pointer"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </MainLayout>
  );
};

Shop.displayName = "Shop";
export default Shop;