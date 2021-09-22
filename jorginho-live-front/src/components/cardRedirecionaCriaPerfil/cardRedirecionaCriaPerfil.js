import React from "react";
import { useHistory } from "react-router-dom";

import mais from '../../img/mais.png'

export default function CardRedirecionaCriaPerfil(props){

    let history = useHistory ();
    const handleClick = () => {
        history.push ("/usuario/perfil/criar");    
    }

    return (
        <div className="card-perfil card-criaPerfil" onClick={handleClick}>
            <span>Criar perfil</span>
            <img src={mais} alt="icone de mais"/>
        </div>
    )
}