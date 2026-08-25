import { Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/Product/ProductDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import NewArrivals from "../pages/NewArrivals/NewArrivals";
import Deals from "../pages/Deals/Deals";
import ProtectedRoute from "../components/auth/ProtectedRoute";
function AppRoutes() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product/:id" element={<ProductDetails />}/>
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/wishlist" element={<Wishlist />}/>
    <Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route element={<ProtectedRoute />}>
  <Route path="/profile" element={<Profile />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/orders/:id" element={<OrderDetails />} />
  <Route path="/checkout" element={<Checkout />} />
</Route>

<Route path="/new-arrivals" element={<NewArrivals />} />
<Route path="/deals" element={<Deals />} />
    </Routes>
  );
}

export default AppRoutes;