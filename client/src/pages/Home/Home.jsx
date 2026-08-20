// src/pages/Home/Home.jsx
import MainLayout from "../../components/layout/MainLayout";
import HeroSlider from "../../features/home/HeroSlider";
import CategorySection from "../../features/home/CategorySection";
import FeaturedProducts from "../../features/home/FeaturedProducts";
import FlashSale from "../../features/home/FlashSale";
import NovaKartEdit from "../../features/home/NovaKartEdit";
import ShopTheLook from "../../features/home/ShopTheLook"; // <- New Shop The Look Import
import ShopByOccasion from "../../features/home/ShopByOccasion";
import CompactTrustStrip from "../../features/home/CompactTrustStrip";
import BannerSection from "../../features/home/BannerSection";
import TrustBar from "../../features/home/TrustBar";

function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
      <FlashSale />
      <NovaKartEdit />
      <ShopTheLook /> 
      <ShopByOccasion />
      <CompactTrustStrip />
      <BannerSection />
      <TrustBar />
    </MainLayout>
  );
}

export default Home;