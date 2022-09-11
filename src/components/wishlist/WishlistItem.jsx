import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "contexts";
import { useCartSummary, useOperations } from "hooks";
import { CLEAR_FILTERS } from "../../constants";
import "./wishlist.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function WishlistItem() {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const { getOriginalPrice } = useCartSummary();
  const { getButtonText, wishlistHandler, cartHandler } = useOperations();
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <div className="flex-row-center">
        {[...state.wishlist].reverse().map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="no-link-decoration"
          >
            <div className="card card-default wishlist-card" key={product.id}>
              <div className="card-img-container wishlist-img-container">
                <img src={product.imageUrl} alt="cake" className="card-img" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="wishlist-close-btn gray-text"
                  onClick={(e) => wishlistHandler(e, product, setDisable)}
                ></FontAwesomeIcon>
              </div>
              <div className="card-header">{product.title}</div>
              <div className="card-title">
                ₹ {product.price}
                {product.offerPercentage > 0 && (
                  <>
                    <span className="strikethrough card-title">
                      {" "}
                      ₹
                      {getOriginalPrice(
                        product.price,
                        product.offerPercentage
                      )}{" "}
                    </span>
                    <span className="card-title offer">
                      ({product.offerPercentage}% OFF){" "}
                    </span>
                  </>
                )}
              </div>
              <div className="wishlist-card-buttons">
                {product.isOutOfStock ? (
                  <button
                    className="btn btn-outline-primary wishlist-card-button disabled"
                    disabled
                  >
                    OUT OF STOCK
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-primary wishlist-card-button"
                    onClick={(e) => cartHandler(e, product, setDisable)}
                    disabled={disable}
                  >
                    {getButtonText(product)}
                  </button>
                )}
              </div>
            </div>
          </Link>
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
            onClick={() => {
              dispatch({ type: CLEAR_FILTERS });
              navigate("/products");
            }}
          >
            ADD ITEMS
          </button>
        </div>
      )}
    </div>
  );
}

export { WishlistItem };
