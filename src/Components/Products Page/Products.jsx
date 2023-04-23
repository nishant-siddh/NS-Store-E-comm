import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../Context/ProductContext";
import Filter from "./FilterSection/Filter";
import ProductList from "./ProductList";

const Products = () => {
  const { isLoading } = useProductContext();
  return (
    <>
      <Wrapper>
        {isLoading ? (
          "...Loading"
          ) : (
            <div className="allProducts flexProperty">
              <Filter />
              <ProductList />
            </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .allProducts {
    justify-content: center;
    align-items: flex-start;
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export default Products;
