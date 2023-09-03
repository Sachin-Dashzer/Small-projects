
import React, { lazy ,Suspense } from 'react'

import ReactDOM from 'react-dom/client'

// const {Navbar , Header , Footer, Skills, Projects , About } = lazy(()=> import("./Component/Index"));

const Navbar = lazy(()=> import("./Component/Navbar/Navbar.jsx"));

const Header = lazy(()=> import("./Component/Header/Header.jsx"));

const Footer = lazy(()=> import("./Component/Footer/Footer.jsx"));

const Skills = lazy(()=> import("./Component/Skills/Skills.jsx"));

const Projects = lazy(()=> import("./Component/Projects/Project.jsx"));

const About = lazy(()=> import("./Component/About/About.jsx"));




import "./App.css"
import "./Styles/Mine.css"





function App() {



  return (
    <>

    <Suspense fallback={<div>Loading...</div>}>

      <main>


        <Navbar />

        <Header />


        <About />

        <Skills />

        <Projects />

        <Footer />  
        

      </main>

      </Suspense>

    </>
  )
}

export default App
