import React from "react";
import { Link } from "react-router-dom";
import MenuDropDownOpcs from "../dropDonw/menuDropDownOpcs"

import './header.css'


export default function Header(){
    return(
        <div className="header">
            <Link to="/">
                <div className="header-perfil">
                    <img src={perfil.foto} alt={perfil.nome}/>
                    <h1>{perfil.nome}</h1>
                </div>
            </Link>
            <MenuDropDownOpcs/>
        </div>
    )
}


const perfil ={
    foto:"https://s1.zerochan.net/Link.%28Breath.of.the.Wild%29.600.2227852.jpg",
    nome:"MAHOOEEE",
}