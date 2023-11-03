import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({username}) => {
    return (
        <div className="navbar">
            <div className="logo">
                <span>MovieMemoir</span>
            </div>
            <div className="navbar-right">
                <div className="greeting">
                    Hello {username}!!
                </div>
                <div className="nav-links">
                    <Link to="/logout">Logout</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar
