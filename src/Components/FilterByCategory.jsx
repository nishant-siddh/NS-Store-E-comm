import React, { useState } from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';

const FilterByCategory = () => {
    const { allProductsFilter, updateFiltersValue, filters: {categoryFilterValue} } = useFilterContext();

    let categoryArray = allProductsFilter.map(element => {
        return element.category.charAt(0).toUpperCase() + element.category.slice(1);
    });

    categoryArray = ['All', ...new Set(categoryArray)]
    
    return (
        <div>
            <FilterByCategorySection>
                <div className='categoryFilter flexProperty'>
                    <h3>Category -</h3>

                    {categoryArray.map((categoryItem, index) => {
                        return (
                            <span key={index} className="categoryFilterItem">
                                <div  className={categoryItem === categoryFilterValue ? 'active item' : 'item'} id="categoryFilterValue" onClick={updateFiltersValue}>
                                    {categoryItem}
                                </div>
                            </span>
                        )
                    })}
                </div>
            </FilterByCategorySection>
        </div>
    )
}

const FilterByCategorySection = styled.section`
    .categoryFilter{
        max-width: 20rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.7rem;
    }
    
    h3{
        margin-bottom: 0.2rem;
        font-weight: 600;
    }

    .item{
        padding-left: 6px;
        cursor: pointer;

        &:hover{
            color: ${({theme}) => theme.colors.baseColor};
            border-left: 1px solid ${({theme}) => theme.colors.baseColor};
            transition: 0.4s ease;
        }
    }

    .active{
        border-left: 1px solid ${({theme}) => theme.colors.baseColor};
        color: ${({ theme }) => theme.colors.baseColor};
    }
`

export default FilterByCategory
