import { Link } from "react-router-dom";

function SectionTitle({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="mb-12 flex flex-col items-center justify-between gap-5 text-center lg:mb-16 lg:flex-row lg:text-left">

      {/* Left */}
      <div>

        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Our Collection
        </span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
          {subtitle}
        </p>

      </div>

      {/* Right Button */}
      {buttonText && (
        <Link
          to={buttonLink}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          {buttonText}
        </Link>
      )}

    </div>
  );
}

export default SectionTitle;