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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio/about" element={<About />} />
        <Route path="/react-portfolio/portfolio" element = { <Portfolio/> } />
        <Route path="/react-portfolio/contact" element = { <Contact /> } />
        <Route path="/react-portfolio/resume" element = { <Resume /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
