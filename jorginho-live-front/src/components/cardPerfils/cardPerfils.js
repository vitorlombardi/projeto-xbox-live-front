import React from "react";
import './cardPerfils.css'

export default function CardPerfils ({ perfil }){
    return(
        <div className="cards-perfil">
            <span>{perfil.nome}</span>
            <img src={perfil.imagemUrl} alt={perfil.nome}/>
        </div>
    )
}