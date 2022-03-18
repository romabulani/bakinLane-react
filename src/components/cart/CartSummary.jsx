import React from "react";
import "./cart.css";

function CartSummary() {
  return (
    <div className="cart-price gray-text">
      <h5 className="heading5">PRICE DETAILS : (2 Items)</h5>
      <div className="price-row">
        <div className="display-left">Total MRP</div>
        <div className="display-right">Rs 1200</div>
      </div>
      <div className="price-row">
        <div className="display-left">Discount</div>
        <div className="display-right">Rs 0</div>
      </div>
      <div className="price-row">
        <div className="display-left">Delivery Charges</div>
        <div className="display-right">Free</div>
      </div>
      <div className="price-row font-bold">
        <div className="display-left">Total Amount</div>
        <div className="display-right">Rs 1200</div>
      </div>
      <button className="btn btn-primary order-button">PLACE ORDER</button>
    </div>
  );
}

export { CartSummary };
