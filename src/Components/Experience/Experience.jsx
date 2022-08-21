import React from "react";
import "./Experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

import Backend from "./Backend";
import Frontend from "./Frontend";
import { useState } from "react";

const Experience = () => {
  const [isShown, setIsShown] = useState(false);
  function handleComponent() {
    setIsShownF(false);
    setIsShown((curr) => !curr);
  }

  const [isShownF, setIsShownF] = useState(true);
  function handleComponentF() {
    setIsShown(false);
    setIsShownF((curr) => !curr);
  }

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <br></br>
      <br></br>

      <div className="container experience__container">
        <a onClick={handleComponentF}>Frontend Development</a>
        <a onClick={handleComponent}>Backend Development</a>
        {isShownF && <Frontend></Frontend>}
        {isShown && <Backend></Backend>}

        {!isShown && !isShownF && <Frontend></Frontend>}
      </div>
    </section>
  );
};

export default Experience;
