import "./productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartSummary, useOperations } from "hooks";
import { useData } from "contexts";
import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const { data } = useData();
  const { getButtonText, cartHandler, isWishlisted, toggleWishlist } =
    useOperations();
  const { getOriginalPrice } = useCartSummary();
  const [wishlistLoader, setWishlistLoader] = useState(false);

  return (
    <div className="product-cards">
      {data.map((product) => (
        <div className="card-default-product" key={product._id}>
          <Link
            to={`/products/${product._id}`}
            className="no-link-decoration"
            onClick={(e) => {
              if (wishlistLoader) e.preventDefault();
            }}
          >
            <div className="card-img-icon-container">
              <div className="card-img-container">
                <img src={product.imageUrl} alt="cake" className="card-img" />
              </div>
              {product.isBestSeller && (
                <span className="card-badge">Trending</span>
              )}
              <FontAwesomeIcon
                icon="heart"
                className={`card-icon ${
                  isWishlisted(product)
                    ? "filled-wishlist-icon"
                    : "wishlist-icon"
                }`}
                style={{ pointerEvents: wishlistLoader ? "none" : "auto" }}
                onClick={(e) => toggleWishlist(e, product, setWishlistLoader)}
              ></FontAwesomeIcon>
            </div>
            <div className="card-header">{product.title}</div>
            <div className="card-title">
              ₹ {product.price}
              {product.offerPercentage > 0 && (
                <>
                  <span className="strikethrough card-title">
                    {" "}
                    ₹{getOriginalPrice(
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
            <div className="card-content">
              <span>{product.rating} </span>
              <span>
                <FontAwesomeIcon
                  icon="star"
                  className="rating-star"
                ></FontAwesomeIcon>
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
                  onClick={(e) => cartHandler(e, product)}
                >
                  {getButtonText(product)}
                </button>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export { Products };
