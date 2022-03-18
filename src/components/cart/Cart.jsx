import React from "react";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

function Cart() {
  return (
    <main className="cart-container flex-column-center">
      <div className="heading4">MY CART</div>
      <div className="cart-items-and-price flex-row-center">
        <CartItem />
        <CartSummary />
      </div>
    </main>
  );
}

export { Cart };
