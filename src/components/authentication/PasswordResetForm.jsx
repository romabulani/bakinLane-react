import { Link } from "react-router-dom";
import "./auth.css";

function PasswordResetForm() {
  return (
    <div className="auth-container flex-column-center middle-content">
      <h4 className="heading4">RESET PASSWORD</h4>
      <form action="" className="form-auth">
        <div className="form-input">
          <label htmlFor="email" className="input-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="input-primary border-box"
            required
          />
        </div>

        <button className="btn btn-primary btn-auth" type="submit">
          RESET PASSWORD
        </button>
        <div className="flex-row-center">
          <span>Already have an account?</span>
          <Link to="/login" className="btn-link btn-link-primary">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export { PasswordResetForm };
