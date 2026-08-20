// src/features/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-16 lg:py-24">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)]"></div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        
        {/* Left Editorial Text */}
        <motion.div
          className="lg:col-span-6 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-amber-200/90 font-light border-b border-amber-200/30 pb-1">
            Autumn / Winter Collection 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-[1.08]">
            Modern silhouettes.<br />
            <span className="italic font-normal text-amber-100">Made to move.</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-md">
            Thoughtfully designed luxury styles for everyday elegance. Crafted from fluid satins, breathable organic linens, and precision tailoring.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link to="/shop">
              <Button size="md" className="w-full sm:w-auto bg-white text-neutral-950 hover:bg-neutral-200 tracking-[0.2em] uppercase text-[11px] rounded-none py-3.5 px-7 shadow-lg">
                SHOP COLLECTION
              </Button>
            </Link>

            <Link to="/shop?category=new-arrivals">
              <Button size="md" variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 tracking-[0.2em] uppercase text-[11px] rounded-none py-3.5 px-7 backdrop-blur-sm">
                NEW ARRIVALS
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Layered Fashion Imagery */}
        <motion.div
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl border border-neutral-800">
            <img
              src="/src/assets/images/fashion/hero/hero-banner.jpg"
              alt="NovaKart Editorial Campaign"
              className="w-full h-full object-cover object-center transform hover:scale-103 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
          </div>

          {/* Overlapping Secondary Detail Card */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 w-40 sm:w-48 aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl border-4 border-neutral-950 hidden sm:block">
            <img
              src="/src/assets/images/fashion/products/coords/product-01-03.jpg"
              alt="Clothing Detail"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

      </Container>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
export default HeroSection;