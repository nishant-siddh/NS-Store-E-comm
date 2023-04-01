import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useProductsCartContext } from '../Context/ProductsCartContext';
import styled from 'styled-components';

const CartIcons = ({setMenuIcon}) => {
    const { allProductsCart, totalProducts } = useProductsCartContext();
    // console.log(allProductsCart.map((item) => item.productQuantity));
    // let cartTotalProducts = 0

    // {allProductsCart.map(item => {
    //     cartTotalProducts = item.productQuantity + cartTotalProducts;
    // })}

    return (
        <>
            <Wrapper>
                <div className='cartContainer'>
                    <NavLink className='nav-link' onClick={() => setMenuIcon(false)} to='/cart'>

                        {allProductsCart.length ===0 && <HiOutlineShoppingCart className="cart cartUnfilled" />}

                        {allProductsCart.length !==0 && <HiShoppingCart className="cart cartfilled" />}

                        {allProductsCart.length !== 0 && 
                            <span className='totalCartItems flexProperty'>
                                { totalProducts }
                            </span>
                        }
                    </NavLink>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    .cartContainer{
        position: relative;
    }

    .totalCartItems{
        position: absolute;
        align-content: center;
        text-align: center;
        vertical-align: center;
        width: 18px;
        height: 18px;
        top: 0px;
        right: -5px;
        border-radius: 100%;
        background-color: ${({theme}) => theme.colors.baseColor};
        font-size: 0.7rem;
        font-weight: bold;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .totalCartItems{
            background-color: ${({theme}) => theme.colors.blackColor}
        }
    }
`;

export default CartIcons
