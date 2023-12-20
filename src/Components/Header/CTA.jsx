import React from "react";
import CV from "../../Assets/Resume2023.pdf";
import "./Header.css";
import SetTheme from "./../../SetTheme";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn btn-primary">
        Download Resume
      </a>
      <a id="touch" href="#contact" className="btn btn-primary">
        Get In Touch
      </a>

      <SetTheme></SetTheme>
    </div>
  );
};

export default CTA;
