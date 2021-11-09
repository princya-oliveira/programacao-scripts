import React from "react"
import './Autores.css';

import AreaDados from '../AreaDados/AreaDados';
import { useEffect, useState } from 'react';

//let aAutores = []


function Autores() {

  const [evento, setevento] = useState([])

//  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/autores/listar')
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => setevento(response));
  }, []

  )

  return (
    <div id="idAutores" className="autores">
      <div id="corpo_rel">
        <legend>Registro de Autores Cadastrados</legend>
        <table id="tabela" className="table-striped">
          <thead id="cabecalho_rel">
            <tr>
              <th id="codigo">Código</th>
              <th id="a-i">A/I</th>
              <th id="nome">Nome do Autor</th>
              <th id="apelido">Apelido</th>
              <th id="sexo">Sexo</th>
              <th id="fone">Telefone</th>
              <th id="e-mail">e-mail</th>
              <th id="novo"> <a className="btn-btn-sucess btn-block" href="/autores/novo">Novo Autor</a> </th>
            </tr>
          </thead>
          <tbody id="corpo_rel">
            {evento.map((item, i) =>
              <tr style={{textAlign: 'left'}}>
                <th scope="row" style={{textAlign:'center'}}> {item.aut_codigo} </th>
                <td> {item.aut_nome} </td>
                <td> {item.aut_apelido} </td>
                <td> {item.aut_ativoinativo} </td>
                <td> {item.aut_sexo} </td>
                <td> {item.aut_telefone} </td>
                <td> {item.aut_email} </td>

                <td id="editar"> <a className="btn btn-primary btn-block" href={`/autores/editar/${item.aut_codigo}`}> Editar </a></td>
                <td id="ativar"> <a className="btn btn-danger btn-block" href={`/autores/ativoInativo/${item.aut_codigo}`}> Inativar </a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Autores;