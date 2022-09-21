import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_BASE_URL } from "./Api_config";

function App() {

  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api",
    }).then((res) => {

    }).catch(

    )

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
