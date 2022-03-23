import { Link, useNavigate } from "react-router-dom";
import { categories } from "backend/db/categories";
import { useData, useProductsData } from "contexts";
import "./landingpage.css";
import { CATEGORY_FILTER } from "../../constants";

function HeroSection() {
  const { productsData } = useProductsData();
  const trendingItems = productsData
    .filter((item) => item.isBestSeller)
    .slice(0, 4);
  const feauredCategories = categories;
  const { dispatch } = useData();
  let navigate = useNavigate();

  const routeChange = (item) => {
    dispatch({
      type: CATEGORY_FILTER,
      payload: { category: item.title },
    });
    navigate("/products");
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="heading2 keyword">Bakin Lane</h2>
          <h4 className="heading4 keyword">Every occasion deserves a cake!</h4>
          <h4 className="heading4 text-center">
            Hurry!! Upto 30% OFF on most of the products!!
          </h4>
          <button
            className="btn btn-primary hero-btn"
            onClick={() => navigate("/products")}
          >
            BUY NOW
          </button>
        </div>
        <div className="hero-img">
          <img
            src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1647243013/ecommerce/heroimg.webp"
            alt="hero-img"
          />
        </div>
      </div>

      {/* CARDS SECTION         */}
      <div className="container-main">
        <h3 className="align-center heading3">Trending</h3>
        <div className="cards">
          {trendingItems.map((product) => (
            <Link
              to={`/products/${product._id}`}
              key={product._id}
              className="no-link-decoration"
            >
              <div className="card card-default zoom" key={product._id}>
                <div className="card-img-container">
                  <img src={product.imageUrl} alt="cake" className="card-img" />
                </div>
                <div className="card-header">{product.title}</div>
                <div className="card-title">₹ {product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-main">
        <h3 className="align-center heading3">Featured Categories</h3>
        <div className="cards">
          {feauredCategories.map((item) => (
            <div
              className="card card-text-overlay zoom"
              key={item._id}
              onClick={() => routeChange(item)}
            >
              <div className="card-img-container">
                <img src={item.imageUrl} alt="cake" className="card-img" />
                <div className="card-header-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { HeroSection };
