import React from "react";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterContext";

const View = () => {
  const { view, toggleGridView, toggleListView } = useFilterContext();

  const handletoggleGridView = () => {
    toggleGridView();
  };

  const handletoggleListView = () => {
    toggleListView();
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <span className="viewIcons">
            <HiOutlineViewGrid onClick={handletoggleGridView} title="Grid view" className={view ? 'active gridIcon' : 'gridIcon'} />
            <HiOutlineViewList onClick={handletoggleListView} title="List view" className={!view ? 'active listIcon' : 'listIcon'} />
          </span>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .viewIcons {
    background-color: ${({ theme }) => theme.colors.greyBackground};
    display: inline-block;
    padding: 0 0.1rem;
    /* outline: 1px solid red; */
      .gridIcon,
      .listIcon {
        color: ${({ theme }) => theme.colors.baseColor};
        font-size: 2rem;

        &:visited {
          color: red;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.blackColor};
          background-color: ${({ theme }) => theme.colors.baseColor};
        }

      }
      
      .active{
        color: ${({ theme }) => theme.colors.greyBackground};
        background-color: ${({ theme }) => theme.colors.baseColor};
      }
  }
  
  @media (max-width: 560px){
    .container{
      padding: 1rem 1rem;
    }

    .gridIcon, 
    .listIcon{
      font-size: 5rem;
    }
  };
`;

export default View;
