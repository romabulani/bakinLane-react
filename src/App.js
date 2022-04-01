import "./App.css";
import { Route, Routes } from "react-router-dom";
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
