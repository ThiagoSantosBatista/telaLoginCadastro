import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  margin-bottom: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.8);
  border-radius: 0.4rem;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.6rem;
  transition: all .3s;

  &:focus , &:hover {
    border-color: #F5487F;
    outline-color: #F5487F;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LabelCheckbox = styled.label`
  font-size: 1.4rem;
`;
export const InputCheckbox = styled.input`
  position: relative;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 0.8rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.6rem;
    height: 1rem;
    border-right: 0.2rem solid #F5487F;
    border-bottom: 0.2rem solid #F5487F;
    transform: translate(-50%, -70%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:checked::before {
    opacity: 1;
  }
`;
