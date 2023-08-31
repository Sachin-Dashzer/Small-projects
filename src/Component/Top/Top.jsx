import "./top.css";

import React from "react";
import { IoMenu } from "react-icons/io5";

const Top = () => {
  return (
    <div id="top">
      <h3>Dashzer portfolio</h3>

      <div className="menu">
        <IoMenu className="menu-icon" onClick={function(){
            document.querySelector(".menu-links").style.display = 'block';
            document.querySelector(".menu-icon").style.display = 'none';

        }} />

        <div className="menu-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Qualities</a>
          <a href="#project">Projects</a>
          <a href="#footer">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Top;
