import React from "react";
import { Api } from "../../api/api";

export default function Login(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.senha.value;

    const payload = {
      email,
      senha,
    };

    const res = await Api.buildApiPostRequest(Api.loginUrl(), payload);
    const bodyResponse = await res.json();

    localStorage.setItem("Jwt", bodyResponse.accessToken);

    props.history.push("/");
  };

  const handleClick = () => {
    props.history.push("/cadastro")
  }

  return (
    <>
      <div className="form-corpo">
        <div className="form-titulo">
          <span>dados do usuario:</span>
        </div>
        <form className="login__form form" onSubmit={handleSubmit}>
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
              value="Logar"
              className="buttons__button buttons__button--success"
            />

            <button
              type="button"
              className="buttons__button buttons__button--danger"
              onClick={handleClick}
              >
                Cadastro
              </button>
          </div>
        </form>
      </div>
    </>
  );
}
