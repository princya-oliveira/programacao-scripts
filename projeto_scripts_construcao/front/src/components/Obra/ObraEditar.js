import React from "react"
import urlApi from '../../service/api';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

const label = {
  color: 'white'
}

const h1 = {
  color: 'white'
}


const button = {
  marginTop: '10vh'
}

const formStyle = {
  marginTop: '5vh'
}

const inputStyle = {
  marginTop: '2.5vh'
}

export default function ObraEditar() {

  const history = useHistory()

  let idBoolean = false;

  const [codigo, setCodigo] = useState(0);
  const [cidade, setCidade] = useState(''); //nome
  const [tipoobra, setTipoobra] = useState('');
  const [valor, setValor] = useState('');
  const [dtinicio, setDtinicio] = useState('');
  const [engcodigo, setEngcodigo] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id Obra: ' + id + ' - ' + idBoolean)
    if (id === 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getObra() {
      console.log('Obra: ' + id + ' - ' + idBoolean)
      if (id == 0) {
        setChecked(true);
        console.log('Inclusão de novo registro!')
      } else {
        const { data } = await urlApi.get('/obra/' + id);
        console.log(data)

        setCodigo(data[0].obr_codigo);
        setCidade(data[0].obr_cidade);
        setTipoobra(data[0].obr_tipoobra);
        setValor(data[0].obr_valor);
        setDtinicio(data[0].obr_dtinicio);
        setEngcodigo(data[0].eng_codigo);

        console.log(data[0].obr_cidade)
      }
    }
    IfCrud();
    getObra();
  }, []);

  async function handleObra(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Dados Form: " + data.obr_cidade);

    try {
      if (cidade.length === 0) {
        alert('Insira uma cidade válida')
      } else {
        console.log("Codigo Obra: ", id)
        if (id == 0) {
          console.log("Inclusão de Registro!")
          await urlApi.post('obra', data)
            .then(response => alert("Inserção Realizada com Sucesso!!!!"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/obra/' + id, data)
            .then(response => alert("Alteração Realizada com Sucesso!!!!"))
        }
      }
    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <>
      <div >
        <form
          onSubmit={handleObra}
          className="container-fluid" style={formStyle}>
          <div
            className="row">
            <div
              className="col-md-12 text-center">
              <h1
                style={h1}> Cadastro de Nova Obra </h1>
            </div>
            <div
              className="form-group col-md-6 mb-3"
              style={inputStyle}>
              <label
                style={label}> Código </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_codigo"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="obr_cidade" style={label}> Cidade </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="obr_cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="obr_tipoobra" style={label}> Tipo de Obra </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="obr_tipoobra"
                value={tipoobra}
                onChange={e => setTipoobra(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="obr_valor" style={label}> Valor </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="obr_valor"
                value={valor}
                onChange={e => setValor(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="obr_dtinicio" style={label}> Data de início </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="obr_dtinicio"
                value={dtinicio}
                onChange={e => setDtinicio(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_codigo" style={label}> Código do Engenheiro </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_codigo"
                value={engcodigo}
                onChange={e => setEngcodigo(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/obra')}
                style={button}> Voltar </button>
            </div>
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                style={button}> Salvar </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}