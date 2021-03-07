import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import { Router } from "./router/Router";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/service">service</Link>
        </header>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
