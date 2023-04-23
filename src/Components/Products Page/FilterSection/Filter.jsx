import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../../Context/FilterContext";
import FilterByCategory from "./FilterByCategory";
import FilterByColors from "./FilterByColors";
import FilterByCompany from "./FilterByCompany";
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
import ClearFilter from "./ClearFilter";

const Filter = () => {
  const { allProductsFilter } = useFilterContext();

  return (
    <>
      {allProductsFilter.length !== 0 && (
        <Wrapper className="filter">
          <FilterByName />
          <FilterByCategory />
          <FilterByCompany />
          <FilterByColors />
          <FilterByPrice />
          <ClearFilter />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.section`
  background-color: ${({theme}) => theme.colors.lightGreyBackground};
  padding: 0.6rem;
`;

export default Filter;
