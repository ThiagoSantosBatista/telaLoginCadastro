import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  margin-bottom: 3.2rem;
  border: none;
  border-radius: 0.4rem;
  color: #ffffff;
  background-color: #f5487f;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  @media (hover: hover) {
    &:hover {
      background-color: #8f3b76;
    }
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 2.4rem;

  }
`;
