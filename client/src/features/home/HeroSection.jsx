import { heroData } from "../../constants/data";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100">
     <Container className="grid items-center gap-10 py-12 lg:min-h-100vh lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* Left */}    

        <motion.div
  className="max-w-[640px]"
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 mt-2 text-xs font-semibold tracking-wide text-blue-700">
            {heroData.badge}
          </span>

  <h1 className="mt-4 text-[44px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-[52px] lg:text-[60px]">
  Discover The Best

  <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    Shopping Experience
  </span>
</h1>

          <p className="mt-5 max-w-[580px] text-[18px] leading-8 text-slate-600">
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

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 max-w-md">

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

        </motion.div>

        {/* Right */}

         <motion.div
  className="order-1 flex justify-center lg:order-2"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
    
    <img
  src={heroData.image}
  alt="Hero"
  className="mx-auto w-full max-w-lg rounded-3xl drop-shadow-2xl transition duration-500 hover:scale-105 lg:max-w-xl xl:max-w-2xl"
/>
       </motion.div>
<div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

<div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"></div>

<div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
      </Container>
    </section>
  );
}

export default HeroSection;