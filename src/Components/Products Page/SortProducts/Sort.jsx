import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../../Context/FilterContext";

const Sort = () => {
  let { updateSortCurrentValue, sortCurrentValue } = useFilterContext();
  const [displayClear, setDisplayClear] = useState(true);
  
  const handleSelect = (e) => {
    updateSortCurrentValue(e.target.value);
  }
  
  useEffect(() => {
    if(sortCurrentValue === 'all'){
      setDisplayClear(true)
    }
    if(sortCurrentValue !== 'all'){
      setDisplayClear(false)
    }
  }, [sortCurrentValue]);
  
  
  return (
    <Wrapper>
      <div className="sortContainer">
        <label htmlFor="sort">
            Sort By :&nbsp;
            <select name="sort" id="sort" defaultValue={sortCurrentValue} onChange={handleSelect}>
                <option value="all" disabled={displayClear}>Featured</option>
                <option value="lowToHigh">Price - Low to High</option>
                <option value="highToLow">Price - High to Low</option>
            </select>
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #sort {
    outline: transparent;
    border: none;
    padding: 0.2rem;
  }
`;

export default Sort;
