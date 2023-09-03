import React ,{ useEffect} from "react";
import "./header.css";
import Top from "./Top/Top.jsx";
import Gsap from "gsap";
import Me from "../../Images/myimage.png";
import CV from "../../Images/sachin.pdf";

const Header = () => {

  useEffect(() => {
    const headerBoxImg = document.querySelector(".header-box-img");
    const headerBoxText = document.querySelectorAll(".effecttext");
    const headerBox = document.querySelector(".header-box");

    const tl = new Gsap.timeline();

    tl.fromTo(headerBox, {css : {opacity : 0 , transform : "translateY(2em)"}} , { css : {opacity : 1 , transform : "translateY(0)"}, duration: 1 ,delay : 1.5 ,  stagger : 0.5 });
    tl.fromTo(headerBoxText ,{ css : {opacity : 0 , transform : 'translateY(100%)'}} ,{ css : {opacity : 1 , transform : "translateY(0)"}, duration: 1 , delay : -0.3 ,  stagger : 0.5 });
    tl.fromTo(headerBoxImg, {css : {opacity : 0 , transform : "translateX(3em)"}} , { css : {opacity : 1 , transform : "translateX(0)"}, duration: 1.5 , delay : -0.5});
  }, []);

  return (
    <>
      <Top />

      <section id="header">
        <div className="header-box">
          <div className="header-box-text">
            <div className="effectbox">
              <h1 className="effecttext">
                <span style={{ color: "var(--text)" }}>Hii</span> , I'm
              </h1>
            </div>
            <div className="effectbox">
              <h1 className="effecttext">Sachin kumar</h1>
            </div>
              <h4>Frontend web developer</h4>
              <p>
                "Laugh at your problems, because humor is cheaper than therapy
                and has no copay!"
              </p>
              <a href={CV} download className="btn resume">
                Download CV
              </a>
              <a href="#footer" className="btn">
                Let's talk
              </a>
          </div>

          <div className="header-box-img">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="header-scroller">
          <a href="#Ending">scroll down</a>
        </div>
      </section>
    </>
  );
};

export default Header;
