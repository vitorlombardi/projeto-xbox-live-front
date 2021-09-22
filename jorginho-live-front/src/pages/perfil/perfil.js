import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api } from "../../api/api";
import CardPerfilId from "../../components/cardPerfilId/cardPerfilId";

export default function Perfil() {
  const [perfil, setPefil] = useState([]);
  const [loading, setLoading] = useState(true);

  // @ts-ignore
  const { id } = useParams()

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readPerfilId(id));

      const result = await res.json();
      setPefil(result);
      setLoading(false);
    };
    loadData();
  }, [id]);

  console.log(perfil)

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando perfil...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="perfil">
              <CardPerfilId perfil={perfil} />
      </div>
    </>
  );
}
