import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginHandler } from "hooks";
import "./auth.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorData, setErrorData] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginHandler } = useLoginHandler();
  const [disableLogin, setDisableLogin] = useState(false);
  const location = useLocation();

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
          <div className="input-primary input-icon-container border-box">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              className="input-no-outline"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((loginData) => ({
                  ...loginData,
                  password: e.target.value,
                }))
              }
              onFocus={() => setErrorData(false)}
              required
            />
            <button
              className="btn-no-decoration cursor-pointer"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                icon={showPassword ? "eye" : "eye-slash"}
                className="input-icon-style"
              />
            </button>
          </div>
        </div>

        <button
          className="btn btn-primary btn-auth"
          disabled={disableLogin}
          onClick={(e) =>
            loginHandler(
              e,
              setLoginData,
              setErrorData,
              loginData,
              location,
              setDisableLogin
            )
          }
        >
          Login
        </button>
        <button
          className="btn btn-outline-primary btn-auth guest-button"
          disabled={disableLogin}
          onClick={(e) =>
            loginHandler(
              e,
              setLoginData,
              setErrorData,
              null,
              location,
              setDisableLogin
            )
          }
        >
          Login as Guest
        </button>
        {errorData && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> Email or Password is incorrect</div>
          </div>
        )}
        <div>
          <span>Don't have an account?</span>
          <Link
            to="/signup"
            className="btn-link btn-link-primary"
            state={location.state}
            replace
          >
            Create One
          </Link>
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
