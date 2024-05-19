import React from "react";
import {useState} from "react";
import "./style.css";
import api from "../../../services/api";

const ModalAlt = () => {
  const [numeroConta, setNumeroConta] = useState('');
  const [nomeConta, setNomeConta] = useState('');
  const [dataMes, setMes] = useState('');
  const [dataAno, setAno] = useState('');
  const [tipoConta, setTipoConta] = useState('');
  const [valorConta, setValorConta] = useState('');

  const onSubmit= () =>{
    const data ={
      id : numeroConta,
      nome: nomeConta,
      mes: dataMes,
      ano: dataAno,
      tipo: tipoConta,
      valor: valorConta
    }
    api.put('/' + numeroConta, data)
  }

  return (
    <div>
    <div className="container">
      <div className="title">
        <h1>Alterar Contas</h1>
        <hr />
      </div>
      <form onSubmit={onSubmit}>
        <p>Numero da Conta</p>
        <input type="text" value={numeroConta} onChange={(e) => setNumeroConta(e.target.value)}/>
        <p>Nome da Conta</p>
        <input type="text" value={nomeConta} onChange={(e) => setNomeConta(e.target.value)}/>
        <p>Mes</p>
        <input type="number" value={dataMes} onChange={(e) => setMes(e.target.value)} />
        <p>Ano</p>
        <input type="number" value={dataAno} onChange={(e) => setAno(e.target.value)} />
        <p>Tipo Conta</p>
        <select value={tipoConta} onChange={(e) => setTipoConta(e.target.value)}>
          <option value="Alimentacao">Alimentação</option>
          <option value="Agua">Água</option>
          <option value="Energia">Energia</option>
          <option value="Veiculos">Veiculos</option>
          <option value="Internet">Internet</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Telefone">Telefone</option>
          <option value="Impostos">Impostos</option>
          <option value="GastosPessoais">Gastos Pessoais</option>
        </select>
        <p>Valor</p>
        <input value={valorConta} onChange={(e) => setValorConta(e.target.value)} />
        <button type="submit" className="button-save">Salvar</button>
      </form>
      
      
    </div>
  </div>
  );
};

export default ModalAlt;
