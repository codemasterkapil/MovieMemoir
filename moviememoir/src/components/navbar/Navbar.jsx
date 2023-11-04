import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({username,setToken}) => {

    const handleClick=async()=>{
        window.sessionStorage.removeItem('token');
        setToken('');
    }

    return (
        <div className="navbar">
            <div className="logo">
                <span>MovieMemoir</span>
            </div>
            <div className="navbar-right">
                <div className="greeting">
                    Hello {username}!!
                </div>
                <button className="logout-btn" onClick={handleClick}>Logout</button>
            </div>

        </div>
    )
}

export default Navbar
