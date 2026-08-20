import { Link } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";
function OrderCard({ order }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Order #{order.id}
          </h2>

          <p className="mt-2 text-slate-500">
            {order.date}
          </p>

          <p className="mt-1 text-slate-500">
            {order.items} Items
          </p>

        </div>

        <div className="text-left md:text-center">

          <p className="text-2xl font-bold text-blue-600">
            {order.total}
          </p>

        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">

          <OrderStatusBadge
            status={order.status}
          />

          <Link
  to={`/orders/${order.id}`}
  className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
>
  View Details
</Link>

        </div>

      </div>

    </div>
  );
}

export default OrderCard;