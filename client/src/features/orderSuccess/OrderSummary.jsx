function OrderSummary() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Order ID</span>
          <span className="font-semibold">
            NK10231
          </span>
        </div>

        <div className="flex justify-between">
          <span>Payment</span>
          <span className="font-semibold text-green-600">
            Paid
          </span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Delivery</span>
          <span className="font-semibold">
            25 June 2025
          </span>
        </div>

        <div className="border-t pt-4 flex justify-between text-xl font-bold">
          <span>Total Paid</span>
          <span className="text-blue-600">
            ₹137,998
          </span>
        </div>

      </div>

    </div>
  );
}

export default OrderSummary;