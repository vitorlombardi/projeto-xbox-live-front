import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";
import CardPerfils from "../../components/cardPerfils/cardPerfils";
import CardRedirecionaCriaPerfil from "../../components/cardRedirecionaCriaPerfil/cardRedirecionaCriaPerfil";

export default function Perfils() {
  const [perfil, setPefil] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readPerfilUrl());

      const result = await res.json();
      setPefil(result);
      setLoading(false);
    };
    loadData();
  }, []);

  console.log(perfil)

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
        <h1>escolha um perfil:</h1>
      </div>
      <div className="cards-perfils">
          {perfil.map((perfil) => (
              <CardPerfils
                perfil={perfil}
                key={`key de ${perfil.nome}`}
              />
          ))}
          <div className="card-cria-perfil">
            <CardRedirecionaCriaPerfil/>
          </div>
      </div>
    </>
  );
}
