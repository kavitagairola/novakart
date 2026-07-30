import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

        {/* Image */}
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">

          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {category.name}
          </h3>

         

          <div className="flex items-center justify-between">

            <span className="text-sm font-medium uppercase tracking-wider text-blue-600">
              Explore
            </span>

            <ArrowRight
              size={20}
              className="transition-all duration-500 group-hover:translate-x-1"
            />

          </div>

        </div>

      </div>
    </Link>
  );
}

export default CategoryCard;