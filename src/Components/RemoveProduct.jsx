import React from 'react'
import { useProductsCartContext } from '../Context/ProductsCartContext'
import styled from 'styled-components';

const RemoveProduct = ({id}) => {
    const { removeProduct} = useProductsCartContext();
  return (
    <Wrapper>
      <div className="removeProduct" onClick={() => removeProduct(id)}>Remove</div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .removeProduct{
    transition: color 0.2s linear;
  }
`;

export default RemoveProduct
