import React from "react";
import { Link } from "react-router-dom";

function SummaryItem({ id, title, imageUrl, qty, price }) {
  return (
    <Link to={`/products/${id}`} className="no-link-decoration">
      <div className="cart-horizontal-wide order-card">
        <div className="cart-img-and-content">
          <div className="order-img-container">
            <img src={imageUrl} className="cart-img-horizontal" alt="cake" />
          </div>
          <div className="cart-content">
            <p className="card-title">{title}</p>
            <p className="card-title">₹ {price} / pc</p>
            <span className="card-title">qty : {qty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { SummaryItem };
