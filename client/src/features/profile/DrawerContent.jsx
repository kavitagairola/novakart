import ProfileInfo from "./ProfileInfo";

function DrawerContent({ activeTab }) {
  switch (activeTab) {
    case "profile":
      return <ProfileInfo />;

    case "orders":
      return (
        <div className="mt-6 rounded-2xl border p-5">
          <h2 className="text-xl font-bold">
            My Orders
          </h2>

          <p className="mt-3 text-slate-500">
            Your recent orders will appear here.
          </p>
        </div>
      );

    case "wishlist":
      return (
        <div className="mt-6 rounded-2xl border p-5">
          <h2 className="text-xl font-bold">
            Wishlist
          </h2>

          <p className="mt-3 text-slate-500">
            Your wishlist items will appear here.
          </p>
        </div>
      );

    case "address":
      return (
        <div className="mt-6 rounded-2xl border p-5">
          <h2 className="text-xl font-bold">
            Addresses
          </h2>

          <p className="mt-3 text-slate-500">
            Manage your saved addresses.
          </p>
        </div>
      );

    case "settings":
      return (
        <div className="mt-6 rounded-2xl border p-5">
          <h2 className="text-xl font-bold">
            Settings
          </h2>

          <p className="mt-3 text-slate-500">
            Manage your account settings.
          </p>
        </div>
      );

    default:
      return null;
  }
}

export default DrawerContent;