import React from "react";

import ReactDOM from "react-dom";

import App from "./App";
import { HashRouter as Router } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
//To use the router methods within our App
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
