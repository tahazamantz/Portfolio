import { useState } from "react";
import "./App.css";
import Navbar from "../public/components/JSX/Navbar.jsx";
import Home from "../public/components/JSX/Home.jsx";
import About from "../public/components/JSX/Aboutme.jsx";
import Skill from "../public/components/JSX/Skill.jsx";
import Projects from "../public/components/JSX/Projects.jsx";
import Contact from "../public/components/JSX/Contact.jsx";

function App() {
``
  return (
    <>
      <div className="app">
        <nav>
          <h1 id="h1"> Taha Zaman</h1>
      
        </nav>
        <br />
        <div className="main">
          <Home />
          <br />
          <About />
        <Skill />
     <br />
      <Projects />
      <br />
      <Contact/> <br />
   <h6>Copyright © 2025T Taha Zaman | All rights reserved.</h6>
     
        </div>
        </div>
        
    </>
  );
}

export default App;
