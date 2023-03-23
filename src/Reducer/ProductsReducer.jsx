const ProductsReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {    
                ...state,
                isLoading: true,
            }

        case "SET_API_DATA":
            const featuredProductsData = action.payload.filter((currElem) => {
                return currElem.featured === true;
            })

            return {
                ...state,
                isLoading: false,
                allProducts: action.payload,
                featuredProducts: featuredProductsData,
            }

        case "ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case "SET_SINGLE_PRODUCT_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isLoading: false,
                singleProducts: action.payload
            }

        default:
            return state
    }

}


export default ProductsReducer;