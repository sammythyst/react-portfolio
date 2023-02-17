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
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio/" element={<About />} />
        <Route path="/react-portfolio/portfolio" element = { <Portfolio/> } />
        <Route path="/react-portfolio/contact" element = { <Contact /> } />
        <Route path="/react-portfolio/resume" element = { <Resume /> } />
      </Routes>
  </HashRouter>
  );
}

export default App;
