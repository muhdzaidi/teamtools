import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper white">
            <div className="container">
                <a className="brand-logo left">Bumblebee's Tools</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/requests">Requests</Link></li>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><Link to="/">Tools</Link></li>
                            <li><Link to="/">Tools</Link></li>
                            <li><Link to="/">Tools</Link></li>
                        </ul>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar