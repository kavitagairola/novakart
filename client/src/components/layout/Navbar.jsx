import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";

function Navbar() {
  const { totalItems } = useCart();
const { wishlistItems } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
     

      {/* Navbar */}
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
  <Container>

    {/* ---------------- Mobile + Tablet ---------------- */}
    <div className="flex h-20 items-center justify-between xl:hidden">

      {/* Logo */}
      <Link
        to="/"
        className="shrink-0 text-2xl font-black text-slate-900 lg:text-3xl"
      >
        NovaKart
      </Link>

      {/* Search - Tablet Only */}
      <div className="mx-4 hidden flex-1 md:flex">
        <div className="flex w-full items-center rounded-full border border-gray-200 bg-slate-50 px-4 shadow-sm">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent py-3 outline-none"
          />

          <Search
            size={18}
            className="text-gray-500"
          />

        </div>
      </div>

      {/* Right Icons */}
      <div className="flex shrink-0 items-center gap-4">


<button
  onClick={() => setSearchOpen(true)}
  className="rounded-full p-2 hover:bg-slate-100 transition"
>
  <Search size={22} />
</button>
  
  <Link
          to="/cart"
          className="relative"
        >
          <ShoppingCart size={24} />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
              {totalItems}
            </span>
          )}
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>

      </div>

    </div>

    {/* ---------------- Desktop ---------------- */}
    <div className="hidden h-20 items-center justify-between xl:flex">

      {/* Logo */}
 <Link
        to="/"
        className="text-4xl font-black text-slate-900"
      >
        NovaKart
      </Link>

      {/* Navigation */}
     <div className="flex items-center gap-6 text-[15px] font-medium text-gray-600">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

      {/* Search */}
      <div className="w-[320px] xl:w-[420px]">

        <div className="flex items-center rounded-full border border-gray-200 bg-slate-50 px-4 shadow-sm">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent py-3 outline-none"
          />

          <Search
            size={20}
            className="text-gray-500"
          />

        </div>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">

        <Link to="/login">
          <User size={22} />
        </Link>
<Link
  to="/wishlist"
  className="relative"
>
  <Heart size={22} />

  {wishlistItems.length > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] text-white">
      {wishlistItems.length}
    </span>
  )}
</Link>

        <Link
          to="/cart"
          className="relative"
        >
          <ShoppingCart size={22} />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
              {totalItems}
            </span>
          )}
        </Link>

      </div>

    </div>

  </Container>
  <MobileMenu
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
/>
<SearchModal
  open={searchOpen}
  setOpen={setSearchOpen}
/>
</nav>
    </>
  );
}

export default Navbar;