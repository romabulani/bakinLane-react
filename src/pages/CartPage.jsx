import { Navigation, Footer, Cart } from "components";

function CartPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export { CartPage };
