import React from 'react'
import { useEffect } from 'react'
import '../CSS/Home.css'
import music from '../images/bgm.mp3'

function Home() {
   useEffect(() => {
    const audio = new Audio(music);
    audio.play();
    alert("Welcome to my Mobile-First Portfolio Web-App! \n\n\It is under-developing. \n\nFeel free to explore and learn more about me and my work.");
  }, []);
  return (
    <div className='main'>
               <br />
               
               <h1>Making life easier by some lines of <mark> Code </mark>. </h1>
               <h5> 
                Hey there, I am Taha Zaman </h5>
                <br />
                <h4>another guy who wanna  break the mold—merging relentless innovation with razor-sharp code to craft digital experiences that don’t just meet expectations, but obliterate them. wanna  turn coffee into clean code, ideas into elegant websites, and problems into seamless solutions. Whether it’s front-end charm or back-end brilliance, I build with passion, precision, and a touch of fun.
            
            <br />
            <br /> <button id='btn' className='btn'>Download CV/Resume</button>
                 </h4>
              
               </div>
  )
}

export default Home