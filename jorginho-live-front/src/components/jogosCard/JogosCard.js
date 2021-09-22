import React from "react";
import { useHistory } from "react-router-dom";

export default function JogosCard({ jogos }) {
    let history = useHistory ();
    
    const handleClick = () => {
        history.push (`/jogos/${jogos.id}`);    
    }

    return(
        <div className="card" onClick={handleClick}>
            <h1 className="card_titulo">{jogos.nome}</h1>
            <img src={jogos.imagemUrl} alt={jogos.nome}/>
            <span className="card_span">nota IMDB: {jogos.nota}</span>
        </div>
    )
}