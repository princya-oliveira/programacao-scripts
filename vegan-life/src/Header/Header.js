import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return(
        <header className='menu'>
            <nav className="navMenu">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}