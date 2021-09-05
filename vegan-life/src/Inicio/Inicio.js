import React from 'react'

import './Inicio.css'
import Logo from '../Images/logo-cabecalho.png'

export default function Inicio() {
    return(
        <>

            <div className='inicio'>

                <figure>
                    <img id="logo" src={Logo} />
                </figure>

                <div class="text-box">
                    <p class="text-1">#IRRESISTÍVEIS</p>
                    <p class="text-2">UM GUIA DESCOLADO &</p>
                    <p class="text-3">COMIDINHAS DELICIOSAS &</p>
                    <p class="text-4">100% VEGANAS</p>
                </div>
              
            </div>
           
        </>
    )
}