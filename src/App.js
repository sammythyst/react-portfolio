// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <BrowserRouter basename='https://sammythyst.github.io/react-portfolio'>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element = { <Portfolio/> } />
        <Route path="/contact" element = { <Contact /> } />
        <Route path="/resume" element = { <Resume /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
