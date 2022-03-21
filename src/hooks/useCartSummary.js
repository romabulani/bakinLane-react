import { useData } from "contexts";

function useCartSummary() {
  const { state } = useData();
  const { cart } = state;

  const getTotalPrice = () =>
    cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

  const getOriginalPrice = (price, offerPercentage) =>
    Math.round(Number(price) + (Number(offerPercentage) / 100) * Number(price));

  const getMRP = () =>
    cart.reduce(
      (prev, curr) =>
        prev + curr.qty * getOriginalPrice(curr.price, curr.offerPercentage),
      0
    );

  const getDiscount = () => getMRP(cart) - getTotalPrice(cart);

  return { getTotalPrice, getOriginalPrice, getMRP, getDiscount };
}

export { useCartSummary };
