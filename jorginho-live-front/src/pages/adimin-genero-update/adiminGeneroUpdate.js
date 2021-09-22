import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api } from "../../api/api";

export default function AdiminGeneroUpdate(props) {
  // @ts-ignore
  const { id } = useParams();
  const [ genero, setGenero] = useState(undefined)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await Api.buildAppGetRequest(Api.readGeneroPorId(id));
      const result = await res.json();

      setGenero(result);
      setLoading(false);
    };
    loadData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    
    const payload = {
      nome,
      
    };

    console.log(payload);

    const req = await Api.buildApiUpdateRequest(
      Api.updateJogoPorId(id),
      payload
    );

    const result = await req.json();

    props.history.push("/adimin/jogos");
  };

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando informações do jogos...</h1>
      </div>
    );
  }


    
      return (
          <div>
              bao
          </div>
        // <div>
        //    <div className="card-titulo">
        //     <h1>Editar dados de {defaultJogo.nome}</h1>
        //   </div>
        //   <form className="form" onSubmit={handleSubmit}>
        //     <div className="form-jogo form">
        //       <label htmlFor="nome" className="form__label">
        //         Nome:
        //       </label>
        //       <br />
    
        //       <input
        //         type="text"
        //         id="nome"
        //         name="nome"
        //         className="form__input"
        //         defaultValue={defaultJogo.nome}
        //       />
        //       <br />
    
    
        //     <div className="botao">
        //       <input
        //         type="submit"
        //         value="Atualizar"
        //         className="buttons__button buttons__button--danger"
        //       />
        //     </div>
        //   </form>
        // </div> */}
  )
}