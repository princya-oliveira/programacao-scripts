import React from 'react';
import './Secoes.css';

export default function Secoes() {
  return (
    <div>
      <div className="menu">
        <nav className="navMenu">
          <ul>
            <li><a href = "#inicio">Home</a> </li>
            <li><a href = "#cursos">Cursos</a> </li>
            <li><a href = "#contatos">Contatos</a> </li>
            <li><a href = "#parceiros">Parceiros</a> </li>
            <li><a href = "#missao">Missão</a> </li>
            <li><a href = "#sobre">Sobre</a> </li>
          </ul>
        </nav>
      </div>
      
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
      
      <a classname = "irTopo" href = ".menu"> Topo </a>
      <a classname = "irInicio" href = "#inicio"> Início </a>
      <a classname = "irCursos" href = "#cursos"> Cursos </a>
      <a classname = "irContatos" href = "#contatos"> Contatos </a>
      <a classname = "irParceiros" href = "#parceiros"> Parceiros </a>
      <a classname = "irMissao" href = "#missao"> Missão </a>
      <a classname = "irSobre" href = "#sobre"> Sobre </a>

      <footer>
        <h3>Rodapé</h3>
      </footer>

    </div>
  );
}

