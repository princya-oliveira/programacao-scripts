import React from "react"
import urlApi from '../../service/api';
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const label = { color: 'white' }
const h1 = { color:'white' }
const button = { marginTop:'10vh' }
const formStyle = {marginTop: '5vh'}
const inputStyle = { marginTop: '2.5vh' }

export default function EngenheiroEditar() {

  const history = useHistory()
  let idBoolean = false;

  const [codigoE, setCodigoE] = useState(0);
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [telefone, setTelefone] = useState(''); 
  const [crea, setCrea] = useState('');
  const [dataCrea, setFilDataCrea] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id Engenheiro: ' + id + ' - ' + idBoolean)
    if (id == 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getEngenheiro() {
      console.log('Engenheiro: ' + id + ' - ' + idBoolean)
      if (id == 0) {
        setChecked(true);
        console.log('Novo Registro Inserido!')
      } else {
        const { data } = await urlApi.get('/engenheiro/' + id);
        console.log(data)

        setCodigoE(data[0].eng_codigo);
        setNome(data[0].eng_nome);
        setApelido(data[0].eng_apelido);
        setTelefone(data[0].eng_telefone);
        setCrea(data[0].eng_crea);
        setFilDataCrea(data[0].eng_datacrea);

        console.log(data[0].eng_nome)
      }
    }
    IfCrud();
    getEngenheiro();
  }, []);

  async function handleEngenheiro(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Dados Form: " + data.eng_apelido);

    try {
      if (nome.length === 0) {
        alert('Insira o nome')
      } else {
        console.log("Codigo Engenheiro: ", id)
        if (id === 0) {
          console.log("Registro Incluído!")
          await urlApi.post('engenheiro', data)
            .then(response => alert("Registro Incluído com Sucesso!"))
        } else {
          console.log("Registro Alterado! ", id)
          await urlApi.put('/engenheiro/' + id, data)
            .then(response => alert("Registro Alterado com Sucesso"))
        }
      }
    } catch (error) {
      alert('Erro. Tente novamente.')
    }
  }

  return (
    <>
      <div >
        <form
          onSubmit={handleEngenheiro}
          className="container-fluid" style={formStyle}>
          <div
            className="row">
            <div
              className="col-md-12 text-center">
              <h1
                style={h1}> Cadastro de Novo Engenheiro </h1>
            </div>
            <div
              className="form-group col-md-6 mb-3"
              style={inputStyle}>
              <label
                style={label}> Código </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="ele_codigo"
                value={codigoE}
                onChange={e => setCodigoE(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_nome" style={label}> Nome Engenheiro </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_nome"
                value={nome}
                onChange={e => setNome(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_apelido" style={label}> Apelido </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_apelido"
                value={apelido}
                onChange={e => setApelido(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_telefone" style={label}> Telefone </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_telefone"
                value={telefone}
                onChange={e => setTelefone(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_crea" style={label}> CREA </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_crea"
                value={crea}
                onChange={e => setCrea(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="eng_datacrea" style={label}> Data Registro CREA </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="eng_datacrea"
                value={dataCrea}
                onChange={e => setFilDataCrea(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/engenheiro')}
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