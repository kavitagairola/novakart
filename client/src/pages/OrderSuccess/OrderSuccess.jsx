import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import SuccessCard from "../../features/orderSuccess/SuccessCard";
import OrderSummary from "../../features/orderSuccess/OrderSummary";
import ActionButtons from "../../features/orderSuccess/ActionButtons";

function OrderSuccess() {
  return (
    <MainLayout>
      <Container>

        <section className="py-12">

          <div className="mx-auto max-w-3xl space-y-8">

            <SuccessCard />

            <OrderSummary />

            <ActionButtons />

          </div>

        </section>

      </Container>
    </MainLayout>
  );
}

export default OrderSuccess;