import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginHandler } from "hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorData, setErrorData] = useState(false);
  const { loginHandler } = useLoginHandler();
  return (
    <div className="auth-container flex-column-center middle-content">
      <h4 className="heading4">LOGIN</h4>
      <form className="form-auth">
        <div className="form-input">
          <label htmlFor="email" className="input-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="input-primary border-box"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((loginData) => ({
                ...loginData,
                email: e.target.value,
              }))
            }
            onFocus={() => setErrorData(false)}
          />
        </div>
        <div className="form-input">
          {" "}
          <label htmlFor="password" className="input-label">
            Password *
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="input-primary border-box"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((loginData) => ({
                ...loginData,
                password: e.target.value,
              }))
            }
            onFocus={() => setErrorData(false)}
          />
        </div>

        <button
          className="btn btn-primary btn-auth"
          onClick={(e) =>
            loginHandler(e, setLoginData, setErrorData, loginData)
          }
        >
          Login
        </button>
        <button
          className="btn btn-outline-primary btn-auth guest-button"
          onClick={(e) => loginHandler(e, setLoginData, setErrorData)}
        >
          Login as Guest
        </button>
        {errorData && (
          <div className="error">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> Email or Password is incorrect</div>
          </div>
        )}
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
      </form>
    </div>
  );
}

export { LoginForm };
