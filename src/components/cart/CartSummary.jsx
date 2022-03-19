import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useData } from "../../contexts";
import { getDiscount, getMRP, getTotalPrice } from "../../utilities";
import "./cart.css";

function CartSummary() {
  const { state } = useData();

  return (
    <div className="cart-price gray-text">
      <h5 className="heading5">COUPONS</h5>
      <div>
        <button className="btn btn-outline-default coupon-button">
          <FontAwesomeIcon icon={faTag} /> APPLY COUPON
        </button>
      </div>
      <h5 className="heading5">PRICE DETAILS : ({state.cart.length} Items)</h5>
      <div className="price-row">
        <div className="display-left">Total MRP</div>
        <div className="display-right">₹ {getMRP(state.cart)}</div>
      </div>
      <div className="price-row">
        <div className="display-left">Discount</div>
        <div className="display-right">₹ {getDiscount(state.cart)}</div>
      </div>
      <div className="price-row">
        <div className="display-left">Delivery Charges</div>
        <div className="display-right">
          <span className="strikethrough">₹ 99</span>
          <span className="keyword">FREE</span>
        </div>
      </div>
      <div className="price-row font-bold">
        <div className="display-left">Total Amount</div>
        <div className="display-right">₹ {getTotalPrice(state.cart)}</div>
      </div>
      <button className="btn btn-primary order-button">PLACE ORDER</button>
    </div>
  );
}

export { CartSummary };
