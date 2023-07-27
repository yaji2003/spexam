import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/menu" element={<Menu/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;