import { useAuthHandlers } from "hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./auth.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { loginHandler } = useAuthHandlers();
  return (
    <main className="content-container">
      <div className="flex-row-center">
        <div className="auth-container flex-column-center">
          <h4 className="heading4">LOGIN</h4>
          <div className="form-auth">
            <input
              type="email"
              placeholder="Enter email"
              className="input-primary border-box"
              value={loginData.email}
              onChange={(e) =>
                setLoginData((loginData) => ({
                  ...loginData,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="password"
              placeholder="Enter password"
              className="input-primary border-box"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((loginData) => ({
                  ...loginData,
                  password: e.target.value,
                }))
              }
            />
            <button className="btn btn-primary btn-auth">Login</button>
            <button
              className="btn btn-outline-primary btn-auth"
              onClick={(e) => loginHandler(e, setLoginData)}
            >
              Login with Test Credentials
            </button>
            <div>
              <span>Don't have an account?</span>
              <Link to="/signup" className="btn-link btn-link-primary">
                Create One
              </Link>
            </div>
            <div>
              <span>Forgot Password?</span>
              <Link to="/passwordReset" className="btn-link btn-link-primary">
                Reset here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { LoginForm };
