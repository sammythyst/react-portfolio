// import logo from './logo.svg';
import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <HashRouter basename='/react-portfolio'>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element = { <Portfolio/> } />
        <Route path="/contact" element = { <Contact /> } />
        <Route path="/resume" element = { <Resume /> } />
      </Routes>
  </HashRouter>
  );
}

export default App;
