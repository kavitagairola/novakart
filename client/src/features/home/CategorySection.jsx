import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import CategoryCard from "../../components/common/CategoryCard";

import { categories } from "../../constants/data";

function CategorySection() {
  return (
    <section className="bg-white py-16 lg:py-24">

      <Container className="max-w-7xl">

        <SectionTitle
  title="Shop By Category"
  subtitle="Explore our most popular categories"
  buttonText="View All"
  buttonLink="/shop"
/>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <CategoryCard
              key={category.id}
              category={category}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}

export default CategorySection;