import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProductsFilter: [],
    view: true,
    sortCurrentValue: 'all',
    filters: {
        nameFilterValue: '',
        categoryFilterValue: 'All',
        companyFilterValue: 'All',
        colorFilterValue: 'All',
        minPrice: 0,
        price: 0,
        maxPrice: 0
    }
}

const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { allProducts } = useProductContext();

    const toggleGridView = () => {
        return dispatch({type: 'Set_Grid_View'});
    }

    const toggleListView = () => {
        return dispatch({type: 'Set_List_View'});
    }

    const updateSortCurrentValue = (value) => {
        dispatch({type: 'Set_Updated_Sort_Value', payload: value})
    }

    const updateFiltersValue = (e) => {
        // const name = e.target.id;
        // const value = (name === 'categoryFilterValue' ? e.target.textContent : e.target.value);
        dispatch({type: 'Set_Updated_Filters_Value', payload: {name, value}})
    }

    const clearFilter = () => {
        dispatch({type: 'Clear_Filters'})
    }

    useEffect(() => {
        dispatch({type: 'Filter_Products'})
        dispatch({type: 'Sort_Products'})
    }, [allProducts, state.sortCurrentValue, state.filters]);

    useEffect(() => {
        dispatch({ type: 'Load_Filter_Products', payload: allProducts });
    }, [allProducts])

    return <FilterContext.Provider value={{ ...state, toggleGridView, toggleListView, updateSortCurrentValue, updateFiltersValue, clearFilter }}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContext, FilterContextProvider, useFilterContext }