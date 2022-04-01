import "./productlist.css";

import { useData } from "contexts";
import { ProductCard } from "./ProductCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filters } from "./Filters";

function Products() {
  const { data, setSearchBarText, state } = useData();

  const { search } = useLocation();
  const [searchedProducts, setSearchedProducts] = useState([]);

  const getsearchedProducts = () => {
    let filteredProducts = [];
    // To get the string after = in URL
    const query = decodeURIComponent(search.split("=")[1]);
    console.log(data, query);
    filteredProducts = data.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedProducts(filteredProducts);
    setSearchBarText("");
  };

  useEffect(() => {
    if (search.length > 0) getsearchedProducts();
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

      {search && searchedProducts.length > 0 && (
        <>
          <div className="flex-column-center search-header">
            {`Search Results for "${state.searchText}" - ${searchedProducts.length} products`}
          </div>
          <div className="product-cards">
            {searchedProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </>
      )}

      {search && searchedProducts.length === 0 && (
        <div className="flex-column-center padding-top-4">
          {`No Search Results found for "${state.searchText}"`}
          <Link
            className="btn btn-primary no-link-decoration inline-flex-center"
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
