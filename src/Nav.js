import React from 'react'
import App from "./App.css";
import {Link} from "react-router-dom"
function Nav(){
    return(
        <nav>
            <h3>logo</h3>
            <ul className='navbar navbar-light'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/linkedin">LinkedIn</Link></li>
            </ul>
        </nav>

    );
}
export default Nav;