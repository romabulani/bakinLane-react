import { Navigation, Footer, SignupForm } from "../components";
import "../styles/globalbakin.css";

function SignupPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <SignupForm />
      </div>
      <Footer />
    </div>
  );
}

export { SignupPage };
