import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import { useCart } from "../../context/CartContext";

function Checkout() {
  const { totalItems, totalPrice } = useCart();

  const shipping = totalPrice > 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  return (
    <MainLayout>
      <Container>
        <section className="py-16">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Checkout
            </h1>

            <p className="mt-3 text-gray-500">
              Complete your order by filling in your shipping details.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Side */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold">
                Shipping Information
              </h2>

              <form className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block font-medium">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="New Delhi"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium">
                    Address
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Enter your complete address..."
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="mb-2 block font-medium">
                    State
                  </label>

                  <input
                    type="text"
                    placeholder="Delhi"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* ZIP */}
                <div>
                  <label className="mb-2 block font-medium">
                    ZIP Code
                  </label>

                  <input
                    type="text"
                    placeholder="110001"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              </form>

              {/* Payment Method */}
<div className="mt-10">
  <h2 className="mb-6 text-2xl font-bold">
    Payment Method
  </h2>

  <div className="space-y-4">

    <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-blue-500">
      <input
        type="radio"
        name="payment"
        defaultChecked
      />

      <div>
        <h3 className="font-semibold">
          Cash On Delivery
        </h3>

        <p className="text-sm text-gray-500">
          Pay when your order arrives.
        </p>
      </div>
    </label>

    <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-blue-500">
      <input
        type="radio"
        name="payment"
      />

      <div>
        <h3 className="font-semibold">
          Credit / Debit Card
        </h3>

        <p className="text-sm text-gray-500">
          Visa, Mastercard, RuPay
        </p>
      </div>
    </label>

    <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-blue-500">
      <input
        type="radio"
        name="payment"
      />

      <div>
        <h3 className="font-semibold">
          UPI Payment
        </h3>

        <p className="text-sm text-gray-500">
          Google Pay, PhonePe, Paytm
        </p>
      </div>
    </label>

  </div>
</div>

            </div>

            {/* Right Side */}
            <div className="h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>

                  <span className="text-green-600">
                    {shipping === 0
                      ? "Free"
                      : `₹${shipping}`}
                  </span>
                </div>

                <hr className="border-dashed" />

                <div className="flex justify-between rounded-xl bg-blue-50 p-4 text-xl font-bold">
                  <span>Total</span>

                  <span className="text-blue-600">
                    ₹{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
                Place Order
              </button>
            </div>
          </div>
        </section>
      </Container>
    </MainLayout>
  );
}

export default Checkout;