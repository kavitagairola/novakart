import { Search, X } from "lucide-react";
import { products } from "../../constants/productData";
import { Link } from "react-router-dom";
import { useState } from "react";
function SearchModal({
  open,
  setOpen,
}) {
   

  if (!open) return null;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
  product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-20 z-50 w-[92%] max-w-xl -translate-x-1/2 rounded-2xl bg-white p-5 shadow-2xl">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Search Products
          </h2>

          <button
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>

        </div>

        {/* Search Box */}
        <div className="flex items-center rounded-xl border border-slate-200 px-4">

          <Search
            size={20}
            className="text-slate-500"
          />


        <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-3 py-4 outline-none"
/>

          

        </div>

        <div className="mt-5 max-h-80 overflow-y-auto">

  {searchTerm &&
    filteredProducts.map((product) => (

      <Link
        key={product.id}
        to={`/product/${product.id}`}
        onClick={() => setOpen(false)}
        className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-slate-100"
      >

        <img
          src={product.image}
          alt={product.name}
          className="h-14 w-14 rounded-lg object-contain bg-slate-50"
        />

        <div>

          <h4 className="font-medium">
            {product.name}
          </h4>

          <p className="text-blue-600 font-semibold">
            ₹{product.price.toLocaleString()}
          </p>

        </div>

      </Link>

    ))}

  {searchTerm && filteredProducts.length === 0 && (

    <p className="py-8 text-center text-slate-500">
      No products found.
    </p>

  )}

</div>

      </div>
    </>
  );
}

export default SearchModal;