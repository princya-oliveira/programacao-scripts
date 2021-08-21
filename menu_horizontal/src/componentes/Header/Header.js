import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return(
        <header className='menu'>
            <nav className="navMenu">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/cursos">Cursos</Link></li>
                    <li><Link to ="/contatos">Contatos</Link></li>
                    <li><Link to ="/parceiros">Parceiros</Link></li>
                    <li><Link to ="/missao">Missão</Link></li>
                    <li><Link to ="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}