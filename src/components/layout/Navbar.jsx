import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => (
    <nav className='navbar bg-primary'>
        <h1>
            <i className="fab fa-github" />
            Github Finder</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
        </ul>
    </nav>
)

export default Navbar
