import React from "react";
import { Api } from "../../api/api";

export default function Cadastro(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const sobrenome = e.target.sobrenome.value;
    const cpfNumber = e.target.cpf.value;
    const cpf = cpfNumber.toString()
    const email = e.target.email.value;
    const senha = e.target.senha.value;

    const payload = {
      nome,
      sobrenome,
      cpf,
      email,
      senha,
    };

    const res = await Api.buildApiPostRequest(Api.cadastroUrl(), payload);
    // const bodyResponse = await res.json();

    console.log(payload)

    props.history.push("/login");
  };

  return (
    <>
      <div className="form-corpo">
      <div className="form-titulo">
          <span>Preencha seus dados:</span>
        </div>
        <form className="login__form form" onSubmit={handleSubmit}>
          <label htmlFor="nome" className="form__label">
            Nome:
          </label>
          <br />

          <input type="text" id="nome" name="nome" className="form__input" />
          <br />

          <label htmlFor="sobrenome" className="form__label">
            Sobrenome
          </label>
          <br />

          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            className="form__input"
          />
          <br />

          <label htmlFor="cpf" className="form__label">
            CPF:
          </label>
          <br />

          <input type="number" 
          id="cpf" 
          name="cpf" 
          className="form__input" 
          />
          <br />
          
          <label htmlFor="Email" className="form__label">
            Email:
          </label>
          <br />

          <input type="text" id="email" name="email" className="form__input" />

          <br />

          <label htmlFor="Senha" className="form__label">
            Senha:
          </label>
          <br />

          <input
            type="password"
            id="senha"
            name="senha"
            className="form__input"
          />
          <br />
          <br />

          <div className="botao">
            <input
              type="submit"
              value="cadastrar"
              className="buttons__button buttons__button--danger"
            />
          </div>
        </form>
      </div>
    </>
  );
}
