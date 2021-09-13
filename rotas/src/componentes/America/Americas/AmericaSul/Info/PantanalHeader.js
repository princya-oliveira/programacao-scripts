import React from "react"
import { Link } from 'react-router-dom'

import '../../../../Header/Header.css'

export default function PantanalHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/america/americaSul">Voltar</Link></li>
                        <li><Link to="/america/americaSul/pantanal/hidrografia">Hidrografia</Link></li>
                        <li><Link to="/america/americaSul/pantanal/clima">Clima</Link></li>
                        <li><Link to="/america/americaSul/pantanal/fauna">Fauna</Link></li>
                        <li><Link to="/america/americaSul/pantanal/flora">Flora</Link></li>
                        <li><Link to="/america/americaSul/pantanal/desmatamento">Desmatamento</Link></li>
                        
                    </ul>
                </nav>
            </header>
        </>
    )
}