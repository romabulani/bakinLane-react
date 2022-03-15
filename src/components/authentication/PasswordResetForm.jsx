import "./auth.css";

function PasswordResetForm() {
  return (
    <main className="content-container">
      <div className="flex-row-center">
        <div className="auth-container flex-column-center">
          <h4 className="heading4">RESET PASSWORD</h4>
          <form action="" className="form-auth">
            <input
              type="email"
              placeholder="Enter email"
              className="input-primary border-box"
              required
            />
            <button type="submit" className="btn btn-primary btn-auth">
              RESET PASSWORD
            </button>
            <div>
              <span>Already have an account?</span>
              <a href="#" className="btn-link btn-link-primary">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export { PasswordResetForm };
