import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
//To use the router methods within our App
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
