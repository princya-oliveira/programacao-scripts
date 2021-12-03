import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaObra from "../Tabelas/TabelaObra";

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
export default function Obra() {

  const [obra, setObra] = useState([])
  useEffect(() => {
    urlApi.get('obra')
      .then(response => response.data)
      .then(response => setObra(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idObra"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Cadastro de Obras </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaObra
              items={obra}
              chave={'/obra/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}