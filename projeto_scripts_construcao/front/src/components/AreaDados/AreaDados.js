import React from "react";
import { Route, Switch } from 'react-router-dom';
import Obra from "../Obra/Obra";
import ObraEditar from "../Obra/ObraEditar";
import Engenheiro from "../Engenheiro/Engenheiro";
import EngenheiroEditar from "../Engenheiro/EngenheiroEditar";

const div = {
  minHeight: '73.8vh',
  marginTop: '0.5vh',
  paddingTop: '2vh',
  backgroundColor: '#736355',
  fontSize: '18pt'
}

export default function AreaDados() {
  return (
    <>
      <div style={div}>
        <Switch>
          <Route exact path="/obra" component={Obra}></Route>
          <Route exact path="/obra/:id" component={ObraEditar}></Route>
          <Route exact path="/engenheiro" component={Engenheiro}></Route>
          <Route exact path="/engenheiro/:id" component={EngenheiroEditar}></Route>
        </Switch>
      </div>
    </>
  )
}