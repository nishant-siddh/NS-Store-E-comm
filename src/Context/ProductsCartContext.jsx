import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductsCartReducer';

const ProductsCartContext = createContext();

const initialState = {
    allProductsCart: [],
    totalProducts: 0
}

const ProductsCartContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    const addProductToCart = (id, productQuantity, selectedProductColor, productData) => {
        dispatch({type: 'Set_Products_To_Cart', payload: {id, productQuantity, selectedProductColor, productData}});
    }

    const setDecrement = (id) => {
        dispatch({type: 'Set_Decrement', payload: id})
    }

    const setIncrement = (id) => {
        dispatch({type: 'Set_Increment', payload: id})
    }

    const removeProduct = (id) => {{
        dispatch({type: 'Remove_Product_From_Cart', payload: id})
    }}

    const clearCart = () => {
        dispatch({type: 'Clear_Cart'})
    }

    useEffect(() => {
        dispatch({type: 'Set_Cart_Total_Products'})
    }, [state.allProductsCart])

    return <ProductsCartContext.Provider value={{...state, addProductToCart, removeProduct, clearCart, setDecrement, setIncrement}}>
        {children}
    </ProductsCartContext.Provider>
}

const useProductsCartContext = () => {
    return useContext(ProductsCartContext);
}

export { ProductsCartContext, ProductsCartContextProvider, useProductsCartContext };