import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartSummary, useOperations } from "hooks";
import { useData } from "contexts";
import "./cart.css";

function CartItem() {
  const { state } = useData();
  const navigate = useNavigate();
  const { updateQuantity, removeProduct, cartWishlistHandler } =
    useOperations();
  const { getOriginalPrice } = useCartSummary();
  const [disable, setDisable] = useState(false);
  return (
    <div>
      {[...state.cart].reverse().map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="no-link-decoration"
        >
          <div className="cart-items flex-column-center" key={product.id}>
            <div className="cart-horizontal-wide">
              <div className="cart-img-and-content">
                <div className="cart-img-container">
                  <img
                    src={product.imageUrl}
                    className="cart-img-horizontal"
                    alt="cake"
                  />
                </div>
                <div className="cart-content">
                  <div className="card-header">{product.title}</div>
                  <div className="card-title">
                    ₹ {product.qty * product.price}
                    {product.offerPercentage > 0 && (
                      <>
                        <span className="strikethrough card-title">
                          {" "}
                          ₹
                          {product.qty *
                            getOriginalPrice(
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
                  <div className="cart-quantity-buttons">
                    <button
                      className="button-decrease"
                      disabled={disable}
                      onClick={(e) =>
                        updateQuantity(e, product, "decrement", setDisable)
                      }
                    >
                      -
                    </button>
                    <span className="quantity-display">{product.qty}</span>
                    <button
                      className="button-increase"
                      disabled={disable}
                      onClick={(e) =>
                        updateQuantity(e, product, "increment", setDisable)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-buttons">
                <button
                  className="btn btn-link btn-link-default cart-button"
                  disabled={disable}
                  onClick={(e) => removeProduct(e, product, setDisable)}
                >
                  REMOVE
                </button>
                <button
                  className="btn btn-link btn-link-primary cart-button"
                  disabled={disable}
                  onClick={(e) => cartWishlistHandler(e, product, setDisable)}
                >
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {state.cart.length === 0 && (
        <div className="cart-empty-container gray-text flex-column-center">
          <h4>Hey, It feels as light as air!</h4>
          <p className="text-center">
            There is nothing in the cart. Lets add some mouth watering items
            from the wishlist.
          </p>
          <div>
            <FontAwesomeIcon
              icon="cart-shopping"
              size="7x"
              className="empty-cart-icon"
            ></FontAwesomeIcon>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/wishlist")}
          >
            ADD FROM WISHLIST
          </button>
        </div>
      )}
    </div>
  );
}

export { CartItem };
