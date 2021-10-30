import React from 'react';
import Autores from '../Autores/Autores';
import { Link, Route } from 'react-router-dom';
import './MenuHorizontal.css';

export default function MenuHorizontal() {
    return (
        <div>
            <div className="menu-horizontal">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to="/"> Início </Link> </li>
                        <li> <Link to="/autores"> Autores </Link> </li>
                        <li> <Link to="/editoras"> Editoras </Link> </li>
                        <li> <Link to="/livros"> Livros </Link> </li>
                        <li> <Link to="/usuarios"> Usuários </Link> </li>
                        <li> <Link to="/configuracoes"> Configurações </Link> </li>
                    </ul>
                </nav>
                <Route exact path="/autores" render={(props) => <Autores />}></Route>  
            </div>
        </div>
    );
}

