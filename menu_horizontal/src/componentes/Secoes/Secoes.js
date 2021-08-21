import React from 'react';
import './componentes/Secoes/Secoes.js';

export default function Secoes() {
  return (
    <div>
      <div className="menu">
        <nav className="navMenu">
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contatos">Contatos</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
            <li><a href="#missao">Missão</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
      </div>
      
      <section id="inicio">
        <h2>Início</h2>

        <aside className="aside">
          <a href="#inicio" id="inicio2">Nosso Canal</a>
          <a href="#cursos" id="curso2">Cursos</a>
          <a href="#contatos" id="contatos2">Contatos</a>
          <a href="#parceiros" id="parceiros2">Parceiros</a>
          <a href="#missao" id="missao2">Missão</a>
          <a href="#sobre" id="sobre2">Sobre</a>
        </aside>

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
      
      <a className="irTopo" href=".menu"> Topo </a>
      <a className="irInicio" href="#inicio"> Início </a>
      <a className="irCursos" href="#cursos"> Cursos </a>
      <a className="irContatos" href="#contatos"> Contatos </a>
      <a className="irParceiros" href="#parceiros"> Parceiros </a>
      <a className="irMissao" href="#missao"> Missão </a>
      <a className="irSobre" href="#sobre"> Sobre </a>

      <footer>
        <h3>Rodapé</h3>
      </footer>

    </div>
  );
}

