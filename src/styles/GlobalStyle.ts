import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.svg";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    min-height: 100vh;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.8);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${Background});
  }
  img{
    display: block;
    max-width: 100%;
  }
  a, li, button{
    color: inherit;
    list-style: none;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
