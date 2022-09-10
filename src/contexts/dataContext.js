import { createContext, useContext, useReducer, useState } from "react";
import { useProductsData } from "./productContext";
import * as utilFunctions from "utilities";
import { reducer } from "reducer";
import {
  CHOCOLATE,
  VANILLA,
  RED_VELVET,
  PINEAPPLE,
  STRAWBERRY,
  CAKE,
  MUFFIN,
} from "../constants";

const initialState = {
  flavors: {
    [CHOCOLATE]: false,
    [VANILLA]: false,
    [RED_VELVET]: false,
    [PINEAPPLE]: false,
    [STRAWBERRY]: false,
  },
  items: {
    [CAKE]: false,
    [MUFFIN]: false,
  },
  priceRange: {
    under500: false,
    price500To1000: false,
    price1000To1500: false,
    price1500To2000: false,
  },
  isOutOfStock: true,
  sortBy: "",
  ratingCategory: "",
  cart: [],
  wishlist: [],
  address: [],
  orders: [],
};

const getData = (state) => {
  const {
    funcFlavorCategory,
    funcInStock,
    funcItemCategory,
    funcPriceRangeCategory,
    funcRating2AndAbove,
    funcRating3AndAbove,
    funcRating4AndAbove,
    funcSortHighToLow,
    funcSortLowToHigh,
  } = utilFunctions;

  let { productsData } = useProductsData();
  if (state.sortBy === "highToLow")
    productsData = funcSortHighToLow(productsData);
  else if (state.sortBy === "lowToHigh")
    productsData = funcSortLowToHigh(productsData);

  if (!state.isOutOfStock) productsData = funcInStock(productsData);

  // cakes and muffins

  // getting keys with values true, keys are category names of items
  const itemCategories = Object.keys(state.items).filter(
    (key) => state.items[key]
  );
  if (itemCategories.length > 0) {
    productsData = funcItemCategory(productsData, itemCategories);
  }

  //flavor categories

  // getting keys with values true, keys are category names of flavors
  const flavorCategories = Object.keys(state.flavors).filter(
    (key) => state.flavors[key]
  );
  if (flavorCategories.length > 0) {
    productsData = funcFlavorCategory(productsData, flavorCategories);
  }

  // price range categories

  // getting keys with values true, keys are category names of price range
  const priceRangeCategories = Object.keys(state.priceRange).filter(
    (key) => state.priceRange[key]
  );

  if (priceRangeCategories.length > 0) {
    productsData = funcPriceRangeCategory(productsData, priceRangeCategories);
  }

  if (state.ratingCategory === "4andAbove")
    productsData = funcRating4AndAbove(productsData);
  else if (state.ratingCategory === "3andAbove")
    productsData = funcRating3AndAbove(productsData);
  else if (state.ratingCategory === "2andAbove")
    productsData = funcRating2AndAbove(productsData);

  return productsData;
};

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchBarText, setSearchBarText] = useState("");
  const [coupon, setCoupon] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        searchBarText,
        setSearchBarText,
        coupon,
        setCoupon,
        data: getData(state),
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
