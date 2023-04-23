import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../../Context/FilterContext';
import Product from '../../SingleProductStyling/Product';

const GridView = () => {
  const { filterProducts } = useFilterContext();

  return (
    <Wrapper>
      <div className="gridView grid_3Column">
        {
          filterProducts.map((element) => {
            return <Product key={element.id} {...element} />
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gridView{
      max-width: 70rem;
      margin: 0 0.5rem;
      padding: 1rem 0;
      grid-gap: 1.5rem;
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    .gridView{
      grid-template-columns: repeat(2 , 1fr);
    }
  }

  @media (max-width: ${({theme}) => theme.media.smallDevices}){
    .gridView{
      grid-template-columns: repeat(1 , 1fr);
    }
  }
`;

export default GridView
