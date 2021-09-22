import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { Api } from "../../api/api";
import JogosCard from "../jogosCard/JogosCard";

export default function ListaCapasHome({ text }) {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [jogoFiltrado, setJogoFiltrado] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readAllJogos());

      const result = await res.json();

      setJogos(result);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    setFiltro(text);
  }, [text]);

  // useEffect(() => {
  //   const filtroJogo = jogos.filter((jogo) => jogo.nome.toLowerCase().includes(toLowerBusca) )
  //   setJogoFiltrado(filtroJogo)
  //   console.log(filtroJogo)
  // }, [filtro, jogos, toLowerBusca])

  const filtrosJogos = useMemo(() => {
    const toLowerBusca = filtro.toLowerCase();

    const filtroJogo = jogos.filter((jogo) =>
      jogo.nome.toLowerCase().includes(toLowerBusca)
    );
    setJogoFiltrado(filtroJogo);
  }, [filtro, jogos]);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando biblioteca de jogos...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="card-titulo">
        <h1>Biblioteca de jogos</h1>
      </div>
      <div className="cards">
        {jogoFiltrado.map((jogos, index) => (
          <JogosCard jogos={jogos} key={`jogo:${index}`} />
        ))}
      </div>
    </>
  );
}
