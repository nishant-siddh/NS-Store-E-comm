// import React from 'react';
import GridView from './ProductsView/GridView';
import { useFilterContext } from '../../Context/FilterContext';
import styled from 'styled-components';
import ListView from './ProductsView/ListView';
import View from './ProductsView/View';
import Sort from '../Products Page/SortProducts/Sort';

const ProductList = () => {
  const { view,filterProducts } = useFilterContext();


  return (
    <Wrapper>
      <div className='mainContainer flexProperty'>
        <div className="viewAndSort flexProperty">
          <View />
          <Sort />
        </div>
        <div className='productList'>
          <div className='productsCount'>{filterProducts.length} Products Available</div>
          {
            view ?
            <GridView /> : <ListView />
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .mainContainer{
    max-width: 70rem;
    flex-direction: column;
    gap: '0.5rem';

    .viewAndSort{
      padding: 1rem 2rem;
      justify-content: space-between;
      width: 100%;
      gap: 0.5rem;
    }

    .productsCount{
      text-align: right;
      padding: 0 1rem;
    }
  }
`

export default ProductList
