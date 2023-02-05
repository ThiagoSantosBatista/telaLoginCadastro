import React from "react";
import * as S from "./styles";

interface InputProps {
  id: string;
  label: string;
  type: string;
}

const Input = ({ id, label, type }: InputProps) => {
  {
    if (type === "checkbox") {
      return (
        <S.CheckboxWrapper>
          <S.InputCheckbox id={id} type={type} required />
          <S.LabelCheckbox htmlFor={id}>{label}</S.LabelCheckbox>
        </S.CheckboxWrapper>
      );
    }
  }
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} type={type} required />
    </>
  );
};

export default Input;
