import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { ProductsCartContextProvider } from "./Context/ProductsCartContext";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Auth0Provider
      domain="ns-store.us.auth0.com"
      clientId="koC7HttvuydSKrBRRQanGqDJPpizVKev"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AppProvider>
          <FilterContextProvider>
            <ProductsCartContextProvider>
              <App />
            </ProductsCartContextProvider> 
          </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  // </React.StrictMode>
);
