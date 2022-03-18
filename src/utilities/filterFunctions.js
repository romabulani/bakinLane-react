const funcSortHighToLow = (items) =>
  [...items].sort(function (a, b) {
    return b.price - a.price;
  });

const funcSortLowToHigh = (items) =>
  [...items].sort(function (a, b) {
    return a.price - b.price;
  });

const funcRating4AndAbove = (items) =>
  items.filter((item) => Number(item.rating) >= 4);

const funcRating3AndAbove = (items) =>
  items.filter((item) => Number(item.rating) >= 3);

const funcRating2AndAbove = (items) =>
  items.filter((item) => Number(item.rating) >= 2);

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
  funcRating2AndAbove,
  funcRating3AndAbove,
  funcRating4AndAbove,
};
