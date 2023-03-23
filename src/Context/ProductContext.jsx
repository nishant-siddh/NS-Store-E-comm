import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductsReducer';

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isError: false,
    isLoading: false,
    allProducts: [],
    featuredProducts: [],
    singleProducts: {}
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        // console.log('For loading');
        try {
            const res = await axios.get(url);
            // console.log(res, 'Products');
            const products = await res.data;
            // console.log(products, 'products');
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "ERROR" });
            console.log('Error', error);
        }
    };

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
          const res = await axios.get(url);
        //   console.log(await res, 'all products');
          const singleProduct = await res.data;
        //   console.log(await singleProduct, 'singledata');
          dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        //   console.log(initialState.singleProducts);
        } catch (error) {
          dispatch({ type: "ERROR" });
          console.log('Error', error);
        }
      };
      
      useEffect(() => {
          getProducts(API);
      }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };