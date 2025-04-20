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
     </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sed cum necessitatibus aspernatur qui. Necessitatibus eos veritatis, dolor eligendi exercitationem eum omnis obcaecati ratione ipsam qui distinctio deserunt numquam impedit quidem dolore voluptatum. Deserunt, veritatis delectus? Libero ipsa obcaecati culpa, sapiente facere tempore laborum nesciunt. Vel dicta cumque, placeat id dolor deleniti reiciendis itaque dolores perspiciatis ducimus sit aut unde vero nemo libero quam neque eos tenetur, natus quos corporis ut delectus consequatur exercitationem. Fugit eveniet dicta non deserunt ea, nihil dolor placeat commodi earum ad ducimus. Nostrum quam a architecto omnis. Ab, maiores in nam voluptates reprehenderit laborum sit!</p>
    </div> 
    </>
  )
}

export default App
