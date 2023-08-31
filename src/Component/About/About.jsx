import React from "react";
import "./about.css";
import Mineimg from '../../Images/portfolio1 (1).png'

import { PiCertificateFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillFolderSymlinkFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      
      <div className="about-content">
        <div className="about-img">
          <img src={Mineimg} alt="" />
        </div>
        <div className="about-text">
          
          <h6 style={{ fontSize: "1.5rem" }}>Hey there!</h6>
          <p>
            I'm
            Sachin kumar, an enthusiastic frontend web developer and current
            undergraduate. As a fresher, I'm excited about crafting beautiful
            and user-friendly websites that bring ideas to life. What truly
            fuels my passion is the ability to blend creativity with technology,
            creating seamless online experiences. Let's collaborate and make the
            web an engaging and visually appealing space for everyone!
          </p>

          <a href="#footer" className="btn">Let's talk</a>

          <div className="about-text-container">
            <div>
              <h3>
                <PiCertificateFill />
              </h3>

              <h4>Experience</h4>
              <p>Fresher</p>
            </div>
            <div>
              <h3>
                <FaUserGraduate />
              </h3>

              <h4>Education</h4>
              <p>Under-graduate</p>
            </div>
            <div>
              <h3>
                <BsFillFolderSymlinkFill />
              </h3>
              <h4>Projects</h4>
              <p>15+ completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
