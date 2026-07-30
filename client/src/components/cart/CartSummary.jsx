import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
function CartSummary() {
  const { totalItems, totalPrice } = useCart();

  const shipping = totalPrice > 999 ? 0 : 99;

  const grandTotal = totalPrice + shipping;

  return (
    <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Total Items
          </span>

          <span className="font-semibold">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹{totalPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Shipping
          </span>

          <span className="font-semibold text-green-600">
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>
{shipping === 0 && (
  <p className="rounded-lg bg-green-50 p-3 text-sm text-green-600">
    🎉 Congratulations! You unlocked Free Shipping.
  </p>
)}
        <hr className="border-dashed border-gray-300" />

        <div className="mt-6">
  <label className="mb-2 block text-sm font-medium">
    Coupon Code
  </label>

  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Enter coupon"
      className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
    />

    <button className="rounded-lg bg-gray-900 px-5 text-white transition hover:bg-black">
      Apply
    </button>
  </div>
</div>

        <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4 text-xl font-bold">
          <span>Grand Total</span>

          <span className="text-blue-600">
            ₹{grandTotal.toLocaleString()}
          </span>
        </div>

      </div>

     <Link to="/checkout">
  <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
    Proceed To Checkout
  </button>
</Link>

      <button
  className="mt-4 w-full rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-100"
>
  Continue Shopping
</button>

    </div>
  );
}

export default CartSummary;