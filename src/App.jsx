import React, { useState, useEffect, useRef, lazy, Suspense } from "react";

import Duck from "./Images/duck.gif";
import Header from "./Component/Header/Header.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";

const Footer = lazy(() => import("./Component/Footer/Footer.jsx"));

const Skills = lazy(() => import("./Component/Skills/Skills.jsx"));

const Projects = lazy(() => import("./Component/Projects/Project.jsx"));

const About = lazy(() => import("./Component/About/About.jsx"));

import "./App.css";
import "./Styles/Mine.css";

function App() {

  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, [setloader]);

  return (
    <>
      {(loader) ? (
      <div className="loaderpage">
        <img src={Duck} alt="" />
        <h4>please wait ...</h4>
        <h2> Let's start our journey together </h2>
      </div>
      ) : (
      <main>
        <Navbar />

        <Header />

        <Suspense>
          <About />

          <Skills />

          <Projects />

          <Footer />
        </Suspense>
      </main>
      )}
    </>
  );
}

export default App;
