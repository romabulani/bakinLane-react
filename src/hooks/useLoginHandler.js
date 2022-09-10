import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "contexts";
import { toast } from "react-toastify";
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
    location,
    setDisableLogin
  ) => {
    if (e) e.preventDefault();
    if (setDisableLogin) setDisableLogin(true);
    try {
      let response;
      if (e && e.target.innerText === "Login as Guest") {
        setLoginData({
          email: "johndoe@gmail.com",
          password: "johndoe@123",
        });
        response = await loginService("johndoe@gmail.com", "johndoe@123");
      } else response = await loginService(loginData.email, loginData.password);
      const tokenResponse = response.user.token;
      const foundUser = {
        firstName: response.user.firstName,
        lastName: response.user.lastName,
        email: response.user.email,
      };
      if (e) toast.success("Log In successful");
      if (response.user) {
        setAuthToken(tokenResponse);
        setAuthUser(foundUser);
        localStorage.setItem("authToken", tokenResponse);
        localStorage.setItem("authUser", JSON.stringify(foundUser));
        response = await getCart(tokenResponse);
        dispatch({
          type: CART_OPERATION,
          payload: { cart: response.cart },
        });
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
        dispatch({
          type: SET_ORDERS,
          payload: { orders: response.orders },
        });
        if (location.state) navigate(location.state?.from?.pathname);
        else navigate("/products");
      }
    } catch (e) {
      if (setLoginData) toast.error(`Couldn't Login! Please try again.`);
      console.error("loginHandler: Error in Login", e);
      setErrorData(true);
    } finally {
      if (setDisableLogin) setDisableLogin(false);
    }
  };
  return { loginHandler };
}

export { useLoginHandler };
