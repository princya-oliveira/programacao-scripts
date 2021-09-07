import React from 'react'
import '../Inicio/Inicio.js';

import './Inicio.css'
import Logo from '../Images/logo-cabecalho.png'
import Balao from '../Images/chat.png'
import Textura from '../Images/textura-background.png'
import Busca from '../Images/icone-busca.png'

export default function Inicio() {
    return(
        <>  
            <div className='interface'>
                <section className='inicio'>

                    {/*<aside className="aside">
                        <a href="#inicio" id="inicio">Inicio</a>
                        <a href="#sobre" id="sobre">Sobre</a>
                        <a href="#cadastro" id="cadastro">Cadastro</a>
                        <a href="#guia" id="guia">Guia</a>
                    </aside>*/}
                    
                    {/* 
                        Botão de busca
                    */}
                    <div id="divBusca">
                        <input type="text" id="txtBusca" placeholder="O que você quer comer hoje?"/>
                        <img src={Busca} id="btnBusca" alt="Buscar"/>
                    </div>

                    <figure>
                        <img id="logo" src={Logo} />
                    </figure>

                    <div className="text-box">
                        <p className="text-1">#IRRESISTÍVEIS</p>
                        <p className="text-2">UM GUIA DESCOLADO &</p>
                        <p className="text-3">COMIDINHAS DELICIOSAS &</p>
                        <p className="text-4">100% VEGANAS</p>
                    </div>

                    <div>
                        <p className="text-chat-1">10 de 10 animais</p>
                        <p className="text-chat-2">afirmam que não</p>
                        <p className="text-chat-3">querem ser sua</p>
                        <p className="text-chat-4">comida</p>
                    </div>

                    <figure>
                        <img id="chat" src={Balao} />
                    </figure>

                    <figure>
                        <img id="textura" src={Textura} />
                    </figure>

                </section>

                <section className='corpo'>
                    <h3>Corpo</h3>

                    <div className="card">
                        <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card" />
                        <div className="card-body">
                            <h5 class="card-title">Título do card</h5>
                            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <a href="#guia" class="btn btn-primary">Visitar</a>
                        </div>
                    </div>

                </section>

                <footer id='rodape'>
                    <h3>Rodapé</h3>
                </footer>
            </div>
            
           
        </>
    )
}