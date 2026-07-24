function FeatureCard({ feature }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 text-5xl">
        {feature.icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {feature.title}
      </h3>

      <p className="text-sm leading-6 text-gray-500">
        {feature.description}
      </p>
    </div>
  );
}

export default FeatureCard;