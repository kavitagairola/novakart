function SectionTitle({ title, subtitle, buttonText, buttonLink }) {
  return (
    <div className="mb-12 text-center">

      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;