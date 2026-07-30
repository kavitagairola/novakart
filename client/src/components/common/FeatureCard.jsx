import { motion } from "framer-motion";

function FeatureCard({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-5xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-gray-800">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-base leading-7 text-gray-500">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;