import { useContext, useReducer } from "react";

const ProductsCartContext = useContext;

const initialState = {
    cartProduct: []
}

const ProductsCartContextProvider = ({children}) => {
    const {state, dispatch} = useReducer(reducer, initialState);

    

    return <ProductsCartContext.Proivder value={...state}>
        {children}
    </ProductsCartContext.Proivder>
}

const useProductsCartContext = () => {
    return useContext(ProductsCartContext);
}

export default {ProductsCartContext, ProductsCartContextProvider};