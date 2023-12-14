import React from "react";
import "./About.css";

import ME from "../../Assets/about-me.png";

import { BiAward } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";



const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me"></img>
          </div>
        </div>

        <div className="about__content">
          <h5>Get to Know</h5>
          
          <h2>About Me</h2>
          <br></br>

          <div className="about__cards">
            <div className="about__card">
              <BiAward className="about__icon"></BiAward>
              <h5>Experience</h5>
              <small>4+ Years Of Experience in Programming</small>
            </div>

            <div className="about__card">
              <IoMdSchool className="about__icon"></IoMdSchool>
              <h5>Education</h5>
              <small>Bachelors of Science in Computer Science from York University</small>
            </div>

            <div className="about__card">
              <CgCommunity className="about__icon"></CgCommunity>
              <h5>Community</h5>
              <small>VP of Marketing and Social Media at Bangladesh Student Association at York University</small>
            </div>
          </div>

          <p>
          🚀 As a Computer Science graduate from Lassonde School of Engineering at York University, I am a passionate web developer with a keen interest in data science and analytics. Proficient in HTML, CSS, JavaScript, React, and Python, I thrive on transforming ideas into innovative digital solutions. Let's build something extraordinary together! 💻✨
          </p>

          

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
