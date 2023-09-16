import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/navbar/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Home/>
    </div>
    
  )
}

export default App
