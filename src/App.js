import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MockAPI, ScrollToTop } from "components";
import {
  CartPage,
  LandingPage,
  LoginPage,
  PasswordResetPage,
  ProductListingPage,
  ProductPage,
  ProfilePage,
  SignupPage,
  WishlistPage,
} from "./pages";
import { useAuth } from "contexts";

function App() {
  const { authToken } = useAuth();
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/cart" element={<CartPage />} />
        {authToken && <Route path="/profile" element={<ProfilePage />} />}
      </Routes>
    </div>
  );
}

export default App;
