import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import { useCart } from "../../context/CartContext";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";

function Cart() {
  const { cartItems } = useCart();

  return (
    <MainLayout>
      <Container>
        <section className="py-16">

          <h1 className="mb-10 text-4xl font-bold">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">

              {/* Left Side */}
              <div className="space-y-6 lg:col-span-2">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>

              {/* Right Side */}
              <div>
                <CartSummary />
              </div>

            </div>
          )}

        </section>
      </Container>
    </MainLayout>
  );
}

export default Cart;