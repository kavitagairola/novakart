import Button from "../ui/Button";

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-yellow-500">
            ⭐ {product.rating} ({product.reviews})
          </span>

          <Button>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;