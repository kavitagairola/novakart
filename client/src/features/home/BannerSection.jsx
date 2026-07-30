import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { bannerData } from "../../constants/data";
import { motion } from "framer-motion";
function BannerSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-2xl">
            <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

<div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="grid items-center gap-10 px-8 py-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
  className="text-white"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                {bannerData.title}
              </h2>

              <p className="mb-8 max-w-lg text-base leading-8 text-blue-100 sm:text-lg">
                {bannerData.subtitle}
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl"
              >
                {bannerData.buttonText}
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
              <img
                src={bannerData.image}
                alt={bannerData.title}
                className="mx-auto w-full max-w-md rounded-3xl drop-shadow-2xl transition duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BannerSection;