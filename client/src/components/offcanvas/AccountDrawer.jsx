import Drawer from "../ui/Drawer";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AccountDrawer({ open, onClose }) {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="My Account"
    >
      {/* Welcome Section */}
      <div className="rounded-2xl bg-slate-50 p-5 text-center">

        {isAuthenticated ? (
          <>
            {/* Logged In */}
            <h3 className="text-xl font-bold">
              Welcome, {user?.name} 👋
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {user?.email}
            </p>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-center font-medium text-white transition hover:bg-slate-800"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Logged Out */}
            <h3 className="text-xl font-bold">
              Welcome to NovaKart
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to access your account, orders and wishlist.
            </p>

            <div className="mt-5 space-y-3">

              <Link
                to="/login"
                onClick={onClose}
                className="block rounded-xl bg-black py-3 text-center font-medium text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={onClose}
                className="block rounded-xl border py-3 text-center font-medium"
              >
                Create Account
              </Link>

            </div>
          </>
        )}

      </div>

      {/* Quick Links */}
      <div className="mt-8 space-y-2">

        <Link
          to="/profile"
          onClick={onClose}
          className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
        >
          My Profile
        </Link>

        <Link
          to="/orders"
          onClick={onClose}
          className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
        >
          My Orders
        </Link>

        <Link
          to="/wishlist"
          onClick={onClose}
          className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
        >
          Wishlist
        </Link>

      </div>
    </Drawer>
  );
}

export default AccountDrawer;