import "./auth.css";

function SignupForm() {
  return (
    <main className="content-container">
      <div className="flex-row-center">
        <div className="auth-container flex-column-center signup-container">
          <h4 className="heading4">SIGN UP</h4>
          <form action="" className="form-auth">
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
            <button type="submit" className="btn btn-primary btn-auth">
              SIGN UP
            </button>
            <div>
              <span>Already have an account?</span>
              <a href="login.html" className="btn-link btn-link-primary">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export { SignupForm };
