import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import {
  updateQuantityInCart,
  removeFromCart,
  addToWishlist,
} from "../../services";
import { getOriginalPrice } from "../productListing/Products";
import "./cart.css";

function CartItem() {
  const { state, dispatch } = useData();
  const { authToken } = useAuth();
  const navigate = useNavigate();
  const updateQuantity = async (item, type) => {
    let response;
    if (type === "increment")
      response = await updateQuantityInCart(item._id, authToken, type);
    else {
      if (item.qty === 1) response = await removeFromCart(item._id, authToken);
      else response = await updateQuantityInCart(item._id, authToken, type);
    }
    dispatch({ type: "CART_OPERATION", payload: { cart: response.cart } });
  };

  const removeItem = async (item) => {
    const response = await removeFromCart(item._id, authToken);
    dispatch({ type: "CART_OPERATION", payload: { cart: response.cart } });
  };

  const cartWishlistHandler = async (item) => {
    const isWishlisted = (item) =>
      state.wishlist.find((wishlistItem) => item._id === wishlistItem._id);
    if (!isWishlisted(item)) {
      const wishlistResponse = await addToWishlist(authToken, item);
      dispatch({
        type: "WISHLIST_OPERATION",
        payload: { wishlist: wishlistResponse.wishlist },
      });
    }
    const cartResponse = await removeFromCart(item._id, authToken);
    dispatch({
      type: "CART_OPERATION",
      payload: { cart: cartResponse.cart },
    });
  };
  return (
    <div>
      {[...state.cart].reverse().map(
        (item) =>
          item && (
            <div className="cart-items flex-column-center" key={item.id}>
              <div className="cart-horizontal-wide">
                <div className="cart-img-and-content">
                  <div className="cart-img-container">
                    <img
                      src={item.imageUrl}
                      className="cart-img-horizontal"
                      alt="cake"
                    />
                  </div>
                  <div className="cart-content">
                    <div className="card-header">{item.title}</div>
                    <div className="card-title">
                      ₹ {item.qty * item.price}
                      {item.offerPercentage > 0 && (
                        <>
                          <span className="strikethrough card-title">
                            {" "}
                            ₹
                            {item.qty *
                              getOriginalPrice(
                                item.price,
                                item.offerPercentage
                              )}{" "}
                          </span>
                          <span className="card-title offer">
                            ({item.offerPercentage}% OFF){" "}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="cart-quantity-buttons">
                      <button
                        className="button-decrease"
                        onClick={() => updateQuantity(item, "decrement")}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.qty}</span>
                      <button
                        className="button-increase"
                        onClick={() => updateQuantity(item, "increment")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cart-buttons">
                  <button
                    className="btn btn-link btn-link-default cart-button"
                    onClick={() => removeItem(item)}
                  >
                    REMOVE
                  </button>
                  <button
                    className="btn btn-link btn-link-primary cart-button"
                    onClick={() => cartWishlistHandler(item)}
                  >
                    MOVE TO WISHLIST
                  </button>
                </div>
              </div>
            </div>
          )
      )}

      {state.cart.length === 0 && (
        <div className="cart-empty-container gray-text flex-column-center">
          <h4>Hey, It feels as light as air!</h4>
          <p className="text-center">
            There is nothing in the cart. Lets add some mouth watering items
            from the wishlist.
          </p>
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="7x"
              className="empty-cart-icon"
            ></FontAwesomeIcon>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/wishlist")}
          >
            ADD ITEMS FROM WISHLIST
          </button>
        </div>
      )}
    </div>
  );
}

export { CartItem };
