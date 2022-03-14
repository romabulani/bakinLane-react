import { SignupForm } from "../components/SignupForm";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

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
