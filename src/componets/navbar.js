import React from 'react'
import { Lista } from '../styles/styles'

const Navbar = () => {
    return (
        <Lista>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li><a className="active" href="#">About</a></li>
        </Lista>
    )
}

export default Navbar;
