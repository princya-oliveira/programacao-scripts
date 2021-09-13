import React from 'react'
import Titulo from '../../../../Titulo/Titulo'
import PantanalHeader from '../Info/PantanalHeader'

import './Info.css'

export default function Pantanal() {
    return (
        <>  
            <PantanalHeader />

            <Titulo text="Pantanal" />

            <div className="pantanal">

            </div>
        </>
    )
}