import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "contexts";
import {
  getAddressFromServer,
  getCart,
  getOrdersFromServer,
  getWishlist,
  loginService,
} from "services";
import {
  WISHLIST_OPERATION,
  CART_OPERATION,
  SET_ADDRESS,
  SET_ORDERS,
} from "../constants";

function useLoginHandler() {
  const { setAuthToken, setAuthUser } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  const loginHandler = async (
    e,
    setLoginData,
    setErrorData,
    loginData,
    location
  ) => {
    if (e) e.preventDefault();
    try {
      let response;
      if (e && e.target.innerText === "Login as Guest") {
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
      response = await getAddressFromServer(tokenResponse);
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      response = await getOrdersFromServer(tokenResponse);
      dispatch({ type: SET_ORDERS, payload: { orders: response.orders } });
      if (location.state) navigate(location.state?.from?.pathname);
      else navigate("/products");
    } catch (e) {
      console.error("loginHandler: Error in Login", e);
      setErrorData(true);
    }
  };
  return { loginHandler };
}

export { useLoginHandler };
