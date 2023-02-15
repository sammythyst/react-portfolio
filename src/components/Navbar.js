import React from 'react';

function Navbar() {
    
    return (
    <nav className="main-header-menu">
      <h1 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          fontSize: '50px',
          padding: '25px',
        }}>Sammythyst</h1>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}>        
        <div>
          <a href="/">About Me</a>
        </div>
        <div>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <a href="/resume">Resume</a>
        </div>
      </section>
    </nav>
    );
}

export default Navbar;