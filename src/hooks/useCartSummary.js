import { useData } from "contexts";

function useCartSummary() {
  const { state, coupon } = useData();
  const { cart } = state;

  const getTotalPrice = () => {
    let price = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
    if (coupon && coupon.discount) price -= coupon.discount;
    return price;
  };

  const getOriginalPrice = (price, offerPercentage) =>
    Math.round(Number(price) + (Number(offerPercentage) / 100) * Number(price));

  const getMRP = () =>
    cart.reduce(
      (prev, curr) =>
        prev + curr.qty * getOriginalPrice(curr.price, curr.offerPercentage),
      0
    );

  const getDiscount = () => getMRP() - getTotalPrice();

  return { getTotalPrice, getOriginalPrice, getMRP, getDiscount };
}

export { useCartSummary };
