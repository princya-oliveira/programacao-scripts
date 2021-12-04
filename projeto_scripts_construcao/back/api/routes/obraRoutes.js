const controller = require('../controllers/obraControllers.js');

server.get('/obra', controller.obraGetAll);
server.get('/obra/:id', controller.obraGetById)

server.put('/obra/:id', controller.obraEdit)
server.post('/obra', controller.obraNew)
