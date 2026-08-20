function ProductDescription({ product }) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-5 text-3xl font-bold text-slate-900">
        Product Description
      </h2>

      <p className="text-lg leading-8 text-slate-600">
        {product.description}
      </p>

    </section>
  );
}

export default ProductDescription;