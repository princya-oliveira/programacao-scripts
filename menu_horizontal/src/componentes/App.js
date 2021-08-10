import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header id="corpo">
        <nav id="menu">
          <ul>
            <li><a href = "#inicio">Home</a> </li>
            <li><a href = "#cursos">Cursos</a> </li>
            <li><a href = "#contatos">Contatos</a> </li>
            <li><a href = "#parceiros">Parceiros</a> </li>
            <li><a href = "#missao">Missão</a> </li>
            <li><a href = "#sobre">Sobre</a> </li>
          </ul>
        </nav>
      </header>
      <section id="inicio">
        <h2>Início</h2>
      </section>

      <section id="cursos">
        <h3>Cursos</h3>
      </section>

      <section id="contatos">
        <h3>Contatos</h3>
      </section>

      <section id="parceiros">
        <h3>Parceiros</h3>
      </section>

      <section id="missao">
        <h3>Missão</h3>
      </section>

      <section id="sobre">
        <h3>Sobre</h3>
      </section>
    </div>
  );
}

export default App;

/*
Seções:
  1 - início
  2 - cursos
  3 - contatos
  4 - parceiros
  5 - missão
  6 - sobre
*/
