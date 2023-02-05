import React from "react";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styles";

interface LoginProps {
  toggleRegister: (value: boolean) => void;
}

const Login = ({ toggleRegister }: LoginProps) => {
  return (
    <S.Form>
      <header>
        <h1>Login</h1>
        <p>Bem vindo de volta! Insira seus dados.</p>
      </header>
      <Input id="email" label="Email" type="email" />
      <Input id="senha" label="Senha" type="password" />
      <S.ForgotPasswordBox>
        <Input id="checkbox" label="Lembrar de mim" type="checkbox" />
        <a href="#home">Esqueceu sua senha?</a>
      </S.ForgotPasswordBox>
      <Button text="Entrar" />
      <footer>
        <p>
          Não tem uma conta?{" "}
          <span className="medium" onClick={() => toggleRegister(true)}>
            Registre-se.
          </span>
        </p>
      </footer>
    </S.Form>
  );
};

export default Login;
