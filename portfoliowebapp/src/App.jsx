import { useState } from 'react'
import './App.css'
import Navbar from '../public/components/JSX/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <nav>
      <Navbar />
    </nav>
    </div> 
    </>
  )
}

export default App
