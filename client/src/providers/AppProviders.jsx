import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../app/store";

import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default AppProviders;