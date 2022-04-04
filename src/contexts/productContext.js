import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const resp = await axios.get("/api/products");
          if (resp.status === 200) setProductsData(resp.data.products);
        } catch (e) {
          console.error("Error in fetching Products", e);
        }
      })(),
    []
  );

  return (
    <ProductsDataContext.Provider value={{ productsData }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

const useProductsData = () => useContext(ProductsDataContext);

export { ProductsDataProvider, useProductsData };
