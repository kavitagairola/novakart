function PaymentSummary() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-2xl font-bold">
        Payment Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹137,998</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">
            Free
          </span>
        </div>

        <div className="border-t pt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹137,998</span>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 px-4 py-3 text-green-700">
          Payment Successful ✅
        </div>

      </div>

    </div>
  );
}

export default PaymentSummary;