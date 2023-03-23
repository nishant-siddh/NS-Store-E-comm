import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <div className='flexProperty'>
        <NavLink to='/'>
          Home
        </NavLink>/{title}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.blackColor};
    font-size: 1.3rem;
    padding: 1.2rem;
    margin-top: 0.1rem;
    
    div{
      justify-content: start;
      width: fit-content;
      color: ${({ theme }) => theme.colors.lightWhite};
    }
    
    a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.baseColor};
    }
`;

export default PageNavigation
