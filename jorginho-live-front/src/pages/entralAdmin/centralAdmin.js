import React from "react";
import { Link } from 'react-router-dom'

import './centralAdmin.css'

import controle from '../../img/controle.png'
import perfil from '../../img/controle-neon.png'
import usuario from '../../img/usuario.png'

import configuracao from '../../img/configuração.png'

export default function CentralAdmin(){



    return(
    <>
        <div className="card-titulo">
            <h1>Central do administrador</h1>
            <br/>
            <h2>Oque deseja ver ?</h2>
        </div>
        <div className=" cards-admin">
            <div className=" card-admin">
                <h1 className="card_titulo">Configurações</h1>
                <img src={configuracao} alt="icone configuração"/>
            </div>
            <Link to="/admin/jogos">
                <div className=" card-admin">
                    <h1 className="card_titulo">jogos</h1>
                    <img src={controle} alt="icone controle"/>
                </div>
            </Link>
            <Link to="/adimin/perfils">
                <div className=" card-admin">
                    <h1 className="card_titulo">Perfils</h1>
                    <img src={perfil} alt="icone Perfils"/>
                </div>
            </Link>
            <Link to="/adimin/usuarios">
                <div className=" card-admin">
                    <h1 className="card_titulo">Usuarios</h1>
                    <img src={usuario} alt="icone Usuarios"/>
                </div>
            </Link>
        </div>
    </>
    )
}