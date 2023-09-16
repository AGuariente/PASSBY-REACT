import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Home/>
    <Footer/>
    </div>
    
  )
}

export default App
