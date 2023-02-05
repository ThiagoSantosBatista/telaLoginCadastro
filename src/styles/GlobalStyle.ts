import styled, { createGlobalStyle } from "styled-components";
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

export const Form = styled.form`
  width: 100%;
  max-width: 38.6rem;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: #ffffff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.25);
  animation: form 0.4s;

  header {
    h1 {
      margin-bottom: 0.8rem;
      font-size: 3.2rem;
      font-weight: 700;
    }
    p {
      margin-bottom: 2.4rem;
      line-height: 1.5;
    }
  }

  footer {
    text-align: center;
  }
  .medium {
    font-weight: 500;
    color: #f5487f;
    cursor: pointer;
    transition: all .3s;

    &.termos {
      text-decoration: underline;
    }

    @media (hover: hover) {
      &:hover {
        color: #8f3b76;
      }
    }
  }

  @keyframes form {
    from {
      opacity: 0;
      transform: translateY(-6rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
