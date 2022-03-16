import { Link } from "react-router-dom";
import "./landingpage.css";

function HeroSection() {
  const trendingItems = [
    {
      title: "2 Tier Strawberry Wedding Cake",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647015328/ecommerce/strawberrycake3.webp",
      price: 2000,
    },
    {
      title: "Cherry Decorated Chocolate Cake",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014777/ecommerce/chocolatecake3.webp",
      price: 750,
    },
    {
      title: "Ferrero Rocher Chocolate Muffin",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatemuffin1.webp",
      price: 100,
    },

    {
      title: "3 Tier Strawberry Cake",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647015328/ecommerce/strawberrycake2.webp",
      price: 1500,
    },
  ];
  const feauredCategories = [
    {
      title: "Chocolate",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/chocolate.webp",
    },
    {
      title: "Strawberry",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262272/ecommerce/strawberry.webp",
    },
    {
      title: "Pineapple",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/pineapple.webp",
    },
    {
      title: "Vanilla",
      imageUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/vanilla.webp",
    },
  ];
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="heading2 keyword">Bakin Lane</h2>
          <h4 className="heading4 keyword">Every occasion deserves a cake!</h4>
          <h4 className="heading4 text-center">
            Hurry!! Upto 30% OFF on most of the products!!
          </h4>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary hero-btn">BUY NOW</button>
          </Link>
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
          {trendingItems.map((item) => (
            <div className="card card-default zoom">
              <div className="card-img-container">
                <img src={item.imageUrl} alt="cake" className="card-img" />
              </div>
              <div className="card-header">{item.title}</div>
              <div className="card-title">₹ {item.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-main">
        <h3 className="align-center heading3">Featured Categories</h3>
        <div className="cards">
          {feauredCategories.map((item) => (
            <div className="card card-text-overlay zoom">
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
