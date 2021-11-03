import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <div>
            <ul className="nav">

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>

            </ul>
        </div>
    )
}
