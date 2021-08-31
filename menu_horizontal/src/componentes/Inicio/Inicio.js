import React from 'react'

import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'
import Logo from '../../imagens/LogoFatec.jpeg'

export default function Inicio() {
    return(
        <>
            <Titulo texto = "Formulário inicial do projeto" />

            <div className='inicio'>
                <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Clicado')}}>Salvar</button>

                <figure>
                    <img id="logo" src={Logo} align="center" />
                </figure>
            </div>
           
        </>
    )
}