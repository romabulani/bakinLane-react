import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSignupHandler } from "hooks";
import "./auth.css";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { formData, formDispatch, errorData, errorDispatch, signUpHandler } =
    useSignupHandler();
  const [disableSignup, setDisableSignup] = useState(false);
  const location = useLocation();

  return (
    <div className="auth-container flex-column-center signup-container middle-content">
      <h4 className="heading4">SIGN UP</h4>
      <form className="form-auth">
        <div className="form-input ">
          {" "}
          <label htmlFor="firstName" className="input-label">
            First Name *
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="input-primary border-box"
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              formDispatch({
                type: "INPUT_FIRST_NAME",
                payload: e.target.value,
              })
            }
            onFocus={() =>
              errorDispatch({
                type: "ERROR_FIRST_NAME",
                payload: "",
              })
            }
            required
          />
        </div>
        {errorData.firstName.length > 0 && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> {errorData.firstName}</div>
          </div>
        )}
        <div className="form-input">
          {" "}
          <label htmlFor="firstName" className="input-label">
            Last Name *
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            id="lastName"
            className="input-primary border-box"
            value={formData.lastName}
            onChange={(e) =>
              formDispatch({
                type: "INPUT_LAST_NAME",
                payload: e.target.value,
              })
            }
            onFocus={() =>
              errorDispatch({
                type: "ERROR_LAST_NAME",
                payload: "",
              })
            }
            required
          />
        </div>
        {errorData.lastName.length > 0 && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> {errorData.lastName}</div>
          </div>
        )}

        <div className="form-input">
          {" "}
          <label htmlFor="email" className="input-label">
            Email *
          </label>
          <input
            placeholder="Enter email "
            id="email"
            className="input-primary border-box"
            value={formData.email}
            onChange={(e) =>
              formDispatch({ type: "INPUT_EMAIL", payload: e.target.value })
            }
            onFocus={() =>
              errorDispatch({
                type: "ERROR_EMAIL",
                payload: "",
              })
            }
            required
          />
        </div>
        {errorData.email.length > 0 && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> {errorData.email}</div>
          </div>
        )}
        <div className="form-input">
          <label htmlFor="password" className="input-label">
            Password *
          </label>
          <div className="input-primary input-icon-container border-box">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              className="input-no-outline"
              value={formData.password}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_PASSWORD",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_PASSWORD",
                  payload: "",
                })
              }
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
        {errorData.password.length > 0 && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> {errorData.password}</div>
          </div>
        )}

        <div className="form-input">
          <label htmlFor="confirmpassword" className="input-label">
            Confirm Password *
          </label>
          <div className="input-primary input-icon-container border-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              placeholder="Confirm password"
              className="input-no-outline"
              value={formData.confirmPassword}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_CONFIRM_PASSWORD",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_CONFIRM_PASSWORD",
                  payload: "",
                })
              }
              required
            />
            <button
              className="btn-no-decoration cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              type="button"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? "eye" : "eye-slash"}
                className="input-icon-style"
              />
            </button>
          </div>
        </div>
        {errorData.confirmPassword.length > 0 && (
          <div className="error">
            <FontAwesomeIcon
              icon="circle-exclamation"
              className="error-icon"
            ></FontAwesomeIcon>
            {"    "}
            <div> {errorData.confirmPassword}</div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-auth"
          disabled={disableSignup}
          onClick={async (e) => {
            await signUpHandler(e, location, setDisableSignup);
          }}
        >
          SIGN UP
        </button>

        <div className="flex-row-center">
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="btn-link btn-link-primary"
            state={location.state}
            replace
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export { SignupForm };
