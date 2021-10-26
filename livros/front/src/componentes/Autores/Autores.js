import React from 'react';
import AutoresListar from '../AutoresListar/AutoresListar';
import './Autores.css';

async function Autores() {

    console.log("Executando fetch..")
    await fetch('http://localhost:3000/autores/listar')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error)
    
}

export default Autores;