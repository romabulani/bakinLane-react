import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MockAPI } from "./components";
import {
  CartPage,
  LandingPage,
  LoginPage,
  PasswordResetPage,
  ProductListingPage,
  ProfilePage,
  SignupPage,
  WishlistPage,
} from "./pages";
import { useAuth } from "./contexts";

function App() {
  const { authToken } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/cart" element={<CartPage />} />
        {authToken && <Route path="/profile" element={<ProfilePage />} />}
      </Routes>
    </div>
  );
}

export default App;
