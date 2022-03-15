import "./productlist.css";
import { useState } from "react";

function Filters() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      <section
        className={showMobileFilters ? "mobile-filters-form" : "filters"}
      >
        <div className="filter-header">
          {showMobileFilters ? (
            <a
              href="#"
              class="btn-link btn-link-primary"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              APPLY
            </a>
          ) : (
            <span>FILTERS</span>
          )}
          <a href="#" class="btn-link btn-link-primary">
            CLEAR
          </a>
        </div>
        <hr />

        <div className="filter-price">
          <span className="filter-heading">SORT</span>
          <div>
            <input
              type="radio"
              name="sort-price"
              id="highToLow"
              className="small-text"
            />
            <label htmlFor="highToLow" className="gray-text small-text">
              Price High to Low
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="sort-price"
              id="lowToHighlowToHigh"
              className="small-text"
            />
            <label htmlFor="lowToHigh" className="gray-text small-text">
              Price Low to High
            </label>
          </div>
          <hr />
        </div>

        <div className="filter-price-range">
          <span className="filter-heading">PRICE RANGE</span>
          <div>
            <input
              type="checkbox"
              name="price-range"
              id="price-50to500"
              className="small-text"
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
              ₹ 50 - ₹ 500
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="price-range"
              id="price-500to1000"
              className="small-text"
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
              ₹ 500 - ₹ 1000
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="price-range"
              id="price-1000to1500"
              className="small-text"
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
              ₹ 1000 - ₹ 1500
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="price-range"
              id="price-1500to2500"
              className="small-text"
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
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
              name="items"
              id="item-cakes"
              className="small-text"
            />
            <label className="gray-text small-text" htmlFor="item-cakes">
              Cakes
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="items"
              id="item-muffins"
              className="small-text"
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
              name="categories"
              id="category-chocolate"
              className="small-text"
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
              name="categories"
              id="category-vanilla"
              className="small-text"
            />
            <label htmlFor="category-vanilla" className="gray-text small-text">
              Vanilla
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="categories"
              id="category-redvelvet"
              className="small-text"
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
              name="categories"
              id="category-pineapple"
              className="small-text"
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
              name="categories"
              id="category-strawberry"
              className="small-text"
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
              name="other"
              id="outOfStock"
              className="small-text"
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
          <a href="#" class="btn-link btn-link-primary">
            CLEAR
          </a>
        </div>
      </div>
    </>
  );
}

export { Filters };
