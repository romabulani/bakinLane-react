const getTotalPrice = (cart) =>
  cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

const getOriginalPrice = (price, offerPercentage) =>
  Math.round(Number(price) + (Number(offerPercentage) / 100) * Number(price));

const getMRP = (cart) =>
  cart.reduce(
    (prev, curr) =>
      prev + curr.qty * getOriginalPrice(curr.price, curr.offerPercentage),
    0
  );

const getDiscount = (cart) => getMRP(cart) - getTotalPrice(cart);

export { getDiscount, getMRP, getTotalPrice, getOriginalPrice };
