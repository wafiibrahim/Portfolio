import React from "react";
import { FaCode, FaDatabase, FaChartBar, FaPencilAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="experience__card">
      
      <div className="experience__details">
      <h3>Skills</h3>
        <div>
          <FaCode className="experience__icon" />
          <h4>Programming Languages</h4>
          <small className="text-light">
            JavaScript, HTML5, CSS3, PHP, Python, C, Java
          </small>
        </div>
      </div>
      <div className="experience__details">
        <div>
          <FaCode className="experience__icon" />
          <h4>Frameworks</h4>
          <small className="text-light">React.JS, Express.JS</small>
        </div>
      </div>
      <div className="experience__details">
        <div>
          <FaDatabase className="experience__icon" />
          <h4>Database</h4>
          <small className="text-light">MongoDB</small>
        </div>
      </div>
      <div className="experience__details">
        <div>
          <FaChartBar className="experience__icon" />
          <h4>Data Visualization</h4>
          <small className="text-light">Tableau & PowerBI</small>
        </div>
      </div>
      <div className="experience__details">
        <div>
          <FaPencilAlt className="experience__icon" />
          <h4>UI/UX</h4>
          <small className="text-light">Figma, Adobe Photoshop</small>
        </div>
      </div>
    </div>
  );
};

export default Skills;
