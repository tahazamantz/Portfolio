import { useState } from 'react'
import './App.css'
import Navbar from '../public/components/JSX/Navbar.jsx'
import Home from '../public/components/JSX/Home.jsx'
import About from '../public/components/JSX/Aboutme.jsx'
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
    <h className="h">  Taha Zaman
    </h>  
    </nav>
     <div  data-aos="fade-down">
      <Home/>
      <br />
      <About/>
      
      
      
     </div>
   
    </div> 
    <div>
      
    </div>
    </>
  )
}

export default App
