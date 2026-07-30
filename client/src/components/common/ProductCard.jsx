import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
function ProductCard({ product }) {
const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  wishlistItems,
} = useWishlist();

console.log("Wishlist:", wishlistItems);

const wishlist = isInWishlist(product.id);
  const discountPercentage = Math.round(
  ((product.originalPrice - product.price) / product.originalPrice) * 100
);
    return (
        <Link to={`/product/${product.id}`} className="block">
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50 sm:h-72">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[220px] w-auto object-contain transition duration-500 group-hover:scale-110 sm:max-h-[250px]"
        />

        {/* Badge */}
       <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
  {discountPercentage}% OFF
</span>

<button
  onClick={(e) => {
    e.preventDefault();

    if (wishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }}
  className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
>
  <Heart
    size={20}
    className={
      wishlist
        ? "fill-red-500 text-red-500"
        : "text-gray-500"
    }
  />
</button>

      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="min-h-[60px] line-clamp-2 text-lg font-semibold leading-7 text-slate-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="mt-auto pt-5">

  <div className="mb-4 flex items-center gap-2 text-sm">
    <span className="font-medium text-yellow-500">
      ⭐ {product.rating}
    </span>

    <span className="text-slate-500">
      ({product.reviews} Reviews)
    </span>
  </div>

  <Button
    size="sm"
    className="w-full"
  >
    View Details
  </Button>

</div>


      </div>
    </div>
    </Link>
  );
}

export default ProductCard;