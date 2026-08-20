// src/features/home/CategorySection.jsx
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { categoryImages } from "../../utils/imageLoader";
import { ArrowRight } from "lucide-react";

function CategorySection() {
  const categories = [
    {
      name: "Dresses",
      subtitle: "Fluid Silhouette",
      description: "Bias-cut silk and evening statements",
      image: categoryImages["Dresses"],
      span: "col-span-12 lg:col-span-7 h-[460px]",
      cropStyle: "object-center"
    },
    {
      name: "Tops & Bodysuits",
      subtitle: "Waist-Up Elegance",
      description: "Ribbed knits and draped satin",
      image: categoryImages["Tops & Bodysuits"],
      span: "col-span-12 sm:col-span-6 lg:col-span-5 h-[460px]",
      cropStyle: "object-top"
    },
    {
      name: "Kurtis & Ethnic",
      subtitle: "Artisanal Heritage",
      description: "Hand-block prints and Chanderi silk",
      image: categoryImages["Kurtis & Ethnic"],
      span: "col-span-12 sm:col-span-6 lg:col-span-4 h-[380px]",
      cropStyle: "object-center"
    },
    {
      name: "Co-ord Sets",
      subtitle: "Synchronized Luxe",
      description: "Effortless resort and lounge pairings",
      image: categoryImages["Co-ord Sets"],
      span: "col-span-12 sm:col-span-6 lg:col-span-4 h-[380px]",
      cropStyle: "object-center"
    },
    {
      name: "Bottomwear",
      subtitle: "Tailored Precision",
      description: "High-waisted linen and crepe trousers",
      image: categoryImages["Bottomwear"],
      span: "col-span-12 sm:col-span-6 lg:col-span-4 h-[380px]",
      cropStyle: "object-bottom"
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FDFBF7]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-200/80 pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-2 font-light">
              Curated Wardrobe
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-wide text-neutral-950">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-sm mt-3 md:mt-0 leading-relaxed">
            Meticulously proportioned silhouettes designed to honor movement, texture, and refined individuality.
          </p>
        </div>

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className={`group relative overflow-hidden bg-neutral-100 block rounded-[2px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${cat.span}`}
            >
              {/* Intentional Image Crop & Zoom on Hover */}
              <img
                src={cat.image}
                alt={cat.name}
                className={`w-full h-full object-cover ${cat.cropStyle} transform group-hover:scale-104 transition-transform duration-700 ease-out`}
              />

              {/* Subtle Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/15 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content Layout with Micro-Interactions */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white flex items-end justify-between">
                <div className="space-y-1 transform group-hover:-translate-y-0.5 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-light block">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-light tracking-wide">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

CategorySection.displayName = "CategorySection";
export default CategorySection;