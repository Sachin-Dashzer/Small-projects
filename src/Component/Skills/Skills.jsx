import React from 'react'
import './skills.css'
import Language from './Language'

import {RiArrowDropDownLine} from 'react-icons/ri'




const Skills = () => {
  return (
    <section id='skills'>

      <h5>What makes me better</h5>
      <h2>My Qualities</h2>
     

      <div className="skills-section">


        <div className="my-skills">
          <h3>Skills section</h3>
          
          <Language  data = "HTML5" level={90} />
          <Language  data = "CSS3 / SCSS" level = {70} />
          <Language  data = "JAVASCRIPT / ES6" level ={80} />
          <Language  data = "REACT.JS / VITE.JS" level ={60}  />
          <Language  data = "Jquery / gsap" level ={50}  />
          <Language  data = "Git / Github" level ={55}  />
            
          
        </div>



        <div className="my-services">
            <h3>Services section</h3>

             <details>
              <summary><h3>Frontend webdevelopment</h3> <RiArrowDropDownLine style={{fontSize : "2rem"}} /> </summary>
              <p>I build responsive websites using HTML5, CSS3, Javascript, React.js, Vite.js, Jquery, and GSAP. I also use SASS and Bootstrap for styling.</p>
             </details>



             <details>
              <summary><h3>responsive designs</h3> <RiArrowDropDownLine style={{fontSize : "2rem"}} /> </summary>
              <p>I use responsive design techniques such as Flexbox, Grid, and CSS Animations.</p>
             </details>



             <details>
              <summary><h3>content writer</h3> <RiArrowDropDownLine style={{fontSize : "2rem"}} /> </summary>
              <p>I write articles and blogs about web development and design.</p>
             </details>
             
        </div>


      </div>

    </section>
  )
}

export default Skills