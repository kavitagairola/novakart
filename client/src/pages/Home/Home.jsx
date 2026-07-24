import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../features/home/HeroSection";
import CategorySection from "../../features/home/CategorySection";
import FeaturedProducts from "../../features/home/FeaturedProducts";
import FlashSale from "../../features/home/FlashSale";
function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <FlashSale />
    </MainLayout>
  );
}

export default Home;