import styled from 'styled-components'

const CartProductQuantity = ({ productQuantity, setDecrement, setIncrement }) => {
  return (
    <Wrapper>
        <div className='noOfItemsToCart flexProperty'>
            <button type='button' className="quantityToggleBtn" onClick={setDecrement}>-</button>
            <p>{productQuantity}</p>
            <button type='button' className="quantityToggleBtn" onClick={setIncrement}>+</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .noOfItemsToCart{
        justify-content: space-around;
        width: 7rem;

        .quantityToggleBtn{
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
`;

export default CartProductQuantity
