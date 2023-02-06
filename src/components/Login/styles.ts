import styled from "styled-components";

export const ForgotPasswordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  margin: 2rem 0 3.2rem;
  font-size: 1.4rem;

  a {
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    align-items: flex-start;
    flex-direction: column;

    a {
      order: -1;
    }
  }
`;
