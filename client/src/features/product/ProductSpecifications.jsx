function ProductSpecifications({ product }) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

        {Object.entries(product.specifications).map(
          ([key, value], index) => (
            <div
              key={key}
              className={`grid grid-cols-2 px-6 py-5 ${
                index !==
                Object.entries(product.specifications).length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="font-medium capitalize text-slate-500">
                {key}
              </span>

              <span className="font-semibold text-slate-900">
                {value}
              </span>
            </div>
          )
        )}

      </div>

    </section>
  );
}

export default ProductSpecifications;