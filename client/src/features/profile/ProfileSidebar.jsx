import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProfileSidebar() {
 const menus = [
  { icon: User, title: "My Profile", path: "/profile" },
  { icon: Package, title: "My Orders", path: "/orders" },
  { icon: Heart, title: "Wishlist", path: "/wishlist" },
  { icon: MapPin, title: "Addresses", path: "/addresses" },
  { icon: Settings, title: "Settings", path: "/settings" },
];
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-8 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
          K
        </div>

        <h2 className="mt-4 text-xl font-bold">
          Khushi
        </h2>

        <p className="text-sm text-slate-500">
          khushi@email.com
        </p>

      </div>

      <nav className="space-y-2">

        {menus.map((item) => (
          <Link
  key={item.title}
  to={item.path}
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
>
  <item.icon size={20} />
  {item.title}
</Link>
        ))}

      </nav>

    </aside>
  );
}

export default ProfileSidebar;