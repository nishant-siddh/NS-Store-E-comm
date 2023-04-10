import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductsCartReducer';

const ProductsCartContext = createContext();

const getLocalStorageCartItems = () => {
    let localStorageCartData = localStorage.getItem('NS Store Cart Storage')

    if(localStorageCartData) {
        return JSON.parse(localStorageCartData)
    }
    return [];
}

const initialState = {
    allProductsCart: getLocalStorageCartItems(),
    totalProducts: 0,
    productsTotalPrice: 0
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

    const removeProduct = (id) => {
        dispatch({type: 'Remove_Product_From_Cart', payload: id})
    }

    const clearCart = () => {
        dispatch({type: 'Clear_Cart'})
    }

    useEffect(() => {
        dispatch({type: 'Set_Cart_Product_Price'});
        dispatch({type: 'Set_Cart_AllProduct_Subtotal'});
    }, [state.totalProducts])

    useEffect(() => {
        dispatch({type: 'Set_Cart_Total_Products'});
        localStorage.setItem('NS Store Cart Storage' ,JSON.stringify(state.allProductsCart))
    }, [state.allProductsCart])

    return <ProductsCartContext.Provider value={{...state, addProductToCart, removeProduct, clearCart, setDecrement, setIncrement}}>
        {children}
    </ProductsCartContext.Provider>
}

const useProductsCartContext = () => {
    return useContext(ProductsCartContext);
}

export { ProductsCartContext, ProductsCartContextProvider, useProductsCartContext };