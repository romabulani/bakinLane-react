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
  MockAPI,
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

function App() {
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
        <Route path="/mock-api" element={<MockAPI />} />

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
