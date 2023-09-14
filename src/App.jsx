import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './components/carousels/Carousels';
import Navbar from './components/navbar/NavbarTeste';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    </div>
    
  )
}

export default App
