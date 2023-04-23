import React from 'react'
import { useProductsCartContext } from '../../Context/ProductsCartContext'
import { Button } from '../../Styles/Button';

const ClearCart = () => {
    const { clearCart } = useProductsCartContext();
  return (
    <Button type='button' onClick={clearCart} style={{cursor: 'pointer'}}>
      Clear Cart
    </Button>
  )
}

export default ClearCart
