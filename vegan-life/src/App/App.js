import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'

import Header from "../Header/Header.js";
import Inicio from "../Inicio/Inicio.js";

function App() {
  return (
    <div>
      
      <Header />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
        </Switch>
      </main>

    

    </div>
  );
}

export default App;