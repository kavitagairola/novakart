import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../features/home/HeroSection";
import CategorySection from "../../features/home/CategorySection";
import FeaturedProducts from "../../features/home/FeaturedProducts";
import FlashSale from "../../features/home/FlashSale";
import WhyChooseUs from "../../features/home/WhyChooseUs";
import BannerSection from "../../features/home/BannerSection";
import TrustBar from "../../features/home/TrustBar";
function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <FlashSale />
       <BannerSection />
        <WhyChooseUs />
        <TrustBar/>
    </MainLayout>
  );
}

export default Home;