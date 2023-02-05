import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-size: clamp(1.6rem, 1.4235rem + 0.4902vw, 1.8rem);
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
  font-size: clamp(1.4rem, 1.2235rem + 0.4902vw, 1.6rem);
  transition: all 0.3s;

  &:focus,
  &:hover {
    border-color: #f5487f;
    outline-color: #f5487f;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const LabelCheckbox = styled.label`
  font-size: 1.4rem;
`;
export const InputCheckbox = styled.input`
  position: relative;
  min-height: 1.8rem;
  min-width: 1.8rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  cursor: pointer;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.6rem;
    height: 1rem;
    border-right: 0.2rem solid #f5487f;
    border-bottom: 0.2rem solid #f5487f;
    transform: translate(-50%, -70%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:checked::before {
    opacity: 1;
  }
`;
