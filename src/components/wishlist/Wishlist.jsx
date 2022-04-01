import React from "react";
import { useData } from "contexts";
import { WishlistItem } from "./WishlistItem";

function Wishlist() {
  const { state } = useData();
  return (
    <main className="wishlist-cards-container flex-column-center  middle-content">
      {state.wishlist.length > 0 && (
        <div className="heading4 text-center">MY WISHLIST</div>
      )}
      <WishlistItem />
    </main>
  );
}

export { Wishlist };
