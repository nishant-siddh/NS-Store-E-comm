import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from '../Context/ProductContext';
import { useProductsCartContext } from '../Context/ProductsCartContext'
import { Button } from '../Styles/Button';
import {FaCheck} from 'react-icons/fa';

const AddToCart = ({productData}) => {
    const { addProductToCart } = useProductsCartContext();
    const { id, colors } = productData;
    const [productQuantity, setProductQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <Wrapper>
            {/* product color */}
            <div className='productColorsContainer flexProperty'>
                <h3>Color: </h3>
                <div className='productColors flexProperty'>
                    {colors.map((currColor, index) => {
                        // console.log(currColor);
                        return (
                            <button 
                                type='button' 
                                key={index}
                                style={{backgroundColor: currColor}}
                                title={currColor}
                                value={currColor}
                                className={selectedColor === currColor ? 'colorToggleBtn active' : 'colorToggleBtn'} 
                                onClick={() => setSelectedColor(currColor)}>
                                {currColor === selectedColor ? <FaCheck className="checkStyle" /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* cart button */}
            <div className='cart'>
                <div className='noOfItemsToCart flexProperty'>
                    <button type='button' className="btn decreaseNoOfItems" disabled={productQuantity > 1 ? false : true} onClick={(e) => setProductQuantity(prev => prev - 1)}>-</button>
                    <p>{productQuantity}</p>
                    <button type='button' className="btn increaseNoOfItems" onClick={() => setProductQuantity(prev => prev + 1)}>+</button>
                </div>

                <NavLink onClick={() => addProductToCart(id, productQuantity, selectedColor, productData)} to='/cart'>
                    <Button className='btn'>
                        Add to Cart
                    </Button>
                </NavLink>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .productColorsContainer{
        justify-content: flex-start;
        gap: 0.5rem;

        .productColors{
            gap: 1rem;
        }
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

    .noOfItemsToCart{
        justify-content: flex-start;
        justify-content: space-evenly;
        width: 7rem;

        .btn{
            cursor: pointer;
            outline: none;
            border: none;
            background: transparent;
            color: ${({theme}) => theme.colors.lightWhite};
            font-size: 1.5rem;

            &:hover{
                color: ${({theme}) => theme.colors.baseColor};
            }
        }
    }
`;

export default AddToCart
