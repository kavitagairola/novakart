// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#F4F1EA] border-t border-neutral-800/80 pt-12 pb-8">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800/80">
          
          {/* Brand Column (4 Columns) */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-xl font-extrabold tracking-[0.15em] text-white uppercase">
              NOVAKART
            </h2>
            <p className="text-xs text-[#A8A39A] font-normal max-w-xs leading-relaxed">
              Curated pieces for modern everyday style. Designed with intent, built for effortless elegance.
            </p>
            <div className="pt-1 flex items-center space-x-3 text-xs uppercase tracking-wider text-[#B89A5A] font-bold">
              <span>Instagram</span>
              <span>/</span>
              <span>Pinterest</span>
              <span>/</span>
              <span>Twitter</span>
            </div>
          </div>

          {/* Links Columns (8 Columns split into 3) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Shop Links */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#B89A5A]">
                Shop
              </h3>
              <ul className="space-y-2 text-xs font-medium text-[#A8A39A]">
                <li>
                  <Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/shop?category=dresses" className="hover:text-white transition-colors">Dresses</Link>
                </li>
                <li>
                  <Link to="/shop?category=ethnic" className="hover:text-white transition-colors">Ethnic</Link>
                </li>
                <li>
                  <Link to="/shop?sale=true" className="hover:text-white transition-colors">Sale</Link>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#B89A5A]">
                Help
              </h3>
              <ul className="space-y-2 text-xs font-medium text-[#A8A39A]">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
                <li>
                  <Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link>
                </li>
                <li>
                  <Link to="/returns" className="hover:text-white transition-colors">Returns</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Account Links */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#B89A5A]">
                Account
              </h3>
              <ul className="space-y-2 text-xs font-medium text-[#A8A39A]">
                <li>
                  <Link to="/login" className="hover:text-white transition-colors">Login</Link>
                </li>
                <li>
                  <Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link>
                </li>
                <li>
                  <Link to="/orders" className="hover:text-white transition-colors">Orders</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A8A39A] font-normal gap-4">
          <p>© 2026 NovaKart. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}

Footer.displayName = "Footer";
export default Footer;