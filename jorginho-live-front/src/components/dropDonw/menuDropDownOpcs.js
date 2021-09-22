import React from "react";

import './menuDropDow.css'

export default function MenuDropDownOpcs() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Opções</button>
      <div className="dropdown-content">
        <a href="/">usuario</a>
        <a href="/">admin</a>
        <a href="/">sair</a>
      </div>
    </div>
  );
}
