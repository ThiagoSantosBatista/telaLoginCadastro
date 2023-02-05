import React from "react";
import * as S from "./styles";

interface InputProps {
  id: string;
  label: string;
  type: string;
  termos?: boolean;
}

const Input = ({ id, label, type, termos }: InputProps) => {
  {
    if (type === "checkbox") {
      return (
        <S.CheckboxWrapper>
          <S.InputCheckbox id={id} type={type} required />
          <S.LabelCheckbox htmlFor={id}>{label}{termos === true ? <span className="medium termos">Termos e Condições de Uso.</span> : null}</S.LabelCheckbox>
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
