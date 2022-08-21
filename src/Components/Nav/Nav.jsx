import React from "react";

import "./Nav.css";

import { AiOutlineHome } from "react-icons/ai";

import { AiOutlineUser } from "react-icons/ai";

import { BsFillBookmarkFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";

import { IoIosCall } from "react-icons/io";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillBookmarkFill></BsFillBookmarkFill>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine></RiServiceLine>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoIosCall></IoIosCall>
      </a>
    </nav>
  );
};

export default Nav;
