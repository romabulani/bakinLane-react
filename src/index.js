import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import {
  AddressProvider,
  AuthProvider,
  DataProvider,
  ProductsDataProvider,
} from "contexts";
import "assets";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AddressProvider>
        <ProductsDataProvider>
          <DataProvider>
            <Router>
              <App />
            </Router>
          </DataProvider>
        </ProductsDataProvider>
      </AddressProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
