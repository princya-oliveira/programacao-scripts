import React from 'react'
import '../Inicio/Inicio.js';

import './Inicio.css'
import Logo from '../Images/logo-cabecalho.png'
import Balao from '../Images/chat.png'

export default function Inicio() {
    return(
        <>  
            <div className='interface'>
                <section className='inicio'>

                    <aside className="aside">
                        <a href="#inicio" id="inicio">Inicio</a>
                        <a href="#sobre" id="sobre">Sobre</a>
                        <a href="#cadastro" id="cadastro">Cadastro</a>
                        <a href="#guia" id="guia">Guia</a>
                    </aside>

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
                </section>

                <section className='corpo'>
                    <h3>Corpo</h3>
                </section>

                <footer>
                    <h3>Rodapé</h3>
                </footer>
            </div>
            
           
        </>
    )
}