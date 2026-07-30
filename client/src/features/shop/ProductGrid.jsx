import ProductCard from "../../components/common/ProductCard";
import { products } from "../../constants/productData";

function ProductGrid({
  selectedCategory,
  searchTerm,
  sortBy,
}) {
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;

    const searchMatch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortedProducts.length === 0) {
    return (
      <div className="py-10 text-center">
        No products found.
      </div>
    );
  }

  return (
   <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;