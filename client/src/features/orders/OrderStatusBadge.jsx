function OrderStatusBadge({ status }) {
  let classes =
    "bg-yellow-100 text-yellow-700";

  if (status === "Delivered") {
    classes =
      "bg-green-100 text-green-700";
  }

  if (status === "Shipped") {
    classes =
      "bg-blue-100 text-blue-700";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${classes}`}
    >
      {status}
    </span>
  );
}

export default OrderStatusBadge;