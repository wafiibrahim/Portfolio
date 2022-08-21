import React from "react";
import "./Experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Frontend = () => {
  return (
    <div className="experience__frontend">
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Frontend;
