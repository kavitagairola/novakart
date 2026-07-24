import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          NovaKart
        </Link>

        {/* Search */}
        <div className="hidden w-[420px] md:flex">
          <div className="flex w-full items-center rounded-lg border">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 outline-none"
            />

            <button className="px-4">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link to="/login">
            <User />
          </Link>

          <Link to="/wishlist">
            <Heart />
          </Link>

          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;