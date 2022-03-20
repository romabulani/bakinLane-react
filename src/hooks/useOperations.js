//This file contains all the cart and wishlist operations using custom hooks

import { WISHLIST_OPERATION, CART_OPERATION } from "../constants";
import { useAuth, useData } from "contexts";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  updateQuantityInCart,
} from "services";

function useOperations() {
  const { state, dispatch } = useData();
  const { authToken } = useAuth();
  const navigate = useNavigate();

  // To increment or decrement cart quantity
  const updateQuantity = async (product, type) => {
    let response;
    if (type === "increment")
      response = await updateQuantityInCart(authToken, product._id, type);
    else {
      if (product.qty === 1)
        response = await removeFromCart(authToken, product._id);
      else response = await updateQuantityInCart(authToken, product._id, type);
    }
    dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
  };

  //To remove product from cart
  const removeProduct = async (product) => {
    const response = await removeFromCart(authToken, product._id);
    dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
  };

  // For MOVE TO WISHLIST functionality on cart page, if its not present in wishlist, add it, then remove from cart
  const cartWishlistHandler = async (product) => {
    if (!isWishlisted(product)) {
      const wishlistResponse = await addToWishlist(authToken, product);
      dispatch({
        type: WISHLIST_OPERATION,
        payload: { wishlist: wishlistResponse.wishlist },
      });
    }
    const cartResponse = await removeFromCart(authToken, product._id);
    dispatch({
      type: CART_OPERATION,
      payload: { cart: cartResponse.cart },
    });
  };

  // Button Text for displaying based on the product is present in cart or not
  const getButtonText = (product) => {
    const filteredProduct = state.cart.filter(
      (cartProduct) => product._id === cartProduct._id
    );
    return filteredProduct.length > 0 ? "Go To Cart ->" : "Add To Cart";
  };

  // To remove product from wishlist
  const wishlistHandler = async (product) => {
    const response = await removeFromWishlist(authToken, product._id);
    dispatch({
      type: WISHLIST_OPERATION,
      payload: { wishlist: response.wishlist },
    });
  };

  // Based on the button text on card, ADD TO CART or GO TO CART, perform the operation
  const cartHandler = async (e, product) => {
    if (!authToken) navigate("/login");
    else {
      if (e.target.innerText === "Add To Cart") {
        const response = await addToCart(authToken, product);
        dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
      } else navigate("/cart");
    }
  };

  // to check if product is in wishlist
  const isWishlisted = (product) =>
    state.wishlist.find(
      (wishlistProduct) => wishlistProduct._id === product._id
    );

  // used on product listing page, too like/unlike the product in wishlist
  const toggleWishlist = async (product) => {
    if (!authToken) navigate("/login");
    else {
      const response = isWishlisted(product)
        ? await removeFromWishlist(authToken, product._id)
        : await addToWishlist(authToken, product);
      dispatch({
        type: WISHLIST_OPERATION,
        payload: { wishlist: response.wishlist },
      });
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
  };
}

export { useOperations };
