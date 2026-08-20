function ProfileHeader() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <p className="text-sm font-medium text-blue-600">
        Welcome Back 👋
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        My Account
      </h1>

      <p className="mt-3 max-w-2xl text-slate-600">
        Manage your personal information, orders, wishlist and saved addresses
        from one place.
      </p>

    </div>
  );
}

export default ProfileHeader;