import { products } from "../../constants/productData";
import ProductCard from "../../components/common/ProductCard";
function RelatedProducts({ product }) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          You May Also Like
        </h2>

        <p className="mt-2 text-slate-500">
          Discover similar products you may love.
        </p>

      </div>

      {/* Products */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">

        {relatedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;