const { server } = require('http');
const { indexControllers } = require('../controllers/indexControllers');
const controllerIndex = require('../controllers/indexControllers.js');

server.get('/', controllerIndex.indexControllers)

server.get('/', (req, res) => {
    console.log('Rota Raiz Encontrada!');
    res.json('Rota Raiz Encontrada!');
})