// instânciar o express
// express é uma biblioteca para criar o servidor

const express = require('express');
const Correios = require('node-correios');
const server = express();
const cors = require('cors')
const correio = new Correios()
const port = 3001

server.use(cors())

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));

server.get('/', (req, res) => {
    console.log("Rota de CEP encontrada!")
    const {cep} = req.query;
    console.log(cep)

    correio.consultaCEP({cep: cep})
    .then(result => {
        res.send(result);
        console.log(result);
        console.log('Sucesso!')
    })
    .catch(error => {
        console.log('Ocorreu Erro: ' + error)
    })
})