import { Link } from "react-router-dom";

function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      <Link
        to="/shop"
        className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        Continue Shopping
      </Link>

      <Link
        to="/orders"
        className="flex-1 rounded-xl border border-blue-600 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
      >
        View My Orders
      </Link>

    </div>
  );
}

export default ActionButtons;