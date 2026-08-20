// src/features/home/ShopByOccasion.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";

// Using existing project fashion image assets safely
import imgWork from "../../assets/images/fashion/hero/hero-01.jpg";
import imgWeekend from "../../assets/images/fashion/hero/hero-02.jpg";
import imgFestive from "../../assets/images/fashion/hero/hero-03.jpg";
import imgAfterDark from "../../assets/images/fashion/hero/hero-04.jpg";

const occasions = [
  {
    id: 1,
    number: "01",
    title: "WORK MODE",
    description: "Sharp silhouettes for the everyday.",
    image: imgWork,
    link: "/shop?category=work",
    spanClass: "lg:col-span-3 lg:h-[420px]", // Asymmetric editorial height variation
  },
  {
    id: 2,
    number: "02",
    title: "WEEKEND",
    description: "Relaxed pieces. Effortless style.",
    image: imgWeekend,
    link: "/shop?category=weekend",
    spanClass: "lg:col-span-3 lg:h-[480px]",
  },
  {
    id: 3,
    number: "03",
    title: "FESTIVE",
    description: "Made for moments worth celebrating.",
    image: imgFestive,
    link: "/shop?category=festive",
    spanClass: "lg:col-span-3 lg:h-[420px]",
  },
  {
    id: 4,
    number: "04",
    title: "AFTER DARK",
    description: "Elevated looks for the evening.",
    image: imgAfterDark,
    link: "/shop?category=evening",
    spanClass: "lg:col-span-3 lg:h-[480px]",
  },
];

function ShopByOccasion() {
  return (
    <section className="py-12 lg:py-14 bg-[#FDFBF7] text-neutral-950 border-t border-neutral-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold mb-1.5">
              <span className="w-5 h-[1.5px] bg-[#C5A880] inline-block"></span>
              CURATED FOR EVERY MOMENT
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-[-0.03em]">
              Find your moment.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-1 max-w-md">
              Curated looks for every plan on your calendar.
            </p>
          </div>
          
          <Link
            to="/shop"
            className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-extrabold text-neutral-950 pb-1 border-b-2 border-neutral-950 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-300 w-fit"
          >
            EXPLORE ALL <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Editorial Asymmetric Occasion Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-end">
          {occasions.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`group relative overflow-hidden rounded-[16px] bg-neutral-900 border border-neutral-200/80 shadow-sm flex flex-col justify-end p-6 transition-all duration-500 hover:shadow-xl ${item.spanClass}`}
            >
              {/* Background Image with Scale Effect on Hover */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent"></div>

              {/* Card Content */}
              <div className="relative z-10 space-y-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#C5A880]">
                    {item.number} —
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </div>
                </div>

                <div className="space-y-0.5 pt-2">
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-normal leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}

ShopByOccasion.displayName = "ShopByOccasion";
export default ShopByOccasion;