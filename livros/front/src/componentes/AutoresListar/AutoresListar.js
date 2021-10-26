import React, { Component } from 'react';

import './AutoresListar.css';

function AutoresListar({oAutores}) {
    return (
        <div className="autoresListar">
            <h1> Listando Autores </h1>

            <ul className="list-group">
                {oAutores.map ( item =>
                    <li className="list-group-item"> key={item.oAutores}
                        <apan> Código: {item.aut_codigo} </apan>
                        <apan> Nome: {item.aut_nome} </apan>
                        <apan> Apelido: {item.aut_apelido} </apan>
                        <apan> A/I: {item.aut_ativoinativo} </apan>
                        <apan> Sexo: {item.aut_sexo} </apan>
                        <apan> Telefone: {item.aut_telefone} </apan>
                        <apan> E-mail: {item.aut_email} </apan>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AutoresListar;