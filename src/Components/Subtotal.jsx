import React from 'react'
import styled from 'styled-components'
import { useProductsCartContext } from '../Context/ProductsCartContext'
import FormatPrice from './FormatPrice';

const Subtotal = () => {
  const { productsTotalPrice } = useProductsCartContext();

  return (
    <Wrapper>
        <div className='priceContainer'>
          <div className='priceSection subtotal flexProperty'>
            <h3>SubTotal</h3>
            <FormatPrice price={productsTotalPrice} />
          </div>
          <div className='priceSection shippingPrice flexProperty'>
            <h3>Shipping Cost</h3>
            <FormatPrice price={500} />
          </div>

          <hr />

          <div className='priceSection totalPrice flexProperty'>
            <h3>Total Price</h3>
            <FormatPrice price={productsTotalPrice + 500} />
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .priceContainer{
    max-width: 20rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.greyBackground};

    .priceSection{
      justify-content: space-between;
      gap: 6rem;

      h3{
        margin: 0.5rem 0;
      }

      span{
        font-weight: 700;
      }
    }

    .shippingPrice span{
      color: green;
    }
    
    .shippingPrice{
      margin-bottom: 0.5rem;
    }

    .totalPrice{
      margin-top: 0.5rem;
    }
  }

`;

export default Subtotal
