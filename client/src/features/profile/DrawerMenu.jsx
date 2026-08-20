import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
} from "lucide-react";

function DrawerMenu({ activeTab, setActiveTab }) {
  const menus = [
    {
      id: "profile",
      title: "My Profile",
      icon: User,
    },
    {
      id: "orders",
      title: "My Orders",
      icon: Package,
    },
    {
      id: "wishlist",
      title: "Wishlist",
      icon: Heart,
    },
    {
      id: "address",
      title: "Addresses",
      icon: MapPin,
    },
    {
      id: "settings",
      title: "Settings",
      icon: Settings,
    },
    {
      id: "logout",
      title: "Logout",
      icon: LogOut,
    },
  ];

  return (
    <div className="space-y-2">

      {menus.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
            activeTab === item.id
              ? "bg-blue-600 text-white"
              : "hover:bg-slate-100"
          }`}
        >
          <item.icon size={20} />

          <span className="font-medium">
            {item.title}
          </span>

        </button>
      ))}

    </div>
  );
}

export default DrawerMenu;