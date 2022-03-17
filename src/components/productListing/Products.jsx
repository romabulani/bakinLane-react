import "./productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useFilters } from "../../contexts";
function Products() {
  const { filteredData } = useFilters();
  return (
    <div className="product-cards">
      {filteredData.map((product) => (
        <div className="card-default-product" key={product._id}>
          <div className="card-img-icon-container">
            <div className="card-img-container">
              <img src={product.imageUrl} alt="cake" className="card-img" />
            </div>
            {product.isBestSeller && <span class="card-badge">Trending</span>}
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
                  ₹
                  {Math.round(
                    Number(product.price) +
                      (Number(product.offerPercentage) / 100) *
                        Number(product.price)
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
