import React from "react";
import "./wishlist.css";
import { useAuth, useData } from "../../contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { getOriginalPrice } from "../../utilities";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { addToCart, removeFromWishlist } from "../../services";

function WishlistItem() {
  const { state, dispatch } = useData();
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const getButtonText = (item) => {
    const filteredItem = state.cart.filter(
      (cartItem) => item._id === cartItem._id
    );
    filteredItem.length > 0 ? "Go To Cart ->" : "Add To Cart";
  };

  const cartHandler = async (e, item) => {
    if (e.target.innerText === "Add To Cart") {
      const response = await addToCart(authToken, item);
      dispatch({ type: "CART_OPERATION", payload: { cart: response.cart } });
    } else navigate("/cart");
  };

  const wishlistHandler = async (item) => {
    const response = await removeFromWishlist(item._id, authToken);
    dispatch({
      type: "WISHLIST_OPERATION",
      payload: { wishlist: response.wishlist },
    });
  };

  return (
    <div>
      <div className="flex-row-center">
        {state.wishlist.length > 0 &&
          [...state.wishlist].reverse().map((item) => (
            <div className="card card-default wishlist-card" key={item._id}>
              <div className="card-img-container wishlist-img-container">
                <img src={item.imageUrl} alt="cake" className="card-img" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="wishlist-close-btn gray-text"
                  onClick={() => wishlistHandler(item)}
                ></FontAwesomeIcon>
              </div>
              <div className="card-header">{item.title}</div>
              <div className="card-title">
                ₹ {item.price}
                {item.offerPercentage > 0 && (
                  <>
                    <span className="strikethrough card-title">
                      {" "}
                      ₹{getOriginalPrice(item.price, item.offerPercentage)}{" "}
                    </span>
                    <span className="card-title offer">
                      ({item.offerPercentage}% OFF){" "}
                    </span>
                  </>
                )}
              </div>
              <div className="wishlist-card-buttons">
                <button
                  className="btn btn-outline-primary wishlist-card-button"
                  onClick={(e) => cartHandler(e, item)}
                >
                  {getButtonText(item)}
                </button>
              </div>
            </div>
          ))}
      </div>

      {state.wishlist.length === 0 && (
        <div className="wishlist-empty-container flex-column-center">
          <h4 className="gray-text">YOUR WISHLIST IS EMPTY</h4>
          <p className="text-center gray-text">
            Add delicious items that you like to your wishlist. Review them
            anytime and easily move them to the cart.
          </p>
          <div>
            <img
              src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1647243013/ecommerce/wishlistempty.webp"
              alt="cake and muffins"
            />
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/products")}
          >
            BUY NOW
          </button>
        </div>
      )}
    </div>
  );
}

export { WishlistItem };
