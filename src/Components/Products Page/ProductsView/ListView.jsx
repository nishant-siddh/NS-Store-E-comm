import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useFilterContext } from '../../../Context/FilterContext';
import FormatPrice from '../../FromatPriceIntoRs/FormatPrice';
import Stars from '../../SingleProductDetailsPage/Stars';
import { Button } from '../../../Styles/Button';

const ListView = () => {
  const { filterProducts } = useFilterContext();

  return (
    <Wrapper>
        <div className="listView">
          {filterProducts.map((element) => {
            const {id, name, image, price, stars, description} = element;
            return (
              <div key={id}>
                {/* List Image */}
                <div className="container grid_2Column">
                  <div className='listItemImage flexProperty'>
                    <img src={image} alt={name} />
                    <div className="overlay"></div>
                  </div>

                  {/*  List Content */}
                  <div className="cardData">
                    {/* name */}
                    <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

                    {/* stars */}
                    <div>
                      { stars && <Stars stars={stars} reviews={reviews} /> }
                    </div>

                    <div className='cardPricing flexProperty'>
                      {/* price */}
                      <p className="cardDataPrice">
                          <FormatPrice price={price} />
                      </p>

                      {/* original price */}
                      <p className='originalPrice'>
                        &nbsp;&nbsp;
                        {/* {console.log(price, 'price')} */}
                        <del><FormatPrice price={price + 25000} /></del>
                        <span>&nbsp;&nbsp;</span>
                      </p>
                    </div>

                    {/* description */}
                    <p className='description'>
                      {description.slice(0, 170)}...
                    </p>

                    {/* view More button */}
                    <NavLink className='nav-link' to={`/singleProduct/${id}`}>
                      <Button className='btn'>
                            Read More
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .listView{
    max-width: 70rem;
    margin: 0 0.5rem;
    padding: 1rem 0;
    
    .container{
      padding: 0.8rem 0.5rem;
      background-color: ${({theme}) => theme.colors.lightGreyBackground};
      margin-bottom: 1rem;
      gap: 1rem;
    
      .listItemImage{
        /* outline: 2px solid green; */
        position: relative;
        overflow: hidden;
        max-width: 22rem;
            
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
        
      .cardData{
        width: 100%;
        padding: 0 0 0 0.5rem;

        h3{
          color: ${({theme}) => theme.colors.lightWhite};
          font-size: 1.8rem;
        }
        
        p{
          color: ${({theme}) => theme.colors.lightWhite};
        }

        .cardPricing{
          justify-content: flex-start;
          
          .cardDataPrice{
            margin: 0.5rem 0;
            font-size: 1.2rem;
          }
  
          .originalPrice{
            font-size: 0.8rem;
          }
        }

        .description{
          margin: 0.5rem 0;
          line-height: 1.4rem;
          letter-spacing: 0.06rem;
        }
      }
    }
    
    .nav-link{
        &:link,
        &:visited{
            text-decoration: none;
        }   
    }

    .btn{
      /* margin-bottom: 1rem; */
    }
  }
  
  @media (max-width: ${({theme}) => theme.media.smallDevices}){
    .container{
      grid-template-columns: repeat(1 , 1fr);
    }

    .description{
      max-width: 22rem;
    }
  }

`;

export default ListView
