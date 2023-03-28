import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductsCartReducer';
import { useProductContext } from "./ProductContext";

const ProductsCartContext = createContext();

const initialState = {
    allProductsCart: [],
    productQuantity: 1,
}

const ProductsCartContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    const addProductToCart = (id, productQuantity, selectedProductColor, productData) => {
        dispatch({type: 'Set_Products_To_Cart', payload: {id, productQuantity, selectedProductColor, productData}});
    }

    return <ProductsCartContext.Provider value={{...state, addProductToCart}}>
        {children}
    </ProductsCartContext.Provider>
}

const useProductsCartContext = () => {
    return useContext(ProductsCartContext);
}

export { ProductsCartContext, ProductsCartContextProvider, useProductsCartContext };