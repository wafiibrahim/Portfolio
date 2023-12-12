import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../Assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="hero">
      <div className="container header__container">
        <div className="hero__content">
          <div className="hero__text">
            <h5>Hello, I'm</h5>
            <h1>Wafi Khandaker</h1>
            <h5 className="text-light">A Developer With Vibes</h5>
            

            <CTA />
            <HeaderSocials />
          </div>
          <div className="hero__image">
            <img src={ME} alt="Wafi Khandaker" className="me-img" />
          </div>
        </div>
      </div>


      
      
    </header>
  );
};

export default Header;
