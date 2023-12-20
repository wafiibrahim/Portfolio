import React from "react";
import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import "./Header.css"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/wafiibrahim/" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/wafiibrahim" target="_blank">
        <FaGithub></FaGithub>
      </a>
    </div>
  );
};

export default HeaderSocials;
