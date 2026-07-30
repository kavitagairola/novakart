import { categories } from "../../constants/data";
import { SlidersHorizontal } from "lucide-react";
function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
     <div className="mb-8 flex items-center gap-3">

  <SlidersHorizontal
    size={22}
    className="text-blue-600"
  />

  <h2 className="text-xl font-bold text-slate-900">
    Filters
  </h2>

</div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-800">
  Categories
</h3>

<div className="mb-4 h-px bg-slate-200"></div>

        <div className="space-y-2">
  {categories.map((category) => (
    <label
  key={category.id}
  className="
    flex
    cursor-pointer
    items-center
    gap-3
    rounded-xl
    border
    border-gray-200
    px-3 py-2.5
    transition-all
    duration-300
    hover:border-blue-500
    hover:bg-blue-50
  "
>
     <input
  type="checkbox"
  className="h-5 w-5 accent-blue-600"
  checked={selectedCategory === category.name}
  onChange={() =>
    setSelectedCategory(
      selectedCategory === category.name ? "" : category.name
    )
  }
/>

      <span className="text-[16px] font-medium text-slate-700">
  {category.name}
</span>
    </label>
  ))}
</div>
      </div>

      {/* Price */}
      <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">
  Price
</h3>

<div className="mb-4 h-px bg-slate-200"></div>

       <input
  type="range"
  min="0"
  max="100000"
  className="w-full accent-blue-600"
/>

<div className="mt-3 flex justify-between text-sm text-slate-500">

  <span>₹0</span>

  <span>₹100000</span>

</div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-slate-800">
  Rating
</h3>

<div className="mb-4 h-px bg-slate-200"></div>

        <select
  className="
    w-full
    rounded-lg
    border
    border-gray-200
    px-4
    py-3
    outline-none
    transition
    focus:border-blue-500
  "
>
          <option>All Ratings</option>
          <option>4★ & Above</option>
          <option>3★ & Above</option>
          <option>2★ & Above</option>
        </select>
      </div>
    </aside>
  );
}

export default FilterSidebar;