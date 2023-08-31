"use client"


import React from "react";
import "./navbar.css";
import {FaHome} from 'react-icons/fa'
import {FaUserEdit} from 'react-icons/fa'
import {TbSettingsStar} from 'react-icons/tb' 
import {BsFillJournalBookmarkFill} from 'react-icons/bs' 
import {RiContactsFill} from 'react-icons/ri'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

import {CgUserlane} from 'react-icons/cg'


import { useState } from "react";



const Navbar = () => {

  const [currentactive, setcurrentactive] = useState("#")


  return (
    <div className="navbar">


      <div className="navbar-container">

        <div className="navbar-logo">
            <h1> <a href="#" style={{color : "#c01bee"}}><CgUserlane /></a></h1>  
        </div>
        
        <div className="navbar-links">
            <a href="#" onClick={() => setcurrentactive("#")} className={currentactive === "#" ? "active" : ""}><FaHome /></a>
            <a href="#about" onClick={() => setcurrentactive("#about")} className={currentactive === "#about" ? "active" : ""}><FaUserEdit /></a>
            <a href="#skills" onClick={() => setcurrentactive("#skills")} className={currentactive === "#skills" ? "active" : ""}><TbSettingsStar/></a>
            <a href="#project" onClick={() => setcurrentactive("#projects")} className={currentactive === "#projects" ? "active" : ""}><BsFillJournalBookmarkFill /></a>
            <a href="#footer" onClick={() => setcurrentactive("#footer")} className={currentactive === "#footer" ? "active" : ""}><RiContactsFill /></a>
        </div>


        <div className="navbar-platform lastline">
            <a href="https://www.linkedin.com/in/sachin-kumar-48a21322a/" target="blank"><BsLinkedin /></a>
            <a href="https://github.com/Sachin-Dashzer" target="blank"><BsGithub /></a>
            <a href="" ><GrInstagram /></a>
        </div>

      </div>


    </div>
  );
};

export default Navbar;
