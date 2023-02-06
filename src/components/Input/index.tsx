import React, { useState } from "react";
import { ReactComponent as EyeOnSvg } from "../../assets/eyeOn.svg";
import { ReactComponent as EyeOffSvg } from "../../assets/eyeOff.svg";
import * as S from "./styles";

interface InputProps {
  id: string;
  label: string;
  type: string;
  termos?: boolean;
  visible?: (value: boolean) => void;
}

const Input = ({ id, label, type, termos, visible }: InputProps) => {
  const [inputType, setInputType] = useState("password");

  function changeInputType() {
    return inputType === "password"
      ? setInputType("text")
      : setInputType("password");
  }

  {
    if (type === "checkbox" && termos) {
      return (
        <S.CheckboxWrapper>
          <S.InputCheckbox id={id} type={type} name={id} required />
          <S.LabelCheckbox htmlFor={id}>
            {label}
            {termos && (
              <a href="#home" className="medium termos">
                Termos e Condições de Uso.
              </a>
            )}
          </S.LabelCheckbox>
        </S.CheckboxWrapper>
      );
    }
    if (type === "checkbox") {
      return (
        <S.CheckboxWrapper>
          <S.InputCheckbox id={id} type={type} name={id} />
          <S.LabelCheckbox htmlFor={id}>{label}</S.LabelCheckbox>
        </S.CheckboxWrapper>
      );
    }
    if (type === "password") {
      return (
        <>
          <S.Label htmlFor={id}>{label}</S.Label>
          <S.PasswordBox>
            <S.Input
              className="password"
              id={id}
              type={inputType}
              name={id}
              required
            />
            {inputType === "text" && <EyeOffSvg onClick={changeInputType} />}
            {inputType === "password" && <EyeOnSvg onClick={changeInputType} />}
          </S.PasswordBox>
        </>
      );
    }
  }
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} type={type} name={id} required />
    </>
  );
};

export default Input;
