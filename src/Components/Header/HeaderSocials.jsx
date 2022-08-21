import React from "react";
import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub></FaGithub>
      </a>
      <a href="https://twitter.com" target="_blank">
        <FaTwitter></FaTwitter>
      </a>
    </div>
  );
};

export default HeaderSocials;
