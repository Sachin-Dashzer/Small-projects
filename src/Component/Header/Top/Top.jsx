import "./top.css";

import React from "react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import {MdOutlineCancel} from 'react-icons/md'

const Top = () => {
  const [pages, setpages] = useState(false);

  return (
    <>
      <div id="top">
        <h3>Dashzer portfolio</h3>

        <div className="menu">
          <IoMenu
            className="menu-icon"
            style={{ display: pages ? "none" : "flex" }}
            onClick={function () {
              setpages(true);
            }}
          />
        </div>
      </div>


      <div className="menu-links" style={{ display: pages ? "flex" : "none" }}>
        <a href="#" onClick={() => setpages(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setpages(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setpages(false)}>
          Qualities
        </a>
        <a href="#project" onClick={() => setpages(false)}>
          Projects
        </a>
        <a href="#footer" onClick={() => setpages(false)}>
          Contact me
        </a>

          <MdOutlineCancel className="cancel" onClick={() => setpages(false)}/>
        
      </div>
    </>
  );
};

export default Top;
