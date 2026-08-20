import { X } from "lucide-react";

function DrawerHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between border-b p-6">

      <div>

        <h2 className="text-2xl font-bold">
          My Account
        </h2>

        <p className="text-sm text-slate-500">
          Welcome Back 👋
        </p>

      </div>

      <button onClick={onClose}>
        <X size={24} />
      </button>

    </div>
  );
}

export default DrawerHeader;