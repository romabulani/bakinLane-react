import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

const funcSortHighToLow = (items) =>
  [...items].sort(function (a, b) {
    return b.price - a.price;
  });

const funcSortLowToHigh = (items) =>
  [...items].sort(function (a, b) {
    return a.price - b.price;
  });

const funcItemCategory = (items, categoryArray) =>
  items.filter((item) => categoryArray.includes(item.item));

const funcFlavorCategory = (items, categoryArray) =>
  items.filter((item) => categoryArray.includes(item.categoryName));

const funcPriceRangeCategory = (items, categoryArray) =>
  items.filter((item) => categoryArray.includes(item.priceCategory));

const funcInStock = (items) => items.filter((item) => !item.isOutOfStock);

export {
  funcSortHighToLow,
  funcSortLowToHigh,
  funcInStock,
  funcItemCategory,
  funcFlavorCategory,
  funcPriceRangeCategory,
};
