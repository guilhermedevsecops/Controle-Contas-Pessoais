import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface Dado {
  _id: string;
  id: Number;
  nome: String;
  tipo: String;
  mes: Number;
  ano: Number;
  valor: String;
}

function Form() {
  const [dados, setDataBase] = useState<Dado[]>([]);

  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res.data.resultConts);
      setDataBase(res.data.resultConts);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Tipo </th>
          <th scope="col">Mês</th>
          <th scope="col">Ano</th>
          <th scope="col">Comp. Total</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((dado) => {
          return (
            <tr key={dado._id}>
              <th>{dado.id}</th>
              <td>{dado.nome}</td>
              <td>{dado.tipo}</td>
              <td>{dado.mes}</td>
              <td>{dado.ano}</td>
              <td>Total</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Form;
