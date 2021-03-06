import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import {TOP} from './Pages/Top'
import {About} from './Pages/About'
import {Page404} from './Pages/404'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <Switch>
        <Route exact path="/" component={TOP} />
        <Route exact path="/about" component={About} />
        <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
