import React, { useState } from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';

const FilterByCompany = () => {
    const { allProductsFilter, updateFiltersValue, filters: {companyFilterValue} } = useFilterContext();

    let companyArray = allProductsFilter.map(element => {
        return element.company.charAt(0).toUpperCase() + element.company.slice(1);
    });

    companyArray = ['All', ...new Set(companyArray)];

    return (
        <div>
            <FilterByCompanySection>
                <div className='companyFilter flexProperty'>
                    <h3>Company -</h3>

                    {/* <Dropdown /> */}
                    <select name='companyFilterValue' id="companyFilterValue" defaultValue={companyFilterValue} onChange={updateFiltersValue}>
                        {
                            companyArray.map((companyItem, index) => {
                                return (
                                    <option key={index} className='item' value={companyItem}>{companyItem}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </FilterByCompanySection>
        </div>
    )
}

const FilterByCompanySection = styled.section`
    .companyFilter{
        max-width: 20rem;
        margin: 1.5rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
    }
    
    h3{
        margin-bottom: 0.2rem;
        font-weight: 600;
    }

    #companyFilterValue{
        margin-left: 0.5rem;
        border: none;
        outline: transparent;
        padding: 0.2rem 0.5rem;
        background-color: ${({theme}) => theme.colors.lightWhite};
    }
`

export default FilterByCompany
