import { Filters } from "./Filters";
import "./productlist.css";
import { Products } from "./Products";
import "styles/globalbakin.css";
import { useData } from "contexts";

function ProductList() {
  const { showSidebar, setShowSidebar } = useData();
  return (
    <main className="filters-and-products middle-content">
      <Filters className="filters" />
      <Products />
    </main>
  );
}

export { ProductList };
