import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProductCard from "../../components/common/ProductCard";
import { featuredProducts } from "../../constants/data";

function FlashSale() {
  return (
    <section className="bg-red-50 py-20">
      <Container>
        <SectionTitle
          title="🔥 Flash Sale"
          subtitle="Limited-time offers on our best-selling products"
          buttonText="View All"
          buttonLink="/shop"
        />

        <div className="mb-8 flex items-center justify-center gap-2 text-lg font-semibold text-red-600">
          <span>⏰ Ends In:</span>
          <span>08 : 12 : 45</span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FlashSale;