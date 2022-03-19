import { initialState } from "../contexts";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_FILTER":
      const category = action.payload.category;
      return {
        ...state,
        flavors: { ...state.flavors, [category]: !state.flavors[category] },
      };

    case "ITEMS_FILTER":
      const item = action.payload.item;
      return {
        ...state,
        items: { ...state.items, [item]: !state.items[item] },
      };

    case "PRICERANGE_FILTER":
      const priceRange = action.payload.priceRange;
      return {
        ...state,
        priceRange: {
          ...state.priceRange,
          [priceRange]: !state.priceRange[priceRange],
        },
      };

    case "TOGGLE_STOCK":
      return {
        ...state,
        isOutOfStock: !state.isOutOfStock,
      };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };

    case "RATING":
      console.log(action.payload);
      return {
        ...state,
        ratingCategory: action.payload.ratingCategory,
      };

    case "CLEAR_FILTERS":
      return initialState;

    default:
      return state;
  }
};
