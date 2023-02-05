import React from "react";
import Button from "../Button";
import Input from "../Input";
import { Form } from "../../styles/GlobalStyle";
import * as S from "./styles";

interface CadastroProps {
  toggleRegister: (value: boolean) => void;
}

const Cadastro = ({ toggleRegister }: CadastroProps) => {
  return (
    <Form>
      <header>
        <h1>Crie sua conta</h1>
        <p>Seja bem vindo! Insira seus dados.</p>
      </header>
      <Input id="nome" label="Nome" type="text" />
      <Input id="email" label="Email" type="email" />
      <Input id="senha" label="Senha" type="password" />
      <S.TermosBox>
        <Input
          id="checkbox"
          label="Concordo com os "
          type="checkbox"
          termos={true}
        />
      </S.TermosBox>
      <Button text="Cadastrar" />
      <footer>
        <p>
          Já possui conta?{" "}
          <a
            href="#home"
            className="medium"
            onClick={() => toggleRegister(false)}
          >
            Fazer login.
          </a>
        </p>
      </footer>
    </Form>
  );
};

export default Cadastro;
