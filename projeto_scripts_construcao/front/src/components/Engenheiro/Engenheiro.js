import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaEngenheiro from "../Tabelas/TabelaEngenheiro";

const divStyle = {
  height: '100%',
  border: '3px ridge black',
  backgroundColor: '#594D42',
  textAlign: 'center',
  color: 'white'
}

const rowStyle = {
  marginTop: '5vh'
}

const rowStyle2 = {
  marginTop: '5vh'
}
export default function Engenheiro() {

  const [engenheiro, setEngenheiro] = useState([])
  useEffect(() => {
    urlApi.get('engenheiro')
      .then(response => response.data)
      .then(response => setEngenheiro(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idEngenheiro"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Cadastro de Engenheiros </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaEngenheiro
              items={engenheiro}
              chave={'/engenheiro/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}