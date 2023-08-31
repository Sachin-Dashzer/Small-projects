
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Top , Navbar , Header , Footer, Skills, Projects , About , Ending} from "./Component";


import "./App.css"
import "./Styles/Mine.css"





function App() {

  return (
    <>

      <div>

        <Top />

        <Navbar />

        <Header />

        <About />

        <Skills />

        <Projects />

        <Footer />  
        
        <Ending />

      </div>

    </>
  )
}

export default App
