import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProductCard from "../../components/common/ProductCard";
import { featuredProducts } from "../../constants/data";

function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({
  hours: 8,
  minutes: 12,
  seconds: 45,
});

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      let { hours, minutes, seconds } = prev;

      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;

        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;

          if (hours > 0) {
            hours--;
          }
        }
      }

      return { hours, minutes, seconds };
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

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
          <span>
  {String(timeLeft.hours).padStart(2, "0")} :
  {String(timeLeft.minutes).padStart(2, "0")} :
  {String(timeLeft.seconds).padStart(2, "0")}
</span>
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