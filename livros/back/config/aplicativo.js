// importando os pacotes
const express = require('express');
const consign = require('consign');
const cors = require('cors');

// instanciando o servidor express
server = express();
server.use(cors());
server.set('porta', 3002);
server.set('url', 'http://localhost:');

consign({ cwd: 'api' })
    .include('models') 
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;



