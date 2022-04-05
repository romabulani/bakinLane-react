import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { useData } from "contexts";
import { ProductCard } from "./ProductCard";
import "./productlist.css";

function Products() {
  const { data, setSearchBarText } = useData();
  const { search } = useLocation();
  const [query, setQuery] = useState("");

  const getsearchedProducts = () =>
    data.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    if (search.length > 0) {
      setQuery(decodeURIComponent(search.split("=")[1]));
      setSearchBarText("");
    }
  }, [search]);

  return (
    <>
      {!search && (
        <div className="filters-and-products ">
          <Filters className="filters" />
          <div className="product-cards">
            {data.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}

      {search && getsearchedProducts().length > 0 && (
        <>
          <div className="flex-column-center search-header">
            {`Search Results for "${query}" - ${
              getsearchedProducts().length
            } products`}
          </div>
          <div className="product-cards">
            {getsearchedProducts().map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </>
      )}

      {search && getsearchedProducts().length === 0 && (
        <div className="flex-column-center padding-top-4">
          {`No Search Results found for "${query}"`}
          <Link
            className="btn btn-primary no-decoration inline-flex-center"
            to="/products"
          >
            ADD ITEMS
          </Link>
        </div>
      )}
    </>
  );
}

export { Products };
