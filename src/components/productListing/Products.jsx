import "./productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../contexts";
function Products() {
  const { data } = useData();
  function getOriginalPrice(price, offerPercentage) {
    return Math.round(
      Number(price) + (Number(offerPercentage) / 100) * Number(price)
    );
  }
  return (
    <div className="product-cards">
      {data.map((product) => (
        <div className="card-default-product" key={product._id}>
          <div className="card-img-icon-container">
            <div className="card-img-container">
              <img src={product.imageUrl} alt="cake" className="card-img" />
            </div>
            {product.isBestSeller && (
              <span className="card-badge">Trending</span>
            )}
            <FontAwesomeIcon
              icon={faHeart}
              className="wishlist-icon card-icon"
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
          <div className="card-buttons">
            {product.isOutOfStock ? (
              <button
                className="btn btn-outline-primary card-button btn-outOfStock"
                disabled
              >
                OUT OF STOCK
              </button>
            ) : (
              <button className="btn btn-outline-primary card-button">
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Products };
