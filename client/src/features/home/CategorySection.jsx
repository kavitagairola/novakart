import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import CategoryCard from "../../components/common/CategoryCard";

import { categories } from "../../constants/data";

function CategorySection() {
  return (
    <section className="py-20 bg-white">

      <Container>

        <SectionTitle
          title="Shop By Category"
          subtitle="Explore our most popular categories"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

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