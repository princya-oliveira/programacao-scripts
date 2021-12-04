import React from 'react';
import { useHistory } from 'react-router-dom';

const divFormat = { color: 'white' }
const botao = { marginTop: '5vh' }
const aEstilo = { textAlign: 'center'}

export default function TabelaEngenheiro(props) {
  const history = useHistory()

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.eng_codigo}>
          <td> {item.eng_codigo} </td>
          <td style={{ textAlign:'center' }}> {item.eng_nome} </td>
          <td style={{ textAlign:'center' }}> {item.eng_apelido} </td>
          <td style={{ textAlign:'center' }}> {item.eng_telefone} </td>
          <td style={{ textAlign:'center' }}> {item.eng_crea} </td>
          <td style={{ textAlign:'center' }}> {item.eng_datacrea} </td>

          <td id="editar"> <a className="btn btn-outline-dark" href={props.chave + item.eng_codigo}> Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div
      className="container-fluid">
      <table id="tabela"
        className="table table-lg"
        style={divFormat}>
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Telefone </th>
            <th scope="col"> Registro CREA </th>
            <th scope="col"> Data Registro CREA </th>
            <th scope="col" style={aEstilo}><a href={props.chave + '0'} className="btn btn-dark btn-block"> Novo Engenheiro </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
      <div className="col-md-12 text-center mb-3">
        <button type="submit" className="btn btn-dark btn-block" onClick={() => history.push('/')} style={botao}> Início </button>
      </div>
    </div>
  )
}