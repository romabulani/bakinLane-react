import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, ProductsDataProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsDataProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </ProductsDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
