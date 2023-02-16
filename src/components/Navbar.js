import React from 'react';

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
          <a href="/react-portfolio/about">About Me</a>
        </div>
        <div>
          <a href="/react-portfolio/portfolio">Portfolio</a>
        </div>
        <div>
          <a href="/react-portfolio/contact">Contact</a>
        </div>
        <div>
          <a href="/react-portfolio/resume">Resume</a>
        </div>
      </section>
    </nav>
    );
}

export default Navbar;