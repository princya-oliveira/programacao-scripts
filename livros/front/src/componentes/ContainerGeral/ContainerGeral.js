import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
import MenuBotoes from '../MenuBotoes/MenuBotoes';
import AreaDados from '../AreaDados/AreaDados';
import Rodape from '../Rodape/Rodape';
import './ContainerGeral.css';

function ContainerGeral() {
    return (
        <div className="geral">
            <>
                <ContainerSuperior />
                <MenuBotoes />
                <AreaDados />
                <Rodape />
            </>
        </div>
    );
}

export default ContainerGeral;