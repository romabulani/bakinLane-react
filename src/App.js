import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Cart,
  Footer,
  HeroSection,
  LoginForm,
  MockAPI,
  Navigation,
  PasswordResetForm,
  PrivateRoute,
  Product,
  ProductList,
  ProfileDetails,
  ScrollToTop,
  SignupForm,
  Wishlist,
} from "components";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <ScrollToTop />
      <ToastContainer position="bottom-right" autoClose={800} draggable />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/passwordreset" element={<PasswordResetForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
