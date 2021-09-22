import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";


export default function AdiminJogoCreate(props) {
  const [genero, setGenero] = useState([]);
  const [loading, setLoading] = useState(true);
  // @ts-ignore


  useEffect(() => {
    const loadDataGenero = async () => {
      const resposta = await Api.buildAppGetRequest(Api.readgenerosUrl());

      const resultado = await resposta.json();

      setGenero(resultado);
      setLoading(false)
    };
    loadDataGenero();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const imagemUrl = e.target.ImagemUrl.value;
    const anoString = e.target.ano.value;
    const notaString = e.target.nota.value;
    const Descricao = e.target.descricao.value;
    const genero = e.target.genero.value;
    const trailer = e.target.trailer.value;
    const gameplay =e.target.gameplay.value;

    const nota = parseFloat(notaString);
    const ano = parseInt(anoString);
    const generoInt = parseInt(genero)
    const generoId = [generoInt]

    const payload = {
      nome,
      imagemUrl,
      ano,
      nota,
      Descricao,
      generoId,
      trailer,
      gameplay,
    };

    const req = await Api.buildApiPostRequest(Api.createJogos(), payload);

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
      <div className="card-titulo">
        <h1>Criar jogo</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-jogo form">
          <label htmlFor="nome" className="form__label">
            Nome:
          </label>
          <br />

          <input
            type="text"
            id="nome"
            name="nome"
            className="form__input"
          />
          <br />

          <label htmlFor="ImagemUrl" className="form__label">
            URL da imagem
          </label>
          <br />

          <input
            type="url"
            id="ImagemUrl"
            name="ImagemUrl"
            className="form__input"
          />
          <br />

          <label htmlFor="ano" className="form__label">
            Data de lançamento:
          </label>
          <br />

          <input
            type="number"
            id="ano"
            name="ano"
            className="form__input"
          />
          <br />

          <label htmlFor="nota" className="form__label">
            Nota IMDB:
          </label>
          <br />

          <input
            type="text"
            id="nota"
            name="nota"
            className="form__input"
          />
          <br />
          <label htmlFor="trailer" className="form__label">
            Trailer:
          </label>
          <br />

          <input
            type="url"
            id="trailer"
            name="trailer"
            className="form__input"
          />
          <br />
          <label htmlFor="gameplay" className="form__label">
            Gameplay:
          </label>
          <br />

          <input
            type="url"
            id="gameplay"
            name="gameplay"
            className="form__input"
          />
          <br />

          <label htmlFor="genero" className="form__label">
            Genero:
          </label>
          <br />

          <select id="genero" className="genero">
            <optgroup label="Selecione os generos">
              {genero.map((genero) => (
                <option value={genero.id} key={`localizacao: ${genero.id}`}>
                  {genero.nome}
                </option>
              ))}
            </optgroup>
          </select>
          <br />
        </div>

        <label htmlFor="textarea" className="textarea">
          Descrição
        </label>
        <textarea
          id="textarea"
          name="descricao"
          className="textarea"
        ></textarea>

        <div className="botao">
          <input
            type="submit"
            value="Atualizar"
            className="buttons__button buttons__button--danger"
          />
        </div>
      </form>
    </div>
  );
}
