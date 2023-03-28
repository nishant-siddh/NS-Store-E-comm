import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './FormatPrice';

const CartItem = ({id, name, productQuantity, maxProductQuantity, selectedProductColor, image, price, description }) => {

    const [cartItemQty, setCartItemQty] = useState(productQuantity);

    return (
        <Wrapper>
            <div>
                {/* individual product */}
                <div key={id} className="cartProduct flexProperty">

                    {/* image */}
                    <img src={image} alt="" />

                    {/* product detail and price container */}
                    <div className='detailAndPriceContainer flexProperty'>
                    {/* product detail */}
                    <div className='productDetails flexProperty'>
                        {/* product name */}
                        <h3 className='productName'>{name.charAt(0).toUpperCase() + name.slice(1)} - <span className='hide'>{description.slice(0, 90)}...</span></h3>


                        {/* color */}
                        <div className='productColors flexProperty'>
                        Color : 
                        <button 
                            type='button' 
                            style={{backgroundColor: selectedProductColor}}
                            title={selectedProductColor}
                            className='colorToggleBtn'>
                            {null}
                        </button>
                        </div>

                        {/* stock */}
                        <div style={maxProductQuantity > 0 ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}}>{maxProductQuantity > 0 ? 'In Stock' : 'Out of Stock'}</div>

                        <div className="noOfItemsToCart flexProperty">
                        <button type='button' className="btn decreaseNoOfItems" disabled={cartItemQty > 1 ? false : true} onClick={(e) => setCartItemQty(prev => prev - 1)}>-</button>
                        <p>{cartItemQty}</p>
                        <button type='button' className="btn increaseNoOfItems" onClick={() => setCartItemQty(prev => prev + 1)}>+</button>
                        </div>

                        <div className='viewAndRemove flexProperty'>
                        <NavLink className='navLink' to={`/singleProduct/${id}`}>
                            <div className="viewProduct">View Product</div>
                        </NavLink>
                        <div className="removeProduct">Remove</div>
                        </div>
                        
                    </div>

                    {/* product price */}
                    <div className='productPrice'>
                        <FormatPrice price={price} />
                    </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .cartProduct{
      justify-content: space-between;
      padding: 1rem;
      background-color: ${({theme}) => theme.colors.greyBackground};
      border-top: 1px solid ${({theme}) => theme.colors.baseColor};
      /* outline: 1px solid yellow; */

      img{
        max-width: 18rem;
      }
    }

    .detailAndPriceContainer{
      max-width: 68%;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      /* outline: 1px solid red; */
    }

    .productDetails{
      max-width: 80%;
      flex-direction: column;
      align-items: flex-start;
      /* outline: 1px solid blue; */
      gap: 0.5rem;
    }

    .productPrice{
      font-size: 1.4rem;
      font-weight: bold;
    }

    .productColors{
      justify-content: flex-start;
      gap: 0.5rem;
    }

    .colorToggleBtn{
      width: 1rem;
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

    h3{
      font-weight: normal;
    }

    .noOfItemsToCart{
      justify-content: space-around;
      width: 5rem;
      
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

    .viewAndRemove{
      gap: 1rem;

      .viewProduct{
        font-size: 1.1rem;

        &:hover{
          color: ${({theme}) => theme.colors.baseColor};
          cursor: pointer;
        }
      }

      .removeProduct{
        font-size: 1.1rem;
        
        &:hover{
          color: red;
          cursor: pointer;
        }
      }
    }

    .navLink{
      text-decoration: none;
    }

    @media (max-width: ${({theme}) => theme.media.tablet}){
        .hide{
            /* display: none; */
        }
    }
`;

export default CartItem