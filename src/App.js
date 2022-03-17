import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MockAPI } from "./components";
import {
  CartPage,
  LandingPage,
  LoginPage,
  PasswordResetPage,
  ProductListingPage,
  SignupPage,
  WishlistPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
