import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Top} from './Pages/Top'
import {About} from './Pages/About'
import {Page404} from './Pages/404'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/about" component={About} />
        <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
