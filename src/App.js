import React from 'react';

import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route exact path='/contact' component={Contact} />
      
    </BrowserRouter>
  );
}

export default App;
