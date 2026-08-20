import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Drawer from "../ui/Drawer";
import { useCart } from "../../context/CartContext";

function MiniCartDrawer({ open, onClose }) {
  const {
  cartItems,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useCart();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={`Shopping Cart (${cartItems.length})`}
    >
      {cartItems.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
            <ShoppingCart
              size={40}
              className="text-slate-400"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Your Cart is Empty
          </h2>

          <p className="mt-2 max-w-xs text-slate-500">
            Looks like you haven't added any products yet.
          </p>

          <Link
            to="/shop"
            onClick={onClose}
            className="mt-8 rounded-xl bg-cyan-50 px-6 py-3 font-medium text-black transition "
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex h-full flex-col">
  {/* Product List */}
  <div className="flex-1 space-y-4 overflow-y-auto">

    {cartItems.map((item) => (
      <div
        key={item.id}
        className="flex gap-4 rounded-2xl border p-3"
      >

        <img
          src={item.image}
          alt={item.title}
          className="h-20 w-20 rounded-xl object-cover"
        />

        <div className="flex flex-1 flex-col">

          <h3 className="line-clamp-2 font-semibold">
            {item.title}
          </h3>

          <p className="mt-2 text-lg font-bold">
            ₹{item.price}
          </p>

         <div className="mt-4 flex items-center justify-between">

  <div className="flex items-center overflow-hidden rounded-xl border">

    <button
      onClick={() => decreaseQuantity(item.id)}
      className="px-3 py-2 transition hover:bg-slate-100"
    >
      <Minus size={16} />
    </button>

    <span className="w-10 text-center font-medium">
      {item.quantity}
    </span>

    <button
      onClick={() => increaseQuantity(item.id)}
      className="px-3 py-2 transition hover:bg-slate-100"
    >
      <Plus size={16} />
    </button>

  </div>

  <button
    onClick={() => removeFromCart(item.id)}
    className="text-red-500 transition hover:text-red-600"
  >
    <Trash2 size={18} />
  </button>

</div>

        </div>

      </div>
    ))}

  </div>

  {/* Footer */}
  <div className="border-t pt-5">

    <div className="mb-4 flex items-center justify-between">

      <span className="text-lg font-semibold">
        Total
      </span>

      <span className="text-xl font-bold">
        ₹{totalPrice}
      </span>


    </div>
    <p className="mb-5 text-sm text-green-600">
  ✓ Free shipping on this order
</p>

    <Link
      to="/cart"
      onClick={onClose}
     className="block rounded-xl border py-3 text-center font-medium transition hover:bg-slate-50"
    >
      View Cart
    </Link>

    <Link
      to="/checkout"
      onClick={onClose}
      className="mt-3 block rounded-xl bg-cyan-50 py-3 text-center font-medium text-black transition hover:bg-cyan-100"
    >
      Checkout
    </Link>

  </div>

</div>
      )}
    </Drawer>
  );
}

export default MiniCartDrawer;