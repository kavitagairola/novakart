import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react";

function ProductShipping() {
  const services = [
    {
      icon: Truck,
      title: "Free Delivery",
      text: "Delivery within 2–5 business days.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      text: "100% secure online payment.",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      text: "7 Days hassle-free returns.",
    },
    {
      icon: BadgeCheck,
      title: "Official Warranty",
      text: "Manufacturer warranty included.",
    },
  ];

  return (
    <section className="mt-8">

      <h2 className="mb-8 text-3xl font-bold">
        Shipping & Services
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {services.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
          >
            <item.icon
              size={34}
              className="mb-4 text-blue-600"
            />

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ProductShipping;