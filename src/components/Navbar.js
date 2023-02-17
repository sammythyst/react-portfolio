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
          <Link to='/'>About Me</Link>
        </div>
        <div>
          <Link to='/portfolio'>Portfolio</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>
        <div>
          <Link to='/resume'>Resume</Link>
        </div>
      </section>
    </nav>
    );
}

export default Navbar;