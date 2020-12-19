import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
        <div className="nav-wrapper grey darken-4 px1">
          <a href="/" className="brand-logo">MyToDo</a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/" href="/">Todo List</NavLink></li>
            <li><NavLink to="/about" href="/">About</NavLink></li>
          </ul>
        </div>
      </nav>
        )
}