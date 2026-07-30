import { Link } from "react-router-dom";
import { Trash2, ShoppingCart } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function WishlistItem({ item }) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg sm:flex-row">

      {/* Product Image */}
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          alt={item.name}
          className="h-36 w-36 rounded-xl bg-slate-50 object-contain p-3"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between">

        <div>
          <Link
            to={`/product/${item.id}`}
            className="text-xl font-semibold text-slate-900 hover:text-blue-600"
          >
            {item.name}
          </Link>

          <p className="mt-2 text-yellow-500">
            ⭐ {item.rating}
          </p>

          <p className="mt-3 text-2xl font-bold text-blue-600">
            ₹{item.price.toLocaleString()}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          <button
            onClick={() => addToCart(item)}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <ShoppingCart size={18} />
            Add To Cart
          </button>

          <button
            onClick={() => removeFromWishlist(item.id)}
            className="flex items-center gap-2 rounded-xl border border-red-500 px-5 py-3 font-medium text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default WishlistItem;