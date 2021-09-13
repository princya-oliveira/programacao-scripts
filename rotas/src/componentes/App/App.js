import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'

import Header from "../Header/Header.js";
import Inicio from "../Inicio/Inicio.js";
import America from "../America/America.js";
import Asia from "../Asia/Asia.js";
import Oceania from '../Oceania/Oceania.js';
import Antartica from "../Antartica/Antartica.js";
import Europa from "../Europa/Europa.js";
import AmericaNorte from "../America/Americas/AmericaNorte/AmericaNorte"
import AmericaCentral from "../America/Americas/AmericaCentral/AmericaCentral"
import AmericaSul from "../America/Americas/AmericaSul/AmericaSul"
import Equador from "../America/Americas/Equador/Equador"
import Inferiores from "../America/Americas/Inferiores/Inferiores"
import Patagonia from "../America/Americas/AmericaSul/Info/Patagonia"
import CordilheiraAndes from "../America/Americas/AmericaSul/Info/CordilheiraAndes"
import Cartagena from "../America/Americas/AmericaSul/Info/Cartagena"
import Pantanal from "../America/Americas/AmericaSul/Info/Pantanal"
import Quilotoa from "../America/Americas/AmericaSul/Info/Quilotoa"
import Hidrografia from "../America/Americas/AmericaSul/Info/Pantanal/Hidrografia"
import Clima from "../America/Americas/AmericaSul/Info/Pantanal/Clima"
import Fauna from "../America/Americas/AmericaSul/Info/Pantanal/Fauna"
import Flora from "../America/Americas/AmericaSul/Info/Pantanal/Flora"
import Desmatamento from "../America/Americas/AmericaSul/Info/Pantanal/Desmatamento"

function App() {
  return (
    <div>
      
      <Header />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/america" render = {(props) => <America/>}></Route>
          <Route exact path = "/asia" render = {(props) => <Asia/>}></Route>
          <Route exact path = "/oceania" render = {(props) => <Oceania/>}></Route>
          <Route exact path = "/antartica" render = {(props) => <Antartica/>}></Route>
          <Route exact path = "/europa" render = {(props) => <Europa/>}></Route>
          <Route exact path = "/america/americaNorte" render = {(props) => <AmericaNorte/>}></Route>
          <Route exact path = "/america/americaCentral" render = {(props) => <AmericaCentral/>}></Route>
          <Route exact path = "/america/americaSul" render = {(props) => <AmericaSul/>}></Route>
          <Route exact path = "/america/equador" render = {(props) => <Equador/>}></Route>
          <Route exact path = "/america/inferiores" render = {(props) => <Inferiores/>}></Route>
          <Route exact path = "/america/americaSul/patagonia" render = {(props) => <Patagonia/>}></Route>
          <Route exact path = "/america/americaSul/cordilheiraAndes" render = {(props) => <CordilheiraAndes/>}></Route>
          <Route exact path = "/america/americaSul/cartagena" render = {(props) => <Cartagena/>}></Route>
          <Route exact path = "/america/americaSul/pantanal" render = {(props) => <Pantanal/>}></Route>
          <Route exact path = "/america/americaSul/quilotoa" render = {(props) => <Quilotoa/>}></Route>
          <Route exact path = "/america/americaSul/pantanal/hidrografia" render = {(props) => <Hidrografia/>}></Route>
          <Route exact path = "/america/americaSul/pantanal/clima" render = {(props) => <Clima/>}></Route>
          <Route exact path = "/america/americaSul/pantanal/fauna" render = {(props) => <Fauna/>}></Route>
          <Route exact path = "/america/americaSul/pantanal/flora" render = {(props) => <Flora/>}></Route>
          <Route exact path = "/america/americaSul/pantanal/desmatamento" render = {(props) => <Desmatamento/>}></Route>

        </Switch>
      </main>

    </div>
  );
}

export default App;
