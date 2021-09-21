const express = require('express') // importando pacote express
const consign = require('consign') // importando pacote consign

// instanciando o servidor express
server = express()

server.set('porta', 3001)

// consign é um autoload carrega todo o projeto e poe no ar
// garantindo que tudo está funcionando no projeto
consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;



