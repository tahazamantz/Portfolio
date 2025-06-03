import { useState } from 'react'
import './App.css'
import Navbar from '../public/components/JSX/Navbar.jsx'
import Home from '../public/components/JSX/Home.jsx'
import About from '../public/components/JSX/Aboutme.jsx'
import Skill from '../public/components/JSX/Skill.jsx'
function App() {
  const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };
  return (
    <>
    <div className='main'>
    <nav>
    <h1 className="h">  Taha Zaman
    </h1>  
    </nav>
     <div className='appm'>
      <Home/>
      <br />
      <About/>
      
      
     </div>
   
    </div> 
    <div className='bgm'>
      <Skill/>
      </div>     
      <br />
      <About/>
    </>
  )
}

export default App
