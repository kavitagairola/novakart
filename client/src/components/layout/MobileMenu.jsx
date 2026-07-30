import { Heart, Home, LogIn, ShoppingBag, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 xl:hidden"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl xl:hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">

          <div>
            <h2 className="text-xl font-bold">
              NovaKart
            </h2>

            <p className="text-sm text-slate-500">
              Welcome Guest
            </p>
          </div>

          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>

        </div>

        {/* Menu */}
        <div className="flex flex-col p-4">

          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            to="/shop"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100"
          >
            <ShoppingBag size={20} />
            Shop
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100"
          >
            <Heart size={20} />
            Wishlist
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100"
          >
            <User size={20} />
            Login
          </Link>

        </div>

      </div>
    </>
  );
}

export default MobileMenu;