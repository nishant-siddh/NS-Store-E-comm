import React from 'react'
import styled from 'styled-components'
import { useProductsCartContext } from '../Context/ProductsCartContext'
import CartItem from './CartItem';
import ClearCart from './ClearCart';
import Subtotal from './Subtotal';

const Cart = () => {
  const { allProductsCart } = useProductsCartContext();

  return (
    <Wrapper>

      <h2 className='basketHeading'>
        Products <span className="heading_text">Basket</span>
      </h2>

      {allProductsCart.length !== 0
        ? <div className='cart flexProperty'>

            {/* product details */}
            <div className='cartProductsContainer'>
              {
                allProductsCart.map((product) => {
                  // console.log(product.id, 'product');
                  return <CartItem key={product.id} {...product} />
                })
              } 
            {/* <ClearCart /> */}
            </div>

            {/* product's subtotal price */}
            <Subtotal />
          </div>
        : 'Your cart is empty!'}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2{
    text-align: center;
    margin: 1rem;
  }

  .cart{
    max-width: 80rem;
    margin: 0 auto;
    /* outline: 1px solid red; */
    justify-content: space-between;

    .cartProductsContainer{
      max-width: 60rem;
      /* outline: 1px solid green; */
    }
  }
`;

export default Cart
