import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className="group"
    >
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="aspect-square overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">
            {category.name}
          </h3>
        </div>

      </div>
    </Link>
  );
}

export default CategoryCard;