import { Footer, Navigation, Product } from "components";
import React from "react";

function ProductPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export { ProductPage };
