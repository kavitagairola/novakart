import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProductCard from "../../components/common/ProductCard";
import { featuredProducts } from "../../constants/data";

function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
  title="Featured Products"
  subtitle="Explore our best-selling products"
  buttonText="View All"
  buttonLink="/shop"
/>

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

export default FeaturedProducts;