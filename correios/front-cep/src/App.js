import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // impedindo que o formulário faça o reload
  const submitHandler = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Cep Recebido: " + data.cep)

    // promisse
    fetch(`http://localhost:3001/?cep=${data.cep}`)
    .then(response => response.json())
    .then(console.log)
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group" style={{marginTop: '1px'}}>
          <input type="text" name="cep" className="form=control"></input>
        </div>
        <button type="submit" className="btn btn-success">Consultar CEP</button>
      </form>
    </div>
  );
}

export default App;
