import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { loginService } from "../../services";
import "./auth.css";

function LoginForm() {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const loginHandler = async (e) => {
    try {
      let response;
      if (e.target.innerText === "Login with Test Credentials") {
        setLoginData({
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123",
        });
        response = await loginService(
          "adarshbalika@gmail.com",
          "adarshBalika123"
        );
      } else response = await loginService(loginData.email, loginData.password);
      const user = JSON.stringify(response.foundUser);
      const tokenResponse = response.encodedToken;
      setAuthToken(tokenResponse);
      setAuthUser(response.foundUser);
      localStorage.setItem("authToken", tokenResponse);
      localStorage.setItem("authUser", user);
      navigate("/products");
    } catch (e) {
      console.log("loginHandler: Error in Login");
    }
  };

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
              onClick={loginHandler}
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
