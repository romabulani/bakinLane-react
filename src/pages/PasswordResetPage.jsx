import "../styles/globalbakin.css";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { PasswordResetForm } from "../components/PasswordResetForm";

function PasswordReset() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <PasswordResetForm />
      </div>
      <Footer />
    </div>
  );
}

export default PasswordReset;
