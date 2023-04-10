import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ViewProduct = ({id}) => {
  return (
    <Wrapper>
        <NavLink className="navLink" to={`/singleProduct/${id}`}>
            <div className="viewProduct">View Product</div>
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .viewProduct{
    transition: color 0.2s linear;
  }
`;

export default ViewProduct
