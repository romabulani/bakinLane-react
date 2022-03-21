import { WISHLIST_OPERATION, CART_OPERATION } from "../constants";
import { useAuth, useData } from "contexts";
import { useNavigate } from "react-router-dom";
import { getCart, getWishlist, loginService } from "services";

function useLoginHandler() {
  const { setAuthToken, setAuthUser } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  const loginHandler = async (e, setLoginData, setErrorData, loginData) => {
    e.preventDefault();
    try {
      let response;
      if (e.target.innerText === "Login as Guest") {
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
      response = await getCart(tokenResponse);
      dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
      response = await getWishlist(tokenResponse);
      dispatch({
        type: WISHLIST_OPERATION,
        payload: { wishlist: response.wishlist },
      });
      navigate("/products");
    } catch (e) {
      console.log("loginHandler: Error in Login", e);
      setErrorData(true);
    }
  };
  return { loginHandler };
}

export { useLoginHandler };
