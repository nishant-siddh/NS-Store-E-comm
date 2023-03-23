const FilterReducer = (state, action) => {
  switch (action.type) {
    // Load Filer products data
    case "Load_Filter_Products":
      const allProductsPrice = action.payload.map((product) => product.price)

      const minPrice = Math.min(...allProductsPrice);
      const maxPrice = Math.max(...allProductsPrice);
    
      return {
        ...state,
        filterProducts: [...action.payload],
        allProductsFilter: [...action.payload],
        filterLoading: false,
        filters: {...state.filters, minPrice, price: maxPrice, maxPrice}
      };

    // set grid view
    case "Set_Grid_View":
      return {
        ...state,
        view: true,
      };

    // set list view
    case "Set_List_View":
      return {
        ...state,
        view: false,
      };

    // updating sort value to the current sort type
    case "Set_Updated_Sort_Value":
      return {
        ...state,
        sortCurrentValue: action.payload
      }

    // sorting products
    case "Sort_Products":
      let tempSortProducts = [...state.filterProducts]

      tempSortProducts.sort((a, b) => {
        if(state.sortCurrentValue === 'lowToHigh'){
          return a.price - b.price
        }

        if(state.sortCurrentValue === 'highToLow'){
          return b.price - a.price
        }
      })
      
      return {
        ...state,
        filterProducts: tempSortProducts,
      };

    // updating filters object values to the current filter type and its value
    case "Set_Updated_Filters_Value":
      const {name, value} = action.payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        }
      }

    // filtering products
    case "Filter_Products":
      const { nameFilterValue, categoryFilterValue, companyFilterValue, colorFilterValue, price } = state.filters
      let tempFilterProducts = [...state.allProductsFilter]     
      
      if(nameFilterValue){
        tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.name.toLowerCase().includes(nameFilterValue.toLowerCase()));
      }
      
      if(categoryFilterValue !== 'All'){
        tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.category.toLowerCase() === categoryFilterValue.toLowerCase());
      }

      if(companyFilterValue !== 'All'){
        tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.company.toLowerCase() === companyFilterValue.toLowerCase());
      }

      if(colorFilterValue !== 'All'){
        tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.colors.includes(colorFilterValue));
      }

      if(price){
        tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.price <= price);
      }

      return {
        ...state,
        filterProducts: tempFilterProducts
      }

    case "Clear_Filters":
      return {
        ...state,
        filters: {
          ...state.filters,
          nameFilterValue: '',
          categoryFilterValue: 'All',
          companyFilterValue: 'All',
          colorFilterValue: 'All',
          minPrice: state.filters.minPrice,
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice
      }

      }

    default:
      return state;
  }
};

export default FilterReducer;
