import React from "react";
import ReactDOM from "react-dom/client";
import "./project.css";
import { BiRightArrowAlt } from "react-icons/bi";
import Giftshop from '../../Images/giftshop.png'
import Woodcraft from '../../Images/woodcraft.png'

import Slider from "./Slider";

const Project = () => {

  
  const sliderarr = [
    <div className="project-webpage">
      <div className="project-webpage-data">
        <h3>Woodcraft website</h3>
        <p>
        "Explore our woodcraft website for expertly crafted wooden furniture, DIY project ideas, and essential woodworking tools. Discover step-by-step tutorials, high-quality wood products, and a vibrant community of fellow wood enthusiasts. Start your woodworking journey with us today!"
        </p>
        <a href="https://sachin-dashzer.github.io/woodcraft/" target="blank">Visit site</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-webpage-img">
        <img src={Woodcraft} alt="" />
      </div>
    </div>,
    <div className="project-webpage">
      <div className="project-webpage-data">
        <h3>Giftshop website</h3>
        <p>
        Explore our charming online gift shop! Discover a delightful array of unique presents for every occasion. From handcrafted treasures to personalized keepsakes, find the perfect gift to bring joy to your loved ones. Shop now and share the magic of giving.
        </p>
        <a href="https://sachin-dashzer.github.io/Giftshop_website/" target="blank">Visit site</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-webpage-img">
        <img src = {Giftshop} alt = "" />
      </div>
    </div>,
    <div className="project-webpage">
      <div className="project-webpage-data">
        <h3>C website</h3>
        <p>
          Explore our exquisite online woodcraft store, where artistry meets
          nature. Discover handcrafted wonders, from intricate furniture to
          delicate carvings. Elevate your space with timeless elegance. Welcome
          to a world where craftsmanship and creativity merge seamlessly.
        </p>
        <a href="#!" target="blank">Visit site</a>{" "}
        <BiRightArrowAlt
          style={{
            fontSize: "1.2em",
            color: "var(--accent)",
            transform: "translateY(0.2em)",
          }}
        />
      </div>
      <div className="project-webpage-img">
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
