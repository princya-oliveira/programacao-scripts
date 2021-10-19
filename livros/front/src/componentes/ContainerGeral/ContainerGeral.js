import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
import './ContainerGeral.css';

function ContainerGeral() {
    return (
        <div className="geral"> 
            <ContainerSuperior />
            <h1>Container Geral</h1> 
        </div>
    );
}

export default ContainerGeral;