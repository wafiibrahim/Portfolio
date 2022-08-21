import React from "react";

import "./Footer.css";

import { AiFillLinkedin } from "react-icons/ai";

import { AiFillGithub } from "react-icons/ai";

import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Wafi Ibrahim
      </a>

      <ul className="permalinks">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="">Experience</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="www.linkedin.com">
          <AiFillLinkedin className="footer__logo"></AiFillLinkedin>
        </a>
        <a href="www.github.com">
          <AiFillGithub className="footer__logo"></AiFillGithub>
        </a>

        <a href="www.twitter.com">
          <AiOutlineTwitter className="footer__logo"></AiOutlineTwitter>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
