import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
import {
  AddressProvider,
  AuthProvider,
  DataProvider,
  ProductsDataProvider,
} from "contexts";
import "assets";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AddressProvider>
        <ProductsDataProvider>
          <DataProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DataProvider>
        </ProductsDataProvider>
      </AddressProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
