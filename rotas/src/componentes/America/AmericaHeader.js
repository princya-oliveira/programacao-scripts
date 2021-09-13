import React from 'react'
import {Link} from 'react-router-dom'

import "../Header/Header.css"

export default function AmericaHeader() {
    return(

        <header className='menu2'>
            <nav className="navMenu2">
                <ul>
                    <li><Link to ="/">Voltar</Link></li>
                    <li><Link to ="/america/americaNorte">América do Norte</Link></li>
                    <li><Link to ="/america/americaCentral">América Central</Link></li>
                    <li><Link to ="/america/americaSul">América do Sul</Link></li>
                    <li><Link to ="/america/equador">Equador</Link></li>
                    <li><Link to ="/america/inferiores">Inferiores</Link></li>
                </ul>
            </nav>
        </header>
    )
}