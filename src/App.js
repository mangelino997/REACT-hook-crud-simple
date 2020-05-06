import React from 'react';
import { Switch, Route } from "react-router-dom";
import PersonCrud from "./Components/PersonCrud"

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={PersonCrud} />
         al incluir esta ruta como la ultima le indicamos a React router
        que esta ruta se tiene que cargar siempre que no se encuente otra ruta  */
      </Switch>
    </div>
  );
}

export default App;
