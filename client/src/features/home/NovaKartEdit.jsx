// src/features/home/NovaKartEdit.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../components/ui/Container";

// Using an existing project editorial image asset
import editorialImage from "../../assets/images/fashion/hero/hero-01.jpg";

function NovaKartEdit() {
  return (
    <section className="py-12 lg:py-14 bg-[#0B0B0C] text-[#FDFBF7] border-t border-neutral-800/80 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bold Asymmetric Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          
          {/* Left / Main Area (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold">
              <span className="w-6 h-[1.5px] bg-[#C5A880] inline-block"></span>
              NOVAKART CAMPAIGN
            </div>

            {/* Large Bold Heading (56px–72px equivalent) */}
            <h2 className="font-extrabold tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(52px, 5.5vw, 72px)" }}>
              DRESS THE<br />
              <span className="text-[#C5A880]">MOMENT.</span>
            </h2>

            {/* Short Description (16px–18px) */}
            <p className="text-[16px] sm:text-[18px] text-neutral-300 font-normal leading-[1.6] max-w-xl">
              Sculpted structural silhouettes and fluid contemporary tailoring engineered with unmatched attention to detail. Designed for modern self-expression and effortless presence.
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2.5 bg-[#FDFBF7] text-[#0B0B0C] hover:bg-neutral-200 px-8 py-4 text-[13px] uppercase tracking-[0.12em] font-extrabold rounded-[8px] transition-all duration-300 shadow-2xl cursor-pointer"
              >
                EXPLORE THE EDIT <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300 stroke-[2.5]" />
              </Link>
            </div>

          </div>

          {/* Right Area: Dominant Vertical Fashion Image with Overlapping Floating Card (6 Columns) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Dominant Vertical Fashion Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] shadow-2xl border border-neutral-800 bg-neutral-900 group">
                <img
                  src={editorialImage}
                  alt="Dress the Moment Campaign"
                  className="absolute inset-0 h-full w-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle Dark Gradient Overlay Near Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 via-transparent to-transparent pointer-events-none"></div>

                {/* Overlay Small Text */}
                <div className="absolute bottom-6 left-6 right-6 space-y-0.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-extrabold block">
                    NOVAKART EDIT 01
                  </span>
                  <p className="text-sm font-semibold tracking-tight text-neutral-200">
                    Curated looks for the new season.
                  </p>
                </div>
              </div>

              {/* Unique Floating Cream-Colored Editorial Info Card Overlapping Between Text and Image Area */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 bg-[#FDFBF7] text-[#0B0B0C] p-5 rounded-[12px] shadow-2xl border border-neutral-200 w-[220px] sm:w-[240px] z-20 space-y-2.5">
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-neutral-500 font-bold block">
                    01 / THE EDIT
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold tracking-tight text-neutral-950">
                    Minimal. Modern. Elevated.
                  </p>
                </div>
                {/* Thin Gold Decorative Line */}
                <div className="w-full h-[2px] bg-[#C5A880] rounded-full"></div>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

NovaKartEdit.displayName = "NovaKartEdit";
export default NovaKartEdit;