import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import { useWishlist } from "../../context/WishlistContext";

import WishlistItem from "../../components/wishlist/WishlistItem";
import EmptyWishlist from "../../components/wishlist/EmptyWishlist";

function Wishlist() {
  const { wishlistItems } = useWishlist();

  return (
    <MainLayout>
      <Container>
        <section className="py-16">

          <div className="mb-10 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-10 text-white">

  <p className="text-sm uppercase tracking-widest">
    Wishlist
  </p>

  <h1 className="mt-3 text-4xl font-semibold">
    My Favourite Products
  </h1>

  <p className="mt-3 max-w-xl text-pink-100">
    All your saved products are available here.
  </p>

</div>

          {wishlistItems.length === 0 ? (
            <EmptyWishlist />
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {wishlistItems.map((item) => (
                <WishlistItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}

        </section>
      </Container>
    </MainLayout>
  );
}

export default Wishlist;