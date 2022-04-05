import {
  CHOCOLATE,
  VANILLA,
  RED_VELVET,
  STRAWBERRY,
  PINEAPPLE,
  CAKE,
  MUFFIN,
  CART_OPERATION,
  WISHLIST_OPERATION,
  CATEGORY_FILTER,
  ITEMS_FILTER,
  CLEAR_FILTERS,
  RATING,
  SORT,
  TOGGLE_STOCK,
  PRICERANGE_FILTER,
  SET_ADDRESS,
  SET_ORDERS,
} from "../constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      const category = action.payload.category;
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [category]: action.payload.value || !state.flavors[category],
        },
      };

    case ITEMS_FILTER:
      const item = action.payload.item;
      return {
        ...state,
        items: { ...state.items, [item]: !state.items[item] },
      };

    case PRICERANGE_FILTER:
      const priceRange = action.payload.priceRange;
      return {
        ...state,
        priceRange: {
          ...state.priceRange,
          [priceRange]: !state.priceRange[priceRange],
        },
      };

    case TOGGLE_STOCK:
      return {
        ...state,
        isOutOfStock: !state.isOutOfStock,
      };

    case SORT:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };

    case RATING:
      return {
        ...state,
        ratingCategory: action.payload.ratingCategory,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
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
      };

    case CART_OPERATION:
      return {
        ...state,
        cart: [...action.payload.cart],
      };

    case WISHLIST_OPERATION:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
};
