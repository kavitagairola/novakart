function ShopToolbar({
  sortBy,
  setSortBy,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <h2 className="text-lg font-semibold text-gray-700">
        Showing 4 Products
      </h2>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-600">
          Sort By
        </span>

      <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="rounded-lg border px-4 py-2"
>
  <option value="latest">Latest</option>
  <option value="lowToHigh">
    Price: Low to High
  </option>

  <option value="highToLow">
    Price: High to Low
  </option>

  <option value="rating">
    Highest Rated
  </option>
</select>
      </div>
    </div>
  );
}

export default ShopToolbar;