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
            <h4>HTML & CSS </h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>Java</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>Javascript / Javascript Libraries</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>DOM Manipulation</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icons"></BsPatchCheckFill>
          <div>
            <h4>UX/UI Assessment </h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Frontend;
