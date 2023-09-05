import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./skills.css";
import "./skills.css";
import Language from "./Language";

const Skills = () => {
  let anime = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      anime,
      { css: { opacity: 0, transform: "translateY(4em)" } },
      {
        css: {
          transform: "translateY(0em)",
          opacity: 1,
        },
        duration: 1.5,

        scrollTrigger: {
          trigger: anime,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={(el) => (anime = el)}>
      <h5>What makes me better</h5>
      <h2>My Qualities</h2>

      <div className="qualities-box">
        <div className="qualities-skills">
          <h3>Skills section</h3>

          <Language data="HTML5" level={90} />
          <Language data="CSS3 / SASS" level={70} />
          <Language data="JAVASCRIPT / ES6" level={85} />
          <Language data="REACT.JS / VITE.JS" level={60} />
          <Language data="Jquery / gsap" level={70} />
          <Language data="Git / Github" level={60} />
        </div>

        <div className="qualities-services">
          <h3>Services section</h3>

          <details>
            <summary>
              <h3>Frontend webdevelopment</h3>{" "}
              <i
                className="fa-solid fa-caret-down"
                style={{ fontSize: "1rem" }}
              ></i>{" "}
            </summary>
            <p>
              I build responsive websites using HTML5, CSS3, Javascript,
              React.js, Vite.js, Jquery, and GSAP. I also use SCSS and Vanilla
              CSS for styling.
            </p>
          </details>

          <details>
            <summary>
              <h3>responsive designs</h3>{" "}
              <i
                className="fa-solid fa-caret-down"
                style={{ fontSize: "1rem" }}
              ></i>{" "}
            </summary>
            <p>
              I use responsive design techniques such as Flexbox, Grid, and CSS
              Animations.
            </p>
          </details>

          <details>
            <summary>
              <h3>content writer</h3>{" "}
              <i
                className="fa-solid fa-caret-down"
                style={{ fontSize: "1rem" }}
              ></i>{" "}
            </summary>
            <p>I write articles and blogs about web development and design.</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Skills;
