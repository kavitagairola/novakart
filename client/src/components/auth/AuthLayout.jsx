import { Link } from "react-router-dom";

function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <section className="min-h-screen bg-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-16 text-white lg:flex">

          <Link
            to="/"
            className="text-5xl font-black"
          >
            NovaKart
          </Link>

          <h2 className="mt-10 text-5xl font-bold leading-tight">
            Shop Smarter.
            <br />
            Live Better.
          </h2>

          <p className="mt-6 max-w-md text-lg text-blue-100">
            Discover thousands of premium products with fast delivery,
            secure payment and the best shopping experience.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 sm:p-10">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

            <Link
              to="/"
              className="text-3xl font-black text-blue-600 lg:hidden"
            >
              NovaKart
            </Link>

            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              {title}
            </h1>

            <p className="mt-2 text-slate-500">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AuthLayout;