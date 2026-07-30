import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../app/store";

import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default AppProviders;