import {
  Heart,
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

function MobileMenu({
  menuOpen,
  setMenuOpen,
  setCartOpen,
  setAccountOpen,
}) {
  if (!menuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 xl:hidden"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl xl:hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">

          <div>
            <h2 className="text-xl font-bold">
              NovaKart
            </h2>

            <p className="text-sm text-slate-500">
              Welcome to NovaKart
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

        </div>

        {/* Menu */}
        <div className="flex flex-col p-4">

          {/* Home */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <Home size={20} />
            Home
          </Link>

          {/* Shop */}
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <ShoppingBag size={20} />
            Shop
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <Heart size={20} />
            Wishlist
          </Link>

          {/* Cart */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setCartOpen(true);
            }}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <ShoppingCart size={20} />
            Cart
          </button>

          {/* Account */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setAccountOpen(true);
            }}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <User size={20} />
            Account
          </button>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;