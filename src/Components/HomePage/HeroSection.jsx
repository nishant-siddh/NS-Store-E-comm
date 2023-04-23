import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Styles/Button';

const HeroSection = ({name, image}) => {

  // const handleClick = (e) => {
  //   e.preventDefault();
  // }

  return (
    <Wrapper>
      <div className='heroSectionContainer flexProperty'>
        <div className="heroSection flexProperty">
          <div className='heroTextContainer'>
            <h1 className='heroText'>Hello, <span className='text heading_text'>Welcome to {name}</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate provident aspernatur mollitia vel optio necessitatibus tempora debitis error quis pariatur!</p>
          </div>

          <NavLink to='/products'>
            <Button className='btn'>
              Shop Now
            </Button>
          </NavLink>
          
        </div>
        <img src={image} alt="" className='heroImage' />
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .heroSectionContainer{
    margin: 5rem auto 0;
    background-color: ${({theme}) => theme.colors.greyBackground};
    padding: 1.25rem;
    max-width: 70rem;
    /* text-align: center; */
    gap: 3rem;
  }

  .heroSection{
    flex-direction: column;
    align-items: flex-start;
    /* text-align: center; */
  }

  .heroTextContainer{
    max-width: 25rem;
  }

  p{
    margin-top: 10px;
    font-size: 0.9rem;
    line-height: 1.3rem;
    /* letter-spacing: 0.rem; */
    color: ${({ theme }) => theme.colors.lightWhite};
  }

  .heroImage{
    width: 100%;
    max-width: 25rem;
    min-width: 10rem;
    box-shadow: 82px -71px 3px -42px rgb(184, 159, 72, 0.75);
    -webkit-box-shadow: 82px -71px 3px -42px rgb(184, 159, 72, 0.75);
    -moz-box-shadow: 82px -71px 3px -42px rgb(184, 159, 72, 0.75);

  }

  @media (max-width: 865px){
    .heroSectionContainer{
        margin: 3rem auto 0;
    }
  }
`;

export default HeroSection
