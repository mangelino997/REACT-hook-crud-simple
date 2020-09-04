import React from 'react';
import { Switch, Route } from "react-router-dom";
import PersonCrud from "./Components/PersonCrud"

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={PersonCrud} /> 
    </div>
  );
}

export default App;
