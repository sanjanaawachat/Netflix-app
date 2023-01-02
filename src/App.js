import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import NavScrollExample from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './Pages/Player'
import './Css/style.css'
function App() {
  return (
    
    <BrowserRouter>
        
      <NavScrollExample />
      
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="*" element={<ErrorPage/>}/>
    
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
