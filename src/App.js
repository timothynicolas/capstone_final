// PACKAGES

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>                
        <Routes>
          <Route path="/home" element={<Home/>}/>
                            
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
