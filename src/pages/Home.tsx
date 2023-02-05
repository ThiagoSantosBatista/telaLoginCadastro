import React, { useState } from "react";
import Cadastro from "../components/Cadastro";
import Login from "../components/Login";
import * as S from "./styles";

const LoginPage = () => {
  const [register, setRegister] = useState(false);

  function toggleRegister(bol: boolean) {
    return setRegister(bol);
  }

  return (
    <S.Main>
      {!register && <Login toggleRegister={toggleRegister} />}
      {register && <Cadastro toggleRegister={toggleRegister} />}
    </S.Main>
  );
};

export default LoginPage;
