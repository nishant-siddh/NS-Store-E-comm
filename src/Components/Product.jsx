import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './FormatPrice';


const Product = (element) => {
    const { id, name, price, image } = element;

    return (
        <Wrapper>
            <div className='productItem'>
                <NavLink className='nav-link' to={`/singleProduct/${id}`}>
                    <div className='container flexProperty'>
                        <img src={image} alt={name} />
                        <div className="overlay"></div>
                    </div>
                    {/* <figcaption className='caption'>{category}</figcaption> */}

                    <div className="cardData flexProperty">
                        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        <div className='cardPricing flexProperty'>
                            <p className="cardDataPrice">
                                <FormatPrice price={price} />
                            </p>

                            {/* original price */}
                            <p className='originalPrice'>
                                &nbsp;&nbsp;
                                {/* {console.log(price, 'price')} */}
                                <del><FormatPrice price={price + 25000} /></del>
                                {/* <span>&nbsp;&nbsp;(Inclusive of all taxes)</span> */}
                            </p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .productItem{
      background-color: ${({theme}) => theme.colors.greyBackground};
      padding: 0.5rem;

        .container{
            position: relative;
            overflow: hidden;
            max-width: 22rem;
            max-height: 15rem;
                
            img{
                width: 95%;
                object-fit: cover;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                background-color: ${({ theme }) => theme.colors.blackColor};
                opacity: 0.7;
                overflow: hidden;
                width: 0;
                height: 100%;
                transition: .5s ease;
            }

            
            &:hover img{
                scale: 1.1;
                transition: all .4s ease-in-out;
            } 
                
            
            &:hover .overlay{
                width: 100%;
            }
        }
    }

    .cardData{
        flex-direction: column;
        align-items: flex-start;
        padding: 0 0 0 0.5rem;

        h3{
            color: ${({theme}) => theme.colors.lightWhite};
        }
        
        p{
            color: ${({theme}) => theme.colors.lightWhite};
        }

        .cardDataPrice{
            margin: 0.5rem 0;
            font-size: 1.2rem;
        }
        
        .originalPrice{
            font-size: 0.8rem;
        }
    }


    .nav-link{
        &:link,
        &:visited{
            text-decoration: none;
        }   
    }
`;

export default Product
