import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";

import "./adimin-jogos.css";

export default function AdiminJogos() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readAllJogos());

      const result = await res.json();

      setJogos(result);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando jogos...</h1>
      </div>
    );
  }

  return (
      <div className="tabela">
          {jogos.map((jogo) => (
              <ul className="tabela_header" key={`tabela do jogo ${jogo.nome}`}>
                <li className="tabela-nome">{jogo.nome}</li>
                <li className="tabela-imagem">
                    <img
                    className="tabela-img"
                    src={jogo.imagemUrl}
                    alt={jogo.nome}
                    />
                </li>
                <li className="tabela-botao">
                    <Link to={`/adimin/jogos/editar/${jogo.id}`}>editar</Link>
                </li>
                <li className="tabela-botao">
                    <button>deletar</button>
                </li>
            </ul>
          ))}
        
      </div>
  );
}
