import React from "react";
import { Api } from "../../api/api";

export default function CriaPerfil(props){

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const nome = e.target.nome.value;
        const ImagemUrl = e.target.ImagemUrl.value;
    
        const payload = {
          nome,
          ImagemUrl,
        };
    
        const res = await Api.buildApiPostRequest(Api.createPerfilUrl(), payload);
        // const bodyResponse = await res.json();
    
        console.log(payload)
    
        //props.history.push("/usuario/perfil");
      };
    

    return(
        <div className="form-corpo">
            <div className="form-titulo">
                <span>dados do perfil:</span>
            </div>
        <form className="login__form form" onSubmit={handleSubmit}>
          <label htmlFor="nome" className="form__label">
            Nome:
          </label>
          <br />

          <input type="text" id="nome" name="nome" className="form__input" />
          <br />

          <label htmlFor="ImagemUrl" className="form__label">
            URL da imagem
          </label>
          <br />

          <input
            type="text"
            id="ImagemUrl"
            name="ImagemUrl"
            className="form__input"
          />
          <br />


          <div className="botao">
            <input
              type="submit"
              value="Criar"
              className="buttons__button buttons__button--danger"
            />
          </div>
        </form>
      </div>
    )
}