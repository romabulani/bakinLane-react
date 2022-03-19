import "./productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth, useData } from "../../contexts";
import { addToCart } from "../../services";
import { useNavigate } from "react-router-dom";
import { getOriginalPrice } from "../../utilities";

function Products() {
  const { data, state, dispatch } = useData();
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const cartHandler = async (e, product) => {
    if (e.target.innerText === "Add To Cart") {
      const response = await addToCart(authToken, product);
      dispatch({ type: "CART_OPERATION", payload: { cart: response.cart } });
    } else {
      navigate("/cart");
    }
  };

  const getButtonText = (product) => {
    const filteredItem = state.cart.filter(
      (cartItem) => product._id === cartItem._id
    );
    if (filteredItem.length > 0) return "Go To Cart";
    else return "Add To Cart";
  };

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
              <button
                className="btn btn-outline-primary card-button"
                onClick={(e) => cartHandler(e, product)}
              >
                {getButtonText(product)}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Products, getOriginalPrice };
