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
  isSingleLoading: false,
  singleProducts: {},
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log('Error', error);
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
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