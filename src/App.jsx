
import React from 'react'

import ReactDOM from 'react-dom/client'
import {Navbar , Header , Footer, Skills, Projects , About } from "./Component/Index.js";



import "./App.css"
import "./Styles/Mine.css"





function App() {



  return (
    <>

      <main>


        <Navbar />

        <Header />


        <About />

        <Skills />

        <Projects />

        <Footer />  
        

      </main>

    </>
  )
}

export default App
