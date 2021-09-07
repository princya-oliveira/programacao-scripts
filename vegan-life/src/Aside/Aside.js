import React from 'react'
import { Link } from 'react-router-dom'

import './Aside.css'

export default function Aside() {
    return(
        <div className='menu'>
    
            <aside className="aside">
                <Link to ="/" id="inicio2">Inicio</Link>
                <Link to ="/sobre" id="sobre2">Sobre</Link>
                <Link to ="/cadastro" id="cadastro2">Cadastro</Link>
                <Link to ="/guia" id="guia2">Guia</Link>
            </aside>

        </div>
    )
}