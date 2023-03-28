import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { ProductsCartContextProvider } from "./Context/ProductsCartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <ProductsCartContextProvider>
          <App />
        </ProductsCartContextProvider> 
      </FilterContextProvider>
    </AppProvider>
  // </React.StrictMode>
);
