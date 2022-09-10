import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Address,
  Cart,
  Checkout,
  Footer,
  HeroSection,
  LoginForm,
  Navigation,
  NotFound,
  OrderSummary,
  PrivateRoute,
  Product,
  ProductList,
  ProfileDetails,
  ProfilePage,
  ScrollToTop,
  SignupForm,
  Wishlist,
} from "components";
import { useEffect } from "react";
import { useAuth, useData } from "contexts";
import {
  getAddressFromServer,
  getCart,
  getOrdersFromServer,
  getWishlist,
} from "services";
import {
  CART_OPERATION,
  WISHLIST_OPERATION,
  SET_ADDRESS,
  SET_ORDERS,
} from "constants/index";

function App() {
  const { authToken } = useAuth();
  const { dispatch } = useData();

  useEffect(() => {
    (async () => {
      if (authToken)
        try {
          let response = await getCart(authToken);
          dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
          response = await getWishlist(authToken);
          dispatch({
            type: WISHLIST_OPERATION,
            payload: { wishlist: response.wishlist },
          });
          response = await getAddressFromServer(authToken);
          dispatch({
            type: SET_ADDRESS,
            payload: { address: response.address },
          });
          response = await getOrdersFromServer(authToken);
          dispatch({ type: SET_ORDERS, payload: { orders: response.orders } });
        } catch (e) {
          console.error(e);
        }
    })();
  }, [authToken]);

  return (
    <div className="App pagewrapper ">
      <Navigation />
      <ScrollToTop />
      <ToastContainer position="bottom-right" autoClose={800} draggable />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/profile/address" element={<Address />} />
            <Route path="/profile/orders" element={<OrderSummary />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
