import { useLocation } from "react-router-dom";
import { useData } from "contexts";
import { useCartSummary } from "hooks";

function CartPriceTable() {
  const { getTotalPrice, getMRP, getDiscount } = useCartSummary();
  const { state, coupon } = useData();
  const location = useLocation();
  const broadLeftMargin = location.pathname === "/checkout";

  return (
    <div className="cart-price gray-text">
      <h5 className="heading5">PRICE DETAILS : ({state.cart.length} Items)</h5>
      <div className="price-row">
        <div
          className={broadLeftMargin ? "display-left-large" : "display-left"}
        >
          Total MRP
        </div>
        <div className="display-right">₹ {getMRP()}</div>
      </div>
      <div className="price-row">
        <div
          className={broadLeftMargin ? "display-left-large" : "display-left"}
        >
          Discount
        </div>
        <div className="display-right">₹ {getDiscount()}</div>
      </div>
      {coupon.discount && (
        <div className="price-row">
          <div
            className={broadLeftMargin ? "display-left-large" : "display-left"}
          >
            Coupon Discount
          </div>
          <div className="display-right">₹ {coupon.discount}</div>
        </div>
      )}
      <div className="price-row">
        <div
          className={broadLeftMargin ? "display-left-large" : "display-left"}
        >
          Delivery Charges
        </div>
        <div className="display-right">
          <span className="strikethrough">₹ 99</span>
          <span className="keyword">{`  FREE`}</span>
        </div>
      </div>
      <div className="price-row font-bold">
        <div
          className={broadLeftMargin ? "display-left-large" : "display-left"}
        >
          Total Amount
        </div>
        <div className="display-right">₹ {getTotalPrice()}</div>
      </div>
    </div>
  );
}

export { CartPriceTable };
