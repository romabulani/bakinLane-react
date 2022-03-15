import "../styles/globalbakin.css";
import { Footer } from "../components/shared/Footer";
import { Navigation } from "../components/shared/Navigation";
import { LoginForm } from "../components/authentication/LoginForm";

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

export default LoginPage;
