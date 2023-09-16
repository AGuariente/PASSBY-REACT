import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import PassByInfo from "./pages/Produto"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <PassByInfo />
      <Footer />
    </div>
  );
}

export default App;
