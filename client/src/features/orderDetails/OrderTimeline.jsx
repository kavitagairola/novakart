function OrderTimeline() {
  const timeline = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Delivered",
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Timeline
      </h2>

      <div className="space-y-4">

        {timeline.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="h-3 w-3 rounded-full bg-green-600"></div>

            <p>{step}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default OrderTimeline;