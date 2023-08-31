"use client";

import React from "react";
import "./header.css";
import Me from "../../Images/myimage.png";

import CV from "../../Images/sachin.pdf";








const Header = () => {
  return (
    <section id="header">
      <div className="header-box">
        <div className="header-text">
          <h1>
            <span style={{ color: "var(--text)" }}>Hii</span> , I'm
          </h1>
          <h1>Sachin kumar</h1>
          <h4>Frontend web developer</h4>
          <p>
            "Laugh at your problems, because humor is cheaper than therapy and
            has no copay!"
          </p>

          <a href={CV} download className="btn resume">
            Download CV
          </a>
          <a href="#footer" className="btn">
            Let's talk
          </a>

          
        </div>

        <div className="header-image">
          <img src={Me} alt="" />
        </div>
      </div>
      <div className="scroller">
        <a href="#Ending">scroll down</a>
      </div>
    </section>
  );
};

export default Header;
