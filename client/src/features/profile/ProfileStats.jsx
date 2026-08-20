import { Heart, Package, MapPin } from "lucide-react";

function ProfileStats() {
  const stats = [
    {
      title: "Orders",
      value: "12",
      icon: Package,
    },
    {
      title: "Wishlist",
      value: "8",
      icon: Heart,
    },
    {
      title: "Addresses",
      value: "2",
      icon: MapPin,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >

          <item.icon
            size={30}
            className="text-blue-600"
          />

          <h3 className="mt-4 text-3xl font-bold">
            {item.value}
          </h3>

          <p className="mt-1 text-slate-500">
            {item.title}
          </p>

        </div>
      ))}

    </div>
  );
}

export default ProfileStats;