import { createContext, useContext, useReducer } from "react";
import { useProductsData } from "./dataContext";
import {
  funcFlavorCategory,
  funcInStock,
  funcItemCategory,
  funcPriceRangeCategory,
  funcSortHighToLow,
  funcSortLowToHigh,
} from "../utilities/filterFunctions";
import { handleFilters } from "./handleFilters";

const initialState = {
  flavors: {
    Chocolate: false,
    Vanilla: false,
    "Red Velvet": false,
    Pineapple: false,
    Strawberry: false,
  },
  items: {
    Cake: false,
    Muffin: false,
  },
  priceRange: {
    under500: false,
    price500To1000: false,
    price1000To1500: false,
    price1500To2000: false,
  },
  isOutOfStock: true,
  sortBy: "",
};

const filteredData = (state) => {
  let { productsData } = useProductsData();

  if (state.sortBy === "highToLow")
    productsData = funcSortHighToLow(productsData);
  else if (state.sortBy === "lowToHigh")
    productsData = funcSortLowToHigh(productsData);

  if (!state.isOutOfStock) productsData = funcInStock(productsData);

  // cakes and muffins
  const itemCategories = Object.keys(state.items).filter((k) => state.items[k]);
  if (itemCategories.length > 0) {
    productsData = funcItemCategory(productsData, itemCategories);
  }

  //flavor categories
  const flavorCategories = Object.keys(state.flavors).filter(
    (k) => state.flavors[k]
  );
  if (flavorCategories.length > 0) {
    productsData = funcFlavorCategory(productsData, flavorCategories);
  }

  // price range categories
  const priceRangeCategories = Object.keys(state.priceRange).filter(
    (k) => state.priceRange[k]
  );

  if (priceRangeCategories.length > 0) {
    productsData = funcPriceRangeCategory(productsData, priceRangeCategories);
  }
  return productsData;
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleFilters, initialState);

  return (
    <FilterContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
        filteredData: filteredData(state),
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => useContext(FilterContext);

export { FilterProvider, useFilters, initialState };
