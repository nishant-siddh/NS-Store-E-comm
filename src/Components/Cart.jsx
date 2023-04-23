import styled from 'styled-components'
import { useProductsCartContext } from '../Context/ProductsCartContext'
import CartItem from './CartItem';
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
            <div className='cartProductsContainer flexProperty'>
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
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    .cartProductsContainer{
      max-width: 60rem;
      gap: 1rem;
    }
  }
`;

export default Cart
