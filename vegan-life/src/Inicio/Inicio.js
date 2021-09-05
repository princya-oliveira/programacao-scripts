import React from 'react'
import '../Inicio/Inicio.js';

import './Inicio.css'
import Logo from '../Images/logo-cabecalho.png'
import Balao from '../Images/chat.png'

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

                <div>
                    <p class="text-chat-1">10 de 10 animais</p>
                    <p class="text-chat-2">afirmam que não</p>
                    <p class="text-chat-3">querem ser sua</p>
                    <p class="text-chat-4">comida</p>
                </div>

                <figure>
                    <img id="chat" src={Balao} />
                </figure>
            </div>
            <footer>
                <h3>Rodapé</h3>
            </footer>
           
        </>
    )
}