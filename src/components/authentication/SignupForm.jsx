import "./auth.css";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <main className="content-container">
      <div className="flex-row-center">
        <div className="auth-container flex-column-center signup-container">
          <h4 className="heading4">SIGN UP</h4>
          <div action="" className="form-auth">
            <input
              type="text"
              placeholder="Enter First Name"
              className="input-primary border-box"
              required
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              className="input-primary border-box"
              required
            />
            <input
              type="email"
              placeholder="Enter email"
              className="input-primary border-box"
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              className="input-primary border-box"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="input-primary border-box"
              required
            />
            <input type="checkbox" id="terms-conditions" />
            <label htmlFor="terms-conditions">
              I accept all terms and conditions
            </label>
            <button className="btn btn-primary btn-auth">SIGN UP</button>
            <div>
              <span>Already have an account?</span>
              <Link to="/login" className="btn-link btn-link-primary">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { SignupForm };
