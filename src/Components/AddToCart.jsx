import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from '../Context/ProductContext';
import { useProductsCartContext } from '../Context/ProductsCartContext'
import { Button } from '../Styles/Button';
import {FaCheck} from 'react-icons/fa';
import CartProductQuantity from './CartProductQuantity';

const AddToCart = ({productData}) => {
    const { addProductToCart } = useProductsCartContext();
    const [productQuantity, setProductQuantity] = useState(1);
    const { id, colors, stock } = productData;
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    
    const setDecrement = () => {
        productQuantity > 1 ? setProductQuantity(prev => prev - 1) : setProductQuantity(1);
    }

    const setIncrement = () => {
        productQuantity < stock ? setProductQuantity(prev => prev + 1) : setProductQuantity(stock);
    }

    useEffect(() => {
        setSelectedColor(colors[0]);
    }, [productData])

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
                {/* cart increment and decrement buttons */}
                <CartProductQuantity productQuantity={productQuantity} setDecrement={setDecrement} setIncrement={setIncrement} />

                {/* Add to cart button */}
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
`;

export default AddToCart
