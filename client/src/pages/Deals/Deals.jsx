import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import ProductCard from "../../components/common/ProductCard";
import { products } from "../../constants/productData";

function Deals() {
  const dealProducts = products.filter(
    (product) => product.badge === "Sale"
  );

  return (
    <MainLayout>
      <Container>
        <section className="py-10 md:py-12">

          {/* Header */}
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Special Offers
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Deals & Offers
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Grab selected products at special prices before the offers end.
            </p>
          </div>

          {/* Products */}
          {dealProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {dealProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 py-16 text-center">
              <h2 className="text-xl font-semibold text-slate-900">
                No deals available
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                New offers will appear here soon.
              </p>
            </div>
          )}

        </section>
      </Container>
    </MainLayout>
  );
}

export default Deals;