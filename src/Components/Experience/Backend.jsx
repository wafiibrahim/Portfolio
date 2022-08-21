import React from "react";
import "./Experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

export const Backend = () => {
  return (
    <div className="experience__backend">
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
          <h4>Neo4j</h4>
          <small className="text-light">Experienced</small>
        </div>
      </article>
    </div>
  );
};

export default Backend;
