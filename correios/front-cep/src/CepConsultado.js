import React from 'react'

function CepConsultado({data}) {
    return(
        <>
            <h1>CEP encontrado</h1>
            <ul className='list-group'>
                {data.map (item => {
                    <li key={item.cep}>
                        <span>CEP: {item.cep}</span>
                        <span>Logradouro: {item.logradouro}</span>
                        <span>Bairro: {item.bairro}</span>
                        <span>Localidade: {item.localidade}</span>
                        <span>UF: {item.uf}</span>

                    </li>
                })}
            </ul>
        </>
    )
}

export default CepConsultado;