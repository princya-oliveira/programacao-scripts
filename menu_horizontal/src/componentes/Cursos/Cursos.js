import React from 'react'
import Titulo from '../Titulo/Titulo.js'

import './Cursos.css'
import CursosHeader from './CursosHeader.js'

export default function Cursos() {
    return(
        <>
            <CursosHeader />
            <Titulo texto="Seção cursos" />
                
            <div className='cursos'> 
                
            </div>
        </>
    )
}