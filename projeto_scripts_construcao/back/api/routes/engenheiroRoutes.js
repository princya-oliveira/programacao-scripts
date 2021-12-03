const controllers = require('../controllers/engenheiroControllers.js');

server.get('/engenheiro', controllers.engenheiroGetAll);

server.get('/engenheiro/:id', controllers.engenheiroGetById)

server.post('/engenheiro', controllers.engenheiroNew)

server.put('/engenheiro/:id', controllers.engenheiroEdit)