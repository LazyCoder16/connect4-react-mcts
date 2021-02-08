import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper" id="nav">
        <a href="#" className="brand-logo">Connect 4 vs AI</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/rules-and-about">Rules and About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
