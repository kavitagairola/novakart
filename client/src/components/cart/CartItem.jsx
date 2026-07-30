import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="group flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl md:flex-row">

      {/* Product Image */}
      <div className="flex justify-center md:w-44">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-40 rounded-2xl bg-gray-50 p-4 object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between">

        <div>
          <span className="inline-block rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
            {item.badge}
          </span>

          <h2 className="mt-3 text-xl lg:text-2xl font-bold">
            {item.name}
          </h2>

          <p className="mt-2 flex items-center gap-2 text-gray-500">
  <span className="text-yellow-500">
    ⭐ {item.rating}
  </span>

  <span>
    ({item.reviews} Reviews)
  </span>
</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl lg:text-2xl font-bold text-blue-600">
              ₹{item.price.toLocaleString()}
            </span>

            <span className="text-gray-400 line-through">
              ₹{item.originalPrice.toLocaleString()}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-500">
  Subtotal :
  <span className="ml-2 font-semibold text-gray-800">
    ₹{(item.price * item.quantity).toLocaleString()}
  </span>
</p>


        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

          {/* Quantity */}
          <div className="flex items-center rounded-xl border border-gray-300 shadow-sm">

            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-4 py-2 text-xl hover:bg-blue-50"
            >
              −
            </button>

            <span className="px-6 font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-4 py-2 text-xl hover:bg-blue-50"
            >
              +
            </button>

          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-red-600 transition hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 size={18} />
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;