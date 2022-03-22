import { Filters } from "./Filters";
import "./productlist.css";
import { Products } from "./Products";
import "styles/globalbakin.css";
import { Outlet } from "react-router-dom";

function ProductList() {
  return (
    <main className="filters-and-products middle-content">
      <Filters className="filters" />
      <Products />
      <Outlet />
    </main>
  );
}

export { ProductList };
