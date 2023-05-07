import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);
