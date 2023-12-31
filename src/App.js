// PACKAGES

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Login from './pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>                
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/library" element={<Library/>}/>
          <Route path="/profile" element={<Profile/>}/>    
                           
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
