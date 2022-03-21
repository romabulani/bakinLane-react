import { Navigation, Footer, Wishlist } from "components";
function WishlistPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <Wishlist />
      </div>
      <Footer />
    </div>
  );
}

export { WishlistPage };
