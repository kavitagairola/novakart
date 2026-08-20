function ProfileInfo() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Personal Information
        </h2>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Edit Profile
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-slate-500">
            Full Name
          </p>

          <h3 className="mt-1 text-lg font-semibold">
            Khushi
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Email
          </p>

          <h3 className="mt-1 text-lg font-semibold">
            khushi@email.com
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Phone
          </p>

          <h3 className="mt-1 text-lg font-semibold">
            +91 9876543210
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Joined
          </p>

          <h3 className="mt-1 text-lg font-semibold">
            January 2025
          </h3>
        </div>

      </div>

    </div>
  );
}

export default ProfileInfo;