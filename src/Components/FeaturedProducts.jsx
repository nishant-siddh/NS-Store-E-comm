import React from "react";
import { useProductContext } from "../Context/ProductContext";
import styled from "styled-components";
import Product from "./Product";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();

  return (
    <Wrapper>
      <h2>
        Feature <span className="heading_text">Products</span>
      </h2>

      <div>
        {isLoading ? (
          "...Loading"
        ) : (
          <div className="products flexProperty">
            {featuredProducts.map((element) => {
              return <Product key={element.id} {...element} />;
            })}
          </div>
        )}
      </div>

      <NavLink to="/products">
        <Button className="btn">
          All Products
        </Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 3rem auto;
  max-width: 100rem;
  /* padding: 1rem; */
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  .products {
    justify-content: center;
    gap: 1rem;
  }
`;

export default FeaturedProducts;
