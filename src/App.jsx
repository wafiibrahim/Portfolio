import React from "react";

import "./index.css";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";

import Footer from "./Components/Footer/Footer";

import Nav from "./Components/Nav/Nav";

//Always check if css-loader and style-loader is installed

function App() {
  return (
    //All other components have to go inside the div in the app
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>

      <Experience></Experience>

      <Portfolio></Portfolio>
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
