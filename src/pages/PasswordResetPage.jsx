import { Navigation, Footer, PasswordResetForm } from "components";
import "styles/globalbakin.css";

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

export { PasswordResetPage };
