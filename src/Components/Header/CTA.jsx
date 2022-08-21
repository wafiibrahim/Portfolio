import React from "react";

import CV from "../../Assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Get In Touch
      </a>
    </div>
  );
};

export default CTA;
