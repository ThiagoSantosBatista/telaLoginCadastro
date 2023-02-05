import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 38.6rem;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: #ffffff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.25);

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

    &.termos {
      text-decoration: underline;
    }
  }
`;

export const TermosBox = styled.div`
  margin: 2rem 0 3.2rem;
  font-size: 1.4rem;
`;
