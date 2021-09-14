import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CepConsultado from './CepConsultado'

function App() {

  const [evento, setEvento] = useState([])


  // impedindo que o formulário faça o reload
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Nome Recebido: " + data.nome)
    console.log("Cep Recebido: " + data.cep)

    // promisse
    fetch(`http://localhost:3001/?cep=${data.cep}`)
    .then(response => response.json())
    .then(data => {
      const array = convertToArray(data);
      console.log("Array: ", array);
      setEvento(array)
    })
    .catch( error => console.error)
  }

  const convertToArray = (obj) => {
    const arr = [obj];
    console.log("Conversão em Array: ", arr);
    return arr;
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group" id="nome">
          <input type="text" name="nome" className="form-control" placeholder={"Insira seu nome"}></input>
        </div>
        <div className="form-group" id="cep">
          <input type="text" name="cep" className="form-control" placeholder={"Insira o CEP"}></input>
        </div>

        <button type="submit" className="btn btn-success">Consultar CEP</button>
      </form>

      <CepConsultado evento={evento} />

    </div>
  );
}

export default App;
