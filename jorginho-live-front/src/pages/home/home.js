import React, { useState } from "react";
import InputBusacaNome from "../../components/inputBuscaNome/inputBusacaNome";
import ListaCapasHome from "../../components/listaCapasHome/lisataCapasHome";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="home">
      <div className="input">
        <InputBusacaNome value={text} onChange={(valor) => setText(valor)} />
      </div>
      <ListaCapasHome text={text} />
    </div>
  );
}
