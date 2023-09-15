import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/NavbarTeste';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
    
  )
}

export default App
