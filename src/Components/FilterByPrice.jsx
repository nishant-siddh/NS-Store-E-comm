import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../Context/FilterContext'
import FormatPrice from './FormatPrice'

const FilterByPrice = () => {
    const {updateFiltersValue, filters: {minPrice,price, maxPrice}} = useFilterContext();

  return (
    <Wrapper>
        <div className='priceFilter'>
            <h3>Price -</h3>
            <div>
                <div className='priceText'><FormatPrice price={price} /></div>
                <input type="range" name="priceRange" id="price" min={minPrice} max={maxPrice} value={price} onChange={updateFiltersValue} />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .priceFilter{
        margin: 1.5rem 0;
    }
`;

export default FilterByPrice
