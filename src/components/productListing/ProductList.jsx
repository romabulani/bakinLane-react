import { Filters } from "./Filters";
import "./productlist.css";
import { Products } from "./Products";
import "../../styles/globalbakin.css";
import { Navigation } from "../shared/Navigation";
import { Footer } from "../shared/Footer";

function ProductList() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <main className="filters-and-products middle-content">
        <Filters className="filters" />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export { ProductList };
