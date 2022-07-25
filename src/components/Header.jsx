import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logo-section">
        {/* <img src="img/PricewaterhouseCoopers_Logo.png" alt="" className="logo" /> */}
        <h3>Interactive Website</h3>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/application">Application Form</Link>
          <Link to="/studentdata">Student Data</Link>
        </nav>
      </div>
      <div>
        <button>
          {/* <img src="img/toggle.png" alt="" />  */}
          toggle theme
        </button>
      </div>
    </header>
  )
}

export default Header
