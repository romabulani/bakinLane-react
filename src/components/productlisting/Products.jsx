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
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [numOfPages, setNumOfPages] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  const getSearchedProducts = (query) => {
    const result = data.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedProducts(result);
    setProductsPerPage(10);
    setNumOfPages([
      ...Array(Math.ceil(result.length / 10))
        .fill()
        .map((v, i) => i),
    ]);
  };

  useEffect(() => {
    if (search.length > 0) {
      setQuery(decodeURIComponent(search.split("=")[1]));
      setSearchBarText("");
      getSearchedProducts(decodeURIComponent(search.split("=")[1]));
    } else {
      setNumOfPages([
        ...Array(Math.ceil(data.length / 8))
          .fill()
          .map((v, i) => i),
      ]);
      setProductsPerPage(8);
    }
    setCurrPage(0);
  }, [data, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  return (
    <>
      {!search && (
        <div className="filters-and-products ">
          <Filters className="filters" />
          <div className="product-cards">
            {data
              .slice(
                currPage * productsPerPage,
                currPage * productsPerPage + productsPerPage
              )
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      )}

      {search && searchedProducts.length > 0 && (
        <>
          <div className="flex-column-center search-header">
            {`Search Results for "${query}" - ${searchedProducts.length} products`}
          </div>
          <div className="product-cards search-product-cards">
            {searchedProducts
              .slice(
                currPage * productsPerPage,
                currPage * productsPerPage + productsPerPage
              )
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </>
      )}

      {search && searchedProducts.length === 0 && (
        <div className="flex-column-center padding-top-4">
          {`No Search Results found for "${query}"`}
          <Link
            className="btn btn-primary no-decoration inline-flex-center"
            to="/products"
          >
            BROWSE
          </Link>
        </div>
      )}

      {!(search && searchedProducts.length === 0) && (
        <div className="flex-row-center">
          <button
            className={`btn btn-primary page-btn ${
              currPage === 0 ? "disabled-cursor" : ""
            }`}
            onClick={() =>
              currPage !== 0 && setCurrPage((currPage) => currPage - 1)
            }
          >
            Prev
          </button>
          {numOfPages.map((page, index) => (
            <span
              role="button"
              key={index}
              className={`page-number btn ${
                currPage === index ? "btn-primary" : ""
              }`}
              onClick={() => setCurrPage(index)}
            >
              {page + 1}
            </span>
          ))}
          <button
            className={`btn btn-primary page-btn ${
              currPage === numOfPages.length - 1 ? "disabled-cursor" : ""
            }`}
            onClick={() =>
              currPage !== numOfPages.length - 1 &&
              setCurrPage((currPage) => currPage + 1)
            }
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export { Products };
