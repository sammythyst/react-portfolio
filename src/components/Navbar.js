import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    
    return (
    <nav className="main-header-menu col-12">
      <h1 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          padding: '25px',
        }}>Sammythyst</h1>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>        
        <div>
          {/* <a href="/react-portfolio/">About Me</a> */}
          <Link to='/react-portfolio/'>About Me</Link>
        </div>
        <div>
          {/* <a href="/react-portfolio/portfolio">Portfolio</a> */}
          <Link to='/react-portfolio/portfolio'>Portfolio</Link>
        </div>
        <div>
          {/* <a href="/react-portfolio/contact">Contact</a> */}
          <Link to='/react-portfolio/contact'>Contact</Link>
        </div>
        <div>
          {/* <a href="/react-portfolio/resume">Resume</a> */}
          <Link to='/react-portfolio/resume'>Resume</Link>
        </div>
      </section>
    </nav>
    );
}

export default Navbar;