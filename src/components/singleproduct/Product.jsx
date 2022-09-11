import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth, useProductsData } from "contexts";
import { useCartSummary, useOperations } from "hooks";
import "./product.css";

function Product() {
  const params = useParams();
  const { productsData } = useProductsData();
  const { getOriginalPrice } = useCartSummary();
  const { authToken } = useAuth();
  const product = productsData.filter(
    (product) => params.productId === product.id
  )[0];
  const { getButtonText, isWishlisted, cartHandler, productWishlistHandler } =
    useOperations();
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);

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
                  <FontAwesomeIcon icon="star" className="rating-star" /> |{" "}
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
                    className="btn btn-outline-primary product-btn disabled"
                    disabled
                  >
                    OUT OF STOCK
                  </button>
                ) : (
                  <button
                    className="btn btn-primary product-btn"
                    onClick={(e) =>
                      authToken
                        ? cartHandler(e, product, setCartLoader)
                        : toast.info("Please login to continue!")
                    }
                    disabled={cartLoader}
                  >
                    {`${getButtonText(product).toUpperCase()}`}
                  </button>
                )}
                <button
                  className={`btn product-btn ${
                    product.isOutOfStock ? "btn-default" : "btn-outline-default"
                  } `}
                  disabled={wishlistLoader}
                  onClick={(e) =>
                    authToken
                      ? productWishlistHandler(e, product, setWishlistLoader)
                      : toast.info("Please login to continue!")
                  }
                >
                  {`${isWishlisted(product) ? "WISHLISTED" : "WISHLIST"}`}
                </button>
              </div>
              <div className="additional-details padding-bottom-5 border-bottom">
                {" "}
                <div className="margin-2">
                  <FontAwesomeIcon icon="truck"></FontAwesomeIcon>
                  <span className="margin-sides-2">Order one day prior</span>
                </div>
                {!product.isOutOfStock ? (
                  <div>
                    <FontAwesomeIcon icon="calendar-check"></FontAwesomeIcon>
                    <span className="margin-sides-2"> In stock</span>
                  </div>
                ) : (
                  <div className="margin-2">
                    <FontAwesomeIcon icon="calendar-xmark"></FontAwesomeIcon>
                    <span> Out of stock</span>
                  </div>
                )}
                <div className="margin-2">
                  <FontAwesomeIcon icon="circle-check"></FontAwesomeIcon>
                  <span className="margin-sides-2"> Price Includes GST</span>
                </div>
              </div>

              <div className="product-offers ">
                <span className=".margin-2">
                  BEST OFFERS <FontAwesomeIcon icon="tag"></FontAwesomeIcon>
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
                      icon="check"
                      className="color-success"
                    ></FontAwesomeIcon>
                    <span> Can be customised</span>
                  </div>
                )}
                <div className="margin-2">
                  <FontAwesomeIcon
                    icon="check"
                    className="color-success"
                  ></FontAwesomeIcon>
                  <span>{` Weighs ${product.weight}`}</span>
                </div>
                <div className="margin-2">
                  <FontAwesomeIcon
                    icon="check"
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
