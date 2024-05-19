import axios from "axios";
import React, { useState } from "react";
import api from "services/api";
import "./style.css";

const ModalExcluir = () => {

  const [numeroConta, setNumeroConta] = useState('');

  const onSubmit= () =>{

    api.delete("/" + numeroConta)
  }


  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Excluir</h1>
          <hr />
        </div>
        <form onSubmit={onSubmit}>
          <p>Numero da Conta</p>
          <input type="text"  value={numeroConta} onChange={(e) => setNumeroConta(e.target.value)}/>
          <div className="btns">
          <button type="submit" className="button-save">Salvar</button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default ModalExcluir;
