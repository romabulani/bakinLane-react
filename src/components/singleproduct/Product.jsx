import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarCheck,
  faCheck,
  faCircleCheck,
  faStar,
  faTag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "contexts";
import { useCartSummary, useOperations } from "hooks";
import React from "react";
import { useParams } from "react-router-dom";
import "./product.css";

function Product() {
  const params = useParams();
  const { data } = useData();
  const { getOriginalPrice } = useCartSummary();
  const product = data.filter((product) => params.productId === product._id)[0];
  const { getButtonText, isWishlisted, cartHandler, productWishlistHandler } =
    useOperations();
  return (
    <div className="middle-content">
      {product && (
        <div className="flex-row-center">
          <div className="product-display">
            <div className="product-img-container">
              {product.isBestSeller && (
                <span className="card-badge card-badge-product">Trending</span>
              )}
              <img src={product.imageUrl} className="product-img" />
            </div>
            <div className="product-details">
              <div className="product-header padding-bottom-5 border-bottom">
                <div className="product-title">{product.title}</div>
                <div className="rating-box margin-2">
                  {product.rating}{" "}
                  <FontAwesomeIcon icon={faStar} className="rating-star" /> |{" "}
                  {product.totalRatings} reviews
                </div>
              </div>
              <div className="product-price ">
                <div className="price-header ">
                  <span>₹ {product.price} </span>
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
                <div className="color-success">Inclusive of all taxes</div>
              </div>
              <div className="product-buttons">
                {product.isOutOfStock ? (
                  <button
                    className="btn btn-outline-primary product-btn"
                    disabled
                  >
                    OUT OF STOCK
                  </button>
                ) : (
                  <button
                    className="btn btn-primary product-btn"
                    onClick={(e) => cartHandler(e, product)}
                  >
                    {`${getButtonText(product).toUpperCase()}`}
                  </button>
                )}
                <button
                  className={`btn product-btn ${
                    product.isOutOfStock ? "btn-default" : "btn-outline-default"
                  } `}
                  onClick={(e) => productWishlistHandler(e, product)}
                >
                  {`${isWishlisted(product) ? "WISHLISTED" : "WISHLIST"}`}
                </button>
              </div>
              <div className="additional-details padding-bottom-5 border-bottom">
                {" "}
                <div className="margin-2">
                  <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                  <span className="margin-sides-2">Order one day prior</span>
                </div>
                {!product.isOutOfStock ? (
                  <div>
                    <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
                    <span className="margin-sides-2"> In stock</span>
                  </div>
                ) : (
                  <div className="margin-2">
                    <FontAwesomeIcon icon={faCalendarXmark}></FontAwesomeIcon>
                    <span> Out of stock</span>
                  </div>
                )}
                <div className="margin-2">
                  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  <span className="margin-sides-2"> Price Includes GST</span>
                </div>
              </div>

              <div className="product-offers ">
                <span className=".margin-2">
                  BEST OFFERS <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
                </span>
                <span className="d-block">
                  The product is already at the best price
                </span>
              </div>
              <div className="additional-details">
                ITEM DETAILS
                {product.item === "Cake" && (
                  <div className="margin-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="color-success"
                    ></FontAwesomeIcon>
                    <span> Can be customised</span>
                  </div>
                )}
                <div className="margin-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="color-success"
                  ></FontAwesomeIcon>
                  <span>{` Weighs ${product.weight}`}</span>
                </div>
                <div className="margin-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="color-success"
                  ></FontAwesomeIcon>
                  <span>
                    {" "}
                    {`Eggless ${product.categoryName} ${product.item}`}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Product };
