import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api } from "../../api/api";

import "./infoJogos.css";

export default function InfoJogo() {
  const [jogo, setJogo] = useState({});
  // @ts-ignore
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readJogoPorId(id));

      const result = await res.json();
      setJogo(result);
      setLoading(false);
    };
    loadData();
  }, [id]);
  console.log(jogo);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando informações do jogo...</h1>
      </div>
    );
  }

  return (
    <div className="jogo">
      <div className="card-nome-img-nota-ano">
        <span className="span-titulo">{jogo.nome}</span>
        <img src={jogo.imagemUrl} alt={jogo.nome} />
        <span className="span-dados">
          <b>Ano de lançamento:</b> {jogo.ano}
        </span>
        <span className="span-dados">
          <b>nota IMDB:</b> {jogo.nota}
        </span>
      </div>
      <div className="card-dados-jogo">
        <div className="card-descricao">
          <span className="span-dados">
            <b>Descrição</b>
          </span>
          <p>{jogo.Descricao}</p>
        </div>
        <div className="card-iframe">
          <div className="card-trailer">
            <span className="span-dados">
              <b>Trailer</b>
            </span>
            <iframe
              className="iframe"
              src={jogo.trailer}
              title={`trailer de ${jogo.nome}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-gameplay">
            <span className="span-dados">
              <b>Gameplay</b>
            </span>
            <iframe
              className="iframe"
              src={jogo.gameplay}
              title={`gameplay de ${jogo.nome}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
