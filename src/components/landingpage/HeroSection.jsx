import { Link, useNavigate } from "react-router-dom";
import { useData, useProductsData } from "contexts";
import { CATEGORY_FILTER, CLEAR_FILTERS } from "../../constants";
import "./landingpage.css";

function HeroSection() {
  const { productsData, categoriesData } = useProductsData();
  const trendingItems = productsData
    .filter((item) => item.isBestSeller)
    .slice(0, 4);
  const { dispatch } = useData();
  let navigate = useNavigate();

  const routeChange = (item) => {
    dispatch({
      type: CLEAR_FILTERS,
    });
    dispatch({
      type: CATEGORY_FILTER,
      payload: { category: item.title, value: true },
    });
    navigate("/products");
  };

  return (
    <div className="middle-content">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="heading2 keyword">Bakin Lane</h2>
          <h4 className="heading4 keyword">Every occasion deserves a cake!</h4>
          <h4 className="heading4 text-center">
            Hurry!! Upto 15% OFF on most of the products!!
          </h4>
          <button
            className="btn btn-primary hero-btn"
            onClick={() => {
              dispatch({
                type: CLEAR_FILTERS,
              });
              navigate("/products");
            }}
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
              to={`/products/${product.id}`}
              key={product.id}
              className="no-link-decoration"
            >
              <div className="card card-default zoom" key={product.id}>
                <div className="card-img-container">
                  <img
                    src={product.imageUrl}
                    alt="cake"
                    className="card-img"
                    loading="lazy"
                  />
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
          {categoriesData?.map((item) => (
            <div
              className="card card-text-overlay zoom"
              key={item._id}
              onClick={() => routeChange(item)}
            >
              <div className="card-img-container">
                <img
                  src={item.imageUrl}
                  alt="cake"
                  className="card-img"
                  loading="lazy"
                />
                <div className="card-header-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
