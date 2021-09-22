import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";

export default function AdiminGenero() {
  const [genero, setGenero] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readgenerosUrl());

      const result = await res.json();

      setGenero(result);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando Generos...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="card-titulo">
        <h1>Generos</h1>
        <div className="botao">
          <Link
            to="/adimin/generos/criar"
            className="buttons__button buttons__button--sucesse"
          >
            Criar genero
          </Link>
        </div>
      </div>
      <div className="tabela">
        {genero.map((genero) => (
          <ul className="genero" key={`tabela do jogo ${genero.nome}`}>
            <li className="genero-nome">{genero.nome}</li>
            <li className="genero-botao">
              <Link to={`/adimin/generos/editar/${genero.id}`}>editar</Link>
            </li>
            <li className="genero-botao">
              <button>deletar</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
