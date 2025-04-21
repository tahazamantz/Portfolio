import { useState } from 'react'
import './App.css'
import Navbar from '../public/components/JSX/Navbar.jsx'
import Home from '../public/components/JSX/Home.jsx'
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
      <Navbar />
      
    </nav>
     <div>
      <Home/>
      <br />
      <Home/>
      <Home/>
      <Home/>

     </div>
    </div> 
    </>
  )
}

export default App
