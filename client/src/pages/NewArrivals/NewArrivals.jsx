import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import ProductCard from "../../components/common/ProductCard";
import { products } from "../../constants/productData";

function NewArrivals() {
  const newProducts = products.filter(
    (product) => product.badge === "New"
  );

  return (
    <MainLayout>
      <Container>
        <section className="py-10 md:py-12">

          {/* Header */}
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Latest Collection
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              New Arrivals
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Discover the latest products added to NovaKart.
            </p>
          </div>

          {/* Products */}
          {newProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {newProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 py-16 text-center">
              <h2 className="text-xl font-semibold text-slate-900">
                No new arrivals yet
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Check back soon for new products.
              </p>
            </div>
          )}

        </section>
      </Container>
    </MainLayout>
  );
}

export default NewArrivals;