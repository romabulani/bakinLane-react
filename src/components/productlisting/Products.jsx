import "./productlist.css";

import { useData } from "contexts";
import { ProductCard } from "./ProductCard";

function Products() {
  const { data } = useData();

  return (
    <div className="product-cards">
      {data.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export { Products };
