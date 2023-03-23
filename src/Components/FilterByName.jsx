import React, { useRef } from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../Context/FilterContext'

const FilterByName = () => {
  const { updateFiltersValue, filters: {nameFilterValue} } = useFilterContext();

  const {inputRef} = useRef();

  return (
    <FilterByNameSection>
        <div className='nameFilter'>
            <input type="text" name="nameFilter" value={nameFilterValue} id="nameFilterValue" placeholder='Filter By Name' onChange={updateFiltersValue} autoComplete="off" />
        </div>
    </FilterByNameSection>
  )
}

const FilterByNameSection = styled.section`
    #nameFilterValue{
      width: 15rem;
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      background: transparent;
      color: ${({theme}) => theme.colors.lightWhite};
      font-size: 1rem;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({theme}) => theme.colors.baseColor};
      border-radius: 20px;
    }

    @media(max-width: ${({theme}) => theme.media.smallDevices}){
      #nameFilterValue{
        width: 12rem;
        font-size: 1rem;
      }
    }
`

export default FilterByName
