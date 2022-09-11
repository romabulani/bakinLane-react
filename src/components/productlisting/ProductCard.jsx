import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartSummary, useOperations } from "hooks";

function ProductCard({ product }) {
  const { getButtonText, cartHandler, isWishlisted, toggleWishlist } =
    useOperations();
  const { getOriginalPrice } = useCartSummary();
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);

  return (
    <div className="card-default-product" key={product.id}>
      <Link
        to={`/products/${product.id}`}
        className="no-link-decoration"
        onClick={(e) => {
          if (wishlistLoader || cartLoader) e.preventDefault();
        }}
      >
        <div className="card-img-icon-container">
          <div className="card-img-container">
            <img
              src={product.imageUrl}
              alt="cake"
              className="card-img"
              loading="lazy"
            />
          </div>
          {product.isBestSeller && <span className="card-badge">Trending</span>}
          <FontAwesomeIcon
            icon="heart"
            className={`card-icon ${
              isWishlisted(product) ? "filled-wishlist-icon" : "wishlist-icon"
            }`}
            style={{ pointerEvents: wishlistLoader ? "none" : "auto" }}
            onClick={(e) => toggleWishlist(e, product, setWishlistLoader)}
          />
        </div>
        <div className="card-header">{product.title}</div>
        <div className="card-title">
          ₹ {product.price}
          {product.offerPercentage > 0 && (
            <>
              <span className="strikethrough card-title">
                {" "}
                ₹{getOriginalPrice(product.price, product.offerPercentage)}{" "}
              </span>
              <span className="card-title offer">
                ({product.offerPercentage}% OFF){" "}
              </span>
            </>
          )}
        </div>
        <div className="card-content">
          <span>{product.rating} </span>
          <span>
            <FontAwesomeIcon icon="star" className="rating-star" />
          </span>{" "}
          <span>| {product.totalRatings}</span>
        </div>
        <div className="card-buttons product-card-buttons">
          {product.isOutOfStock ? (
            <button
              className="btn btn-outline-primary card-button btn-outOfStock"
              disabled
            >
              OUT OF STOCK
            </button>
          ) : (
            <button
              className="btn btn-outline-primary card-button"
              disabled={cartLoader}
              onClick={(e) => cartHandler(e, product, setCartLoader)}
            >
              {getButtonText(product)}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}

export { ProductCard };
