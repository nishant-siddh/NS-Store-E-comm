import React from 'react'
import { useProductsCartContext } from '../Context/ProductsCartContext'

const RemoveProduct = ({id}) => {
    const { removeProduct} = useProductsCartContext();
  return (
    <div>
      <div className="removeProduct" onClick={() => removeProduct(id)}>Remove</div>
    </div>
  )
}

export default RemoveProduct
