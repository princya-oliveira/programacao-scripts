import React from 'react';
import { useHistory } from 'react-router-dom';

const divFormat = { color: 'white' }
const botao = { marginTop: '5vh' }
const aEstilo = { textAlign: 'center'}

export default function TabelaObra(props) {

  const history = useHistory()
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.obr_codigo} >
          <td> {item.obr_codigo} </td>
          <td style={{ textAlign:'center' }}> {item.obr_cidade} </td>
          <td style={{ textAlign:'center' }}> {item.obr_tipoobra} </td>
          <td style={{ textAlign:'center' }}> {item.obr_valor} </td>
          <td style={{ textAlign:'center' }}> {item.obr_dtinicio} </td>
          <td style={{ textAlign:'center' }}> {item.eng_codigo} </td>

          <td id="editar"> <a className="btn btn-outline-dark"
              href={props.chave + item.obr_codigo}> Editar </a></td>
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
          <tr
            style={{ textAlign:'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Cidade </th>
            <th scope="col"> Tipo de Obra </th>
            <th scope="col"> Valor </th>
            <th scope="col"> Data de Início </th>
            <th scope="col"> Código do Engenheiro </th>
            <th scope="col" style={aEstilo}><a href={props.chave + '0'} className="btn btn-dark btn-block" > Nova Obra </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
      <div className="col-md-12 text-center mb-3">
        <button
          type="submit" className="btn btn-dark btn-block" onClick={() => history.push('/')} style={botao}> Início </button>
      </div>
    </div>
  )
}