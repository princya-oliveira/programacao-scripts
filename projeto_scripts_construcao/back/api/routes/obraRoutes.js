const controllers = require('../controllers/obraControllers.js');

server.get('/obra', controllers.obraGetAll);

server.get('/obra/:id', controllers.obraGetById)

server.post('/obra', controllers.obraNew)

server.put('/obra/:id', controllers.obraEdit)