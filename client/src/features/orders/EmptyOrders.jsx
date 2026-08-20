import { Package } from "lucide-react";

function EmptyOrders() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">

      <Package
        size={70}
        className="mx-auto text-slate-400"
      />

      <h2 className="mt-6 text-2xl font-bold">
        No Orders Yet
      </h2>

      <p className="mt-3 text-slate-500">
        You haven't placed any orders yet.
      </p>

    </div>
  );
}

export default EmptyOrders;