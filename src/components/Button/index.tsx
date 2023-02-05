import React from "react";
import * as S from "./styles";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <S.Button>{text}</S.Button>;
};

export default Button;
