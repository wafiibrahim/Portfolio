import React from "react";

import "./About.css";

import ME from "../../Assets/about-me.jpg";

import { BiAward } from "react-icons/bi";

import { IoMdSchool } from "react-icons/io";

import { CgCommunity } from "react-icons/cg";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <br></br>
      <br></br>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about-icon"></BiAward>

              <h5>Experience</h5>

              <small>3+ Years Of Experience</small>
            </article>

            <article className="about__card">
              <IoMdSchool className="about-icon"></IoMdSchool>
              <h5>Education</h5>
              <small>CS At York University</small>
            </article>

            <article className="about__card">
              <CgCommunity className="about-icon"></CgCommunity>

              <h5>Community</h5>

              <small>BSA At York University</small>
            </article>
          </div>

          <p>
            I am a pseudo-intellectual. I like talking about things I read about
            briefly from Wikipedia.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
