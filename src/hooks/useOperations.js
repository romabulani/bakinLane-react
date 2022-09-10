//This file contains all the cart and wishlist operations using custom hooks
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "contexts";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  updateQuantityInCart,
} from "services";
import {
  WISHLIST_OPERATION,
  CART_OPERATION,
  SET_ADDRESS,
  SET_ORDERS,
} from "../constants";

function useOperations() {
  const { state, dispatch } = useData();
  const { authToken, setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const resetFunction = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuthToken("");
    setAuthUser(null);
    dispatch({ type: CART_OPERATION, payload: { cart: [] } });
    dispatch({ type: WISHLIST_OPERATION, payload: { wishlist: [] } });
    dispatch({ type: SET_ADDRESS, payload: { address: [] } });
    dispatch({ type: SET_ORDERS, payload: { orders: [] } });
    navigate("/login");
  };
  // To increment or decrement cart quantity
  const updateQuantity = async (e, product, type, setDisable) => {
    e.preventDefault();
    setDisable(true);
    let response;
    try {
      if (type === "increment")
        response = await updateQuantityInCart(authToken, product.id, type);
      else {
        if (product.qty === 1)
          response = await removeFromCart(authToken, product.id);
        else response = await updateQuantityInCart(authToken, product.id, type);
      }
      dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
    } finally {
      setDisable(false);
    }
  };

  //To remove product from cart
  const removeProduct = async (e, product, setDisable) => {
    setDisable(true);
    e.preventDefault();
    try {
      const response = await removeFromCart(authToken, product.id);
      dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
    } finally {
      setDisable(false);
    }
  };

  // For MOVE TO WISHLIST functionality on cart page, if its not present in wishlist, add it, then remove from cart
  const cartWishlistHandler = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      if (!isWishlisted(product)) {
        const wishlistResponse = await addToWishlist(authToken, product);
        dispatch({
          type: WISHLIST_OPERATION,
          payload: { wishlist: wishlistResponse.wishlist },
        });
      }
      const cartResponse = await removeFromCart(authToken, product.id);
      dispatch({
        type: CART_OPERATION,
        payload: { cart: cartResponse.cart },
      });
    } finally {
      setDisable(false);
    }
  };

  // Button Text for displaying based on the product is present in cart or not
  const getButtonText = (product) => {
    const filteredProduct = state.cart.filter(
      (cartProduct) => product.id === cartProduct.id
    );
    return filteredProduct.length > 0 ? "Go To Cart ->" : "Add To Cart";
  };

  // To remove product from wishlist
  const wishlistHandler = async (e, product, setDisable) => {
    setDisable(true);
    e.preventDefault();
    try {
      const response = await removeFromWishlist(authToken, product.id);
      dispatch({
        type: WISHLIST_OPERATION,
        payload: { wishlist: response.wishlist },
      });
    } finally {
      setDisable(false);
    }
  };

  // Based on the button text on card, ADD TO CART or GO TO CART, perform the operation
  const cartHandler = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      if (!authToken) navigate("/login");
      else {
        if (e.target.innerText.toUpperCase() === "ADD TO CART") {
          const response = await addToCart(authToken, product);
          dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
        } else navigate("/cart");
      }
    } catch (e) {
      resetFunction();
    } finally {
      setDisable(false);
    }
  };

  // to check if product is in wishlist
  const isWishlisted = (product) =>
    state.wishlist.find((wishlistProduct) => wishlistProduct.id === product.id);

  // used on product listing page, too like/unlike the product in wishlist
  const toggleWishlist = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      if (!authToken) navigate("/login");
      else {
        const response = isWishlisted(product)
          ? await removeFromWishlist(authToken, product.id)
          : await addToWishlist(authToken, product);

        dispatch({
          type: WISHLIST_OPERATION,
          payload: { wishlist: response.wishlist },
        });
      }
    } catch (e) {
      resetFunction();
    } finally {
      setDisable(false);
    }
  };

  const productWishlistHandler = async (e, product, setDisable) => {
    setDisable(true);
    try {
      if (!authToken) navigate("/login");
      else {
        if (e.target.innerText === "WISHLIST") {
          const wishlistResponse = await addToWishlist(authToken, product);
          dispatch({
            type: WISHLIST_OPERATION,
            payload: { wishlist: wishlistResponse.wishlist },
          });
        } else navigate("/wishlist");
      }
    } catch (e) {
      resetFunction();
    } finally {
      setDisable(false);
    }
  };
  return {
    updateQuantity,
    removeProduct,
    cartWishlistHandler,
    getButtonText,
    wishlistHandler,
    cartHandler,
    isWishlisted,
    toggleWishlist,
    productWishlistHandler,
    resetFunction,
  };
}

export { useOperations };
