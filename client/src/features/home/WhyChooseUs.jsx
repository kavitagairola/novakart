import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import FeatureCard from "../../components/common/FeatureCard";

import { whyChooseUs } from "../../constants/data";

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Why Choose NovaKart?"
          subtitle="We provide the best shopping experience with premium services."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;