import React from 'react'
import { Link } from 'react-router-dom'

import './Aside.css'

export default function Aside() {
    return(
        <div className='menu'>
            <nav className="navMenu">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/sobre">Sobre</Link></li>
                    <li><Link to ="/cadastro">Cadastro</Link></li>
                    <li><Link to ="/guia">Guia</Link></li>
                </ul>
            </nav>
        </div>
    )
}