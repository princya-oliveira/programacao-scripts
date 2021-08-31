import React from 'react'
import Titulo from '../Titulo/Titulo.js'

import './Contatos.css'
import ContatosHeader from './ContatosHeader.js'


export default function Contatos() {
    return(
        <>
            <ContatosHeader />
            <Titulo texto = "Seção de contatos" />

            <div className='contatos'>
                 
            </div>
        </>
    )
}