import React from "react";
import { useData } from "contexts";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

function Cart() {
  const { state } = useData();
  return (
    <main className="cart-container flex-column-center middle-content">
      {state.cart.length > 0 && <div className="heading4">MY CART</div>}
      <div className="cart-items-and-price flex-row-center">
        <CartItem />
        {state.cart.length > 0 && <CartSummary />}
      </div>
    </main>
  );
}

export { Cart };
