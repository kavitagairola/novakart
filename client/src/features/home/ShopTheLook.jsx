// src/features/home/ShopTheLook.jsx
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import Container from "../../components/ui/Container";

// Using existing project image assets safely
import lookMainImage from "../../assets/images/fashion/hero/hero-01.jpg";
import itemThumb1 from "../../assets/images/fashion/products/kurtis/product-01-01.jpg";
import itemThumb2 from "../../assets/images/fashion/products/coords/product-01-01.jpg";
import itemThumb3 from "../../assets/images/fashion/products/tops/product-06-01.jpg";

const lookItems = [
  {
    id: 1,
    name: "Tailored Wool Blazer",
    category: "Outerwear",
    price: 3299,
    image: itemThumb1,
    link: "/product/13",
  },
  {
    id: 2,
    name: "Linen Relaxed Shirt",
    category: "Tops",
    price: 1899,
    image: itemThumb2,
    link: "/product/19",
  },
  {
    id: 3,
    name: "High-Waisted Pleated Trousers",
    category: "Bottomwear",
    price: 2499,
    image: itemThumb3,
    link: "/product/37",
  },
];

function ShopTheLook() {
  return (
    <section className="py-12 lg:py-14 bg-[#F7F3ED] text-neutral-950 border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Lifestyle Image, Right Content & Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Side: Large Lifestyle Fashion Image (6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[16px] shadow-md border border-neutral-300/40 bg-neutral-950 group">
              <img
                src={lookMainImage}
                alt="Shop The Look Complete Outfit"
                className="absolute inset-0 h-full w-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Subtle Interactive Look Pin */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C5A880] border-2 border-white shadow-md"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Heading, Description & Compact Product Items (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Header Content */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#C5A880] font-bold bg-[#EFE8E1] px-3 py-1 rounded-full w-fit">
                CURATED OUTFIT
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em] leading-tight">
                SHOP THE LOOK
              </h2>
              <p className="text-sm sm:text-base font-bold tracking-tight text-neutral-800">
                One outfit. Every detail.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg">
                Hand-selected complementary pieces styled together for a complete, effortless seasonal statement.
              </p>
            </div>

            {/* Compact Product Items List */}
            <div className="space-y-3 pt-1">
              {lookItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group flex items-center justify-between p-3 rounded-[12px] bg-[#FDFBF7] border border-neutral-200/80 shadow-sm hover:border-[#C5A880]/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Thumbnail */}
                    <div className="relative w-12 h-14 rounded-[8px] overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-500 font-medium">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-neutral-950 group-hover:text-[#C5A880] transition-colors line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold text-neutral-900">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Interaction Icon */}
                  <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white text-neutral-700 flex items-center justify-center transition-colors duration-300 shrink-0 mr-1">
                    <Plus size={15} className="stroke-[2]" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Action */}
            <div className="pt-2">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-extrabold text-neutral-950 pb-1 border-b-2 border-neutral-950 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-300 w-fit"
              >
                Explore All Outfits <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

ShopTheLook.displayName = "ShopTheLook";
export default ShopTheLook;