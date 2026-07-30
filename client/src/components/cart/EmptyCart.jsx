import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 py-24 text-center shadow-lg">

      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-50">
  <ShoppingCart
    size={70}
    className="text-blue-600"
  />
</div>

      <h2 className="mt-8 text-4xl font-extrabold text-gray-800">
        Your Cart is Empty
      </h2>

      <p className="mt-4 max-w-lg leading-8 text-gray-500">
        Looks like you haven't added any products yet.
        Start exploring our latest collection.
      </p>

      <Link
        to="/shop"
        className="mt-10 rounded-xl bg-blue-600 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default EmptyCart;