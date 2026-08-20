import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import OrderItems from "../../features/orderDetails/OrderItems";
import ShippingAddress from "../../features/orderDetails/ShippingAddress";
import PaymentSummary from "../../features/orderDetails/PaymentSummary";
import OrderTimeline from "../../features/orderDetails/OrderTimeline";

function OrderDetails() {
  return (
    <MainLayout>
      <Container>

        <section className="py-10">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-900">
              Order #NK10231
            </h1>

            <p className="mt-2 text-slate-500">
              Placed on 15 June 2025
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

            <div className="space-y-8">

              <OrderItems />

              <OrderTimeline />

            </div>

            <div className="space-y-8">

              <ShippingAddress />

              <PaymentSummary />

            </div>

          </div>

        </section>

      </Container>
    </MainLayout>
  );
}

export default OrderDetails;