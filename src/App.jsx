import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import Carousels from './components/carousels/Carousels';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavbarComp/>
    </div>
    
  )
}

export default App
