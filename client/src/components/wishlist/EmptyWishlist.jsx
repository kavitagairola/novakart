import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-100">
        <Heart
          size={42}
          className="text-pink-500"
        />
      </div>

      <h2 className="mt-8 text-3xl font-semibold text-slate-900">
        Your Wishlist is Empty
      </h2>

      <p className="mt-4 max-w-md text-slate-500">
        Save your favourite products and they will appear here.
      </p>

      <Link
        to="/shop"
        className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default EmptyWishlist;