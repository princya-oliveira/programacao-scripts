import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import AmericaSulHeader from '../AmericaSul/AmericaSulHeader'

import './AmericaSul.css'

export default function AmericaSul() {
    return (
        <>  
            <AmericaSulHeader />

            <Titulo text="América do Sul" />

            <div className="americaSul">
            
            </div>
        </>
    )
}