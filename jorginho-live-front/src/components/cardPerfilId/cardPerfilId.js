import React from "react";
import { Link } from "react-router-dom";

import "./cardPerfilId.css";

export default function CardPerfilId({ perfil }) {
  return (
    <div className="card-perfil">
      <img src={perfil.imagemUrl} alt={perfil.nome} />
      <div className="perfil-texto">
        <span className="nome-perfil">Nome do perfil: {perfil.nome}</span>
        <span className="nome-perfil">nome do usuario: usuario</span>
        <span className="nome-perfil">Email : usuario.email</span>
      </div>
      <div className="botoes">
        <div className="botao">
          <Link
            to="/usuario/perfil/criar"
            className="buttons__button buttons__button--danger"
          >
            Mudar perfil
          </Link>
        </div>
        <br/>
        <div className="botao">
          <Link
            to="/usuario/perfil/deletar"
            className="buttons__button buttons__button--sucesse"
          >
            Deletar perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
