// PACKAGES

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>                
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>                  
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
