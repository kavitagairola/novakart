import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";
import { bannerData } from "../../constants/data";

// Using an existing project hero/editorial image asset safely
import bannerImage from "../../assets/images/fashion/hero/hero-03.jpg";

function BannerSection() {
  return (
    <section className="py-12 lg:py-14 bg-[#0B0B0C] text-[#FDFBF7] border-t border-neutral-800/80 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Campaign Box */}
        <div className="relative overflow-hidden rounded-[16px] bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
            
            {/* Left Content (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              
              {/* Editorial Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold w-fit">
                <span className="w-6 h-[1.5px] bg-[#C5A880] inline-block"></span>
                NEW SEASON EDIT
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
                {bannerData?.title || "Elevated Essentials For The Modern Wardrobe."}
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-[1.7] max-w-xl">
                {bannerData?.subtitle || "Discover masterfully draped silhouettes, rich structural fabrics, and timeless pieces designed for effortless day-to-night styling."}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-2.5 bg-[#FDFBF7] text-[#0B0B0C] hover:bg-neutral-200 px-7 py-3.5 text-[12px] uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {bannerData?.buttonText || "EXPLORE THE COLLECTION"} 
                  <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform duration-300 stroke-[2.5]" />
                </Link>
              </div>

            </div>

            {/* Right Image (5 Columns) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-[12px] shadow-xl border border-neutral-800 bg-neutral-950 group">
                <img
                  src={bannerData?.image || bannerImage}
                  alt={bannerData?.title || "New Season Editorial"}
                  className="absolute inset-0 h-full w-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Bottom Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Detail Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md px-4 py-3 rounded-[8px] border border-white/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold">
                    LIMITED RELEASE
                  </span>
                  <span className="text-xs text-neutral-300 font-bold">
                    AW26 COLLECTION
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

BannerSection.displayName = "BannerSection";
export default BannerSection;