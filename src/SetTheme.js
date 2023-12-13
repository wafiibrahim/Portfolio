import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../src/Theme";
import './index.css'






const SetTheme = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext);
    let x;
    theme==="light-theme"? x= "Light Theme":x= "Dark Theme";

    return (
        
        <>

        
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'" rel="stylesheet"/> */}
        <a className= "btn btn-primary" onClick={() => toggleTheme()}>{x}</a>
       </>
        )
        ;
    
}

export default SetTheme