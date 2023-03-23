import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.baseColor};
    margin-top: 10px;
    padding: 13px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightWhite};

    &:hover,
    &:active {
        background-color: ${({ theme }) => theme.colors.onHoverBtnBgColor};
    }
    
    a{
        text-decoration: none;
    }
`;

// d1b240