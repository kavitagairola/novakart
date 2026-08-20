import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

// Importing local images correctly from src/assets/images/fashion/hero/
import hero1 from "../../assets/images/fashion/hero/hero-01.jpg";
import hero2 from "../../assets/images/fashion/hero/hero-02.jpg";
import hero3 from "../../assets/images/fashion/hero/hero-03.jpg";
import hero4 from "../../assets/images/fashion/hero/hero-04.jpg";

const heroSlides = [
  {
    id: 1,
    image: hero1,
    eyebrow: "AUTUMN / WINTER COLLECTION 2026",
    title: "Modern silhouettes.",
    accent: "Made to move.",
    description: "Thoughtfully designed luxury styles for everyday elegance. Crafted from fluid satins, breathable organic linens, and precision tailoring.",
    primaryCTA: "Shop Collection",
    secondaryCTA: "Explore New Arrivals",
    primaryLink: "/shop",
    secondaryLink: "/shop?category=new-arrivals"
  },
  {
    id: 2,
    image: hero2,
    eyebrow: "NEW SEASON ESSENTIALS",
    title: "Quiet luxury.",
    accent: "Everyday confidence.",
    description: "Embrace clean lines and effortless draping. Designed to transition seamlessly from morning atelier meetings to evening galas.",
    primaryCTA: "Shop Collection",
    secondaryCTA: "Explore New Arrivals",
    primaryLink: "/shop",
    secondaryLink: "/shop?category=new-arrivals"
  },
  {
    id: 3,
    image: hero3,
    eyebrow: "CURATED FOR YOU",
    title: "Timeless pieces.",
    accent: "Modern energy.",
    description: "Sculpted structural blazers and fluid contemporary tailoring engineered with unmatched attention to detail and tactile longevity.",
    primaryCTA: "Shop Collection",
    secondaryCTA: "Explore New Arrivals",
    primaryLink: "/shop",
    secondaryLink: "/shop?category=new-arrivals"
  },
  {
    id: 4,
    image: hero4,
    eyebrow: "THE TRANSITION EDIT",
    title: "Refined elegance.",
    accent: "Uncompromised style.",
    description: "Discover curated statement pieces designed for the modern wardrobe. Sophisticated aesthetics meets everyday ease.",
    primaryCTA: "Shop Collection",
    secondaryCTA: "Explore New Arrivals",
    primaryLink: "/shop",
    secondaryLink: "/shop?category=new-arrivals"
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    startTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startTimer();
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section 
      className="relative overflow-hidden bg-neutral-950 text-white min-h-[640px] lg:min-h-[720px] flex items-center py-12 lg:py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="NovaKart Hero Carousel"
    >
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none"></div>

      <Container className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-[28px]"
              >
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-amber-200 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {currentSlide.eyebrow}
                </span>

                <h1 className="font-extrabold tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(48px, 5.2vw, 84px)" }}>
                  {currentSlide.title}<br />
                  <span className="font-normal text-amber-100">{currentSlide.accent}</span>
                </h1>

                <p className="text-[17px] font-normal text-neutral-300 leading-[1.7] max-w-md">
                  {currentSlide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                  <Link to={currentSlide.primaryLink}>
                    <Button 
                      size="md" 
                      className="w-full sm:w-auto bg-white text-neutral-950 hover:bg-neutral-200 tracking-[0.05em] uppercase text-[14px] font-bold rounded-[8px] py-3.5 px-7 shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {currentSlide.primaryCTA}
                    </Button>
                  </Link>

                  <Link to={currentSlide.secondaryLink}>
                    <Button 
                      size="md" 
                      variant="outline" 
                      className="w-full sm:w-auto border-white/40 text-white hover:bg-white/15 tracking-[0.05em] uppercase text-[14px] font-bold rounded-[8px] py-3.5 px-7 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    >
                      {currentSlide.secondaryCTA}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl aspect-[4/5] overflow-hidden rounded-[16px] shadow-2xl border border-neutral-800 bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt="NovaKart Campaign"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Slider Controls Footer */}
        <div className="mt-12 lg:mt-10 pt-6 border-t border-neutral-800/80 flex items-center justify-between">
          
          <div className="flex items-center gap-3 text-lg font-bold tracking-widest text-neutral-400">
            <span className="text-white font-extrabold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-neutral-600">/</span>
            <span>{String(heroSlides.length).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  startTimer();
                }}
                className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${
                  idx === currentIndex 
                    ? "w-10 bg-amber-200" 
                    : "w-4 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} className="stroke-[1.5]" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight size={18} className="stroke-[1.5]" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}

HeroSlider.displayName = "HeroSlider";
export default HeroSlider;