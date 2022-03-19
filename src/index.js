import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, DataProvider, ProductsDataProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsDataProvider>
        <DataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataProvider>
      </ProductsDataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
