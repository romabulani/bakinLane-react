import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./cart.css";

function CartItem() {
  return (
    <div>
      <div className="cart-items flex-column-center">
        <div className="cart-horizontal-wide">
          <div className="cart-img-and-content">
            <div className="cart-img-container">
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014312/ecommerce/chocolatecake1.webp"
                className="cart-img-horizontal"
                alt="cake"
              />
            </div>
            <div className="cart-content">
              <div className="card-header">Unicorn Cake</div>
              <div className="card-title">Rs 900</div>
              <div className="cart-quantity-buttons">
                <button className="button-increase">+</button>
                <span className="quantity-display">1</span>
                <button className="button-decrease">-</button>
              </div>
            </div>
          </div>
          <div className="cart-buttons">
            <button className="btn btn-link btn-link-default cart-button">
              REMOVE
            </button>
            <button className="btn btn-link btn-link-primary cart-button">
              MOVE TO WISHLIST
            </button>
          </div>
        </div>
      </div>

      <div className="cart-empty-container gray-text flex-column-center">
        <h4>Hey, It feels as light as air!</h4>
        <p className="text-center">
          There is nothing in the cart. Lets add some mouth watering items from
          the wishlist.
        </p>
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="7x"
            className="empty-cart-icon"
          ></FontAwesomeIcon>
        </div>
        <button className="btn btn-outline-primary">
          ADD ITEMS FROM WISHLIST
        </button>
      </div>
    </div>
  );
}

export { CartItem };
