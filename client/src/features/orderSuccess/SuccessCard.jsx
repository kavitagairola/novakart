import { CheckCircle } from "lucide-react";

function SuccessCard() {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">

      <CheckCircle
        size={70}
        className="mx-auto text-green-600"
      />

      <h1 className="mt-6 text-3xl font-bold text-green-700">
        Order Placed Successfully 🎉
      </h1>

      <p className="mt-3 text-slate-600">
        Thank you for shopping with NovaKart.
        Your order has been confirmed.
      </p>

    </div>
  );
}

export default SuccessCard;