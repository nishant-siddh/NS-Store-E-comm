import React from 'react'
import { useProductsCartContext } from '../Context/ProductsCartContext'

const ClearCart = () => {
    const { clearCart } = useProductsCartContext();
  return (
    <button type='button' onClick={clearCart} style={{cursor: 'pointer'}}>
      Clear Cart
    </button>
  )
}

export default ClearCart
