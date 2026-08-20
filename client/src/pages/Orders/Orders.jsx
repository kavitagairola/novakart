import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import OrderCard from "../../features/orders/OrderCard";
import EmptyOrders from "../../features/orders/EmptyOrders";

function Orders() {
  // Dummy Data
  const orders = [
    {
      id: "NK10231",
      date: "15 June 2025",
      total: "₹12,999",
      status: "Delivered",
      items: 2,
    },
    {
      id: "NK10232",
      date: "21 June 2025",
      total: "₹5,499",
      status: "Shipped",
      items: 1,
    },
    {
      id: "NK10233",
      date: "28 June 2025",
      total: "₹2,999",
      status: "Processing",
      items: 3,
    },
  ];

  return (
    <MainLayout>
      <Container>

        <section className="py-10">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-900">
              My Orders
            </h1>

            <p className="mt-2 text-slate-500">
              Track your recent purchases and order history.
            </p>

          </div>

          {orders.length === 0 ? (
            <EmptyOrders />
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                />
              ))}
            </div>
          )}

        </section>

      </Container>
    </MainLayout>
  );
}

export default Orders;