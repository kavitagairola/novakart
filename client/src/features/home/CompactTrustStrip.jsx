// src/features/home/CompactTrustStrip.jsx
import Container from "../../components/ui/Container";
import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

const trustPoints = [
  {
    id: "01",
    title: "PREMIUM QUALITY",
    description: "Carefully selected styles and fabrics.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "FREE SHIPPING",
    description: "Free shipping on eligible orders.",
    icon: Truck,
  },
  {
    id: "03",
    title: "EASY RETURNS",
    description: "Simple and hassle-free returns.",
    icon: RotateCcw,
  },
  {
    id: "04",
    title: "SECURE CHECKOUT",
    description: "Safe and protected payments.",
    icon: Lock,
  },
];

function CompactTrustStrip() {
  return (
    <section className="py-10 lg:py-12 bg-[#0B0B0C] text-[#FDFBF7] border-t border-neutral-800/80">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Trust Points Horizontal Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-neutral-800/80">
          {trustPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className={`group flex items-start space-x-4 px-4 lg:px-6 transition-all duration-300 hover:translate-y-[-2px] ${
                  index === 0 ? "lg:pl-0" : ""
                } ${index === trustPoints.length - 1 ? "lg:pr-0" : ""}`}
              >
                {/* Minimal Icon */}
                <div className="p-2.5 rounded-[10px] bg-neutral-900 border border-neutral-800 text-[#C5A880] shrink-0 group-hover:bg-[#C5A880] group-hover:text-neutral-950 transition-all duration-300">
                  <IconComponent size={20} className="stroke-[1.75]" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#C5A880]">
                      {item.id}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

CompactTrustStrip.displayName = "CompactTrustStrip";
export default CompactTrustStrip;