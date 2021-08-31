import React from 'react'

import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'

export default function Inicio() {
    return(
        <>
            <Titulo texto = "Formulário inicial do projeto" />

            <div className='inicio'>
                <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Clicado')}}>Salvar</button>
            </div>
        </>
    )
}