import { Truck, ShieldCheck, RotateCcw, Headset } from "lucide-react";
import Container from "../../components/ui/Container";

function TrustBar() {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Free Shipping",
      subtitle: "On orders above ₹999",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payment",
      subtitle: "100% Protected Checkout",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns",
      subtitle: "7 Days Return Policy",
    },
    {
      icon: <Headset size={28} />,
      title: "24/7 Support",
      subtitle: "Always Here to Help",
    },
  ];

  return (
    <section className="border-y bg-white py-8">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-blue-50"
            >
              <div className="text-blue-600">{item.icon}</div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;