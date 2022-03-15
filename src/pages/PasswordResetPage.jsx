import "../styles/globalbakin.css";
import { Footer } from "../components/shared/Footer";
import { Navigation } from "../components/shared/Navigation";
import { PasswordResetForm } from "../components/authentication/PasswordResetForm";

function PasswordResetPage() {
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

export default PasswordResetPage;
