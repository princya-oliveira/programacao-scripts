import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import AmericaHeader from './AmericaHeader.js'

import './America.css'


export default function America() {
    return(
        <>
            <AmericaHeader />
               
            <Titulo texto="América" />
                
            <div className='america'> 
                
            </div>
        </>
    )
}