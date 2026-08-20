// src/features/home/EditorialTransition.jsx
import Container from "../../components/ui/Container";

function EditorialTransition() {
  return (
    <section className="py-8 lg:py-10 bg-[#F6F3EE] text-neutral-950 border-t border-neutral-300/60">
      <Container className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Minimal Decorative Accent */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-neutral-300"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89A5A] font-extrabold">
            THE NOVAKART EDIT
          </span>
          <div className="h-[1px] w-12 bg-neutral-300"></div>
        </div>

        {/* Editorial Statement */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Curated pieces. Considered style.
          </h3>
          <p className="text-sm text-neutral-600 font-normal">
            Everyday luxury, refined for the modern wardrobe.
          </p>
        </div>

      </Container>
    </section>
  );
}

EditorialTransition.displayName = "EditorialTransition";
export default EditorialTransition;