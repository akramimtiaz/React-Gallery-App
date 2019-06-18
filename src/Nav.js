import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/sky'>Sky</NavLink></li>
                <li><NavLink to='/bird'>Bird</NavLink></li>
                <li><NavLink to='/mountain'>Mountain</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav