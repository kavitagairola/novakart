import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../features/home/HeroSection";
import CategorySection from "../../features/home/CategorySection";
import FeaturedProducts from "../../features/home/FeaturedProducts";
function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
    </MainLayout>
  );
}

export default Home;