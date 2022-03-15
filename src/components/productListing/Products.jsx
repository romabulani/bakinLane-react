import "./productlist.css";
import { products } from "../../backend/db/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
function Products() {
  const productsData = products;
  console.log(productsData);
  return (
    <div className="product-cards">
      {productsData.map((product) => (
        <div className="card-default-product" key={product._id}>
          <div className="card-img-icon-container">
            <div className="card-img-container">
              <img src={product.imageUrl} alt="cake" className="card-img" />
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className="wishlist-icon card-icon"
            ></FontAwesomeIcon>
          </div>
          <div className="card-header">{product.title}</div>
          <div className="card-title">₹ {product.price}</div>
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
            <button className="btn btn-outline-primary card-button">
              ADD TO CART
            </button>

            {/* <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Products };
