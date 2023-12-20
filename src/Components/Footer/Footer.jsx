// Footer.jsx
import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Wafi Khandaker
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wafiibrahim/">
          <AiFillLinkedin className="footer__icon" />
        </a>
        <a href="https://github.com/wafiibrahim">
          <AiFillGithub className="footer__icon" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
