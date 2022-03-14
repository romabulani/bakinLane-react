import "../styles/globalbakin.css";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { LoginForm } from "../components/LoginForm";

function Login() {
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

export default Login;
