import React from 'react'
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa'
import { useFilterContext } from '../../../Context/FilterContext'

const FilterByColors = () => {
    const { allProductsFilter, updateFiltersValue, filters: {colorFilterValue} } = useFilterContext();

    let colorsData = allProductsFilter.map((element) => {
            return element.colors;
        })
        
        colorsData = colorsData.flat();
        
        colorsData = ['All', ...new Set(colorsData)];
        // console.log(colorsData);

    return (
        <Wrapper>
            <h3>Colors -</h3>
            <div className='colorsFilterContainer flexProperty'>
                {colorsData.map((currColor, index) => {
                    if(currColor === 'All'){
                        return (
                            <button 
                                type='button' 
                                key={index}
                                title={currColor} 
                                id='colorFilterValue'
                                value={currColor} 
                                className={colorFilterValue === currColor ? 'allColorToggleBtn allActive' : 'allColorToggleBtn'}
                                onClick={updateFiltersValue}>
                                All
                            </button>
                        )
                    }
                    return (
                        <button 
                            type='button' 
                            key={index} 
                            style={{backgroundColor: currColor}} 
                            title={currColor} 
                            id='colorFilterValue' 
                            value={currColor} 
                            className={colorFilterValue === currColor ? 'colorToggleBtn active' : 'colorToggleBtn'} 
                            onClick={updateFiltersValue}>
                            {currColor === colorFilterValue ? <FaCheck className="checkStyle" /> : ' '}
                        </button>
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .colorsFilterContainer{
        justify-content: flex-start;
        padding: 0.2rem 0.5rem;
        gap: 0.5rem;
    }

    .allColorToggleBtn{
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;

        &:hover{
            border-bottom: 1px solid ${({theme}) => theme.colors.baseColor};
        }
    }

    .allActive{
        border-bottom: 1px solid ${({theme}) => theme.colors.baseColor};
    }

    .colorToggleBtn{
        width: 1.3rem;
        aspect-ratio: 1;
        border-radius: 50%;
        border: none;
        outline: transparent;
        opacity: 0.5;
        cursor: pointer;

        &:hover{
            opacity: 1;
        }
    }

    .active{
        opacity: 1;
    }

    .checkStyle{
        font-size: 0.7rem;
        color: ${({theme}) => theme.colors.lightWhite};
    }
`;

export default FilterByColors
