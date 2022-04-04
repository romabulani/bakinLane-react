import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-column-center middle-content">
      <img
        className="img-responsive"
        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1649009736/ecommerce/404Image_s8lokh.webp"
      />
      <h4>We couldn't find any matches!</h4>
      <div className="flex-row-center">
        <Link
          to="/"
          className="btn btn-outline-primary inline-flex no-decoration"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="btn btn-primary inline-flex no-decoration"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export { NotFound };
