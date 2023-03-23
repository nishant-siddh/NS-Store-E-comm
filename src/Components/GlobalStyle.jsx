import { createGlobalStyle } from "styled-components";

// const colors = {
//     yellow: '#b89f48'
// };

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::selection {
  /* color: white; */
  background: ${({theme}) => theme.colors.baseColor};
}

h1{
    font-size: 1.7rem;
    font-weight: normal;
}

h2, h3, h4, p, div{
    font-weight: normal;
    color: #ebe5e5;
}

a{
    color: #ebe5e5;
}

.text{
  position: relative;
}

.heading_text{
  color: ${({theme}) => theme.colors.baseColor};
}

.flexProperty{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.grid_2Column{
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.grid_3Column{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

hr{
    background-color: ${({ theme }) => theme.colors.baseColor};
    height: 0.05rem;
    border: 0;
}

/* @media screen and (max-width: 390px ) {
    .logo{
        width: 50%;
    }
    h1 {
        font-size: 1.3rem;
    }
    .shopNowBtn{
        padding: 5px 8px;
    }

    .heroSection{
        position: absolute;
        top: 20%;
    }
}

@media screen and (min-width: 390px ) {
    .shopNowBtn{
        padding: 8px 15px;
    }

    .heroSection{
        position: absolute;
        top: 20%;
    }
}

@media screen and (min-width: 540px ) {
    h1{
        font-size: 2rem;
    }

    .shopNowBtn{
        padding: 12px 25px;
    }

    .heroSection{
        position: absolute;
        top: 50%;
        translate: 0 -50%;
    }

} */
`;