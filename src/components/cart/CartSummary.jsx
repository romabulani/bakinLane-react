import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "contexts";
import { useCartSummary } from "hooks";
import "./cart.css";
import { CartPriceTable } from "./CartPriceTable";
import { Link } from "react-router-dom";

function CartSummary() {
  const { coupon, setCoupon } = useData();
  const [showCouponModal, setShowCouponModal] = useState(false);
  const { getTotalPrice } = useCartSummary();

  const coupons = [
    {
      id: 1,
      title: "SEASONAL OFFER",
      description: "Save ₹100 on orders above ₹1000",
      discount: 100,
      minimumPrice: 1000,
    },
    {
      id: 2,
      title: "FESITVE OFFER",
      description: "Save ₹200 on orders above ₹1500",
      discount: 200,
      minimumPrice: 1500,
    },
  ];

  const couponDisabled = (eachCoupon) =>
    getTotalPrice() <= eachCoupon.minimumPrice;

  return (
    <div className="cart-price gray-text">
      <h5 className="heading5">COUPONS</h5>
      <div>
        <button
          className="btn btn-outline-default coupon-button"
          onClick={() => setShowCouponModal(true)}
        >
          <FontAwesomeIcon icon="tag" /> APPLY COUPON
        </button>
      </div>
      <CartPriceTable />
      <Link
        className="btn btn-primary order-button no-decoration inline-flex"
        to="/checkout"
      >
        CHECKOUT
      </Link>
      {showCouponModal && (
        <div className="address-modal-container">
          <div className="coupon-modal flex-column-center">
            <h4>ADD COUPON</h4>
            {getTotalPrice() <= 1000 && (
              <p>No coupons available for the current cart price.</p>
            )}
            <button
              className="btn-no-decoration btn-close btn-close-coupon cursor-pointer"
              onClick={() => setShowCouponModal(false)}
            >
              <FontAwesomeIcon icon="close" />
            </button>
            {coupons.map((eachCoupon) => (
              <div className="coupon-container" key={eachCoupon.id}>
                <input
                  type="checkbox"
                  id={eachCoupon.id}
                  name="coupon"
                  className={
                    couponDisabled(eachCoupon) ? "diabled" : "cursor-pointer"
                  }
                  checked={coupon && coupon.id === eachCoupon.id}
                  disabled={couponDisabled(eachCoupon)}
                  onChange={() =>
                    coupon && coupon.id === eachCoupon.id
                      ? setCoupon({})
                      : setCoupon(eachCoupon)
                  }
                />
                <label
                  htmlFor={eachCoupon.id}
                  className={
                    couponDisabled(eachCoupon) ? "disabled" : "cursor-pointer"
                  }
                >
                  <span className="padding-left-5">{eachCoupon.title}</span>
                  <p>{eachCoupon.description}</p>
                </label>
              </div>
            ))}
            <button
              className="btn btn-primary btn-auth btn-coupon"
              onClick={() => setShowCouponModal(false)}
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { CartSummary };
