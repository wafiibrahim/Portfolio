// Experience.js
import React, { useState } from "react";
import "./Experience.css";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const Experience = () => {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkillsView = () => {
    setShowSkills(true);
  };

  const toggleWorkExperienceView = () => {
    setShowSkills(false);
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h5>What I Bring to the Table</h5>
        <h2>Experience & Skills</h2>
        <div className="experience__toggle-container">
          <div
            className={`experience__toggle ${showSkills ? "active" : ""}`}
            onClick={toggleSkillsView}
          >
            Skills
          </div>
          <div
            className={`experience__toggle ${showSkills ? "" : "active"}`}
            onClick={toggleWorkExperienceView}
          >
            Work Experience
          </div>
        </div>
        <div className="experience__content">
          {showSkills ? <Skills /> : <WorkExperience />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
