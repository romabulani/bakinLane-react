import "./App.css";
import { Filters } from "./components/productListing/Filters";
import { ProductList } from "./components/productListing/ProductList";
// import { LandingPage } from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import SignupPage from "./pages/SignupPage";
function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
