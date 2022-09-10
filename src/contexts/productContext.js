import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "utilities";

const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          let resp = await axios.get(`${API_URL}/api/products`);
          if (resp.status === 200) setProductsData(resp.data.products);
          resp = await axios.get(`${API_URL}/api/categories`);
          if (resp.status === 200) setCategoriesData(resp.data.categories);
        } catch (e) {
          console.error("Error in fetching Products or Categories", e);
        }
      })(),
    []
  );

  return (
    <ProductsDataContext.Provider value={{ productsData, categoriesData }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

const useProductsData = () => useContext(ProductsDataContext);

export { ProductsDataProvider, useProductsData };
