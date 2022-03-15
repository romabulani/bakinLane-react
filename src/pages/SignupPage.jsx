import { SignupForm } from "../components/authentication/SignupForm";
import { Footer } from "../components/shared/Footer";
import { Navigation } from "../components/shared/Navigation";

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

export default SignupPage;
