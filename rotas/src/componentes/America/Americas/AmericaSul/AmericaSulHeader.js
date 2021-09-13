import React from 'react'
import { Link } from 'react-router-dom'

import '../../../Header/Header.css'

export default function AmericaSulHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/america">Voltar</Link></li>
                        <li><Link to="/america/americaSul/patagonia">Patagônia</Link></li>
                        <li><Link to="/america/americaSul/cordilheira">Cordilheira dos Andes</Link></li>
                        <li><Link to="/america/americaSul/cartagena">Cartagena</Link></li>
                        <li><Link to="/america/americaSul/pantanal">Pantanal</Link></li>
                        <li><Link to="/america/americaSul/quilhotoa">Vulcão Quilhotoa</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}