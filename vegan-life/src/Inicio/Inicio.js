import React from 'react'

import './home.css'
import Logo from '../Images/logo-vegan-life.png'

export default function Inicio() {
    return(
        <>

            <div className='inicio'>

                <figure>
                    <img id="logo" src={Logo} align="center" />
                </figure>
            </div>
           
        </>
    )
}