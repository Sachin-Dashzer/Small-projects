import React from "react";
import ReactDOM from "react-dom/client";
import "./project.css";
import { BiRightArrowAlt } from "react-icons/bi";

import Slider from "./Slider";

const Project = () => {

  
  const sliderarr = [
    <div className="project-data" style={{background : "pink"}}>
      <div className="project-text">
        <h3>A website</h3>
        <p>
          Explore our exquisite online woodcraft store, where artistry meets
          nature. Discover handcrafted wonders, from intricate furniture to
          delicate carvings. Elevate your space with timeless elegance. Welcome
          to a world where craftsmanship and creativity merge seamlessly.
        </p>
        <a href="#!">More Info</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-img">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>,
    <div className="project-data" style={{background : "salmon"}}>
      <div className="project-text">
        <h3> B website</h3>
        <p>
          Explore our exquisite online woodcraft store, where artistry meets
          nature. Discover handcrafted wonders, from intricate furniture to
          delicate carvings. Elevate your space with timeless elegance. Welcome
          to a world where craftsmanship and creativity merge seamlessly.
        </p>
        <a href="#!">More Info</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-img">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>,
    <div className="project-data">
      <div className="project-text">
        <h3>C website</h3>
        <p>
          Explore our exquisite online woodcraft store, where artistry meets
          nature. Discover handcrafted wonders, from intricate furniture to
          delicate carvings. Elevate your space with timeless elegance. Welcome
          to a world where craftsmanship and creativity merge seamlessly.
        </p>
        <a href="#!">More Info</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-img">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>,
  ];

  return (
    <section id="project">
      <h5>my basic projects</h5>
      <h2>Portfolio</h2>

      <Slider content={sliderarr} />
    </section>
  );
};

export default Project;
