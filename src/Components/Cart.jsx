import React from 'react'
import styled from 'styled-components'

const Cart = () => {
  return (
    <Wrapper>
      <div className='cart flexProperty'>
        <div>Products</div>
        <div>Price</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .cart{
    max-width: 70rem;
    outline: 1px solid red;
  }
`;

export default Cart
