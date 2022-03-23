import "./productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
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
        <Link
          to={`/products/${product._id}`}
          key={product._id}
          className="no-link-decoration"
        >
          <div className="card-default-product">
            <div className="card-img-icon-container">
              <div className="card-img-container">
                <img src={product.imageUrl} alt="cake" className="card-img" />
              </div>
              {product.isBestSeller && (
                <span className="card-badge">Trending</span>
              )}
              <FontAwesomeIcon
                icon={faHeart}
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
              {product.rating}{" "}
              <span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="rating-star"
                ></FontAwesomeIcon>
              </span>{" "}
              | {product.totalRatings}
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
          </div>
        </Link>
      ))}
    </div>
  );
}

export { Products };
