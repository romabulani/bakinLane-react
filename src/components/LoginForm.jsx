import "../styles/auth.css";

function LoginForm() {
  return (
    <main className="content-container">
      <div className="flex-row-center">
        <div className="auth-container flex-column-center">
          <h4 className="heading4">LOGIN</h4>
          <form className="form-auth">
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
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
            <div>
              <span>Don't have an account?</span>
              <a href="#" className="btn-link btn-link-primary">
                Create One
              </a>
            </div>
            <div>
              <span>Forgot Password?</span>
              <a href="#" className="btn-link btn-link-primary">
                Reset here
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export { LoginForm };
