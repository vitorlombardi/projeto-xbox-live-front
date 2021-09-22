import React from "react"

import './inputBusacaNome.css'

// @ts-ignore
import lupa from '../../img/lupa.png'

const InputBusacaNome = ({ value, onChange }) =>{
    function handleChange (event) {
        onChange(event.target.value)
    }
    return(
        <div className="input-busca">
            <label 
            htmlFor="nome" 
            className="label">
            <img src={lupa} alt="lupa" width="30"/>
          </label>
            <input type="search" 
            value={value} 
            onChange={handleChange}
            className="input-search"
            />
        </div>
    )
}

export default InputBusacaNome;