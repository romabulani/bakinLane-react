import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "contexts";
import {
  CATEGORY_FILTER,
  ITEMS_FILTER,
  TOGGLE_STOCK,
  SORT,
  RATING,
  CLEAR_FILTERS,
  PRICERANGE_FILTER,
} from "../../constants";
import "./productlist.css";

function Filters() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { state, dispatch } = useData();

  const dispatchHandler = (typeOfState, typeofAction) => {
    dispatch({ type: typeOfState, payload: typeofAction });
  };

  return (
    <>
      <section
        className={showMobileFilters ? "mobile-filters-form" : "filters"}
      >
        <div className="filter-header">
          {showMobileFilters ? (
            <button
              className="btn-link btn-link-primary btn-no-decoration"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              APPLY
            </button>
          ) : (
            <span>FILTERS</span>
          )}
          <button
            className="btn-link btn-link-primary btn-no-decoration"
            onClick={() => dispatchHandler(CLEAR_FILTERS)}
          >
            CLEAR
          </button>
        </div>
        <hr />

        <div className="filter-price">
          <span className="filter-heading">SORT</span>
          <div>
            <input
              type="radio"
              id="highToLow"
              className="small-text"
              name="priceSort"
              checked={state.sortBy === "highToLow"}
              onChange={() => dispatchHandler(SORT, { sortBy: "highToLow" })}
            />
            <label htmlFor="highToLow" className="gray-text small-text">
              Price High to Low
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="lowToHigh"
              className="small-text"
              name="priceSort"
              checked={state.sortBy === "lowToHigh"}
              onChange={() => dispatchHandler(SORT, { sortBy: "lowToHigh" })}
            />
            <label htmlFor="lowToHigh" className="gray-text small-text">
              Price Low to High
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-rating">
          <span className="filter-heading">RATING</span>
          <div>
            <input
              type="radio"
              id="4andAbove"
              className="small-text"
              name="ratingCategory"
              checked={state.ratingCategory === "4andAbove"}
              onChange={() =>
                dispatchHandler(RATING, { ratingCategory: "4andAbove" })
              }
            />
            <label htmlFor="4andAbove" className="gray-text small-text">
              4{" "}
              <FontAwesomeIcon
                icon="star"
                className="rating-star"
              ></FontAwesomeIcon>{" "}
              and above
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="3andAbove"
              className="small-text"
              name="ratingCategory"
              checked={state.ratingCategory === "3andAbove"}
              onChange={() =>
                dispatchHandler(RATING, { ratingCategory: "3andAbove" })
              }
            />
            <label htmlFor="3andAbove" className="gray-text small-text">
              3{" "}
              <FontAwesomeIcon
                icon="star"
                className="rating-star"
              ></FontAwesomeIcon>{" "}
              and above
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="2andAbove"
              className="small-text"
              name="ratingCategory"
              checked={state.ratingCategory === "2andAbove"}
              onChange={() =>
                dispatchHandler(RATING, { ratingCategory: "2andAbove" })
              }
            />
            <label htmlFor="2andAbove" className="gray-text small-text">
              2{" "}
              <FontAwesomeIcon
                icon="star"
                className="rating-star"
              ></FontAwesomeIcon>{" "}
              and above
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-price-range">
          <span className="filter-heading">PRICE RANGE</span>
          <div>
            <input
              type="checkbox"
              id="under500"
              className="small-text"
              name="priceCategory"
              checked={state.priceRange.under500}
              onChange={() =>
                dispatchHandler(PRICERANGE_FILTER, { priceRange: "under500" })
              }
            />
            <label className="gray-text small-text" htmlFor="under500">
              Under ₹ 500
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="price-500to1000"
              className="small-text"
              name="priceCategory"
              checked={state.priceRange.price500To1000}
              onChange={() =>
                dispatchHandler(PRICERANGE_FILTER, {
                  priceRange: "price500To1000",
                })
              }
            />
            <label className="gray-text small-text" htmlFor="price-500to1000">
              ₹ 500 - ₹ 1000
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="price-1000to1500"
              className="small-text"
              name="priceCategory"
              checked={state.priceRange.price1000To1500}
              onChange={() =>
                dispatchHandler(PRICERANGE_FILTER, {
                  priceRange: "price1000To1500",
                })
              }
            />
            <label className="gray-text small-text" htmlFor="price-1000to1500">
              ₹ 1000 - ₹ 1500
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="price-1500to2000"
              className="small-text"
              name="priceCategory"
              checked={state.priceRange.price1500To2000}
              onChange={() =>
                dispatchHandler(PRICERANGE_FILTER, {
                  priceRange: "price1500To2000",
                })
              }
            />
            <label className="gray-text small-text" htmlFor="price-1500to2000">
              ₹ 1500 - ₹ 2000
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-items">
          <span className="filter-heading">ITEMS</span>
          <div>
            <input
              type="checkbox"
              id="item-cakes"
              className="small-text"
              name="itemCategory"
              checked={state.items.Cake}
              onChange={() => dispatchHandler(ITEMS_FILTER, { item: "Cake" })}
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
              Cakes
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="item-muffins"
              className="small-text"
              name="itemCategory"
              checked={state.items.Muffin}
              onChange={() => dispatchHandler(ITEMS_FILTER, { item: "Muffin" })}
            />
            <label htmlFor="item-muffins" className="gray-text small-text">
              Muffins
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-categories">
          <span className="filter-heading">FLAVORS</span>

          <div>
            <input
              type="checkbox"
              id="category-chocolate"
              className="small-text"
              name="flavorCategory"
              checked={state.flavors.Chocolate}
              onChange={() =>
                dispatchHandler(CATEGORY_FILTER, { category: "Chocolate" })
              }
            />
            <label
              htmlFor="category-chocolate"
              className="gray-text small-text"
            >
              Chocolate
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="category-vanilla"
              className="small-text"
              name="flavorCategory"
              checked={state.flavors.Vanilla}
              onChange={() =>
                dispatchHandler(CATEGORY_FILTER, { category: "Vanilla" })
              }
            />
            <label htmlFor="category-vanilla" className="gray-text small-text">
              Vanilla
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="category-redvelvet"
              className="small-text"
              name="flavorCategory"
              checked={state.flavors["Red Velvet"]}
              onChange={() =>
                dispatchHandler(CATEGORY_FILTER, { category: "Red Velvet" })
              }
            />
            <label
              htmlFor="category-redvelvet"
              className="gray-text small-text"
            >
              Red Velvet
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="category-pineapple"
              className="small-text"
              name="flavorCategory"
              checked={state.flavors.Pineapple}
              onChange={() =>
                dispatchHandler(CATEGORY_FILTER, { category: "Pineapple" })
              }
            />
            <label
              htmlFor="category-pineapple"
              className="gray-text small-text"
            >
              Pineapple
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="category-strawberry"
              className="small-text"
              name="flavorCategory"
              checked={state.flavors.Strawberry}
              onChange={() =>
                dispatchHandler(CATEGORY_FILTER, { category: "Strawberry" })
              }
            />
            <label
              htmlFor="category-strawberry"
              className="gray-text small-text"
            >
              Strawberry
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-items">
          <span className="filter-heading">OTHER</span>
          <div>
            <input
              type="checkbox"
              id="outOfStock"
              className="small-text"
              name="flavorCategory"
              checked={state.isOutOfStock}
              onChange={() => dispatchHandler(TOGGLE_STOCK)}
            />
            <label className="gray-text small-text" htmlFor="outOfStock">
              Include Out of Stock
            </label>
          </div>
        </div>
      </section>

      <div className="mobile-filters">
        <div
          className="mobile-filter-header"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          FILTERS
        </div>
        <div>
          <button
            className="btn-link btn-link-primary btn-no-decoration"
            onClick={() => dispatchHandler(CLEAR_FILTERS)}
          >
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
}

export { Filters };
