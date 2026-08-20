// src/pages/Shop.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, ArrowRight, X } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import ProductGrid from "../features/shop/ProductGrid";
import FilterSidebar from "../features/shop/FilterSidebar";
import ShopToolbar from "../features/shop/ShopToolbar";
import SearchBar from "../features/shop/SearchBar";

function Shop() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <MainLayout>
      <div className="bg-[#FDFBF7] min-h-screen text-neutral-950 pb-16">
        
        {/* 1. Compact Collection Header */}
        <section className="pt-8 pb-6 border-b border-neutral-200/60 bg-[#F7F3ED]">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-1.5">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold bg-[#EFE8E1] px-2.5 py-0.5 rounded-full">
                THE COLLECTION
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em]">
                Shop All
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal max-w-xl">
                Explore our complete range of refined everyday essentials, contemporary designs, and artisanal statements.
              </p>
            </div>
          </Container>
        </section>

        {/* 2 & 3. Filter Bar + Product Count + Results */}
        <section className="py-8 lg:py-10">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Toolbar and Mobile Filter Trigger Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200/80">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-[8px] border border-neutral-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider lg:hidden shadow-xs cursor-pointer text-neutral-900"
                >
                  <SlidersHorizontal size={15} />
                  Filters
                </button>
                <span className="text-xs text-neutral-500 font-medium">
                  Showing curated collection results
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-full sm:w-auto">
                  <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />
                </div>
                <ShopToolbar
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </div>

            </div>

            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar / Mobile Drawer */}
              <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:static lg:z-auto lg:col-span-3 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                <div className="absolute left-0 top-0 h-full w-80 bg-[#FDFBF7] p-6 shadow-2xl overflow-y-auto lg:static lg:h-auto lg:w-full lg:p-0 lg:shadow-none lg:bg-transparent">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 lg:hidden">
                    <h3 className="font-extrabold text-sm uppercase tracking-wider">Filters</h3>
                    <button onClick={() => setShowFilters(false)} className="p-1 rounded-full bg-neutral-100 text-neutral-800">
                      <X size={18} />
                    </button>
                  </div>

                  <FilterSidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              </div>

              {/* Right Content & Product Grid */}
              <div className="w-full lg:col-span-9 space-y-8">
                
                <ProductGrid
                  selectedCategory={selectedCategory}
                  searchTerm={searchTerm}
                  sortBy={sortBy}
                />

                {/* 5. Unique Editorial Break inside listing */}
                <div className="bg-[#0B0B0C] text-[#FDFBF7] rounded-[16px] p-6 sm:p-10 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold">
                      THE CURATED EDIT
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-snug">
                      Designed for the moments<br />
                      <span className="text-[#C5A880]">you want to remember.</span>
                    </h3>
                  </div>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2.5 bg-[#FDFBF7] text-[#0B0B0C] hover:bg-neutral-200 px-7 py-4 text-[12px] uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-lg whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    EXPLORE THE EDIT <ArrowRight size={15} className="stroke-[2.5]" />
                  </Link>
                </div>

              </div>

            </div>

          </Container>
        </section>

      </div>
    </MainLayout>
  );
}

Shop.displayName = "Shop";
export default Shop;