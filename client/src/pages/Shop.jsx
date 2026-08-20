import { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, ArrowRight } from "lucide-react";
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
        
        {/* 1. Compact NovaKart Styled Page Header */}
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

        {/* Main Content Area with Compact Spacing */}
        <section className="py-10 lg:py-12">
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid gap-6 rounded-[16px] border border-neutral-200/80 bg-[#FDFBF7] p-4 sm:p-6 shadow-sm lg:grid-cols-12 lg:p-8">
              
              {/* Left Sidebar */}
              <div
                className={`lg:col-span-3 ${
                  showFilters ? "block" : "hidden"
                } lg:block`}
              >
                <div className="lg:sticky lg:top-28">
                  <FilterSidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:col-span-9 space-y-4">
                
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="mb-2 flex items-center gap-2 rounded-[8px] border border-neutral-300 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider lg:hidden shadow-xs cursor-pointer text-neutral-900"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                <ShopToolbar
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />

                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />

                <ProductGrid
                  selectedCategory={selectedCategory}
                  searchTerm={searchTerm}
                  sortBy={sortBy}
                />

                {/* Compact Promotional Editorial Banner inside Shop Page */}
                <div className="bg-[#0B0B0C] text-[#FDFBF7] rounded-[16px] p-6 sm:p-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold">
                      THE NOVAKART EDIT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      Pieces selected for the way you actually live.
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                      Explore our signature curation of minimalist silhouettes and effortless tailoring.
                    </p>
                  </div>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 bg-[#FDFBF7] text-[#0B0B0C] hover:bg-neutral-200 px-6 py-3.5 text-[11px] uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-md whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    EXPLORE THE EDIT <ArrowRight size={14} className="stroke-[2.5]" />
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

export default Shop;