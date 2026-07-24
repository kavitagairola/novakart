import { heroData } from "../../constants/data";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100">
      <Container className="grid min-h-[650px] items-center gap-12 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-600 font-semibold inline-block">
            {heroData.badge}
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight">

            {heroData.title}

            <span className="block text-blue-600">
              {heroData.highlight}
            </span>

          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            {heroData.description}
          </p>

          <div className="mt-8 flex gap-4">

            <Button>
              {heroData.primaryButton}
            </Button>

            <Button variant="outline">
              {heroData.secondaryButton}
            </Button>

          </div>

          <div className="mt-12 flex gap-12">

            {heroData.stats.map((item) => (

              <div key={item.label}>

                <h2 className="text-3xl font-bold">
                  {item.number}
                </h2>

                <p className="text-slate-500">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

    <img
  src={heroData.image}
  alt="Hero"
  className="w-full max-w-xl rounded-3xl"
/>
        </div>

      </Container>
    </section>
  );
}

export default HeroSection;