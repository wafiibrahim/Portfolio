import React, {useContext} from "react";

import "./index.css";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";

import Footer from "./Components/Footer/Footer";



import Nav from "./Components/Nav/Nav";



import { ThemeContext } from "./../src/Theme";
import News from "./Components/News/News";
// import Giphy from "./Components/Giphy/Giphy";







//Always check if css-loader and style-loader is installed



function App() {

  const { theme } = useContext(ThemeContext);

  

  
  return (
    //All other components have to go inside the div in the app

    
    <div className={`App ${theme}`}> 

      

      
      
      <Header></Header>
      {/* <Giphy></Giphy> */}
      <Nav></Nav>
      <About></About>
      <News></News>

      <Experience></Experience>

      <Portfolio></Portfolio>
     
      <Contact></Contact>
      

      <Footer></Footer>
    </div>
  );
}

export default App;
