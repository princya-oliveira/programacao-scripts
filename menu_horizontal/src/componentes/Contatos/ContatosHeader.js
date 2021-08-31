import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import "../Header/Header.css"

export default function ContatosHeader() {
    return(
        <header className='menu'>
            <nav className="navMenu">
                <ul>
                    <li><Link to ="/">Voltar</Link></li>
                    <li><Link to ="/contatos">Telefone</Link></li>
                    <li><Link to ="/contatos">e-mail</Link></li>
                    <li><Link to ="/contatos">Facebook</Link></li>
                    <li><Link to ="/contatos">Whatsapp</Link></li>
                    <li><Link to ="/contatos">Instagram</Link></li>
                    <li><Link to ="/contatos">Sinal de fumaça</Link></li>
                </ul>
            </nav>
        </header>
    )
}