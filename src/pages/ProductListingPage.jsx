import { Navigation, Footer, ProductList } from "components";
import { useData } from "contexts";
import "styles/globalbakin.css";

function ProductListingPage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export { ProductListingPage };
