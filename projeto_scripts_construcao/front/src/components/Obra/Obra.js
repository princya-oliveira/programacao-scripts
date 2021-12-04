import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaObra from "../Tabelas/TabelaObra";

const div = {
  height: '100%',
  border: '3px ridge black',
  backgroundColor: '#594D42',
  textAlign: 'center',
  color: 'white'
}
const linha = { marginTop: '5vh' }
const linha2 = { marginTop: '5vh' }

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
          style={div}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={linha}>
              <div
                className="col-md-12">
                <h1> Cadastro de Obras </h1>
              </div>
            </div>
          </div>
          <div
            style={linha2}>
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