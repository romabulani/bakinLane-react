import { useLocation } from "react-router-dom";
import { Navigation, Footer, LoginForm } from "../components";
import "../styles/globalbakin.css";

function LoginPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export { LoginPage };
