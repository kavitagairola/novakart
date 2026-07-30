import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import ProductGrid from "../features/shop/ProductGrid";
import FilterSidebar from "../features/shop/FilterSidebar";
import ShopToolbar from "../features/shop/ShopToolbar";
import SearchBar from "../features/shop/SearchBar";

import { SlidersHorizontal } from "lucide-react";


function Shop() {
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("latest");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <MainLayout>
      <section className="bg-slate-50 py-10 lg:py-16">
        <Container>
         <div className="mb-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-white">

  <span className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
    Our Collection
  </span>

  <h1 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
    Explore Our Products
  </h1>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
    Discover premium electronics, fashion, accessories and much more with amazing offers.
  </p>

</div>
<div className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-5 shadow-lg lg:grid-cols-12 lg:p-8">
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
  <div className="w-full lg:col-span-9">
    <button
  onClick={() => setShowFilters(!showFilters)}
  className="mb-4 flex items-center gap-2 rounded-xl border px-4 py-3 lg:hidden"
>
  <SlidersHorizontal size={18} />
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
  </div>
</div>
        </Container>
      </section>
    </MainLayout>
  );
}

export default Shop;