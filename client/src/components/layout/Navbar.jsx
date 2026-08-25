// src/components/layout/Navbar.jsx
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import MobileMenu from "./MobileMenu";
import MiniCartDrawer from "../offcanvas/MiniCartDrawer";
import AccountDrawer from "../offcanvas/AccountDrawer";

function Navbar() {
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentCategory = queryParams.get("category");
  const currentPath = location.pathname;

  // Strict Active Check Helpers
  const isHomeActive = currentPath === "/";
  const isShopActive = currentPath === "/shop" && !currentCategory;
  const isNewArrivalsActive = currentPath === "/shop" && currentCategory === "new-arrivals";
  const isDressesActive = currentPath === "/shop" && currentCategory === "Dresses";
  const isEthnicActive = currentPath === "/shop" && currentCategory === "Kurtis & Ethnic";
  const isDealsActive = currentPath === "/deals" || currentPath === "/deal";

  // Base and active styles preserving exact original CSS classes
  const getNavLinkClass = (isActive) =>
    `text-[13px] font-medium tracking-[0.06em] transition-all duration-200 relative py-1 ${
      isActive
        ? "text-neutral-950 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-950"
        : "text-neutral-600 hover:text-neutral-950"
    }`;

  return (
    <>
      <div className="bg-neutral-950 text-white text-[11px] tracking-[0.05em] py-2 text-center font-medium">
        Free Shipping on orders above ₹999
      </div>

      <nav className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#FDFBF7]/95 backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between">

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 text-neutral-800 hover:text-neutral-950"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* NovaKart Logo - Uniform Font */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-[-0.03em] text-neutral-950 uppercase"
            >
              NovaKart
            </Link>

            {/* Desktop Navigation with Strict Active State Logic */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={getNavLinkClass(isHomeActive)}>Home</Link>
              <Link to="/shop" className={getNavLinkClass(isShopActive)}>Shop</Link>
              <Link to="/shop?category=new-arrivals" className={getNavLinkClass(isNewArrivalsActive)}>New Arrivals</Link>
              <Link to="/shop?category=Dresses" className={getNavLinkClass(isDressesActive)}>Dresses</Link>
              <Link to="/shop?category=Kurtis+%26+Ethnic" className={getNavLinkClass(isEthnicActive)}>Ethnic</Link>
              <Link to="/deals" className={getNavLinkClass(isDealsActive)}>Deals</Link>
            </nav>

            <div className="flex items-center space-x-5">
              <button
                type="button"
                onClick={() => navigate('/shop')}
                className="text-neutral-800 hover:text-neutral-950 transition"
                aria-label="Search"
              >
                <Search size={20} className="stroke-[1.5]" />
              </button>

              <button
                type="button"
                onClick={() => setAccountOpen(true)}
                className="hidden sm:block text-neutral-800 hover:text-neutral-950 transition"
                aria-label="Account"
              >
                <User size={20} className="stroke-[1.5]" />
              </button>

              <Link
                to="/wishlist"
                className="relative text-neutral-800 hover:text-neutral-950 transition"
                aria-label="Wishlist"
              >
                <Heart size={20} className="stroke-[1.5]" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="relative text-neutral-800 hover:text-neutral-950 transition"
                aria-label="Shopping Bag"
              >
                <ShoppingBag size={20} className="stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

          </div>
        </Container>
      </nav>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setCartOpen={setCartOpen} setAccountOpen={setAccountOpen} />
      <AccountDrawer open={accountOpen} onClose={() => setAccountOpen(false)} />
      <MiniCartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

Navbar.displayName = "Navbar";
export default Navbar;