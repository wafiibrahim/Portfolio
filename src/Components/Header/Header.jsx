import React from "react";
import CTA from "./CTA";

import "./Header.css";

import ME from "../../Assets/me.png";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>

        <h1>Wafi Ibrahim</h1>

        <h5 className="text-light">Developer With Vibes</h5>

        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img src={ME}></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
