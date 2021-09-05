import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'

import Aside from "../Aside/Aside.js";
import Inicio from "../Inicio/Inicio.js";
import Sobre from "../Sobre/Sobre.js";
import Guia from "../Guia/Guia.js";
import Cadastro from "../Cadastro/Cadastro.js"

function App() {
  return (
    <div>
      
      <Aside />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/sobre" render = {(props) => <Sobre/>}></Route>
          <Route exact path = "/guia" render = {(props) => <Guia/>}></Route>
          <Route exact path = "/cadastro" render = {(props) => <Cadastro/>}></Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;